import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const contentList = [
    {
      bgColor: "bg-blue-600",
      heading: "Create Beautiful Websites",
      subText: "Let your design speak louder than words.",
    },
    {
      bgColor: "bg-green-600",
      heading: "Boost Your Online Presence",
      subText: "We build SEO-friendly web experiences.",
    },
    {
      bgColor: "bg-purple-700",
      heading: "Turn Ideas into Reality",
      subText: "Custom web development made simple.",
    },
    {
      bgColor: "bg-pink-600",
      heading: "Grow Your Brand",
      subText: "Your digital success is our mission.",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % contentList.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const { bgColor, heading, subText } = contentList[index];

  return (
    <section className={`w-full h-screen flex items-center justify-center ${bgColor} text-white transition-all duration-1000`}>
      <div className="text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-down">
          {heading}
        </h1>
        <p className="text-lg md:text-xl mb-6 animate-fade-in-up">
          {subText}
        </p>
        <button className="bg-white text-black font-semibold py-3 px-6 rounded-full hover:bg-black hover:text-white transition">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
