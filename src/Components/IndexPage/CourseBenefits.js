import React from "react";
import icon1 from "../../assets/course-benefits/feature-icon1.png";
import icon2 from "../../assets/course-benefits/feature-icon2.png";
import icon3 from "../../assets/course-benefits/feature-icon3.png";

const CourseBenefits = () => {
  return (
    <section className="grid lg:grid-cols-3 grid-cols-1 gap-6 max-w-6xl p-4 mx-auto ">
      {[
        {
          title: "Courses",
          desc: `There are 100+ video classes and live classes, help line.`,
          icon: icon1,
        },
        {
          title: "Earn a Certificate",
          desc: `There are three certificate benefits, the first certificate after
            completing the first two months course. The second certificate will
            be issued after six months and the third certificate after one year.`,
          icon: icon2,
        },
        {
          title: "Job",
          desc: `You can do marketing work from one month after joining the company`,
          icon: icon3,
        },
      ].map((card, i) => (
        <Card key={i} card={card} />
      ))}
    </section>
  );
};

function Card(props) {
  const { title, desc, icon } = props.card;
  return (
    <div className="bg-white px-6 py-10 rounded-md shadow-lg mx-auto flex flex-col lg:flex-row justify-center items-center h-fit gap-4 max-w-lg w-full">
      {/* Icon */}
      <img src={icon} alt={title} className="mx-auto" />

      <div>
        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Earn a Certificate
        </h2>

        {/* Description */}
        <p className="text-gray-500">{desc}</p>
      </div>
    </div>
  );
}
export default CourseBenefits;
