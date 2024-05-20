"use client";

import React, { useEffect, useState } from "react";
import { FollowerPointerCard } from "../ui/following-pointer";

export default function Follow({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState("");
  useEffect(() => {
    const getRandomQuote = async () => {
      const res: any = await fetch("https://type.fit/api/quotes");
      const data = await res.json();
      setData(data[Math.floor(Math.random() * 16 + 1)].text);
    };

    getRandomQuote();
  }, []);
  return (
    <div>
      <FollowerPointerCard children={children} title={data} />
    </div>
  );
}
