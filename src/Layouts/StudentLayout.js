import React from "react";
import Footer from "../Components/Footer";
import StudentHeader from "../Components/Header/StudentHeader";

const HomeLayout = ({ children }) => {
  return (
    <main>
      <StudentHeader />
      {children}
      <Footer />
    </main>
  );
};

export default HomeLayout;
