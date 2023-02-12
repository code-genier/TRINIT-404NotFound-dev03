import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "scenes/homePage";
import ProfilePage from "scenes/profilePage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import GeoLocation from "components/GeoLocation";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import LoginPage from "scenes/loginPage";
import Edu from "scenes/edu/Edu";
import AdvTech from "scenes/advTech";
import ChatApp from "scenes/chat/ChatApp";
import Recomd from "scenes/recomd/Recomd";
import RecmdData from "scenes/recomd/RecmdData";
import RecmdHelper from "scenes/recomd/RecmdHelper";

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className="disable-text-selection">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<LoginPage />} />
          
            <Route
              path="/home"
              element={isAuth ? <HomePage /> : <Navigate to="/" />}
            />
            <Route
              path="/recmd"
              element={isAuth ? <Recomd /> : <Navigate to="/" />}
            />

            <Route
              path="/chat"
              element={isAuth ? <ChatApp /> : <Navigate to="/" />}
            />

            <Route
              path="/location"
              element={isAuth ? <GeoLocation /> : <Navigate to="/" />}
            />
            <Route
              path="/edu"
              element={isAuth ? <Edu /> : <Navigate to="/" />}
            />
            <Route
              path="/recmdHelper"
              element={isAuth ? <RecmdHelper /> : <Navigate to="/" />}
            />
            <Route
              path="/advtech"
              element={isAuth ? <AdvTech /> : <Navigate to="/" />}
            />
            <Route
              path="/profile/:userId"
              element={isAuth ? <ProfilePage /> : <Navigate to="/" />}
            />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
