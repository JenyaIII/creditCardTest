import React from "react";
import "./App.css";

import CardContextProvider from "./context/CardContext.js";
import CssBaseline from "@material-ui/core/CssBaseline";
import Cards from "./pages/Cards/Cards.jsx";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <CardContextProvider>
        <Cards />
      </CardContextProvider>
    </div>
  );
}

export default App;
