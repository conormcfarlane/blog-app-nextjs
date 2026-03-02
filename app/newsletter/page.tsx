"use client";
import { useState } from "react";
import { SubmitEvent } from "react";

export default function page() {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);

  // Validation Function
  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Form Submition
  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    // If no email =>
    if (!email) {
      setIsError(true);
      setMessage("Please enter an email address");
      return;
    }
    // If doesnt pass validation =>
    if (!validateEmail(email)) {
      setIsError(true);
      setMessage("Please enter a valid email address");
      return;
    }

    // Else if Valid email
    setIsError(false);
    setMessage("Success! You've been subscribed 🎉");
    setEmail(""); // Clear input
  };
  return (
    <section className="space-y-4">
      <h2 className="text-preset2">Newsletter</h2>
      <p className="text-preset7">
        Want to stay updated on my latest articles, coding tutorials, and
        personal adventures? Sign up for my newsletter! It’s a simple way to
        keep track of new posts and occasional coding tips I discover. Just drop
        your email in the sign-up box, and I’ll send you updates whenever
        there’s something new to share.
      </p>
      <p className="text-preset5">
        I’d love to have you along for the ride and also hear about your own
        journey!
      </p>
    </section>
  );
}
