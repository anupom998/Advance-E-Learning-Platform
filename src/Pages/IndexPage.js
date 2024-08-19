import React from "react";
import Hero from "../Components/IndexPage/Hero";
import CourseBenefits from "../Components/IndexPage/CourseBenefits";
import AboutUs from "../Components/IndexPage/AboutUs";

const IndexPage = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      <section className="bg-gray-50 pb-20 space-y-10">
        <CourseBenefits />
        <AboutUs/>
      </section>
    </main>
  );
};

export default IndexPage;
