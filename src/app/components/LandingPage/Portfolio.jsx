import React from "react";
import Button from "../Buttons/ButtonFilled";
import Image from "next/image";

const Portfolio = () => {
  return (
    <div className="bg-bluebg h-100vh p-6 md:p-16">
      <div className="w-full">
        <div className="flex flex-col font-sans">
          <Image
            src="/assets/Engineer.png"
            width={200}
            height={150}
            alt="text"
            className="pb-4"
          />
          <h1 className="text-2xl text-black-600 md:text-4xl font-bold pb-4 w-full md:w-2/4">
            Showcase and Monetize Your AI Models
          </h1>
          <p className="pb-4 text-black-600 w-full md:w-96">
            Attention, AI engineers! Neuralbay offers a platform to showcase and
            sell your AI models to a global audience.
          </p>
          <Button title="Get Started" />
        </div>
        <Image
          src="/assets/Graph.png"
          height={800}
          width={1200}
          alt=""
          className="ml-0 -mt-0 md:ml-16 md:-mt-48"
        />
      </div>
    </div>
  );
};

export default Portfolio;
