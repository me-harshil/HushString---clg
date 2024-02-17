import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col justify-center items-center">
        <div>
          <h2 className="text-center text-3xl font-bold leading-tight">
            Let&apos;s talk about everything!
          </h2>
          <Image
            className="h-52 mx-auto py-2"
            src="/logo-black.png"
            width={200}
            height={200}
            alt="logo"
          />
          <p className="text-center text-xl lg:text-2xl font-medium leading-tight">
            Feel free to ask us anything!
          </p>
          <p className="py-4 px-4 text-md lg:text-md leading-tight text-center">
            If you have any questions regarding your order, feel free to send an
            email, call, or WhatsApp us on our support number.
          </p>
          <div className="flex justify-between">
            <div className="text-center px-5 md:px-0 md:text-left py-10">
              <span className="font-bold">Corporate Address</span>
              <br />
              801, City Centre 2,
              <br />
              Science City Rd, Panchamrut Bunglows II, Sola,
              <br />
              Ahmedabad, Gujarat, 380060
              <br />
            </div>
            <div className="text-center px-5 md:px-0 md:text-left py-10">
              <span className="font-bold">Customer Support</span>
              <br />
              Call/Whatsapp:{" "}
              <a
                className="underline text-blue-600 dark:text-blue-400"
                rel="noreferrer"
                target="_blank"
                href="https://wa.me/7078073838?text=Hi,%20I%20need%20to%20enquire%20about%20products%20on%20CodesWear"
              >
                +91 561 543 3838
              </a>
              <br />
              Email: care@hushstring.in
              <br />
              Morning: 10 AM - 6 PM
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
