/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import "../App.css";
import Spin from "../assets/Loading.svg";

export const Exercise6 = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [file, setFile] = useState<any>();

  const handleFileUpload = (event: any) => {
    setIsLoading(true);

    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = () => {
        setFile(`${reader?.result}`?.split(" ").length);
      };
    }

    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div id="file" className="section" style={{       opacity: 1,
      backgroundImage:
        "radial-gradient(#404949 1.4500000000000002px, #242424 1.4500000000000002px)",
      backgroundSize: "29px 29px", }}>
      <h1>File manipulation exercise - Word Count:</h1>
      <p className="factorial-description">
        Write a program that counts the number of words in a text file given as
        input. The program must disregard whitespace and evaluation
      </p>

      <input
        type="file"
        accept=".txt"
        onChange={handleFileUpload}
        style={{ width: "auto" }}
      />

      {file && !isLoading && (
        <h2>
          This file have <span>{file}</span> words
        </h2>
      )}

      {isLoading && (
        <div style={{ width: "100%" }}>
          <img src={Spin} className="spin" />
        </div>
      )}
    </div>
  );
};
