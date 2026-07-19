import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { extractToken, verifyToken } from "@/lib/auth";

export async function GET(request: NextRequest) {
  try {
    const token = extractToken(request.headers.get("Authorization"));

    if (!token) {
      return NextResponse.json(
        { message: "No token provided" },
        { status: 401 }
      );
    }

    const payload = verifyToken(token);

    if (!payload) {
      return NextResponse.json(
        { message: "Invalid token" },
        { status: 401 }
      );
    }

    // Fetch user from database
    const { data: user, error } = await supabase
      .from("users")
      .select("id, email, full_name")
      .eq("id", payload.userId)
      .single();

    if (error || !user) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      user: {
        userId: user.id,
        email: user.email,
        fullName: user.full_name,
      },
    });
  } catch (error) {
    console.error("Auth check error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}