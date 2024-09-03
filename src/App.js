
import React from "react";
import {
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

// Layouts
import HomeLayout from "./Layouts/HomeLayout";
import StudentLayout from "./Layouts/StudentLayout";
import AdminLayout from "./Layouts/AdminLayout";

// useAuth
import { useAuth } from './hooks/useAuth';

// Logins
import SignUp from "./Pages/Login/SignUp";
import SignIn from "./Pages/Login/SignIn";
import AdminLogIn from "./Pages/Login/AdminLogIn";
import SubAdminLogIn from "./Pages/Login/SubAdminLogIn";

// Main pages
import HomeWork from "./Pages/Normal/HomeWork";
import AirdropEarn from "./Pages/Normal/AirdropEarn";
import MyLearning from "./Pages/Normal/MyLearning";
import Profile from "./Pages/Normal/Profile";
import VideoEarn from "./Pages/Normal/VideoEarn";

// Index pages
import IndexPage from "./Pages/IndexPage";
import ProtectedIndexPage from "./Pages/Normal/ProtectedIndexPage";

// Admin and SubAdmin's pages
import StudentList from "./Pages/StudentList";
import WithdrawRequest from "./Pages/WithdrawRequest";

const App = () => {
  const { isLoggedIn, userRole } = useAuth();

  return (
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
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/admin-login" element={<AdminLogIn />} />
          <Route path="/subadmin-login" element={<SubAdminLogIn />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </>
      ) : (
        // Protected Routes based on userRole
        <>
          {userRole === "student" && (
            <>
              <Route
                path="/"
                element={
                  <StudentLayout>
                    <ProtectedIndexPage />
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
                    <Profile />
                  </StudentLayout>
                }
              />
            </>
          )}

          {userRole === "admin" && (
            <>
              <Route
                path="/admin/students-list"
                element={
                  <AdminLayout>
                    <StudentList />
                  </AdminLayout>
                }
              />
              <Route
                path="/admin/withdraw-request"
                element={
                  <AdminLayout>
                    <WithdrawRequest />
                  </AdminLayout>
                }
              />
              <Route path="*" element={<Navigate to="/admin/students-list" replace />} />
            </>
          )}

          {userRole === "sub-admin" && (
            <>
              <Route
                path="/admin/students-list"
                element={
                  <AdminLayout>
                    <StudentList />
                  </AdminLayout>
                }
              />
              <Route
                path="/admin/withdraw-request"
                element={
                  <AdminLayout>
                    <WithdrawRequest />
                  </AdminLayout>
                }
              />
              <Route path="*" element={<Navigate to="/admin/students-list" replace />} />
            </>
          )}

          {/* Redirect unknown routes to the correct home based on role */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </>
      )}
    </Routes>
  );
};

export default App;



