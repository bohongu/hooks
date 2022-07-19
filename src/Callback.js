import React, { useCallback, useEffect, useState } from "react";

const Callback = () => {
  const [number, setNumber] = useState(0);
  const [toggle, setToggle] = useState(true);

  const someFunction = useCallback(() => {
    console.log(`someFunc : number: ${number}`);
    return;
  }, [number]);

  useEffect(() => {
    console.log("someFunction이 변경");
  }, [someFunction]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(event) => {
          setNumber(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setToggle((prev) => !prev);
        }}
      >
        {toggle.toString()}
      </button>
      <br />
      <button onClick={someFunction}>Call someFunc</button>
    </div>
  );
};

export default Callback;

/*
useCallback(() => {
    return vaule;
}, [item])

인자로 전달한 콜백함수 그 자체를 memoization 하는 것

*/
