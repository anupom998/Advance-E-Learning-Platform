import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header/Header";

const AdminLayout = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default AdminLayout;
