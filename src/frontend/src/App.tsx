import { Suspense, lazy, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { RootState } from "./store";
import { themeType } from "./types/themeTypes";
import Header from "./components/common/Header";
import {
  aboutUrl,
  baseUrl,
  projectsUrl,
  resumeUrl,
  skillsUrl,
} from "./constants/appRoutes";
import { toggleTheme } from "./redux/reducers/themeSlice";

import "./App.css";
import Loader from "./components/common/Loader";

const About = lazy(() => import("./pages/About"));
const Dashboard = lazy(() => import("./pages/dashboard"));
const Projects = lazy(() => import("./pages/Projects"));
const Skills = lazy(() => import("./pages/Skills"));
const Resume = lazy(() => import("./pages/Resume"));

function App() {
  const dispatch = useDispatch();
  const themeMode: themeType = useSelector(
    (state: RootState) => state.theme.mode
  );

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      themeMode ? themeMode : "light"
    );
  }, [themeMode]);

  const handleTheme = () => {
    dispatch(toggleTheme());
  };
  return (
    <main className="whole__page__container p-4 flex flex-col">
      <BrowserRouter>
        <Header handleTheme={handleTheme} theme={themeMode} />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path={baseUrl} element={<Dashboard />}></Route>
            <Route path={aboutUrl} element={<About />}></Route>
            <Route path={skillsUrl} element={<Skills />}></Route>
            <Route path={projectsUrl} element={<Projects />}></Route>
            <Route path={resumeUrl} element={<Resume />}></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </main>
  );
}

export default App;
