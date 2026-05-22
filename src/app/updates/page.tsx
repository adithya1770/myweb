"use client";

import { useEffect, useState } from "react";

import Navbar from "@/components/layout/Navbar";
import Container from "@/components/layout/Container";

interface Message {
  name: string;
  comment: string;
}

export default function UpdatesPage() {
  const [name, setName] = useState("");
  const [thought, setThought] = useState("");
  const [message, setMessage] = useState("");

  const [data, setData] = useState<Message[]>([]);

  useEffect(() => {
    const fetchInfo = async () => {
      const response = await fetch("/api/data");

      const received = await response.json();

      setData(received);
    };

    fetchInfo();
  }, []);

  const sendInfo = async () => {
    const sendObj = {
      name,
      comment: thought,
    };

    const senderPost = await fetch("/api/contact", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(sendObj),
    });

    const receive = await senderPost.json();

    setMessage(receive.message);

    setName("");
    setThought("");
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      <Navbar />

      <div className="grid-background fixed inset-0 opacity-30" />

      <main className="relative z-10 pt-28 pb-32">
        <Container>
          <div className="mb-20 max-w-5xl">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />

              <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
                want to work with me?
              </p>
            </div>

            <h1
              className="
                text-5xl
                font-bold
                leading-[0.9]
                tracking-[-0.06em]
                text-white
                md:text-7xl
              "
            >
              Updates
            </h1>

            <p
              className="
                mt-8
                max-w-2xl
                text-base
                leading-relaxed
                text-neutral-400
              "
            >
              Leave a message, random thought, engineering discussion,
              appreciation, feedback, or literally anything interesting.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[420px_1fr]">
            
            <div
              className="
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.03]
                p-8
              "
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />

                <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
                  leave a message
                </p>
              </div>

              <h2 className="text-4xl font-bold text-white">
                say something
              </h2>

              <p
                className="
                  mt-4
                  text-sm
                  leading-relaxed
                  text-neutral-400
                "
              >
                messages are stored directly through the backend.
              </p>

              <div className="mt-8 space-y-6">
                
                <div>
                  <label
                    className="
                      mb-3
                      block
                      text-xs
                      uppercase
                      tracking-[0.25em]
                      text-neutral-500
                    "
                  >
                    your name
                  </label>

                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="enter your name"
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-white/10
                      bg-black/40
                      px-4
                      py-3
                      text-sm
                      text-white
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-neutral-600
                      focus:border-emerald-400/30
                    "
                  />
                </div>

                <div>
                  <label
                    className="
                      mb-3
                      block
                      text-xs
                      uppercase
                      tracking-[0.25em]
                      text-neutral-500
                    "
                  >
                    message
                  </label>

                  <textarea
                    value={thought}
                    onChange={(e) => setThought(e.target.value)}
                    placeholder="type something..."
                    rows={6}
                    className="
                      w-full
                      resize-none
                      rounded-2xl
                      border
                      border-white/10
                      bg-black/40
                      px-4
                      py-3
                      text-sm
                      text-white
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-neutral-600
                      focus:border-emerald-400/30
                    "
                  />
                </div>

                <button
                  onClick={sendInfo}
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-emerald-400/20
                    bg-emerald-400/10
                    py-3
                    text-sm
                    uppercase
                    tracking-[0.2em]
                    text-emerald-300
                    transition-all
                    duration-300
                    hover:border-emerald-400/40
                    hover:bg-emerald-400/20
                  "
                >
                  send
                </button>

                {message && (
                  <p className="text-sm text-emerald-300">
                    {message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-lg font-bold tracking-[0.25em] text-emerald-300">
                  recent messages
                </h2>

                <span className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                  live feed
                </span>
              </div>

              <div className="space-y-5">
                {data.map((item, index) => (
                  <div
                    key={index}
                    className="
                      rounded-3xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      p-6
                      transition-all
                      duration-300
                      hover:border-emerald-400/20
                    "
                  >
                    <div className="mb-5 flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-white">
                        {item.name}
                      </h3>

                      <div className="h-2 w-2 rounded-full bg-emerald-400" />
                    </div>

                    <p
                      className="
                        text-sm
                        leading-relaxed
                        text-neutral-400
                      "
                    >
                      {item.comment}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}