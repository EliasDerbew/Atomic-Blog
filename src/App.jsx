import { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";

import Header from "./components/Header";
import Main from "./components/Main";
import Archive from "./components/Archive";
import Footer from "./components/Footer";

function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

export default function App() {
  const [posts, setPosts] = useState(
    Array.from({ length: 30 }, () => createRandomPost())
  );

  const [searchQuery, setSearchQuery] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode");
    },
    [isDarkMode]
  );

  return (
    <section className="flex flex-col p-20 pb-5">
      <button
        className="bg-blue-400 p-2 rounded-lg cursor-pointer btn-fake-dark-mode"
        onClick={() => setIsDarkMode((isDarkMode) => !isDarkMode)}
      >
        {isDarkMode ? "☀️" : "🌙"}
      </button>
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        posts={searchedPosts}
      />
      <Main posts={searchedPosts} />
      <Archive />
      <Footer />
    </section>
  );
}
