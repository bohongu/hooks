import React, { useEffect, useState } from "react";
import Timer from "./component/Timer";

const Effect = () => {
  const [showTimer, setShowTimer] = useState(false);
  return (
    <div>
      {showTimer && <Timer />}
      <button
        onClick={() => {
          setShowTimer(!showTimer);
        }}
      >
        Toggle Timer
      </button>
    </div>
  );
};

export default Effect;

/*
useEffect 콜백 함수 뒤에 오는 배열 -> Dependency array

1. useEffect(()=> {
// 작업}) -> 렌더링 될 때 마다 실행

2. useEffect(()=> {
    // 작업
}, [value]) -> 화면에 첫 렌더링 될 때 실행 & value 값이 바뀔 때 실행 

3. useEffect(()=> {
    // 작업
}, []) -> 화면에 첫 렌더링 될 때만 실행 


Clean Up - 정리
useEffect(()=> {
    // 구독...
    return () => {
        // 구독해지
    }
}, [])

*/
