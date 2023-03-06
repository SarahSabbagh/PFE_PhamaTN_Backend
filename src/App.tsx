import React from "react";
import "./App.css";
import { SignIn } from "./pages/Login";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme/theme";
import { CssBaseline } from "@mui/material";
import { Register } from "./pages/Register";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <CssBaseline />
          <SignIn />
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
