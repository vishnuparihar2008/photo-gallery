import React, { useEffect, useState } from "react";
import axios from "axios";

const Feed = () => {
  const [posts, setPosts] = useState([
    {
      _id: "1",
      image:
        "https://3.bp.blogspot.com/-KrSlRqEQv30/UmZa1I6UenI/AAAAAAAAFRU/7c9WjJBjr3k/s1600/Blue-Whale-2.jpg",
      caption: "Gaurdians of the Oceans",
    },
  ]);

  useEffect(() => {
    const apiBaseUrl = import.meta.env.VITE_API_URL || "http://localhost:5173";

    axios
      .get(`${apiBaseUrl}/posts`)
      .then((res) => {
        setPosts(res.data.posts || []);
      })
      .catch((err) => {
        console.error("Failed to fetch posts:", err);
      });
  }, []);

  return (
    <section className="min-h-screen w-full bg-gray-100 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div
              key={post._id}
              className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-sm"
            >
              <img
                className="h-80 w-full object-cover"
                src={post.image}
                alt={post.caption}
              />
              <p className="px-6 py-4 text-lg font-medium text-gray-800">
                {post.caption}
              </p>
            </div>
          ))
        ) : (
          <h1 className="text-xl font-semibold text-gray-600">
            NO POSTS AVAILABLE!!
          </h1>
        )}
      </div>
    </section>
  );
};

export default Feed;
