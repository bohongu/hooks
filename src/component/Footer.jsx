import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Footer = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  const [mode, setMode] = useState("Dark");
  const toggleTheme = () => {
    isDark ? setMode("Dark") : setMode("Light");
    setIsDark(!isDark);
  };
  return (
    <footer
      className="footer"
      style={{ backgroundColor: isDark ? "black" : "lightgray" }}
    >
      <button className="button" onClick={toggleTheme}>
        {mode} Mode
      </button>
    </footer>
  );
};

export default Footer;
