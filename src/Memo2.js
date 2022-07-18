import React, { useEffect, useMemo, useState } from "react";

const Memo2 = () => {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  const location = useMemo(() => {
    return {
      country: isKorea ? "한국" : "외국",
    };
  }, [isKorea]);

  //   const location = {
  //     country: isKorea ? "한국" : "외국",
  //   }; // 렌더링할 때마다 객체타입들은 새로운 메모리 참조

  useEffect(() => {
    console.log("useEffect 호출");
  }, [location]); // location 안에 내용이 그대로라도 렌더링시 참조하는 메모리 주소가 계속 바뀌기 때문에 useEffect가 생각처럼 동작하지않음

  return (
    <div>
      <h2>하루에 몇끼 먹어요?</h2>
      <input
        type="number"
        value={number}
        onChange={(event) => {
          setNumber(event.target.value);
        }}
      />
      <hr />
      <h2>어느 나라에 있어요?</h2>
      <p>나라 : {location.country}</p>
      <button onClick={() => setIsKorea(!isKorea)}>비행기</button>
    </div>
  );
};

export default Memo2;
