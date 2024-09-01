import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header/Header";
import AdminHeader from "../Components/Header/AdminHeader";

const AdminLayout = ({ children }) => {
  return (
    <main>
      <AdminHeader />
      {children}
      <Footer />
    </main>
  );
};

export default AdminLayout;
