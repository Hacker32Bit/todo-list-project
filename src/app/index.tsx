import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "../styles/index.scss";
import HeaderWidget from "widgets/HeaderWidget";

const LoginPage = lazy(() => import("../pages/LoginPage"))
const RegisterPage = lazy(() => import("../pages/RegisterPage"))
const ContactPage = lazy(() => import("../pages/ContactPage"))
const MainPage = lazy(() => import("../pages/MainPage"))
const SettingPage = lazy(() => import("../pages/SettingPage"))
const AboutPage = lazy(() => import("../pages/AboutPage"))
const DashboardPage = lazy(() => import("../pages/DashboardPage"))

const App = () => {
  return (
    <BrowserRouter>
      <div className={`app dark`}>
        <HeaderWidget />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/setting" element={<SettingPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/" element={<MainPage />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
