import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";

import "./styles/index.scss";
import HeaderWidget from "widgets/HeaderWidget/ui/HeaderWidget";
import { useColor } from "./providers/ColorProvider";
import { useTheme } from "./providers/ThemeProvider";
import { auth } from "../firebase";

const LoginPage = lazy(() => import("../pages/LoginPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));
const ContactPage = lazy(() => import("../pages/ContactPage"));
const MainPage = lazy(() => import("../pages/MainPage"));
const SettingsPage = lazy(() => import("../pages/SettingsPage"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const DashboardPage = lazy(() => import("../pages/DashboardPage"));
const NotFound = lazy(() => import("../pages/NotFound"))
const BoardsPage = lazy(() => import("../pages/BoardsPage"))

const App = () => {
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      //console.log(currentUser);
      //setUser(currentUser);
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
        <HeaderWidget handleSignOut={handleSignOut} />
        <Suspense fallback={<div><h1>Loading...</h1></div>}>
          <div className={`container ${color}`}>
            <Routes>
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/dashboard/:boardId" element={<DashboardPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/boards" element={<BoardsPage />} />
              <Route path="/" element={<MainPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
