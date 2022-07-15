import React, { useState } from "react";

const heavyWork = () => {
  console.log("무거운 작업");
  return ["홍길동"];
};

const State = () => {
  const [names, setNames] = useState(() => {
    return heavyWork();
  });

  const [input, setInput] = useState("");

  const onChange = (event) => {
    const { value } = event.target;
    setInput(value);
  };

  const onClick = () => {
    setNames((prev) => {
      console.log("이전 state", prev);
      return [input, ...prev];
    });
    setInput("");
  };

  return (
    <div>
      <input type="text" value={input} onChange={onChange} />
      <button onClick={onClick}>Upload</button>
      {names.map((name, index) => (
        <p key={index}>{name}</p>
      ))}
    </div>
  );
};

export default State;

/* 
컴포넌트의 상태를 간단하게 생성하고, 업데이트하는 훅 

const[state, setState] = useState(초기값);

state가 update될 때마다 렌더링

초기값을 가져올 때 무거운 작업을 해야한다면 콜백형태로 리턴
*/
