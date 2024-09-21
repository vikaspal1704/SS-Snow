import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Services | S.S Snow",
  description:
    "John Doe is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
};

export default function Projects() {
  return (
    <Container>
      <div className="flex mt-4">
      <span className="text-4xl">⚡</span>
      <Heading className="font-black mb-10">
        {" "}
        Services that we Provide
      </Heading>
      </div>
      

      <Products />
    </Container>
  );
}
