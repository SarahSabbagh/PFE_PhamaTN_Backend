import React from "react";
import "./App.css";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme/theme";
import { CssBaseline } from "@mui/material";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import { RouterProvider } from "react-router-dom";
import i18n from "./locales/i18n";
import "react-toastify/dist/ReactToastify.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { routes } from "./routes/Routes";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <ToastContainer />
              <RouterProvider router={routes} />
            </LocalizationProvider>

            <CssBaseline />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </I18nextProvider>
  );
}

export default App;
