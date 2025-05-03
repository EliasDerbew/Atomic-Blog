import { useState, useEffect, createContext } from "react";
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

// 1) create a new context
export const PostContext = createContext();

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
    // 2) provide value to the child components
    <PostContext.Provider
      value={{
        // contain all the data that we want to access by the child components
        posts: searchedPosts,
        onAddPosts: handleAddPosts,
        onHandleClear: handleClear,
        searchQuery,
        setSearchQuery,
      }}
    >
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
    </PostContext.Provider>
  );
}
