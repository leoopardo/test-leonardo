/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Spin from "../assets/Loading.svg";

interface FormInterface {
  email: string;
  name: string;
  subject: string;
  message: string;
}

export const Exercise3 = () => {
  const [form, setForm] = useState<FormInterface>({
    email: "",
    name: "",
    subject: "",
    message: "",
  });

  const [emails, setEmails] = useState<FormInterface[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const HandleChange = (e: any) => {
    setForm((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const HandleSubmit = (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    setEmails((state) => [...state, form]);
    setForm({
      email: "",
      name: "",
      subject: "",
      message: "",
    });
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div id="form" className="section" style={{ backgroundColor: "#2e2e2e" }}>
      <h1>Web development exercise - Contact Form:</h1>
      <p className="factorial-description">
        Create a simple web page containing a contact form with fields for name,
        email, subject and message. When submitting the form, the data must be
        validated (for example, checking that the email field has a valid
        format) and displayed in an area below the form.
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
            justifyContent: "center",
            alignItems: "start",
            flexWrap: "wrap",
            width: "80vw",
          }}
        >
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
            }}
            onSubmit={HandleSubmit}
          >
            <label htmlFor="email">Email:</label>
            <input
              value={form.email}
              style={{
                borderColor:
                  form.email &&
                  !form.email.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)
                    ? "#D75A4A"
                    : "#fff",
              }}
              name="email"
              className="input"
              id="email"
              type="email"
              placeholder="sample@gmail.com"
              onChange={HandleChange}
              required
            />
            <label htmlFor="name" style={{ marginTop: "10px" }}>
              Fullname:
            </label>
            <input
              value={form.name}
              name="name"
              className="input"
              id="name"
              type="text"
              placeholder="John Doe"
              onChange={HandleChange}
              required
            />
            <label htmlFor="subject" style={{ marginTop: "10px" }}>
              Subject:
            </label>
            <input
              value={form.subject}
              name="subject"
              className="input"
              id="subject"
              type="text"
              placeholder="Add an subject"
              onChange={HandleChange}
            />
            <label htmlFor="message" style={{ marginTop: "10px" }}>
              Message:
            </label>
            <input
              value={form.message}
              name="message"
              className="input-text-field"
              id="message"
              type="text"
              placeholder="Add an message"
              onChange={HandleChange}
              required
            />
            <button
              type="submit"
              style={{ marginTop: "10px" }}
              disabled={
                form?.email !== "" &&
                !form.email.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)
              }
            >
              Send
            </button>

            {form.email &&
              !form.email.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/) && (
                <p
                  style={{
                    maxWidth: "250px",
                    fontSize: "14px",
                    color: "#D75A4A",
                  }}
                >
                  The email entered is not valid. (valid format:
                  sample@email.com)
                </p>
              )}
          </form>

          {(!isLoading || emails.length) && (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                maxWidth: "800px",
                flexDirection: "row",
              }}
            >
              {emails?.map((email) => (
                <div className="email-box">
                  <h5 style={{ padding: 0, margin: 0 }}>- {email.subject}</h5>
                  <p style={{ padding: 0, margin: 0 }}>{email.message}</p>
                  <a style={{ padding: 0, margin: 0 }}>{email.email}</a>
                </div>
              ))}
            </div>
          )}
        </div>

        {isLoading && (
          <div style={{ width: "100%" }}>
            <img src={Spin} className="spin" />
          </div>
        )}
      </div>
    </div>
  );
};
