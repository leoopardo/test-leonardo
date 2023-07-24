import { useState } from "react";
import Spin from "../assets/Loading.svg";
import Error from "../assets/error.svg";
import Success from "../assets/success.svg";

export const Exercise2 = () => {
  const [PalindromeInput, setPalindromeInput] = useState<string>("");
  const [isPalindrome, setIsPalindrome] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const PalindromeTest = (text: string) => {
    setIsLoading(true);
    setPalindromeInput(text);
    const revertText: string = text
      .split(" ")
      .join("")
      .split("")
      .reverse()
      .join("")
      .toLowerCase();

    setIsPalindrome(
      revertText === text.split(" ").join("").split("").join("").toLowerCase()
    );

    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div id="palindrome" className="section">
      <h1>String manipulation exercise - Palindrome:</h1>
      <p className="factorial-description">
        Write a function that checks whether a word or phrase is a palindrome. A
        palindrome is a word that is read the same from left to right as from
        right to left, ignoring spaces and differentiating between case and
        emergency letters.
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "start",
        }}
      >
        <label htmlFor="input" style={{ marginRight: "10px" }}>
          Input a text:
        </label>
        <input
          value={PalindromeInput}
          className="input"
          placeholder="example: arara"
          onChange={(e) => {
            PalindromeTest(e.target.value);
          }}
        />
        {PalindromeInput && !isLoading && (
          <h3 style={{ color: isPalindrome ? "#25AE88" : "#D75A4A" }}>
            <span>{PalindromeInput}</span> {isPalindrome ? "is" : "is not"} a
            Palindrome
            <img
              src={isPalindrome ? Success : Error}
              style={{ height: "20px", marginLeft: "10px" }}
            />
          </h3>
        )}

        {isLoading && (
          <div style={{ width: "100%" }}>
            <img src={Spin} className="spin" />
          </div>
        )}
      </div>
    </div>
  );
};
