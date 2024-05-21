import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { RootState } from "./store";
import Dashboard from "./pages/dashboard";
import { themeType } from "./types/themeTypes";
import Header from "./components/common/Header";
import { baseUrl } from "./constants/appRoutes";
import { toggleTheme } from "./redux/reducers/themeSlice";

import "./App.css";

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
    <main className="whole__page__container p-4">
      <BrowserRouter>
        <Header handleTheme={handleTheme} theme={themeMode} />
        <Routes>
          <Route path={baseUrl} element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
