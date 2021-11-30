import React from "react";

const Main = () => {
  return (
    <main className="px-6 py-4 mx-auto max-w-7xl">
      <section className="max-w-2xl mx-auto my-8 space-y-4 text-center md:space-y-7">
        <h1 className="text-4xl font-semibold tracking-wide md:text-6xl font-montserrat">
          DiaryDeck_
        </h1>
        <p className="text-sm font-normal leading-relaxed tracking-wide text-gray-300 font-roboto md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          quibusdam id iste culpa eum natus repellendus sapiente nisi fuga
          sequi!
        </p>
      </section>
      <section className="max-w-2xl p-4 mx-auto my-2 space-x-6 text-center">
        <a href="/dashboard">
          <button
            type="button"
            className="px-5 py-3 text-sm font-medium tracking-wide transition duration-300 border-none rounded-lg font-montserrat text-lightBg bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600"
          >
            Get Started
          </button>
        </a>
        <a href="/features">
          <button
            type="button"
            className="px-5 py-3 text-sm font-medium tracking-wide transition duration-300 border-none rounded-lg font-montserrat text-lightBg bg-normalBg"
          >
            Learn More
          </button>
        </a>
      </section>
    </main>
  );
};

export default Main;
