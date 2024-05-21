"use client";

import axios from "axios";
import { FormEvent, useState } from "react";

interface contactType {
  from: string;
  subject: string;
  text: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<contactType>({
    from: "",
    text: "",
    subject: "",
  });
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const res = await axios.post("/api/contact", formData);
    console.log(res);
  }
  return (
    <div className="mx-auto w-fit mt-12">
      <form onSubmit={onSubmit}>
        <input
          type="email"
          name="from"
          placeholder="Enter your Email"
          onChange={(e: any) =>
            setFormData((prev) => {
              return {
                ...prev,
                from: e.target.value,
              };
            })
          }
        />
        <br />
        <br />
        <textarea
          name="text"
          id=""
          onChange={(e: any) =>
            setFormData((prev) => {
              return {
                ...prev,
                text: e.target.value,
              };
            })
          }
        ></textarea>
        <br />
        <br />
        <input
          type="text"
          name="subject"
          placeholder="Enter your subject"
          onChange={(e: any) =>
            setFormData((prev) => {
              return {
                ...prev,
                subject: e.target.value,
              };
            })
          }
        />
        <br />
        <br />
        <button type="submit" className="bg-white py-2 px-4">
          Submit
        </button>
      </form>
    </div>
  );
}
