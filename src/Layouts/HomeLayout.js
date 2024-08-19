import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header/Header";

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
