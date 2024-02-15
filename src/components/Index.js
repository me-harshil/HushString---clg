"use client";
import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { FaGuitar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import CarouselImg from "@/components/CarouselImg";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* carousel */}
      <CarouselImg />

      <div>
        <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-center pt-20">
          COLLECTIONS
        </h1>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <Link
                  href={"/ukulele"}
                  className="block relative h-48 rounded overflow-hidden"
                >
                  <Image
                    src="/ukulele.jpg"
                    width={420}
                    height={260}
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                  />
                </Link>
                <div className="mt-4">
                  <h2 className="text-gray-900 title-font text-3xl font-medium text-center">
                    Ukulele
                  </h2>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <Link
                  href={"/guitars"}
                  className="block relative h-48 rounded overflow-hidden"
                >
                  <Image
                    src="/guitar.jpg"
                    width={420}
                    height={260}
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                  />
                </Link>
                <div className="mt-4">
                  <h2 className="text-gray-900 title-font text-3xl font-medium text-center">
                    Guitar
                  </h2>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <Link
                  href={"/keyboards"}
                  className="block relative h-48 rounded overflow-hidden"
                >
                  <Image
                    src="/piano.jpg"
                    width={420}
                    height={260}
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                  />
                </Link>
                <div className="mt-4">
                  <h2 className="text-gray-900 title-font text-3xl font-medium text-center">
                    Keyboard/Piano
                  </h2>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <Link
                  href={"/drum-kits"}
                  className="block relative h-48 rounded overflow-hidden"
                >
                  <Image
                    src="/drum-kit.jpg"
                    width={420}
                    height={260}
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                  />
                </Link>
                <div className="mt-4">
                  <h2 className="text-gray-900 title-font text-3xl font-medium text-center">
                    DrumKit
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* details */}
      <div className="container px-5 py-24 mx-auto">
        <div
          className="flex flex-wrap justify-center -m-4 aos-init aos-animate"
          data-aos="zoom-in-up"
          data-aos-anchor-placement="top-bottom"
        >
          <div className="w-full xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg text-center">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4 text-center ">
                <FaGuitar className="text-3xl" />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2 text-center ">
                Premium Guitars
              </h2>
              <p className="leading-relaxed text-base">
                Our guitars, made with precision, feature premium materials for
                an exceptional musical experience.
              </p>
            </div>
          </div>
          <div className="w-full xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg text-center ">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4 text-center ">
                <TbTruckDelivery className="text-3xl" />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2 text-center ">
                Free Shipping
              </h2>
              <p className="leading-relaxed text-base text-center">
                We ship all over India for FREE.
              </p>
            </div>
          </div>
          <div className="w-full xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg text-center">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4 ">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 320 512"
                  className="text-3xl"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M308 96c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v44.748c0 6.627 5.373 12 12 12h85.28c27.308 0 48.261 9.958 60.97 27.252H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h158.757c-6.217 36.086-32.961 58.632-74.757 58.632H12c-6.627 0-12 5.373-12 12v53.012c0 3.349 1.4 6.546 3.861 8.818l165.052 152.356a12.001 12.001 0 0 0 8.139 3.182h82.562c10.924 0 16.166-13.408 8.139-20.818L116.871 319.906c76.499-2.34 131.144-53.395 138.318-127.906H308c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-58.69c-3.486-11.541-8.28-22.246-14.252-32H308z"></path>
                </svg>
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2 text-center">
                Exciting Offers
              </h2>
              <p className="leading-relaxed text-base text-center">
                We provide amazing offers &amp; discounts on our products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
