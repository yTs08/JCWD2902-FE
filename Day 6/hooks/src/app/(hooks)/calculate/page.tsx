/** @format */
"use client";
import React, {
  ChangeEvent,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

type Props = {};

export default function Page({}: Props) {
  const [number1, setNumber1] = useState<number>(0);
  const [number2, setNumber2] = useState<number>(0);
  const [number3, setNumber3] = useState<number>(0);
  const [isNumber2, setIsNumber2] = useState<string>("");

  const [result, setResult] = useState<number>(0);

  const operation = useCallback(
    (operator: string) => {
      console.log(number1, number2);

      switch (operator) {
        case "+":
          setResult(number1 + number2);
          break;
        case "-":
          setResult(number1 - number2);
          break;
        case "*":
          setResult(number1 * number2);
          break;
        case "/":
          setResult(number1 / number2);
          break;
      }
    },
    [number1, number2]
  );

  useEffect(() => {
    setResult(30);
    // console.log(number1);
  }, []); //component did mount // init fetching

  //   useEffect(() => {
  //     console.log("dor");
  //   }); //component will unmount, ga dipake di function component

  useEffect(() => {
    // console.log(number1, number2);
    // console.log(result);
    if (isNaN(result)) setIsNumber2("bukan angka");
    else setIsNumber2("ini angka");
  }, [result]); //component did update

  useEffect(() => {
    return () => {
      //   console.log("byee");
      //   confirm("yakin bro?");
    };
  }, []); //component will unmount

  const isNumber = useMemo(() => {
    if (isNaN(result)) return "bukan angka";
    return "ini angka";
  }, [result]);

  //   componentDidMount = component berhasil dirender
  //   componentWillMount = component akan dirender
  //   componentDidUpdate = terjadi perubahan state di dalam component
  //   componentWillUnmount = component meninggalkan web

  return (
    <div className="flex flex-col gap-3 max-w-48 m-auto mt-8 ">
      <input
        // type="number"
        className="border p-2 "
        name=""
        id=""
        placeholder="number 1"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setNumber1(Number(e.target.value))
        }
      />
      <input
        // type="number"
        className="border p-2 "
        name=""
        id=""
        placeholder="number 2"
        onChange={(e) => setNumber2(Number(e.target.value))}
      />

      <input
        // type="number"
        className="border p-2 "
        name=""
        id=""
        placeholder="number 3"
        onChange={(e) => setNumber3(Number(e.target.value))}
      />

      <MemoItem operation={operation} />

      <b className=" text-center">{result}</b>
      <b className=" text-center">{isNumber}</b>
    </div>
  );
}

type Props2 = {
  operation: (operator: string) => void;
};

export function Item({ operation }: Props2) {
  console.log("hello");

  return (
    <div className="flex gap-2 justify-center  text-white">
      <button className="p-4 bg-black " onClick={() => operation("+")}>
        +
      </button>
      <button className="p-4  bg-black" onClick={() => operation("-")}>
        -
      </button>
      <button className="p-4  bg-black" onClick={() => operation("*")}>
        *
      </button>
      <button className="p-4  bg-black" onClick={() => operation("/")}>
        /
      </button>
    </div>
  );
}
const MemoItem = memo(Item);
