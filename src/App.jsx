import { useState, useEffect } from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Archive from "./components/Archive";
import Footer from "./components/Footer";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode");
    },
    [isDarkMode]
  );

  return (
    <section className="p-2">
      <button
        className="bg-blue-400 p-2 rounded-[50%] cursor-pointer btn-fake-dark-mode"
        onClick={() => setIsDarkMode((isDarkMode) => !isDarkMode)}
      >
        {isDarkMode ? "☀️" : "🌙"}
      </button>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Main />
      <Archive />
      <Footer />
    </section>
  );
}
