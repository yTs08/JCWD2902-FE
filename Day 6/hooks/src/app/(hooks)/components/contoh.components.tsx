/** @format */
"use client";
import React, { ChangeEvent, useState } from "react";

type Props = {};

export default function Contoh({}: Props) {
  const [count, setCount] = useState<number>(0);
  const [arrNumber, setArrNumber] = useState<number[]>([1, 2, 3, 4, 5]);
  let count2 = 0;

  const [number, setNumber] = useState<number>(0);
  const pushIncreaseNumber = () => {
    // setArrNumber([...arrNumber, arrNumber[arrNumber.length - 1] + 1]);
    // setArrNumber([2, 3, 4]);
    // const tmp = [...arrNumber];
    // tmp.push(tmp[tmp.length - 1] + 1);
    // setArrNumber(tmp);

    setArrNumber((prev) => [...prev, prev[prev.length - 1] + 1]);

    // console.log(arrNumber);
  };

  return (
    <center>
      <div className=" mt-6 ">
        <div className="text-xl mb-3">{count}</div>
        <div className="text-xl mb-3">{count2}</div>

        {arrNumber.map((number, key) => (
          <div key={key} className="text-xl mb-3">
            {number}
          </div>
        ))}
        <button
          className="py-3 px-16 text-white bg-black max-w"
          onClick={() => setCount(count + 1)}
        >
          Click Me
        </button>

        <button
          className="ml-3 py-3 px-16 text-white bg-black max-w"
          onClick={() => {
            count2++;
            console.log(count2);
          }}
        >
          Increase Count 2
        </button>

        <button
          className="ml-3 py-3 px-16 text-white bg-black max-w"
          onClick={pushIncreaseNumber}
        >
          Push Number
        </button>

        <div>
          <div className="text-xl mb-3">{number}</div>
          <div>
            <input
              type="text"
              className="border"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setNumber(Number(e.target.value))
              }
            />
          </div>
        </div>
      </div>
    </center>
  );
}
