import React from "react";
import Image from "next/image";

const About = () => {
  return <> <div className="min-h-screen"> <section className="py-16 bg-gray-100">
  <div className="container mx-auto">
    <h2 className="text-4xl font-bold mb-8 text-center">About HushString</h2>
    <div className="flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 mb-6 md:mb-0">
        <p className="text-gray-700 leading-relaxed">
          HushString is your go-to destination for high-quality music instruments. Our mission is to provide musicians of all levels with a curated selection of instruments that inspire creativity and elevate musical experiences.
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed">
          We believe that the right instrument can make a profound difference in a musician&apos;s journey. With HushString, we aim to make the process of finding and acquiring the perfect instrument an enjoyable and hassle-free experience.
        </p>
      </div>
      <div className="md:w-1/2">
      <Image
          src="/about.jpg" // Replace with the path to your about us image
          alt="About Us"
          className="rounded-md shadow-md"
          width={768}
          height={512}
        />
      </div>
    </div>
  </div>
</section></div></>;
};

export default About;
