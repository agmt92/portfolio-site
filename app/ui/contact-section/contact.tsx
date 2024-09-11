"use client";
import React, { useState } from "react";

interface FormObject {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const Form: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  const validateForm = (formObject: FormObject): Errors => {
    const errorMessages: Errors = {};
    
    // Name Validation: Only letters, spaces and should be at least 2 characters
    if (!/^[a-zA-Z\s]{2,50}$/.test(formObject.name)) {
      errorMessages.name = "Please enter a valid name (letters and spaces only, 2-50 characters).";
    }
    
    // Email Validation: Basic email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formObject.email)) {
      errorMessages.email = "Please enter a valid email address.";
    }
    
    // Phone Validation: Optional, but if provided, only digits, dashes, and spaces allowed
    if (formObject.phone && !/^[0-9\s\-\+]{10,15}$/.test(formObject.phone)) {
      errorMessages.phone = "Please enter a valid phone number (10-15 digits).";
    }

    // Message Validation: Ensure message isn't empty
    if (!formObject.message || formObject.message.trim().length < 10) {
      errorMessages.message = "Your message should be at least 10 characters long.";
    }

    return errorMessages;
  };

  const sanitizeInput = (input: string): string => {
    return input.replace(/[<>\/\[\]{}()";]/g, "");
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    let formObject: FormObject = Object.fromEntries(formData.entries()) as unknown as FormObject;

    // Sanitize inputs to prevent injections
    formObject = Object.fromEntries(
      Object.entries(formObject).map(([key, value]) => [key, sanitizeInput(value as string)])
    ) as unknown as FormObject;

    // Validate form data
    const validationErrors = validateForm(formObject);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(process.env.FORMSPREE_URL as string, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formObject),
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        alert("There was a problem submitting the form");
      }
    } catch (error) {
      console.error(error);
      alert("There was a problem submitting the form");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-zinc-900 dark:bg-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <p className="max-w-xl text-lg text-gray-100 dark:text-gray-900">
              Have an idea or a project in mind? Let&apos;s talk. I&apos;ll be happy to help you.
            </p>
            <p className="max-w-xl text-lg text-gray-100 dark:text-gray-900">
              If you hate forms, feel free to send an email to{" "}
              <a href="mailto:agmt@dr.com" className="text-pink-600">
                agmt@dr.com
              </a>{" "}
              or just give me a call.
            </p>
            <p className="pt-4">
              Should you also be in Vienna and want to grab a coffee, let me know. I&apos;m always up for a good chat.
            </p>

            <div className="mt-8">
              <a href="tel:+4369010674084" className="text-2xl font-bold text-pink-600">
                0690 106 4084
              </a>
              <address className="mt-2 not-italic text-gray-100 dark:text-gray-900">Vienna, Austria</address>
            </div>
          </div>

          <div className="rounded-lg bg-zinc-800 dark:bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            {submitted ? (
              <p className="text-green-500">Thank you for your message. I&apos;ll get back to you soon!</p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="name">Name</label>
                  <input
                    className="w-full rounded-lg border-gray-700 dark:border-gray-200 p-3 text-sm bg-gray-700 dark:bg-gray-50 text-gray-100 dark:text-gray-900"
                    placeholder="Name"
                    type="text"
                    id="name"
                    name="name"
                    required
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">Email</label>
                    <input
                      className="w-full rounded-lg border-gray-700 dark:border-gray-200 p-3 text-sm bg-gray-700 dark:bg-gray-50 text-gray-100 dark:text-gray-900"
                      placeholder="Email address"
                      type="email"
                      id="email"
                      name="email"
                      required
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">Phone</label>
                    <input
                      className="w-full rounded-lg border-gray-700 dark:border-gray-200 p-3 text-sm bg-gray-700 dark:bg-gray-50 text-gray-100 dark:text-gray-900"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                      name="phone"
                    />
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">Message</label>
                  <textarea
                    className="w-full rounded-lg border-gray-700 dark:border-gray-200 p-3 text-sm bg-gray-700 dark:bg-gray-50 text-gray-100 dark:text-gray-900"
                    placeholder="Message"
                    rows={8}
                    id="message"
                    name="message"
                    required
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className={`inline-block w-full rounded-lg bg-white dark:bg-black px-5 py-3 font-medium text-black dark:text-white sm:w-auto ${
                      loading ? "cursor-not-allowed opacity-50" : ""
                    }`}
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Enquiry"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;