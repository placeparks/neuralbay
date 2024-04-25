"use client";
import React, { useState } from "react";

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <h2 className="mb-4 border border-black-300 rounded-lg">
        <button
          className="flex items-center text-black-600 justify-between w-full p-5 text-left font-medium "
          onClick={toggleAccordion}
        >
          {question}
          <svg
            className={`w-6 h-6 transform transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </h2>
      <div className={`p-5 text-black ${isOpen ? "block" : "hidden"}`}>{answer}</div>
    </>
  );
};

const Questions = () => {
  return (
    <div className="container my-24 mx-auto px-6 xl:px-24">
      <section className="mb-32">
        <div className="flex flex-col justify-center items-center text-black-600">
          <h2 className="mb-6 text-3xl font-bold">
            Frequently asked questions
          </h2>
          <p className="text-gray-400 text-center w-full mb-4 md:mb-12 md:w-3/4">
            Our FAQ area is the best place to look to find answers to your
            questions. Our community and support team constantly updates the
            questions and answers.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AccordionItem
            question="How does your SaaS Product work?"
            answer="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "
          />
          <AccordionItem
            question=" Can I customize my preferences?"
            answer="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "
          />
          <AccordionItem
            question="Are you GDPR compliant?"
            answer="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "
          />
          <AccordionItem
            question="Do you offer unlimited updates?"
            answer="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "
          />
          <AccordionItem
            question="Can I update my payment method"
            answer="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "
          />
          <AccordionItem
            question="How to restore my account?"
            answer="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "
          />
        </div>
      </section>
    </div>
  );
};

export default Questions;
