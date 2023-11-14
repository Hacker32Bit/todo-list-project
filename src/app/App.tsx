import { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { onAuthStateChanged, signOut, User } from "firebase/auth";

import "./styles/index.scss";
import HeaderWidget from "widgets/HeaderWidget";
import { useColor } from "./providers/ColorProvider";
import { useTheme } from "./providers/ThemeProvider";
import SignIn from "features/SignIn";
import { auth } from "../firebase";

const LoginPage = lazy(() => import("../pages/LoginPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));
const ContactPage = lazy(() => import("../pages/ContactPage"));
const MainPage = lazy(() => import("../pages/MainPage"));
const SettingsPage = lazy(() => import("../pages/SettingsPage"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const DashboardPage = lazy(() => import("../pages/DashboardPage"));

const App = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });

    return unsubscribe;
  }, []);

  const handleSignOut = () => {
    signOut(auth).catch((err) => console.log(err));
  };

  const { theme } = useTheme();
  const { color } = useColor();

  return (
    <BrowserRouter>
      <div className={`app ${theme}`}>
        <HeaderWidget user={user} handleSignOut={handleSignOut} />
        <SignIn />
        <Suspense fallback={<h1>Loading...</h1>}>
          <div className={`container ${color}`}>
            <Routes>
              {user ? (
                <>
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/settings" element={<SettingsPage />} />
                  <Route path="/dashboard" element={<DashboardPage />} />
                  <Route path="/" element={<MainPage />} />
                </>
              ) : (
                <>
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/" element={<MainPage />} />
                </>
              )}
            </Routes>
          </div>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
