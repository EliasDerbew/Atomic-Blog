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

  // search functionality
  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  // Adding new blog post
  function handleAddPosts(post) {
    setPosts((posts) => [...posts, post]);
  }

  //clear all the blog post
  function handleClear() {
    setPosts([]);
  }
  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode");
    },
    [isDarkMode]
  );

  return (
    <section className="flex flex-col p-20 pb-5 min-h-[100vh] justify-between">
      <button
        className="bg-blue-400 p-2 rounded-lg cursor-pointer btn-fake-dark-mode"
        onClick={() => setIsDarkMode((isDarkMode) => !isDarkMode)}
      >
        {isDarkMode ? "☀️" : "🌙"}
      </button>

      <div>
        <Header
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          posts={searchedPosts}
          onHandleClear={handleClear}
        />
        <Main posts={searchedPosts} onAddPosts={handleAddPosts} />
        <Archive onAddPosts={handleAddPosts} />
      </div>
      <Footer />
    </section>
  );
}
