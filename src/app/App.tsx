import { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { onAuthStateChanged, signOut, User } from "firebase/auth";

import "./styles/index.scss";
import HeaderWidget from "widgets/HeaderWidget/ui/HeaderWidget";
import { useColor } from "./providers/ColorProvider";
import { useTheme } from "./providers/ThemeProvider";
import { auth } from "../firebase";
import { ItemsProps } from "pages/DashboardPage/ui/DashboardPage.interface";

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
  const items: ItemsProps[] = [
    {
      id: 1,
      mainTitle: "Tasks",
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
                  id: 2,
                  author: "Artur",
                  message: "Some reply coment",
                  date: new Date("2023-11-4"),
                },
                {
                  id: 3,
                  author: "Pogos",
                  message: "Some second reply coment",
                  date: new Date("2023-11-4"),
                },
              ],
            },
            {
              id: 4,
              author: "Artur",
              message: "Some coment",
              date: new Date("2023-11-4"),
              reply: [
                {
                  id: 5,
                  author: "Artur",
                  message: "Some reply coment",
                  date: new Date("2023-11-4"),
                },
                {
                  id: 6,
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
              id: 7,
              author: "Artur",
              message: "Some coment",
              date: new Date("2023-11-4"),
              reply: [
                {
                  id: 8,
                  author: "Artur",
                  message: "Some reply coment",
                  date: new Date("2023-11-4"),
                },
                {
                  id: 9,
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
      mainTitle: "In progress",
      author: "Gektor",
      date: new Date("2023-10-4"),
      tasks: [
        {
          id: 3,
          title: "Task title 3",
          description: "Some long description text",
          author: "Artur",
          date: new Date("2023-11-4"),
          comments: [
            {
              id: 10,
              author: "Artur",
              message: "Some coment",
              date: new Date("2023-11-4"),
              reply: [
                {
                  id: 11,
                  author: "Artur",
                  message: "Some reply coment",
                  date: new Date("2023-11-4"),
                },
                {
                  id: 12,
                  author: "Pogos",
                  message: "Some second reply coment",
                  date: new Date("2023-11-4"),
                },
              ],
            },
          ],
        },
        {
          id: 4,
          title: "Task title 4",
          description: "Some long description text",
          author: "Artur",
          date: new Date("2023-11-4"),
          comments: [
            {
              id: 13,
              author: "Artur",
              message: "Some coment",
              date: new Date("2023-11-4"),
              reply: [
                {
                  id: 14,
                  author: "Artur",
                  message: "Some reply coment",
                  date: new Date("2023-11-4"),
                },
                {
                  id: 15,
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
      mainTitle: "Done",
      author: "Pogos",
      date: new Date("2023-11-2"),
      tasks: [
        {
          id: 5,
          title: "Task title 5",
          description: "Some long description text 3",
          author: "Artur",
          date: new Date("2023-11-4"),
          comments: [
            {
              id: 16,
              author: "Artur",
              message: "Some coment",
              date: new Date("2023-11-4"),
              reply: [
                {
                  id: 17,
                  author: "Artur",
                  message: "Some reply coment",
                  date: new Date("2023-11-4"),
                },
                {
                  id: 18,
                  author: "Pogos",
                  message: "Some second reply coment",
                  date: new Date("2023-11-4"),
                },
              ],
            },
          ],
        },
        {
          id: 6,
          title: "Task title 6",
          description: "Some long description text 4",
          author: "Artur",
          date: new Date("2023-11-4"),
          comments: [
            {
              id: 19,
              author: "Artur",
              message: "Some coment",
              date: new Date("2023-11-4"),
              reply: [
                {
                  id: 20,
                  author: "Artur",
                  message: "Some reply coment",
                  date: new Date("2023-11-4"),
                },
                {
                  id: 21,
                  author: "Pogos",
                  message: "Some second reply coment",
                  date: new Date("2023-11-4"),
                },
              ],
            },
          ],
        },
        {
          id: 7,
          title: "Task title 7",
          description: "Some long description text 4",
          author: "Artur",
          date: new Date("2023-11-4"),
          comments: [
            {
              id: 22,
              author: "Artur",
              message: "Some coment",
              date: new Date("2023-11-4"),
              reply: [
                {
                  id: 23,
                  author: "Artur",
                  message: "Some reply coment",
                  date: new Date("2023-11-4"),
                },
                {
                  id: 24,
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

  const [user, setUser] = useState<User | null>(null);
  const [itemsState, setItemsState] = useState<ItemsProps[]>(items)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      //console.log(currentUser);
      setUser(currentUser);
    });

    return unsubscribe;
  }, [setUser]);

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
              <Route path="/dashboard/:boardId" element={<DashboardPage user={user} items={itemsState} setItemsState={setItemsState}/>} />
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
