/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import Add from "../assets/add.svg";

export class BankAccount extends React.Component<
  { type: "Savings Account" | "Checking Account" },
  { balance: number }
> {
  state = { balance: 0 };

  deposit = (value: number) => {
    this.setState((state) => ({ balance: state.balance + Number(value) }));
  };

  withdraw = (value: number) => {
    this.setState((state) => ({ balance: state.balance - Number(value) }));
  };

  render() {
    return (
      <div>
        <h3>
          Current balance:{" "}
          <span>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              currencyDisplay: "narrowSymbol",
            }).format(this.state.balance || 0)}
          </span>
        </h3>
        <div style={{ textAlign: "left" }}>
          <label htmlFor="deposit-value-input" style={{ marginRight: "10px" }}>
            New deposit:
          </label>
          <div>
            <input
              name="deposit-value-input"
              className="input"
              id="deposit-value-input"
              type="number"
              placeholder="$ 0,00"
              required
            />
            <button
              style={{ backgroundColor: "#25AE88", borderRadius: 2 }}
              onClick={() => {
                this.deposit(
                  (document.getElementById("deposit-value-input") as any)?.value
                );
              }}
            >
              <img src={Add} style={{ height: "18px" }} />
            </button>
          </div>
        </div>

        {this.props.type !== "Savings Account" && (
          <div style={{ textAlign: "left" }}>
            <label
              htmlFor="withdraw-value-input"
              style={{ marginRight: "10px" }}
            >
              New withdraw:
            </label>
            <div>
              <input
                name="withdraw-value-input"
                className="input"
                id="withdraw-value-input"
                type="text"
                placeholder="$ 0,00"
                required
              />
              <button
                style={{ backgroundColor: "#D75A4A", borderRadius: 2 }}
                onClick={() => {
                  this.withdraw(
                    (document.getElementById("withdraw-value-input") as any)
                      ?.value
                  );
                }}
              >
                <img src={Add} style={{ height: "18px" }} />
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export const Exercise5 = () => {
  const [accType, setAccType] = useState<
    "Savings Account" | "Checking Account"
  >("Savings Account");
  return (
    <div id="object" className="section" style={{ backgroundColor: "#2e2e2e" }}>
      <h1>Object Oriented Exercise - Bench:</h1>
      <p className="factorial-description">
        Create a "Bank Account" class with methods for depositing, withdrawing
        and checking the balance. Then create subclasses for different account
        types, such as "Savings Account" and "Checking Account", with specific
        rules for each account type.
      </p>
      <h3>
        Account type:{" "}
        <select
          onChange={(e: any) => {
            setAccType(e?.target?.value);
          }}
        >
          <option value="Savings Account">Savings Account</option>
          <option value="Checking Account">Checking Account</option>
        </select>
      </h3>
      <BankAccount type={accType} />
    </div>
  );
};
