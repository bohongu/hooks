import React, { useMemo, useState } from "react";

const hardCalculate = (number) => {
  console.log("어려운계산");
  for (let i = 0; i < 999999999; i++) {}
  return number + 10000;
};

const easyCalculate = (number) => {
  console.log("쉬운계산");
  return number + 1;
};

const Memo = () => {
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);
  //const hardSum = hardCalculate(hardNumber);

  const hardSum = useMemo(() => {
    return hardCalculate(hardNumber);
  }, [hardNumber]); //hardNumber가 바뀔 때만 hardCalculate함수 호출

  const easySum = easyCalculate(easyNumber);
  return (
    <div>
      <h2>어려운 계산</h2>
      <input
        type="number"
        value={hardNumber}
        onChange={(event) => setHardNumber(parseInt(event.target.value))}
      />
      <span> + 10000 = {hardSum}</span>
      <h2>쉬운 계산</h2>
      <input
        type="number"
        value={easyNumber}
        onChange={(event) => setEasyNumber(parseInt(event.target.value))}
      />
      <span> + 1 = {easySum}</span>
    </div>
  );
};

export default Memo;

/*
컴포넌트 최적화를 위해 사용(useMemo, useCallback)
use'Memo' = Memoization : 자주 필요한 값을 맨 처음 계산할 때 캐싱을 해둬서 그 값을 필요할 때 마다 다시 계산하는 것이 아니라 필요할 때마다 꺼내서 사용

함수형 컴포넌트 = 함수
함수형 컴포넌트 렌더링 => 함수가 호출 => 모든 내부 변수 초기화

렌더링 => Component 함수 호출, Memoization => 리렌더링 => Component 함수 호출, Memoize된 값을 재사용

const value = useMemo(() => {
     return calculate()
}, [item]);

useMemo 첫 번째 인자 : 콜백함수 - Memoization 해 줄 값을 계산해서 리턴해주는 함수
useMemo 두 번째 인자 : 의존성 배열 - 배열 요소의 값이 업데이트 될 때만 콜백함수를 호출해서 memoization된 값을 업데이트해서 다시 memoization을 함



*/
