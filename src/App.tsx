import React from "react";
import "./App.css";
import { Navbar } from "components/molecules/navbar";
import { AppRoutes } from "routes/appRoutes";

export function App() {
  const NAV_HEIGHT = 14;

  return (
    <div className="App h-screen w-screen">
      <header className="App-header">
        <Navbar height={NAV_HEIGHT} />
      </header>
      <div className={`app-body h-full pt-${NAV_HEIGHT}`}>
        <AppRoutes />
      </div>
    </div>
  );
}
