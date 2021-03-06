import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import Login from "./Login";
import "./App.css";

function App() {
  const user = null;
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar className="sidebar" />
            <Feed className="feed" />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
