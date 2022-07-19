import React, { useCallback, useState } from "react";
import Box from "./component/Box";

const Callback2 = () => {
  const [size, setSzies] = useState(200);
  const [isDark, setIsDark] = useState(false);

  const createBoxStyle = useCallback(() => {
    return {
      backgroundColor: "tomato",
      width: `${size}px`,
      height: `${size}px`,
    };
  }, [size]);

  return (
    <div style={{ background: isDark ? "black" : "white" }}>
      <input
        type="number"
        value={size}
        onChange={(event) => {
          setSzies(event.target.value);
        }}
      />
      <button onClick={() => setIsDark((prev) => !prev)}>Change Theme</button>
      <Box createBoxStyle={createBoxStyle} />
    </div>
  );
};

export default Callback2;
