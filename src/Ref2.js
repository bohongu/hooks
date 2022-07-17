import React, { useRef, useState } from "react";

const Ref2 = () => {
  const [renderer, setRenderer] = useState(0);
  const countRef = useRef(0);
  let countVar = 0;

  const doRendering = () => {
    setRenderer((prev) => prev + 1);
  };

  const increaseRef = () => {
    countRef.current = countRef.current + 1;
    console.log(`ref : ${countRef.current}`);
  };

  const increaseVar = () => {
    countVar = countVar + 1;
    console.log(`var : ${countVar}`);
  };

  const printReusults = () => {
    console.log(`ref : ${countRef.current}, var : ${countVar}`);
  };

  return (
    <div>
      <p>Ref : {countRef.current}</p>
      <p>Var : {countVar}</p>
      <button onClick={doRendering}>렌더!</button>
      <button onClick={increaseRef}>Ref 올리기</button>
      <button onClick={increaseVar}>Var 올리기</button>
      <button onClick={printReusults}>Ref Var값 출력</button>
    </div>
  );
};

export default Ref2;

/*
렌더링이 된다는 것 : 컴포넌트를 나태내는 함수가 다시 불린다는 것
함수가 불리면 불릴 때 마다 함수내부에 있는 변수들이 초기화가 된다
함수가 불릴 때 마다 변수 'countVar'은 초기화가 된다

BUT 'countRef'는 아무리 컴포넌트가 렌더링되어도 값을 유지한다
왜냐하면 Ref의 값은 컴포넌트의 전 생명주기를 통해 유지가 된다 ( Mount에서 Unmount까지 값을 유지 )

*/
