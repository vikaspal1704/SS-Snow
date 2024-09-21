"use client";
import React, { useState } from "react";

const defaultFormState = {
  fullName: {
    value: "",
    error: "",
  },
  email: {
    value: "",
    error: "",
  },
  mobile: {
    value: "",
    error: "",
  },
  message: {
    value: "",
    error: "",
  },
};

export const Contact = () => {
  const [formData, setFormData] = useState(defaultFormState);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/send-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName.value,
          email: formData.email.value,
          mobile: formData.mobile.value,
          message: formData.message.value,
        }),
      });

      if (response.ok) {
        alert('Inquiry sent successfully!');
        setFormData(defaultFormState); // Reset form state
      } else {
        alert('Failed to send inquiry.');
      }
    } catch (error) {
      console.error('Error sending inquiry:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <input
          type="text"
          placeholder="Your Full Name"
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={formData.fullName.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              fullName: {
                value: e.target.value,
                error: "",
              },
            });
          }}
        />
        <input
          type="email"
          placeholder="Your Email Address"
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={formData.email.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              email: {
                value: e.target.value,
                error: "",
              },
            });
          }}
        />
      </div>
      <input
        type="text"
        placeholder="Your Mobile Number"
        className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full mt-4"
        value={formData.mobile.value}
        onChange={(e) => {
          setFormData({
            ...formData,
            mobile: {
              value: e.target.value,
              error: "",
            },
          });
        }}
      />
      <div>
        <textarea
          placeholder="Your Message"
          rows={10}
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 mt-4 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={formData.message.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              message: {
                value: e.target.value,
                error: "",
              },
            });
          }}
        />
      </div>
      <button
        type="submit"
        className="px-8 py-2 w-full rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200"
      >
        Submit
      </button>
    </form>
  );
};
