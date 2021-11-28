import React from "react";
import img from "../../assets/images/img.jpg";
import Card from "../StyledComponents/Card";

const FeatureMain = () => {
  return (
    <main className="px-6 py-2 mx-auto max-w-7xl">
      <section className="my-4">
        <h1 className="text-2xl font-medium tracking md:text-4xl font-montserrat">
          Features
        </h1>
      </section>
      <section className="mt-8 space-y-10">
        {/* first card */}
        <Card
          img={img}
          title="DD_ Tasks"
          para="Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order."
        />

        {/* second card */}
        <Card
          img={img}
          title="DD_ Notes"
          para="Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order."
        />

        {/* third card */}
        <Card
          img={img}
          title="DD_ Budget Tracker"
          para="Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order."
        />
      </section>
    </main>
  );
};

export default FeatureMain;
