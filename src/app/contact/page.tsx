import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Contact | John Doe",
  description:
    "John Doe is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
};

export default function Projects() {
  return (
    <Container>
      <div className="flex items-baseline mb-2">
      <span className="text-4xl">✉️</span>
      <Heading className="font-black ml-2">Contact Me</Heading>
      </div>
      <Paragraph className="mb-10 max-w-xl">
        Reach out to me over email or fill up this contact form. I will get back
        to you ASAP - I promise.{" "}
      </Paragraph>
      <Contact />
    </Container>
  );
}
