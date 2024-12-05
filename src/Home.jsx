import React, { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
export const Home = () => {
  const [count, setCount] = useState(0);
  const [mess, setMess] = useState("");
  const sendCount = () => {
    if (count === 5) {
      window.parent.postMessage(
        {
          type: "close",
          message: "close it",
        },
        "*"
      );
    } else {
      window.parent.postMessage(
        {
          type: "counter",
          message: count + 1,
        },
        "*"
      );
      setCount((prev) => prev + 1);
    }
  };
  const openWindow = () => {
    window.open("abc", "_self");
  };
  useEffect(() => {
    window.addEventListener("message", (message) => {
      console.log("message", message);
      if (
        message.origin.includes("https://research-iframe-parent.vercel.app")
      ) {
        alert(JSON.stringify(message.data));
      }
      setMess(JSON.stringify(message.data));
    });
  }, []);
  return (
    <>
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={sendCount}>count is {count}</button>
        <button onClick={openWindow}>open window </button>
        <p>{mess}</p>
      </div>
      <p className="read-the-docs">Click + to 5</p>
    </>
  );
};
