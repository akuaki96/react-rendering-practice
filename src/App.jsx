import { useCallback } from "react";
import { memo, useState } from "react";
import { Child1 } from "./components/Child1.jsx";
import { Child4 } from "./components/Child4.jsx";

export const App = memo(() => {
  console.log("Appレンダリング");

  const [num, setNum] = useState(0);

  const onClickButton = () => {
    setNum((index) => index + 1);
  };

  const onClickReset = useCallback(() => {
    setNum(0);
  }, []);
  // useCallback関数は関数のメモ化を行う。メモ化とは、値が変わってないのに再レンダリングするという無駄な処理を行わないようにすること。ここでは、Child1へのpropsが変化したと解釈してしまうのを防いでいる。（教科書171ページ）

  return (
    <>
      <button onClick={onClickButton}>カウントアップ</button>
      <p>{num}</p>
      <Child1 onClickReset={onClickReset}></Child1>
      <Child4></Child4>
    </>
  );
});
