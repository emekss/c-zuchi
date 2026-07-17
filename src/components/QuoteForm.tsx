"use client";

import { FormEvent, useState } from "react";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface FormData {
  companyName: string;
  email: string;
  phone: string;
  containerSize: string;
  numberOfContainers: string;
  condition: string;
  message: string;
}

interface FormErrors {
  companyName?: string;
  email?: string;
  phone?: string;
  numberOfContainers?: string;
  condition?: string;
}

const initialForm: FormData = {
  companyName: "",
  email: "",
  phone: "",
  containerSize: "",
  numberOfContainers: "",
  condition: "",
  message: "",
};

const inputClassName =
  "w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/45 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary";

export default function QuoteForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};

    if (!form.companyName.trim()) {
      nextErrors.companyName = "Company name is required";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Enter a valid email address";
    }

    if (!form.phone.trim()) {
      nextErrors.phone = "Phone number is required";
    }

    if (!form.numberOfContainers) {
      nextErrors.numberOfContainers = "Select number of containers";
    }

    if (!form.condition) {
      nextErrors.condition = "Select new or used";
    }

    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setForm(initialForm);
    }
  };

  return (
    <section className="bg-navy py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Request A Quote - Shipping Container
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
            Browse verified containers across our terminals, book a viewing, or order
            with delivery.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-10 max-w-4xl space-y-5 sm:mt-12"
          noValidate
        >
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <Field label="Company Name*" error={errors.companyName}>
              <input
                type="text"
                value={form.companyName}
                onChange={(e) => updateField("companyName", e.target.value)}
                placeholder="Company Name"
                className={inputClassName}
              />
            </Field>

            <Field label="Email Address*" error={errors.email}>
              <input
                type="email"
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
                placeholder="Email Address"
                className={inputClassName}
              />
            </Field>

            <Field label="Phone / Mobile*" error={errors.phone}>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => updateField("phone", e.target.value)}
                placeholder="Phone / Mobile"
                className={inputClassName}
              />
            </Field>

            <Field label="Container size">
              <select
                value={form.containerSize}
                onChange={(e) => updateField("containerSize", e.target.value)}
                className={cn(inputClassName, "appearance-none")}
              >
                <option value="" className="text-navy">
                  Container size
                </option>
                <option value="20ft" className="text-navy">
                  20ft
                </option>
                <option value="40ft" className="text-navy">
                  40ft
                </option>
                <option value="40ft-hc" className="text-navy">
                  40ft High Cube
                </option>
              </select>
            </Field>

            <Field label="Number of containers*" error={errors.numberOfContainers}>
              <select
                value={form.numberOfContainers}
                onChange={(e) => updateField("numberOfContainers", e.target.value)}
                className={cn(inputClassName, "appearance-none")}
              >
                <option value="" className="text-navy">
                  Number of containers
                </option>
                {[1, 2, 3, 4, 5, "6+"].map((count) => (
                  <option key={count} value={String(count)} className="text-navy">
                    {count}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="New or used*" error={errors.condition}>
              <select
                value={form.condition}
                onChange={(e) => updateField("condition", e.target.value)}
                className={cn(inputClassName, "appearance-none")}
              >
                <option value="" className="text-navy">
                  New or used
                </option>
                <option value="new" className="text-navy">
                  New
                </option>
                <option value="used" className="text-navy">
                  Used
                </option>
              </select>
            </Field>
          </div>

          <Field label="Question and/or remark">
            <textarea
              value={form.message}
              onChange={(e) => updateField("message", e.target.value)}
              placeholder="Question and/or remark"
              rows={5}
              className={cn(inputClassName, "resize-none")}
            />
          </Field>

          {submitted && (
            <p className="rounded-md border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-white">
              Thank you. Your quote request has been submitted.
            </p>
          )}

          <Button type="submit" showArrow className="w-full py-3.5 text-base">
            Send Request
          </Button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-white/80">{label}</span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-red-300">{error}</span>}
    </label>
  );
}
