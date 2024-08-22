import React from "react";
import BreadCrumb from "../../Components/Library/BreadCrumb";
import Sidebar from "../../Components/Normal/Profile/Sidebar";
import ProfileSettings from "../../Components/Normal/Profile/ProfileSettings";
import { useSearchParams } from "react-router-dom";
import Reference from "../../Components/Normal/Profile/Reference";
import MyPassbook from "../../Components/Normal/Profile/MyPassbook";

const Profile = () => {
  const [searchParams] = useSearchParams();
  const currentTab = searchParams.get("s");

  return (
    <main className="min-h-screen  py-20 bg-gray-50">
      <header className="text-center mb-10">
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
      <section className="max-w-6xl w-full mx-auto">
        <div className="bg-white grid md:grid-cols-7 grid-cols-1">

          {/* SideBar */}
          <Sidebar
            studentName="Ahmod Hasan"
            links={[
              {
                title: "Profile",
                urlParam: "profile"
              },
              {
                title: "Reference",
                urlParam: "reference"
              },
              {
                title: "My Passbook",
                urlParam: "my-passbook"
              },
              {
                title: "Withdrawals",
                urlParam: "withdrawals"
              },
              {
                title: "Change Password",
                urlParam: "change-password"
              }
            ]} />


          {/* Pages */}
          <div className="md:col-span-5 w-full md:p-10 p-5">
            {currentTab === 'profile' ? (<ProfileSettings />) :
              currentTab === 'reference' ? (<Reference />):
              currentTab === 'my-passbook' ? (<MyPassbook />)
                : (<></>)}

          </div>
        </div>
      </section>
    </main>
  );
};

export default Profile;
