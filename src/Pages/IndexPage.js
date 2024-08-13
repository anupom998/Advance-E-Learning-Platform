import React from "react";
import Hero from "../Components/IndexPage/Hero";
import CourseBenefits from "../Components/IndexPage/CourseBenefits";

const IndexPage = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      <section className="bg-gray-50 min-h-screen">
        <CourseBenefits />
      </section>
    </main>
  );
};

export default IndexPage;
