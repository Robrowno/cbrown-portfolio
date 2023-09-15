import React from "react";
import Navbar from "./components/navbar";
import Home from "./components/hero";
import Rallying from "./components/rallying";
import Projects from "./components/projects";

export default function Page() {
  return (
    <main>
      <Home />
      <Rallying />
      <Projects />
    </main>
  );
}