import React from "react";
import Footer from "../Components/Footer";
import StudentHeader from "../Components/Header/StudentHeader";

const StudentLayout = ({ children }) => {
  return (
    <main>
      <StudentHeader />
      {children}
      <Footer />
    </main>
  );
};

export default StudentLayout;