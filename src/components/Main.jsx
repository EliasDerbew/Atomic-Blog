import { useContext, useState } from "react";
import { PostContext } from "../App";

export default function Main() {
  return (
    <main>
      <AddFormPosts />
      <Posts />
    </main>
  );
}

function AddFormPosts() {
  const { onAddPosts } = useContext(PostContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmite = function (e) {
    e.preventDefault();
    if (!title || !body) return;
    onAddPosts({ title, body });
    setTitle("");
    setBody("");
  };

  return (
    <div>
      <form
        className="flex gap-4 w-full bg-orange-50 p-4"
        onSubmit={handleSubmite}
      >
        <input
          type="text"
          placeholder="post title ..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border-2 h-10 border-blue-400 rounded-lg p-2 flex-1 border-white bg-white "
        />
        <textarea
          placeholder="post body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="border-2 h-10 p-2 flex-2 border-white bg-white overflow-y-auto [&::-webkit-scrollbar]:hidden"
        />
        <button className="bg-orange-400 text-white p-2 rounded-lg font-display cursor-pointer hover:bg-blue-700">
          Add Post
        </button>
      </form>
    </div>
  );
}

function Posts() {
  return (
    <div>
      <List />
    </div>
  );
}

function List() {
  const { posts } = useContext(PostContext);
  return (
    <ul className="grid grid-cols-4 gap-10 mt-10">
      {posts
        .map((post, i) => (
          <li
            key={i}
            className="border-1 border-orange-100 p-2 rounded-lg cursor-pointer hover:bg-orange-50"
          >
            <h2 className="font-bold text-xl mb-2">{post.title}</h2>
            <p className="font-display">{post.body}</p>
          </li>
        ))
        .reverse()}
    </ul>
  );
}
