"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const faqCategories = [
  {
    category: "General",
    questions: [
      {
        question: "What is OpenCampus OS?",
        answer:
          "OpenCampus OS is a modern student management platform designed to simplify campus life. It provides a unified dashboard for tracking attendance, assignments, notes, internships, and hackathons all in one place.",
      },
      {
        question: "Is OpenCampus OS free to use?",
        answer:
          "Yes! We offer a free Starter plan that includes core features like basic dashboard, assignment tracking, attendance monitoring, and 1GB of notes storage. Premium plans are available for students who need advanced features.",
      },
      {
        question: "How do I get started?",
        answer:
          "Simply click the 'Get Started' button on our homepage, create your account, and you'll have access to your personalized dashboard immediately. No credit card required for the free plan.",
      },
    ],
  },
  {
    category: "Platform",
    questions: [
      {
        question: "What platforms does OpenCampus OS support?",
        answer:
          "OpenCampus OS is a web-based platform that works on all modern browsers including Chrome, Firefox, Safari, and Edge. It's optimized for desktop, tablet, and mobile devices.",
      },
      {
        question: "Is my data synchronized across devices?",
        answer:
          "Yes! Your data is automatically synchronized across all your devices. You can start working on your laptop and continue on your phone without missing a beat.",
      },
      {
        question: "Can I export my data?",
        answer:
          "Absolutely. You can export your assignments, notes, and attendance records at any time. We believe you should always have full control over your data.",
      },
    ],
  },
  {
    category: "Security",
    questions: [
      {
        question: "How is my data protected?",
        answer:
          "We use industry-standard encryption to protect your data both in transit and at rest. Your information is stored on secure servers with regular security audits and updates.",
      },
      {
        question: "Is OpenCampus OS GDPR compliant?",
        answer:
          "Yes, we are fully GDPR compliant. We follow strict data protection regulations and give you full control over your personal information, including the right to delete your data.",
      },
      {
        question: "Can I delete my account?",
        answer:
          "Yes, you can delete your account at any time from your settings. All your data will be permanently removed from our servers within 30 days of deletion.",
      },
    ],
  },
  {
    category: "Pricing",
    questions: [
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit cards, debit cards, and PayPal. For Enterprise plans, we also support bank transfers and invoicing.",
      },
      {
        question: "Can I cancel my subscription anytime?",
        answer:
          "Yes, you can cancel your subscription at any time. You'll continue to have access to your paid features until the end of your current billing period.",
      },
      {
        question: "Do you offer refunds?",
        answer:
          "We offer a 14-day money-back guarantee for all paid plans. If you're not satisfied, contact our support team for a full refund.",
      },
    ],
  },
  {
    category: "Support",
    questions: [
      {
        question: "How can I contact support?",
        answer:
          "You can reach our support team through the in-app help center, email us at support@opencampus.os, or use the live chat feature available on our website.",
      },
      {
        question: "What are your support hours?",
        answer:
          "Our support team is available 24/7 for Pro and Enterprise users. Starter plan users receive support during business hours (9 AM - 6 PM UTC, Monday - Friday).",
      },
      {
        question: "Do you have documentation?",
        answer:
          "Yes, we have comprehensive documentation available at docs.opencampus.os covering all features, from basic setup to advanced configurations.",
      },
    ],
  },
];

function FAQItem({ question, answer, isOpen, onClick }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-white/10 bg-[#111111] overflow-hidden"
    >
      <motion.button
        onClick={onClick}
        className="w-full px-6 py-5 flex items-center justify-between text-left"
        whileHover={{ backgroundColor: "rgba(255,255,255,0.02)" }}
        transition={{ duration: 0.2 }}
      >
        <span className="text-lg font-medium text-white pr-4">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown size={20} className="text-[#9F9F9F]" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 pt-0">
              <p className="text-[#9F9F9F] leading-7">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function FAQCategory({ category, questions }: {
  category: string;
  questions: typeof faqCategories[0]["questions"];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <motion.div
      variants={itemVariants}
      className="mb-12"
    >
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-[#FF8C42]/20 flex items-center justify-center">
          <HelpCircle size={20} className="text-[#FF8C42]" />
        </div>
        {category}
      </h2>

      <div className="space-y-4">
        {questions.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function FAQPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#090909]">
      {/* Background effects */}
      <div className="absolute inset-0 noise-texture">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#FF8C42] rounded-full blur-[150px] opacity-[0.06]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#FF8C42] rounded-full blur-[120px] opacity-[0.04]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#FF8C42] rounded-full blur-[100px] opacity-[0.03]" />
      </div>

      <Navbar />

      <section className="relative z-10 px-6 pt-32 pb-20 sm:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
              Frequently Asked Questions
            </h1>

            <p className="mt-6 text-lg text-[#9F9F9F] max-w-2xl mx-auto">
              Everything you need to know about OpenCampus OS. Can't find your
              answer? Contact our support team.
            </p>
          </motion.div>

          {/* FAQ Categories */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.2 }}
          >
            {faqCategories.map((category) => (
              <FAQCategory
                key={category.category}
                category={category.category}
                questions={category.questions}
              />
            ))}
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-20 rounded-[32px] border border-white/10 bg-[#111111] p-8 md:p-12 text-center glow-effect"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Still have questions?
            </h2>
            <p className="text-[#9F9F9F] mb-8 max-w-xl mx-auto">
              Our support team is here to help you with any questions or concerns
              you may have.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-2xl bg-[#FF8C42] px-8 py-4 font-semibold text-white transition-colors hover:bg-[#ff9d5c]"
            >
              Contact Support
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
