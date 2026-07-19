import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { hashPassword, generateToken } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const { email, password, fullName } = await request.json();

    // Validate input
    if (!email || !password || !fullName) {
      return NextResponse.json(
        { message: "Email, password, and full name are required" },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { message: "Password must be at least 6 characters" },
        { status: 400 }
      );
    }

    // Check if user already exists
    const { data: existingUser, error: checkError } = await supabase
      .from("users")
      .select("id")
      .eq("email", email)
      .maybeSingle();

    if (checkError) {
      console.error("Error checking user:", checkError);
      return NextResponse.json(
        { message: "Error checking user existence" },
        { status: 500 }
      );
    }

    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 409 }
      );
    }

    // Hash password
    const passwordHash = hashPassword(password);

    // Insert user into database
    const { data, error } = await supabase
      .from("users")
      .insert([
        {
          email,
          password_hash: passwordHash,
          full_name: fullName,
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("Supabase INSERT error:", error);
      console.error("Error message:", error.message);
      console.error("Error code:", error.code);
      return NextResponse.json(
        { message: `Failed to create user: ${error.message}` },
        { status: 500 }
      );
    }

    // Generate JWT token
    const token = generateToken({
      userId: data.id,
      email: data.email,
    });

    return NextResponse.json(
      {
        message: "Registration successful",
        token,
        user: {
          userId: data.id,
          email: data.email,
          fullName: data.full_name,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}