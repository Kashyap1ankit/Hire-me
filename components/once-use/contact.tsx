"use client";

import axios from "axios";
import { useForm } from "react-hook-form";
import TextComp from "../re-use/text";
import Link from "next/link";
import { useState } from "react";

interface contactType {
  from: string;
  subject: string;
  text: string;
}

export default function Contact() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<contactType>();

  async function onSubmit(data: contactType) {
    setLoading(true);
    try {
      const res = await axios.post(`/api/contact`, data);

      if (res.status === 200) {
        console.log("done");
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="xsm:m-4 lg:mx-48 lg:mt-2 lg:w-1/2 xl:w-1/3 xl:m-0 xl:top-4 xl:left-1/3 py-2 px-8 bg-white shadow-md relative rounded-md">
      {success && (
        <div className="bg-white text-center text-black p-4 fixed bottom-12 left-4 rounded-md text-green-500 font-bold">
          Thanks for Contacting
        </div>
      )}

      {error && (
        <div className="bg-white text-center text-black p-4 fixed bottom-12 left-4 rounded-md text-rose-900 font-bold">
          Error
        </div>
      )}
      <TextComp
        text="Connect With Me !"
        className="mb-12 text-center font-bold xl:text-4xl xsm:text-2xl font-Inter"
      />

      {/* Actual Form  */}

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          className="border-2 rounded-md border-gray p-2 xsm:p-1 w-full mb-4"
          placeholder="Your Email"
          {...register("from", { required: true })}
        />
        {errors.from && <span>This field is required</span>}
        <input
          type="text"
          className="border-2 rounded-md border-gray p-2 xsm:p-1 w-full mb-4"
          placeholder="Subject"
          {...register("subject", { required: true })}
        />
        {errors.subject && <span>This field is required</span>}
        <textarea
          rows={5}
          className="border-2 rounded-md border-gray p-2 xsm:p-1 w-full mb-4 resize-none"
          placeholder="Your Message"
          {...register("text", { required: true })}
        ></textarea>
        {errors.text && <span>This field is required</span>}
        {loading ? (
          <button
            className="w-full bg-black mt-4 text-center text-white p-2 mb-2 rounded-md"
            disabled
          >
            Loading...
          </button>
        ) : (
          <button
            type="submit"
            className="w-full bg-black mt-4 text-center text-white p-2 mb-2 rounded-md"
          >
            Submit
          </button>
        )}

        <Link href="/">
          <TextComp text="Go Back" className="text-gray-500 mt-4 text-center" />
        </Link>
      </form>
    </div>
  );
}
