"use client";
import React, { useState } from "react";
import { PinContainer } from "../components/ui/3d-pin";
import Image from "next/image";
import { useEffect } from "react";
import '../web.css'

export default function AnimatedPinDemo() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const dataReceiver = async () => {
      const fetchedData = await fetch("/projectdata");
      const receivedData = await fetchedData.json();
      setData(receivedData);
    }
    dataReceiver();
  }, [])
  return (
    <div className="h-screen bg-black w-screen flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-10 gap-8">
        {data.map((item, index) => (
          <div key={index} className="flex justify-center">
            <PinContainer title="Visit the Github Repo" href={item.repo_link}>
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-3xl text-slate-100">
                  {item.repo_name}
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500">{item.repo_desc}</span>
                </div>
                <Image
                  width={150}
                  height={50}
                  alt=""
                  src={item.image1}
                  className="rounded-lg mt-2 ml-14 bg-gradient-to-br"
                />
                <Image
                  width={150}
                  height={50}
                  alt=""
                  src={item.image2}
                  className="rounded-lg mt-5 ml-14 bg-gradient-to-br"
                />
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
}

