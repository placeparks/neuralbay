import React from "react";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";
import Image from "next/image";
import Button from "../Buttons/ButtonFilled";
import Features from "./Features";
import AIPage from "./AIPage";
import Cards from "./Cards";
import Portfolio from "./Portfolio";
import Questions from "./FAQs";

const HomeLayout = () => {

  return (
    <>
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex flex-col items-center justify-center font-sans text-bb md:pt-32 pt-4 pointer-events-none text-center">
      <Image src='/assets/WELCOME.png' height={300} width={300} alt=""  />
        <h1 className="font-bold md:text-7xl text-3xl md:pr-20 md:pl-20 p-8 md:leading-[6rem]">Discover, Experiment, Buy & Sell Pretrained AI Models</h1>
        <p className="md:text-lg text-md font-normal pl-8 pr-8 md:pl-80 md:pr-80 mb-8" >A platform that allows individuals and organisations to buy and sell pretrained AI models and services securely and transparently using blockchain technology</p>
          <Button title="Explore" />
          <footer className="pt-40 pl-8 pr-8 md:pl-0 md:pr-0">
          <Image src='/assets/brands.png' width={1200} height={700} alt=""/>
        </footer>
        </div>
    </BackgroundGradientAnimation>
    <Features/>
    <AIPage/>
    <Cards/>
      <Portfolio />
      <Questions/>
      </>
  )
}

export default HomeLayout
