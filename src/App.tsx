import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/molecules/navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Navbar />
        </header>
        <div className="app-body h-screen" />
      </BrowserRouter>
    </div>
  );
}

export default App;
