"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { site, contact } from "@/lib/content";

const initial = {
  name: "",
  email: "",
  phone: "",
  org: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initial);
  const [error, setError] = useState("");

  function update<K extends keyof typeof initial>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please add your name, email, and a short message so we can reply.");
      return;
    }
    setError("");

    const subject = `Partnership enquiry from ${form.name}`;
    const lines = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.phone ? `Phone: ${form.phone}` : "",
      form.org ? `Organization type: ${form.org}` : "",
      "",
      form.message,
    ].filter(Boolean);

    const href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(lines.join("\n"))}`;

    window.location.href = href;
  }

  const fieldCls =
    "w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/70 transition-colors focus:border-green focus:outline-none";
  const labelCls = "mb-1.5 block text-sm font-semibold text-ink";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelCls}>
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className={fieldCls}
            required
          />
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className={fieldCls}
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelCls}>
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Optional"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={fieldCls}
          />
        </div>
        <div>
          <label htmlFor="org" className={labelCls}>
            Organization type
          </label>
          <select
            id="org"
            name="org"
            value={form.org}
            onChange={(e) => update("org", e.target.value)}
            className={`${fieldCls} appearance-none bg-[length:1rem] bg-[right_0.9rem_center] bg-no-repeat pr-10`}
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%235b6b60' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
            }}
          >
            <option value="">Select one</option>
            {contact.orgTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelCls}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us how you would like to work together."
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          className={`${fieldCls} resize-y`}
          required
        />
      </div>

      {error && (
        <p role="alert" className="text-sm font-semibold text-green-deep">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-green px-7 py-3.5 text-base font-semibold text-white shadow-soft transition-all hover:bg-green-deep hover:shadow-lift sm:w-auto"
      >
        Send message
        <Send
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={2}
        />
      </button>
    </form>
  );
}
