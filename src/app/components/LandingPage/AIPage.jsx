import React from "react";
import Button from "../Buttons/ButtonFilled";
import Image from "next/image";

const AIPage = () => {
  return (
    <div className="bg-bluebg h-100vh p-8">
      <div className="flex flex-col md:flex-row justify-between p-0 md:p-12">
        <h1 className="text-2xl md:text-5xl font-semibold text-black md:font-medium md:w-2/4 font-sans leading-10 md:mb-0 mb-4">
          Discover an Extensive Range of AI Models to Explore
        </h1>
        <Button title="Get Started" />
      </div>

      {/* cards */}
      <div className="flex flex-col md:flex-row gap-4 mt-8 mb-8 justify-center">
        {/* card 1 */}

        <div className="flex flex-col md:flex-row gap-4">
          <div class="md:max-w-xs max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Image
              src="/assets/audio.svg"
              height={70}
              width={70}
              className="mt-4 mb-2"
            />
            <a href="#">
              <h5 class="mb-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white pt-12">
                Audio Creation
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400 leading-10">
              Neuralbay is the ultimate AI Model Marketplace, offering a wide
              selection of state-of-the-art AI models created by.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div class="md:max-w-xs max-w-full p-6 pl-6 pr-6 md:p-2 md:pl-4 md:pr-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Image
                src="/assets/image.svg"
                height={70}
                width={70}
                className="md:mb-2 mb-8 mt-8 md:mt-0"
              />

              <a href="#">
                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Image Generation
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-500 dark:text-gray-400 md:leading-7 leading-10">
                Neuralbay is the ultimate AI Model Marketplace.
              </p>
            </div>

            <div class="md:max-w-xs max-w-full p-6 pl-6 pr-6 md:p-2 md:pl-4 md:pr-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Image
                src="/assets/translation.svg"
                height={70}
                width={70}
                className="md:mb-2 mb-8 mt-8 md:mt-0"
              />

              <a href="#">
                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Translation
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-500 dark:text-gray-400 md:leading-7 leading-10">
                Neuralbay is the ultimate AI Model Marketplace.
              </p>
            </div>
          </div>
        </div>

        {/* card 2 */}
        <div className="flex flex-col md:flex-row gap-4">
          <div class="md:max-w-xs max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Image
              src="/assets/object.svg"
              height={70}
              width={70}
              className="mt-8 mb-8"
            />

            <a href="#">
              <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Object Detection
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400 leading-10">
              Neuralbay is the ultimate AI Model Marketplace, offering a wide
              selection of state-of-the-art AI models created by.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div class="md:max-w-xs max-w-full p-6 pl-6 pr-6 md:p-2 md:pl-4 md:pr-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Image
                src="/assets/text.svg"
                height={70}
                width={70}
                className="md:mb-2 mb-8 mt-8 md:mt-0"
              />
              <a href="#">
                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Text Generation
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-500 dark:text-gray-400 md:leading-7 leading-10">
                Neuralbay is the ultimate AI Model Marketplace.
              </p>
            </div>

            <div class="md:max-w-xs max-w-full p-6 pl-6 pr-6 md:p-2 md:pl-4 md:pr-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Image
                src="/assets/finance.svg"
                height={70}
                width={70}
                className="md:mb-2 mb-8 mt-8 md:mt-0"
              />
              <a href="#">
                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Finance
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-500 dark:text-gray-400 md:leading-7 leading-10">
                Neuralbay is the ultimate AI Model Marketplace.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIPage;
