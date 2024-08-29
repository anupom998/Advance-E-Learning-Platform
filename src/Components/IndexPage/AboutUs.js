import React from "react";
import a from "../../assets/about-us/a.png";
import b from "../../assets/about-us/b.png";
import c from "../../assets/about-us/c.png";
import d from "../../assets/about-us/d.png";

const AboutUs = () => {
  return (
    <section className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-7 max-w-6xl p-4 mx-auto ">
      {[
        {
          title: "Successfully trained",
          desc: "20000+ students",
          icon: a,
        },
        {
          title: "Video courses",
          desc: "20000+ students",
          icon: b,
        },
        {
          title: "Expert instructor",
          desc: "20000+ students",
          icon: c,
        },
        {
          title: "Proudly Received",
          desc: "20000+ students",
          icon: d,
        },
      ].map((card, i) => (
        <Card card={card} key={i} />
      ))}
    </section>
  );
};

function Card({ card }) {
  const { title, desc, icon } = card;

  return (
    <div className="flex items-center space-x-4 sm:mx-auto">
      {/* Icon */}
      <img src={icon} alt={title} className="h-16" />
      <div>
        {/* Title */}
        <h3 className="text-xl font-semibold">{title}</h3>
        {/* Description */}
        <p className="text-gray-800">{desc}</p>
      </div>
    </div>
  );
}
export default AboutUs;
