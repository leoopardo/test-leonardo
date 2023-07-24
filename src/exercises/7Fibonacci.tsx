/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import "../App.css";
import Spin from "../assets/Loading.svg";

export const Exercise7 = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [input, setInput] = useState<number>(0);
  const [fibonacciPosition, setFibonacciPosition] = useState<
    number | undefined
  >(undefined);

  const fibonacci = (n: number) => {
    setIsLoading(true);
    if (n <= 0) {
      setFibonacciPosition(0);
      setTimeout(() => setIsLoading(false), 1000);
      return 0;
    }

    if (n <= 2) {
      setFibonacciPosition(1);
      setTimeout(() => setIsLoading(false), 1000);
      return 1;
    }

    let prev = 1;
    let curr = 1;

    for (let i = 3; i <= n; i++) {
      const next = prev + curr;
      prev = curr;
      curr = next;
    }

    setFibonacciPosition(curr);
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div
      id="fibonacci"
      className="section"
      style={{ backgroundColor: "#2e2e2e" }}
    >
      <h1>Recursion exercise - Fibonacci:</h1>
      <p className="factorial-description">
        Write a function that calculates the nth number in the Fibonacci
        sequence. The Fibonacci sequence is formed by adding the two previous
        numbers, starting with 0 and 1 (or 1 and 1, depending on the initial
        order), and the first numbers in the sequence are: 0, 1, 1, 2, 3, 5, 8,
        13, ...
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <label htmlFor="input" style={{ marginRight: "10px" }}>
          Input number:
        </label>
        <input
          value={input}
          className="input-number"
          placeholder="example: 5"
          type="number"
          onChange={(e) => {
            setInput(Number(e.target.value));
            fibonacci(Number(e.target.value));
          }}
        />
      </div>
      {input !== undefined && fibonacciPosition !== undefined && !isLoading && (
        <h3>
          The <span>{input}th </span>number in the Fibonacci sequence is:{" "}
          <span>{fibonacciPosition}</span>
        </h3>
      )}

      {isLoading && (
        <div style={{ width: "100%" }}>
          <img src={Spin} className="spin" />
        </div>
      )}
    </div>
  );
};
