import { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { onAuthStateChanged, signOut, User } from "firebase/auth";

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

const App = () => {
  const [user, setUser] = useState<User | null>(null);

  const items = [
    {
      id: 1,
      mainTitle: "Title 1",
      author: "Artur",
      date: new Date("2023-11-4"),
      tasks: [
        {
          id: 1,
          title: "Task title 1",
          description: "Some long description text 1",
          author: "Artur",
          date: new Date("2023-11-4"),
          comments: [
            {
              id: 1,
              author: "Artur",
              message: "Some coment",
              date: new Date("2023-11-4"),
              reply: [
                {
                  id: 1,
                  author: "Artur",
                  message: "Some reply coment",
                  date: new Date("2023-11-4"),
                },
                {
                  id: 2,
                  author: "Pogos",
                  message: "Some second reply coment",
                  date: new Date("2023-11-4"),
                },
              ],
            },
            {
              id: 2,
              author: "Artur",
              message: "Some coment",
              date: new Date("2023-11-4"),
              reply: [
                {
                  id: 1,
                  author: "Artur",
                  message: "Some reply coment",
                  date: new Date("2023-11-4"),
                },
                {
                  id: 2,
                  author: "Pogos",
                  message: "Some second reply coment",
                  date: new Date("2023-11-4"),
                },
              ],
            },
          ],
        },
        {
          id: 2,
          title: "Task title 2",
          description: "Some long description text 2",
          author: "Artur",
          date: new Date("2023-11-4"),
          comments: [
            {
              id: 1,
              author: "Artur",
              message: "Some coment",
              date: new Date("2023-11-4"),
              reply: [
                {
                  id: 1,
                  author: "Artur",
                  message: "Some reply coment",
                  date: new Date("2023-11-4"),
                },
                {
                  id: 2,
                  author: "Pogos",
                  message: "Some second reply coment",
                  date: new Date("2023-11-4"),
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      mainTitle: "Title 2",
      author: "Gektor",
      date: new Date("2023-10-4"),
      tasks: [
        {
          id: 1,
          title: "Task title 1",
          description: "Some long description text",
          author: "Artur",
          date: new Date("2023-11-4"),
          comments: [
            {
              id: 1,
              author: "Artur",
              message: "Some coment",
              date: new Date("2023-11-4"),
              reply: [
                {
                  id: 1,
                  author: "Artur",
                  message: "Some reply coment",
                  date: new Date("2023-11-4"),
                },
                {
                  id: 2,
                  author: "Pogos",
                  message: "Some second reply coment",
                  date: new Date("2023-11-4"),
                },
              ],
            },
          ],
        },
        {
          id: 2,
          title: "Task title 2",
          description: "Some long description text",
          author: "Artur",
          date: new Date("2023-11-4"),
          comments: [
            {
              id: 1,
              author: "Artur",
              message: "Some coment",
              date: new Date("2023-11-4"),
              reply: [
                {
                  id: 1,
                  author: "Artur",
                  message: "Some reply coment",
                  date: new Date("2023-11-4"),
                },
                {
                  id: 2,
                  author: "Pogos",
                  message: "Some second reply coment",
                  date: new Date("2023-11-4"),
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 3,
      mainTitle: "Title 3",
      author: "Pogos",
      date: new Date("2023-11-2"),
      tasks: [
        {
          id: 1,
          title: "Task title 1",
          description: "Some long description text 3",
          author: "Artur",
          date: new Date("2023-11-4"),
          comments: [
            {
              id: 1,
              author: "Artur",
              message: "Some coment",
              date: new Date("2023-11-4"),
              reply: [
                {
                  id: 1,
                  author: "Artur",
                  message: "Some reply coment",
                  date: new Date("2023-11-4"),
                },
                {
                  id: 2,
                  author: "Pogos",
                  message: "Some second reply coment",
                  date: new Date("2023-11-4"),
                },
              ],
            },
          ],
        },
        {
          id: 2,
          title: "Task title 2",
          description: "Some long description text 4",
          author: "Artur",
          date: new Date("2023-11-4"),
          comments: [
            {
              id: 1,
              author: "Artur",
              message: "Some coment",
              date: new Date("2023-11-4"),
              reply: [
                {
                  id: 1,
                  author: "Artur",
                  message: "Some reply coment",
                  date: new Date("2023-11-4"),
                },
                {
                  id: 2,
                  author: "Pogos",
                  message: "Some second reply coment",
                  date: new Date("2023-11-4"),
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      //console.log(currentUser);
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
        <Suspense fallback={<h1>Loading...</h1>}>
          <div className={`container ${color}`}>
            <Routes>
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/dashboard" element={<DashboardPage items={items}/>} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/" element={<MainPage />} />
            </Routes>
          </div>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
