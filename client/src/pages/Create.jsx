import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const apiBaseUrl = import.meta.env.VITE_API_URL || "http://localhost:5173";

    try {
      const res = await axios.post(`${apiBaseUrl}/create-post`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(res);
      navigate("/feed");
    } catch (error) {
      console.error("Failed to create post:", error);
    }
  };

  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center bg-gray-100 px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="mb-6 text-2xl font-semibold text-gray-800">Create Post</h1>

      <form className="flex w-full max-w-3xl flex-col gap-4 rounded-2xl bg-white p-6 shadow-sm sm:p-8 md:p-10" onSubmit={handleSubmit}>
        <input
          className="w-full rounded-xl border border-gray-300 p-3 file:mr-4 file:rounded-full file:border-0 file:bg-lime-400 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-gray-900 hover:file:bg-lime-500"
          type="file"
          name="image"
          accept="image/*"
        />
        <textarea
          className="min-h-32 w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-lime-400 focus:ring-2 focus:ring-lime-200"
          name="caption"
          placeholder="Write a caption..."
        ></textarea>
        <button
          className="w-fit rounded-full bg-lime-400 px-6 py-3 font-semibold text-gray-900 transition hover:bg-lime-500"
          type="submit"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Create;
