import React from "react";
import img from "../../assets/images/img.jpg";
import Card from "../StyledComponents/Card";

const AboutMain = () => {
  return (
    <main className="px-6 py-2 mx-auto max-w-7xl">
      <section className="my-4">
        <h1 className="text-2xl font-medium tracking md:text-4xl font-montserrat">
          About Us
        </h1>
      </section>
      <section className="mt-8 space-y-10">
        {/* first card */}
        <Card
          img={img}
          title="Dhruv Maheshwari"
          para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          quibusdam id iste culpa eum natus repellendus sapiente nisi fuga
          sequi!"
        />

        {/* second card */}
        <Card
          img={img}
          title="Dhruv Kundu"
          para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          quibusdam id iste culpa eum natus repellendus sapiente nisi fuga
          sequi!"
        />

        {/* third card */}
        <Card
          img={img}
          title="Vishal Singh"
          para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          quibusdam id iste culpa eum natus repellendus sapiente nisi fuga
          sequi!"
        />

        {/* Fourth card */}
        <Card
          img={img}
          title="Kushank Rawat"
          para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          quibusdam id iste culpa eum natus repellendus sapiente nisi fuga
          sequi!"
        />
      </section>
    </main>
  );
};

export default AboutMain;
