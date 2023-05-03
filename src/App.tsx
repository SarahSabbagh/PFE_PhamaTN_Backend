import React from "react";
import "./App.css";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme/theme";
import { CssBaseline } from "@mui/material";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import { RouterProvider } from "react-router-dom";
import i18n from "./locales/i18n";
<<<<<<< Updated upstream
import { routes } from "./routes/Routes";
=======
import { Routes } from "./routes/routes";
import { ToastProvider } from "react-toast-notifications";
>>>>>>> Stashed changes

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
<<<<<<< Updated upstream
          <RouterProvider router={routes} />
          <CssBaseline />
=======
          <ToastProvider>
            <RouterProvider router={Routes} />
            <CssBaseline />
          </ToastProvider>
>>>>>>> Stashed changes
        </ThemeProvider>
      </Provider>
    </I18nextProvider>
  );
}

export default App;
