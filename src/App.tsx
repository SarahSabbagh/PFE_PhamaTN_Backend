import React from "react";
import "./App.css";
import { SignIn } from "./pages/Login";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme/theme";
import { CssBaseline } from "@mui/material";
import { Register } from "./pages/Register";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";

import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import i18n from "./locales/i18n";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <Routes>
              <Route path="/" element={<Navigate to="/login" replace />} />
              <Route path="/login" element={<SignIn />} />
            </Routes>
            <Routes>
              <Route path="/register" element={<Register />} />
            </Routes>
          </Router>
        </ThemeProvider>
      </Provider>
    </I18nextProvider>
  );
}

export default App;
