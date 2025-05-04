import { useContext } from "react";
import { PostContext } from "../PostProvider";

export default function Header() {
  // consuming the context value
  const { onHandleClear } = useContext(PostContext);
  return (
    <header className="flex justify-between mb-10">
      <h1 className="font-title text-4xl">
        <span>⚛️</span> The Atomic Blog
      </h1>

      <div className="flex gap-4 items-center font-display">
        <Result />
        <SearchPosts />
        <button
          className="bg-orange-400 text-white p-2 rounded-lg hover:bg-blue-700 active:bg-blue-700 cursor-pointer"
          onClick={() => onHandleClear()}
        >
          Clear Posts
        </button>
      </div>
    </header>
  );
}

function Result() {
  const { posts } = useContext(PostContext);
  return (
    <div>
      <p>{posts.length} atomic blog has been found</p>
    </div>
  );
}

function SearchPosts() {
  //consuming context
  const { searchQuery, setSearchQuery } = useContext(PostContext);
  return (
    <div>
      <input
        type="text"
        className="border-2 rounded-lg h-8 border-blue-400 w-80 pl-3 active:border-blue-400 focus:border-blue-400"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}
