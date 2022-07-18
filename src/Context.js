import React, { useState } from "react";
import Page from "./component/Page";
import { ThemeContext } from "./context/ThemeContext";
import { UserContext } from "./context/UserContext";

const Context = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <UserContext.Provider value={"사용자"}>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <Page />
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
};

export default Context;

/*
 Prop Drilling : 부모 컴포넌트의 props를 (하위, 하위, 하위 ... ) 자식 컴포넌트로 전달하는 것
 컴포넌트가 많으면 많아질수록 코드가 복잡해지고 오류 발생 가능성이 높음

 context를 사용해 데이터를 공유하면 한 곳에 있는 데이터를 모든 자식 컴포넌트들에게 알려줄 수 있음 - 자식 컴포넌트들은 useContext를 사용하여 데이터를 받아옴

 - Context를 사용하면 컴포넌트를 재사용하기 어려워 질 수 있다
 - Prop drilling을 피하기 위한 목적이라면 Component Composition (컴포넌트 합성)을 먼저 고려해보자

 Provider로 감싸주지않았다면, 즉 value가 없으면 ThemeContext.js에서 인자로 넣은 초기값을 받아옴
 */
