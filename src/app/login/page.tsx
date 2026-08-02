"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import AuthLayout, { AuthInput } from "@/components/AuthLayout";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Button from "@/components/ui/Button";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const success = login(email, password);
    if (success) {
      router.push("/");
    } else {
      setError("Invalid email or password. Try emekaokoh@gmail.com");
    }
  };

  return (
    <>
      <Navbar activePath="/login" />
      <main className="pt-[72px]">
        <AuthLayout
          title="Already Have An Account? Log In"
          footerText="Don't have an account?"
          footerLinkText="Sign Up"
          footerHref="/signup"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <AuthInput
              label="Email Address*"
              type="email"
              value={email}
              onChange={setEmail}
              placeholder="Enter Email Address"
            />
            <AuthInput
              label="Password*"
              type="password"
              value={password}
              onChange={setPassword}
              placeholder="Enter Password"
            />
            {error && <p className="text-sm text-red-300">{error}</p>}
            <Button type="submit" showArrow className="w-full py-3.5 text-base">
              Sign In
            </Button>
          </form>
        </AuthLayout>
      </main>
      <Footer />
    </>
  );
}
