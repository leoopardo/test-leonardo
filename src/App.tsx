import "./App.css";
import { Exercise1 } from "./exercises/1Factorial";
import { Exercise2 } from "./exercises/2Palindrome";
import { Exercise3 } from "./exercises/3ContactForm";
import { Exercise4 } from "./exercises/4DataStructure";
import { Exercise5 } from "./exercises/5ObjectOriented";
import { Exercise6 } from "./exercises/6File";
import { Exercise7 } from "./exercises/7Fibonacci";

function App() {
  return (
    <>
      <div className="section" id="start">
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

      <ul className="floating-list">
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
      </ul>
      <button
        className="floating"
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
      >
        Start
      </button>
    </>
  );
}

export default App;
