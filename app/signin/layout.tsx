import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to Hilyah admin.",
  robots: { index: false, follow: false },
  alternates: { canonical: absoluteUrl("/signin") },
};

export default function SignInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
