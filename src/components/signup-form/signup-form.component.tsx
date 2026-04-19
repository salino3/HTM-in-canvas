import React, { useState, useRef, type ChangeEvent } from "react";

interface FormData {
  email: string;
  username: string;
  zip: string;
}

type FormErrors = Partial<Record<keyof FormData, string>>;

export const SignupForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    username: "",
    zip: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  // Create refs for all inputs to manage focus programmatically
  const emailRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const zipRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: FormErrors = {};

    // 1. Validation Logic
    if (!formData.email.includes("@"))
      newErrors.email = "Invalid email address.";
    if (formData.username.length < 3)
      newErrors.username = "Username must be 3+ chars.";
    if (!/^\d{5}$/.test(formData.zip))
      newErrors.zip = "Zip code must be 5 digits.";

    setErrors(newErrors);

    // 2. Focus Management for Accessibility
    // We check errors in the order they appear in the DOM
    if (newErrors.email) {
      emailRef.current?.focus();
    } else if (newErrors.username) {
      usernameRef.current?.focus();
    } else if (newErrors.zip) {
      zipRef.current?.focus();
    } else {
      alert("Form submitted successfully!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        maxWidth: "300px",
        background: "blue",
      }}
    >
      {/* Input 1: Email */}
      <div>
        <label htmlFor="email">Email:</label>
        <input
          ref={emailRef}
          id="email"
          name="email"
          type="email"
          onChange={handleChange}
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? "email-error" : undefined}
          style={{
            borderColor: errors.email ? "red" : "black",
            display: "block",
          }}
        />
        {errors.email && (
          <span id="email-error" style={{ color: "red" }}>
            {errors.email}
          </span>
        )}
      </div>

      {/* Input 2: Username */}
      <div>
        <label htmlFor="username">Username:</label>
        <input
          ref={usernameRef}
          id="username"
          name="username"
          type="text"
          onChange={handleChange}
          aria-invalid={errors.username ? "true" : "false"}
          aria-describedby={errors.username ? "user-error" : undefined}
          style={{
            borderColor: errors.username ? "red" : "black",
            display: "block",
          }}
        />
        {errors.username && (
          <span id="user-error" style={{ color: "red" }}>
            {errors.username}
          </span>
        )}
      </div>

      {/* Input 3: Zip Code */}
      <div>
        <label htmlFor="zip">Zip Code:</label>
        <input
          ref={zipRef}
          id="zip"
          name="zip"
          type="text"
          onChange={handleChange}
          aria-invalid={errors.zip ? "true" : "false"}
          aria-describedby={errors.zip ? "zip-error" : undefined}
          style={{
            borderColor: errors.zip ? "red" : "black",
            display: "block",
          }}
        />
        {errors.zip && (
          <span id="zip-error" style={{ color: "red" }}>
            {errors.zip}
          </span>
        )}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};
