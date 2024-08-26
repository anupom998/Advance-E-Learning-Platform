import React from "react";
import MiddleSection from "../../Components/ProtectedIndexPage/MiddleSection";
import CourseBenefits from "../../Components/IndexPage/CourseBenefits";
import AboutUs from "../../Components/IndexPage/AboutUs";
import OfficeImg from "../../assets/office.png";

const ProtectedIndexPage = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
     <div className="bg-purple-light flex items-center justify-center">
  <div className="max-w-6xl w-full mx-auto px-4 pt-14 pb-20 text-white flex justify-center md:justify-end">
    <img src={OfficeImg} alt="Office" />
  </div>
</div>

      {/* Middle Section */}
      <MiddleSection />
      <section className="bg-gray-50 pb-20 space-y-10">
        <CourseBenefits />
        <AboutUs/>
      </section>
    </main>
  );
};

export default ProtectedIndexPage;
