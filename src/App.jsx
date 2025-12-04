import React from "react";
import NavBar from "./NavBar/NavBar"
import Hero from "./Hero/Hero";

function App() {
  return (
    <div className="page">
      <NavBar/>
      <Hero/>
      <footer className="footer">
        <p>© {new Date().getFullYear()} TrackMyBatch. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
