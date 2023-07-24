import { useState } from "react";
import "../App.css";
import Spin from "../assets/Loading.svg";

export const Exercise1 = () => {
  const [factorialInput, setFactorialInput] = useState<number | undefined>(0);
  const [factorial, setFactorial] = useState<number | undefined>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const MathFactorial = (num: number) => {
    setIsLoading(true);
    const factorialNumList = [];
    setFactorialInput(num);

    if (num === 0) {
      setFactorial(0);
      return;
    }

    for (let i = num; i !== 0; i--) {
      factorialNumList.push(i);
    }

    setFactorial(
      factorialNumList.reverse().reduce((num, nextnum) => num * nextnum)
    );

    setTimeout(() => setIsLoading(false), 1000);
  };
  return (
    <div
      id="fatorial"
      className="section"
      style={{ backgroundColor: "#2e2e2e" }}
    >
      <h1>Algorithm exercise - Factorial:</h1>
      <p className="factorial-description">
        Write a function that takes a positive integer as input and returns the
        factorial of that number. For example, if the given number is 5, the
        function should return 120 (1 * 2 * 3 * 4 * 5).
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
          value={factorialInput}
          className="input-number"
          placeholder="example: 5"
          type="number"
          onChange={(e) => {
            MathFactorial(Number(e.target.value));
          }}
        />
      </div>
      {factorial !== undefined &&
        factorialInput !== undefined &&
        !isLoading && (
          <h3>
            Te factorial of <span>{factorialInput}</span> is:{" "}
            <span>{factorial}</span>
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
