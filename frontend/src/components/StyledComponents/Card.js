import React from "react";

const Card = ({ img, title, para }) => {
  return (
    <div className="flex flex-col items-center border-2 rounded-lg shadow-md border-lightBg md:flex-row md:max-w-4xl">
      <img
        className="object-cover w-full h-full rounded-t-lg md:h-80 md:w-80 md:rounded-none md:rounded-l-lg"
        src={img}
        alt=""
      />
      <div className="flex flex-col justify-between gap-4 p-4 leading-normal">
        <h1 className="text-2xl font-medium tracking md:text-4xl font-montserrat">
          {title}
        </h1>
        <p className="text-sm font-normal leading-relaxed tracking-wide text-gray-300 font-roboto md:text-lg">
          {para}
        </p>
      </div>
    </div>
  );
};

export default Card;
