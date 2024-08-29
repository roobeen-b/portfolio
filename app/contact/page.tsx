"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const text = "Hello";
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);
    setLoading(true);

    if (form.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
          form.current,
          {
            publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_ID,
          }
        )
        .then(
          () => {
            setSuccess(true);
            setLoading(false);
            form.current && form.current.reset();
          },
          (error) => {
            setError(true);
            setLoading(false);
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:w-1/2 lg:h-full flex justify-center items-center text-8xl">
          <div>
            {text.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  delay: index * 0.2,
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                {char}
              </motion.span>
            ))}
            😎
          </div>
        </div>

        {/* FORM CONTAINER */}
        <form
          className="h-1/2 lg:w-1/2 lg:h-full flex flex-col gap-8 justify-center bg-gray-200 p-20"
          ref={form}
          onSubmit={sendEmail}
        >
          <h1 className="text-black">Dear Rubin,</h1>
          <textarea
            rows={6}
            name="user_message"
            className="w-full outline-none border-b-2 border-black resize-none bg-transparent"
          ></textarea>
          <h1 className="text-black">My mail address is:</h1>
          <input
            type="email"
            name="user_email"
            className="w-full outline-none border-b-2 border-black bg-transparent"
          />
          <h1 className="text-black">Regards</h1>
          <button
            disabled={loading}
            className="bg-black text-white font-semibold py-2 px-4 rounded-md w-full hover:bg-white hover:text-black hover:ring-1 hover:ring-black"
          >
            Send
          </button>

          {success && (
            <p className="text-green-500 font-semibold">
              Message sent successfully
            </p>
          )}
          {error && (
            <p className="text-red-500 font-semibold">Message failed to send</p>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
