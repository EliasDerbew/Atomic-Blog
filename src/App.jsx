import { useState, useEffect } from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Archive from "./components/Archive";
import Footer from "./components/Footer";
import { PostProvider } from "./PostProvider";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode");
    },
    [isDarkMode]
  );

  return (
    <PostProvider>
      <section className="flex flex-col p-20 pb-5 min-h-[100vh] justify-between">
        <button
          className="bg-blue-400 p-2 rounded-lg cursor-pointer btn-fake-dark-mode"
          onClick={() => setIsDarkMode((isDarkMode) => !isDarkMode)}
        >
          {isDarkMode ? "☀️" : "🌙"}
        </button>

        <div>
          <Header />
          <Main />
          <Archive />
        </div>
        <Footer />
      </section>
    </PostProvider>
  );
}
