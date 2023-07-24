/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Spin from "../assets/Loading.svg";
import Add from "../assets/add.svg";

export const Exercise4 = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentTask, setCurrentTask] = useState<string>("");
  const [toDoList, setToDoList] = useState<string[] | []>([]);

  const PopElement = () => {
    const popList = [...toDoList];
    popList.pop();

    setToDoList(popList);
  };

  const ShiftElement = () => {
    const popList = [...toDoList];
    popList.shift();
    setToDoList(popList);
  };

  return (
    <div id="data" className="section" style={{ backgroundColor: "#242424" }}>
      <h1>Data structure exercise - Stack:</h1>
      <p className="factorial-description">
        Implement a stack data structure in a programming language of your
        choice. Then write functions to push (push) an element, pop (pop) an
        element, and check if the stack is empty.
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "start",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "start",
            flexWrap: "wrap",
            width: "65vw",
            textAlign: "left",
          }}
        >
          <div>
            <label htmlFor="name" style={{ marginRight: "10px" }}>
              New task:
            </label>
            <div>
              <input
                value={currentTask}
                disabled={isLoading}
                name="name"
                className="input"
                id="name"
                type="text"
                placeholder="Check email"
                onChange={(e) => {
                  setCurrentTask(e.target.value);
                }}
                required
              />
              <button
                disabled={isLoading}
                onClick={() => {
                  if (!currentTask) {
                    return;
                  }
                  setIsLoading(true);
                  setToDoList((state) => [...state, currentTask]);
                  setCurrentTask("");
                  setTimeout(() => setIsLoading(false), 1000);
                }}
              >
                <img src={isLoading ? Spin : Add} style={{ height: "18px" }} />
              </button>
            </div>
            <div className="button-group">
              <button onClick={ShiftElement}>Remove first item</button>
              <button onClick={PopElement}>Remove last item</button>
            </div>
          </div>
          <div>
            <label htmlFor="name" style={{ marginRight: "10px" }}>
              To do list:
            </label>
            <ul>
              {toDoList.map((task) => (
                <li>{task}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
