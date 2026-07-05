import React, { createContext, useState } from "react";

export const ThemeData = createContext();

const ContextAPI = (props) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme !== null ? savedTheme : "light";
  });
  return (
    <>
      <ThemeData.Provider value={[theme, setTheme]}>
        {props.children}
      </ThemeData.Provider>
    </>
  );
};

export default ContextAPI;
