import React, { useRef, useState } from "react";

const Ref = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const increaseCountState = () => {
    setCount((prev) => prev + 1);
  };

  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
    console.log(`Ref : ${countRef.current}`);
  };

  return (
    <div>
      <p>State: {count}</p>
      <p>Ref : {countRef.current}</p>
      <button onClick={increaseCountState}>State 올리기</button>
      <button onClick={increaseCountRef}>Ref 올리기</button>
    </div>
  );
};

export default Ref;

/*
useRef 사용
1. 저장공간 & 변경 시 렌더링을 발생시키지 말아야 할 상황 : Ref의 변화 -> No 렌더링 -> 변수들의 값이 유지됨 (useState의 경우 : State의 변화 -> 렌더링 -> 컴포넌트 내부 변수들 초기화)
2. DOM 요소에 접근 : ex) document.querySelector() (Vanilla JS)

const ref = useRef(value)
ref -> {current: value}

*/
