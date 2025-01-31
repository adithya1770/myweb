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
    <div className="bg-black flex items-center justify-center">
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Julius+Sans+One&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Prata&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
      <h1 className="text-white absolute top-10 text-8xl bebas-neue-regular">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-44 gap-8">
        {data.map((item, index) => (
          <div key={index} className="flex justify-center mt-4 mb-20">
            <PinContainer title="Visit the Github Repo" href={item.repo_link}>
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[25rem]">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-3xl text-slate-100">
                  {item.repo_name}
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500">{item.repo_desc}</span>
                </div>
                <Image
                  width={200}
                  height={80}
                  alt=""
                  src={item.image1}
                  className="rounded-lg mt-2 ml-12 bg-gradient-to-br"
                />
                <Image
                  width={200}
                  height={80}
                  alt=""
                  src={item.image2}
                  className="rounded-lg mt-5 ml-12 bg-gradient-to-br"
                />
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
}

