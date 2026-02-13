"use client";

import { useState } from "react";
import ProposalCard from "./components/ProposalCard";
import Celebration from "./components/Celebration";

export default function Home() {
  const [accepted, setAccepted] = useState(false);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center overflow-hidden relative">
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Floating background hearts can go here if we want extra flair */}
        <div className="absolute top-10 left-10 text-4xl opacity-20 animate-bounce">
          💖
        </div>
        <div className="absolute bottom-20 right-20 text-4xl opacity-20 animate-pulse">
          💘
        </div>
        <div className="absolute top-1/2 left-5 text-2xl opacity-10 animate-ping">
          💗
        </div>
      </div>

      <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex">
        {accepted ? (
          <Celebration />
        ) : (
          <ProposalCard onYes={() => setAccepted(true)} />
        )}
      </div>
    </main>
  );
}
