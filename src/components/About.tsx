"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";

export default function About() {
  const images = [
    "https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
        {/* 
        // <Image
        //   src="https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform -rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform -rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // /> */}
      </div>

      <div className="max-w-4xl">
        <Paragraph className=" mt-4">
        Welcome to SS Snow Blowing Services, proudly operating under new management with over 15 years in experience!
         While our name remains synonymous with reliable snow removal services, we are excited to introduce fresh leadership,
          innovative ideas, and a renewed commitment to delivering exceptional service.
        </Paragraph>
        <div className=" mt-4 font-bold">What&apos;s New?
        </div>
        <Paragraph className=" mt-4">
          <ul>
            <li>
            - <b>Enhanced Customer Focus:</b> Our new management team is dedicated to enhancing customer experiences by providing more personalized service and quicker response times.
            </li>
            <li>
            - <b>Upgraded Equipment:</b> We&apos;ve invested in the latest snow blowing technology to improve efficiency and ensure your property is cleared faster and more thoroughly than ever before.
            </li>
            <li>
            - <b>Expanded Services:</b> In addition to our core snow blowing services, we now offer enhanced winter maintenance solutions such as de-icing, snow relocation, and emergency snow removal.
            </li>
            <li>
            - <b>Commitment to Excellence:</b> With a fresh perspective, we are focused on continuous improvement, using customer feedback to raise the bar in everything we do.
            </li>
          </ul>
        </Paragraph>
        <div className=" mt-4 font-bold">Our Values
        </div>
        <Paragraph className=" mt-4">
        While we are under new management, our core values remain the same:
        <ul>
          <li>- <b>Dependability:</b> We&apos;re here when you need us most, providing timely snow removal you can count on.</li>
          <li>- <b>Safety First:</b> Our team is trained in best practices to ensure the safety of your property and the people who use it.</li>
          <li>- <b>Community Focused:</b> We&apos;re proud to serve our local community, helping homes and businesses stay operational during even the toughest winter storms.</li>
        </ul>
        </Paragraph>
        <div className=" mt-4 font-bold">Our Vision
        </div>
        <Paragraph className=" mt-4">
        Under new leadership, our vision is clear: to set the standard for snow removal services in the region.
        We aim to be your go-to partner for all winter weather needs, offering reliable, responsive, and high-quality solutions.
Thank you for trusting SS Snow Blowing Services as we embark on this exciting new chapter.
 We look forward to continuing our tradition of excellence—now better than ever.
        </Paragraph>
        <Paragraph className=" mt-4 mb-4">
          Thank you for being here, and We can&apos;t wait to embark on this
          adventure with you.
        </Paragraph>
      </div>
    </div>
  );
}
