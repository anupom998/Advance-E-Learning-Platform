import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
// layouts
import HomeLayout from "./Layouts/HomeLayout";
import StudentLayout from "./Layouts/StudentLayout";

// logins
import SignUp from "./Pages/Login/SignUp";
import SignIn from "./Pages/Login/SignIn"
import AdminLogIn from "./Pages/Login/AdminLogIn"
import SubAdminLogIn from "./Pages/Login/SubAdminLogIn"

// main pages
import HomeWork from "./Pages/Normal/HomeWork";
import AirdropEarn from "./Pages/Normal/AirdropEarn";
import MyLearning from "./Pages/Normal/MyLearning"
import Profile from "./Pages/Normal/Profile"
import VideoEarn from "./Pages/Normal/VideoEarn"
import useAuth from "./Hooks/useAuth.js";
import IndexPage from "./Pages/IndexPage";


const App = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Router>
      <Routes>
        {/* Public Routes - HomeLayout */}
        {!isLoggedIn ? (
          <>
          <Route
            path="/"
            element={
              <HomeLayout>
                <IndexPage />
              </HomeLayout>
            }
          />
          <Route
            path="/sign-up"
            element={
              
                <SignUp />
             
            }
          />
          <Route
            path="/login"
            element={
              
                <SignIn />
              
            }
          />
          <Route
            path="/admin-login"
            element={
              
                <AdminLogIn />
              
            }
          />
          <Route
            path="/subadmin-login"
            element={
              
                <SubAdminLogIn />
              
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </>
        ) : (
          // Protected Routes - StudentLayout
          <>
          <Route
            path="/"
            element={
              <StudentLayout>
                <IndexPage />
              </StudentLayout>
            }
          />
          <Route
            path="/student/course"
            element={
              <StudentLayout>
                <MyLearning />
              </StudentLayout>
            }
          />
          <Route
            path="/student/my-homeworks"
            element={
              <StudentLayout>
                <HomeWork />
              </StudentLayout>
            }
          />
          <Route
            path="/student/my-earnings"
            element={
              <StudentLayout>
                <VideoEarn />
              </StudentLayout>
            }
          />
          <Route
            path="/student/airdrop-earn"
            element={
              <StudentLayout>
                <AirdropEarn />
              </StudentLayout>
            }
          />
          <Route
            path="/student/profile"
            element={
              <StudentLayout>
                <Profile/>
              </StudentLayout>
            }
          />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
