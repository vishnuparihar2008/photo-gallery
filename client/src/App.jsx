import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from './pages/Create'
import Feed from './pages/Feed'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/create-post" element={<Create />} />
        <Route path="/feed" element={<Feed />} />

        <Route path="*" element={<Create />} />
      </Routes>
    </>
  );
};

export default App;
