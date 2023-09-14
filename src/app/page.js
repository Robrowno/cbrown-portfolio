import React from "react";
import Navbar from "./components/navbar";
import Home from "./components/hero";
import Rallying from "./components/rallying";

export default function Page() {
  return (
    <main>
      <Home />
      <Rallying />
    </main>
  );
}