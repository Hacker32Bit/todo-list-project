import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./styles/index.scss";
import HeaderWidget from "widgets/HeaderWidget";
import { useColor } from "./providers/ColorProvider";
import { useTheme } from "./providers/ThemeProvider";

const LoginPage = lazy(() => import("../pages/LoginPage/ui/LoginPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage/ui/RegisterPage"));
const ContactPage = lazy(() => import("../pages/ContactPage/ui/ContactPage"));
const MainPage = lazy(() => import("../pages/MainPage/ui/MainPage"));
const SettingsPage = lazy(() => import("../pages/SettingsPage/ui/SettingsPage"));
const AboutPage = lazy(() => import("../pages/AboutPage/ui/AboutPage"));
const DashboardPage = lazy(() => import("../pages/DashboardPage/ui/DashboardPage"));

const App = () => {
  const [isLogged, setIsLogged] = useState(false);

  const {theme} = useTheme()
  const {color} = useColor()

  return (
    <BrowserRouter>
      <div className={`app ${theme}`}>
        <HeaderWidget />
        <Suspense fallback={<h1>Loading...</h1>}>
          <div className={`container ${color}`}>
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
