import { useState } from "react";
import "./App.css";
import { Exercise1 } from "./exercises/1Factorial";
import { Exercise2 } from "./exercises/2Palindrome";
import { Exercise3 } from "./exercises/3ContactForm";
import { Exercise4 } from "./exercises/4DataStructure";
import { Exercise5 } from "./exercises/5ObjectOriented";
import { Exercise6 } from "./exercises/6File";
import { Exercise7 } from "./exercises/7Fibonacci";
import ArrowUp from "./assets/arrow-up.svg";
import ArrowUpBlue from "./assets/arrow-top-blue.svg";
import ArrowDown from "./assets/arrow-down.svg";
import Github from "./assets/github.png";
import Linkedin from "./assets/linkedin.png";

function App() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <>
      <a
        style={{
          position: "absolute",
          left: "30px",
          top: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        href="https://github.com/leoopardo"
        target="_blank"
      >
        <img src={Github} style={{ height: "30px" }} />
        Github
      </a>
      <a
        style={{
          position: "absolute",
          left: "30px",
          top: "65px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        href="https://www.linkedin.com/in/leonardo-araujo-/"
        target="_blank"
      >
        <img src={Linkedin} style={{ height: "30px" }} />
        Linkedin
      </a>

      <div
        className="section"
        id="start"
        style={{
          opacity: 1,
          backgroundImage:
            "radial-gradient(#404949 1.4500000000000002px, #242424 1.4500000000000002px)",
          backgroundSize: "29px 29px",
        }}
      >
        <button className="exercise-list">
          <a href="#fatorial">1 - Algorithm exercise / Fatorial</a>
        </button>
        <button className="exercise-list">
          <a href="#palindrome">
            2 - String manipulation exercise / Palindrome
          </a>
        </button>
        <button className="exercise-list">
          <a href="#form">3 - Web development exercise / Contact Form</a>
        </button>
        <button className="exercise-list">
          <a href="#data">4 - Data structure exercise / Stack</a>
        </button>
        <button className="exercise-list">
          <a href="#object">5 - Object Oriented Exercise / Bench</a>
        </button>
        <button className="exercise-list">
          <a href="#file">6 - File manipulation exercise / Word Count</a>
        </button>
        <button className="exercise-list">
          <a href="#fibonacci">7 - Recursion exercise - Fibonacci</a>
        </button>
      </div>

      <Exercise1 />
      <Exercise2 />
      <Exercise3 />
      <Exercise4 />
      <Exercise5 />
      <Exercise6 />
      <Exercise7 />

      <ul
        className="floating-list"
        style={{ animationName: openMenu ? "showFloating" : "hideFloating" }}
      >
        <li className="floating-item">
          <a href="#fatorial">#1</a>
        </li>
        <li className="floating-item">
          <a href="#palindrome">#2</a>
        </li>
        <li className="floating-item">
          <a href="#form">#3</a>
        </li>
        <li className="floating-item">
          <a href="#data">#4</a>
        </li>
        <li className="floating-item">
          <a href="#object">#5</a>
        </li>
        <li className="floating-item">
          <a href="#file">#6</a>
        </li>
        <li className="floating-item">
          <a href="#fibonacci">#7</a>
        </li>
        <li className="floating-item">
          <a
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <img src={ArrowUpBlue} style={{ height: "12px" }} /> top
          </a>
        </li>
      </ul>
      <button
        className="floating"
        style={{ fontSize: "26px" }}
        onClick={() => {
          setOpenMenu(!openMenu);
        }}
      >
        {openMenu ? (
          <img src={ArrowDown} style={{ height: "20px" }} />
        ) : (
          <img src={ArrowUp} style={{ height: "20px" }} />
        )}
      </button>
    </>
  );
}

export default App;
