import React, { useEffect, useRef, useState } from "react";

const Ref3 = () => {
  const [count, setCount] = useState(1);
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    console.log("렌더링 수: ", renderCount.current);
  });
  return (
    <div>
      <p>Count : {count}</p>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Count 올리기
      </button>
    </div>
  );
};

export default Ref3;
