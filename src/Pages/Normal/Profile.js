import React from "react";
import BreadCrumb from "../../Components/Library/BreadCrumb";

const Profile = () => {
  return (
    <main className="min-h-screen  py-20 bg-gray-50">
      <header className="text-center">
        {/* Name */}
        <h1 className="text-3xl md:text-4xl mb-5 font-semibold">Hey, {"Ahmod Hasan"} 👋</h1>

        <BreadCrumb
          links={[
            {
              pageName: "Home",
              route: "/",
            },
            {
              pageName: "Profile",
              route: "/student/profile",
              lock: true,
            },
          ]}
        />
      </header>
      <section className=" space-y-10"></section>
    </main>
  );
};

export default Profile;
