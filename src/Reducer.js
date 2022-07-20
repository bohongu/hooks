import React, { useReducer, useState } from "react";

// reducer - state를 업데이트 하는 역할 (은행)
// dispatch - state 업데이트 위한 요구
// action - 요구의 내용

const ACTION_TYPES = {
  deposit: "deposit",
  withdraw: "withdraw",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.deposit:
      return state + action.payload;
    case ACTION_TYPES.withdraw:
      return state - action.payload;
    default:
      return state;
  }
};

const Reducer = () => {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h2>useReducer 은행에 오신 것을 환영합니다.</h2>
      <p>잔고: {money}원</p>
      <input
        type="number"
        value={number}
        onChange={(event) => {
          setNumber(event.target.value);
        }}
        step="1000"
      />
      <button
        onClick={() => {
          dispatch({ type: ACTION_TYPES.deposit, payload: number });
        }}
      >
        예금
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTION_TYPES.withdraw, payload: number });
        }}
      >
        출금
      </button>
    </div>
  );
};

export default Reducer;

/*
useState처럼 state를 생성하고 관리하는 도구

여러개의 하위값을 포함하는 복잡한 state를 다뤄야할 때 useState대신 useReducer를 사용하면 코드를 훨씬 더 깔끔하게 쓸 수 있다

1. Reducer : state를 update해주는 역할
2. Dispatch
3. Action

state를 update하기 위해 'Dispatch'에 'Action'을 넣어서 'Reducer'에 전달

Dispatch(Action) => Reducer(State, Action) --> State Update! 
*/
