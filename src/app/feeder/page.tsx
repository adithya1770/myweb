"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Label } from "../components/ui/labels";
import { Input } from "../components/ui/input";
import { cn } from "../lib/utils";
import "../web.css";
import { AuroraBackground } from "../components/ui/aurora-background";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

export default function SignupFormDemo() {
  const [name, setName] = useState('');
  const [thought, setThought] = useState('');
  const [message, setMessage] = useState('');
  const [data, setData] = useState([]);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  useEffect(() => {
    const fetchInfo = async () => {
      const dataRec = await fetch("https://psadi.vercel.app/data");
      const newData = await dataRec.json();
      setData(newData);
    }
    fetchInfo();
  },[])
  const sendInfo = async () => {
    const sendObj = {
      "name": name,
      "comment": thought
    }
    const senderPost = await fetch("https://psadi.vercel.app/feedback", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sendObj)
    })
    const receive = await senderPost.json();
    setMessage(receive.message);
  }
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
    <div className="mt-48 mb-10 max-w-md w-full fira-code-500 mx-auto rounded-2xl md:rounded-2xl p-4 md:p-8 shadow-input bg-black dark:bg-black">
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Julius+Sans+One&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Prata&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Julius+Sans+One&family=Prata&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Fira+Code:wght@300..700&family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Julius+Sans+One&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Prata&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
      <h2 className="font-bold text-4xl text-white dark:text-neutral-200">
        Like my Work? Want to Connect?
      </h2>
      <p className="text-neutral-600 text-md fira-code-500 max-w-sm mt-2 dark:text-neutral-300">
        Send a message to me here! {"("}I shall personally see it{")"}
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname" className="text-white">Your Name</Label>
            <Input id="firstname" placeholder="Enter your Name!" type="text" onChange={(e) => setName(e.target.value)} />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-2">
          <Label htmlFor="text" className="text-white">Thoughts</Label>
          <Input id="text" placeholder="Enter your thoughts!" type="text" onChange={(e) => setThought(e.target.value)}/>
        </LabelInputContainer>
        <button
          className="mt-10 bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
          onClick={sendInfo}
        >
          Send
          <BottomGradient />
        </button>
      </form>
      <p className="text-white ml-1">{message}</p>
    </div>
      <InfiniteMovingCards
        items={[
          ...data.map((item: { name: string; comment: string}) => ({
            name: item.name,
            quote: item.comment,
          })),
        ]}
        direction="right"
        speed="slow"
      />
    </motion.div>
    </AuroraBackground>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
