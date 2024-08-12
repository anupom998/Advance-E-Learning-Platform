import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const HomeLayout = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default HomeLayout;
