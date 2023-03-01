import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { FormControl, FormHelperText, Input, InputLabel } from "@mui/material";
import { bgcolor } from "@mui/system";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>login page.</p>
        <div>
          <FormControl>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">
              We ll never share your email.
            </FormHelperText>
          </FormControl>
        </div>
      </header>
    </div>
  );
}

export default App;
