import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "../styles/index.scss";
import HeaderWidget from "widgets/HeaderWidget";

const LoginPage = lazy(() => import("../pages/LoginPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));
const ContactPage = lazy(() => import("../pages/ContactPage"));
const MainPage = lazy(() => import("../pages/MainPage"));
const SettingsPage = lazy(() => import("../pages/SettingsPage"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const DashboardPage = lazy(() => import("../pages/DashboardPage"));

const App = () => {
  const [isLogged, setIsLogged] = useState(true);

  return (
    <BrowserRouter>
      <div className={`app light`}>
        <HeaderWidget />
        <Suspense fallback={<h1>Loading...</h1>}>
          <div className={`container purple`}>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/" element={<MainPage />} />
            </Routes>
          </div>
        </Suspense>
      </div>
    </BrowserRouter>
  ); 
};

export default App;
