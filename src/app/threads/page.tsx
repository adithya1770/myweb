"use client";

import { useEffect, useState } from "react";
import Container from "@/components/layout/Container";

interface Thread {
  _id: string;
  content: string;
  weather: string | null;
  createdAt: string;
}

const WEATHER_EMOJIS: Record<string, string> = {
  sunny: "☀️", cloudy: "☁️", rainy: "🌧️", stormy: "⛈️",
  windy: "🌬️", foggy: "🌫️", snowy: "❄️", hot: "🥵",
  cold: "🥶", breezy: "🍃",
};

function formatDate(iso: string) {
  const d = new Date(iso);
  return {
    date: d.toLocaleDateString("en-US", { weekday: "short", year: "numeric", month: "short", day: "numeric" }),
    time: d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
  };
}

export default function ThreadsPage() {
  const [threads, setThreads] = useState<Thread[]>([]);
  const [loading, setLoading] = useState(true);
  const [posting, setPosting] = useState(false);
  const [content, setContent] = useState("");
  const [weather, setWeather] = useState("");
  const [secret, setSecret] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/threads")
      .then((r) => r.json())
      .then((data) => { setThreads(data); setLoading(false); });
  }, []);

  async function post() {
    if (!content.trim()) return;
    setPosting(true);
    setError("");
    const res = await fetch("/api/threads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content, weather, secret }),
    });
    if (res.ok) {
      const t = await res.json();
      setThreads((prev) => [t, ...prev]);
      setContent(""); setWeather(""); setShowForm(false);
    } else {
      const e = await res.json();
      setError(e.message || "Failed to post");
    }
    setPosting(false);
  }

  async function deleteThread(id: string) {
    await fetch("/api/threads", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, secret }),
    });
    setThreads((prev) => prev.filter((t) => t._id !== id));
  }

  return (
  <Container>
    <div className="max-w-3xl mx-auto py-24 px-6">
      <div className="mb-20">
        <p className="text-xs text-neutral-500 uppercase tracking-[0.3em] mb-4">
          personal feed
        </p>

        <h1 className="text-5xl font-bold tracking-tight text-white mb-6">
          <span className="text-neutral-500">//</span> threads
        </h1>

        <p className="text-neutral-400 text-base leading-relaxed max-w-xl">
          raw thoughts, moments, experiments, and things worth remembering.
        </p>
      </div>

      <div className="mb-16">
        {!showForm ? (
          <button
            onClick={() => setShowForm(true)}
            className="font-mono text-sm text-neutral-500 hover:text-white transition-colors"
          >
            &gt; new thought
          </button>
        ) : (
          <div className="border border-neutral-800 rounded-xl p-6 bg-neutral-950 space-y-4">
            {/* existing form code */}
          </div>
        )}
      </div>

      {loading ? (
        <p className="text-neutral-600 text-sm">loading...</p>
      ) : threads.length === 0 ? (
        <p className="text-neutral-600 text-sm">no threads yet.</p>
      ) : (
        <div className="space-y-8">
          {threads.map((t, i) => {
            const { date, time } = formatDate(t.createdAt);
            const weatherEmoji = t.weather
              ? WEATHER_EMOJIS[t.weather.toLowerCase()] || "🌡️"
              : null;

            return (
              <div
                key={t._id}
                className="group relative border-l border-neutral-800 pl-8 py-8 hover:border-neutral-600 transition-all"
              >
                <div className="absolute left-[-5px] top-9 w-2 h-2 rounded-full bg-neutral-700 group-hover:bg-neutral-400 transition-all" />

                <div className="flex items-center gap-4 mb-4 flex-wrap">
                  <span className="text-sm text-neutral-500 font-mono">
                    {date}
                  </span>

                  <span className="text-sm text-neutral-700 font-mono">
                    {time}
                  </span>

                  {weatherEmoji && (
                    <span
                      className="text-sm text-neutral-500"
                      title={t.weather || ""}
                    >
                      {weatherEmoji} {t.weather}
                    </span>
                  )}

                  <span className="text-xs text-neutral-800 font-mono ml-auto">
                    #{String(threads.length - i).padStart(3, "0")}
                  </span>
                </div>

                <p className="text-neutral-300 text-base leading-8 whitespace-pre-wrap">
                  {t.content}
                </p>

                {secret && (
                  <button
                    onClick={() => deleteThread(t._id)}
                    className="mt-4 text-xs text-neutral-700 hover:text-red-500 transition-all opacity-0 group-hover:opacity-100"
                  >
                    delete
                  </button>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  </Container>
);
}