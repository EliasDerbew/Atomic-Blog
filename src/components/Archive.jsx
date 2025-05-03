import { useState } from "react";
import { faker } from "@faker-js/faker";

function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

export default function Archive() {
  const [posts] = useState(() =>
    Array.from({ length: 200 }, () => createRandomPost())
  );
  const [showArchive, setShowArchive] = useState(false);
  return (
    <div className="m-10">
      <aside>
        <h1 className="font-title text-3xl text-blue-700 mb-3">
          Archived Posts
        </h1>
        <button
          className="bg-slate-800 p-2 rounded-lg font-display text-white hover:bg-slate-700 cursor-pointer"
          onClick={() => setShowArchive((showArchive) => !showArchive)}
        >
          {showArchive ? "Hide archive posts" : "Show archive posts"}
        </button>

        {showArchive && (
          <ul>
            {posts.map((post, i) => (
              <li
                key={i}
                className="flex gap-3 justify-between border-b-1 mb-4 p-1 font-display"
              >
                <p>
                  <strong>{post.title}</strong> {post.body}
                </p>

                <button className="bg-orange-300 rounded-lg pl-4 pr-4 cursor-pointer hover:bg-orange-400 font-display">
                  Add as new post
                </button>
              </li>
            ))}
          </ul>
        )}
      </aside>
    </div>
  );
}
