"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import AuthLayout, { AuthInput } from "@/components/AuthLayout";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Button from "@/components/ui/Button";
import { useAuth } from "@/context/AuthContext";

export default function SignupPage() {
  const router = useRouter();
  const { signup } = useAuth();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    signup({ name: fullName, email, phone, password });
    router.push("/");
  };

  return (
    <>
      <Navbar activePath="/signup" />
      <main className="pt-[72px]">
        <AuthLayout
          title="Don't Have An Account? Sign Up."
          footerText="Already have an account?"
          footerLinkText="Log In"
          footerHref="/login"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <AuthInput label="Full Name*" value={fullName} onChange={setFullName} placeholder="Enter Company Name" />
            <AuthInput label="Email Address*" type="email" value={email} onChange={setEmail} placeholder="Enter Email Address" />
            <AuthInput label="Phone / Mobile*" type="tel" value={phone} onChange={setPhone} placeholder="Enter Phone Number" />
            <AuthInput label="Password*" type="password" value={password} onChange={setPassword} placeholder="Enter Password" />
            <AuthInput label="Confirm Password*" type="password" value={confirmPassword} onChange={setConfirmPassword} placeholder="Confirm Password" />
            {error && <p className="text-sm text-red-300">{error}</p>}
            <Button type="submit" showArrow className="w-full py-3.5 text-base">
              Create Account
            </Button>
          </form>
        </AuthLayout>
      </main>
      <Footer />
    </>
  );
}
