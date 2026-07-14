"use client";

import { useState } from "react";
import { getRandomFortune, type Fortune } from "@/lib/fortunes";

export default function FortuneCard() {
  const [fortune, setFortune] = useState<Fortune | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);

  function handleDraw() {
    if (isFlipped) {
      setIsFlipped(false);
      setTimeout(() => {
        setFortune(getRandomFortune());
        setIsFlipped(true);
      }, 400);
    } else {
      setFortune(getRandomFortune());
      setIsFlipped(true);
    }
  }

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="card-scene h-[30rem] w-72 sm:h-[32rem] sm:w-80">
        <button
          type="button"
          onClick={handleDraw}
          aria-label="카드를 눌러 오늘의 운세 보기"
          className={`card-flipper relative h-full w-full cursor-pointer rounded-[1.75rem] text-left focus:outline-none ${
            isFlipped ? "is-flipped" : ""
          }`}
        >
          {/* Front face */}
          <div className="card-face card-glow absolute inset-0 flex flex-col items-center justify-center gap-5 overflow-hidden rounded-[1.75rem] border border-amber-300/40 bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-950 p-6">
            <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(circle_at_20%_20%,rgba(255,215,120,0.35),transparent_40%),radial-gradient(circle_at_80%_75%,rgba(180,120,255,0.35),transparent_45%)]" />
            <span className="sparkle text-5xl drop-shadow-[0_0_12px_rgba(255,220,140,0.8)]">
              ✨
            </span>
            <div className="relative flex h-32 w-32 items-center justify-center">
              <span className="absolute inset-0 rounded-full bg-amber-300/20 blur-xl" />
              <span className="sparkle text-7xl" style={{ animationDelay: "0.6s" }}>
                🔮
              </span>
            </div>
            <p className="font-serif text-2xl font-bold tracking-wide text-amber-100 drop-shadow">
              오늘의 운세
            </p>
            <p className="text-sm text-indigo-200/80">
              카드를 눌러 운명을 확인하세요
            </p>
            <span className="sparkle text-4xl" style={{ animationDelay: "1.2s" }}>
              ⭐
            </span>
          </div>

          {/* Back face */}
          <div className="card-face card-face-back card-glow absolute inset-0 flex flex-col items-center justify-start gap-3 overflow-hidden rounded-[1.75rem] border border-amber-300/50 bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 p-5 text-center">
            <div className="pointer-events-none absolute inset-0 opacity-50 [background:radial-gradient(circle_at_50%_0%,rgba(255,215,120,0.28),transparent_55%)]" />
            {fortune && (
              <>
                {/* 행운의 이미지 */}
                <div className="relative mt-1 flex h-28 w-28 items-center justify-center">
                  <span
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${fortune.luckyImage.aura} blur-xl`}
                  />
                  <span className="sparkle text-6xl drop-shadow-[0_0_16px_rgba(255,255,255,0.4)]">
                    {fortune.luckyImage.emoji}
                  </span>
                </div>
                <p className="font-serif text-sm font-semibold tracking-wider text-amber-200">
                  ✦ {fortune.luckyImage.label} ✦
                </p>

                <p className="px-1 text-[15px] font-medium leading-relaxed text-indigo-50">
                  {fortune.message}
                </p>

                <div className="mt-auto w-full space-y-2 rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-indigo-100 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-indigo-300/80">운세 점수</span>
                    <span className="font-bold text-amber-300">
                      {fortune.score}점
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-indigo-300/80">행운의 아이템</span>
                    <span className="font-semibold text-amber-100">
                      {fortune.luckyItem.icon} {fortune.luckyItem.name}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-indigo-300/80">행운의 색</span>
                    <span className="font-semibold text-amber-100">
                      {fortune.luckyColor}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-indigo-300/80">행운의 숫자</span>
                    <span className="font-semibold text-amber-100">
                      {fortune.luckyNumber}
                    </span>
                  </div>
                </div>
              </>
            )}
          </div>
        </button>
      </div>

      <button
        type="button"
        onClick={handleDraw}
        className="rounded-full border border-amber-300/40 bg-gradient-to-r from-amber-400 to-yellow-500 px-9 py-3 text-base font-bold text-purple-950 shadow-lg shadow-amber-500/20 transition-transform hover:scale-105 active:scale-95"
      >
        {fortune ? "✦ 다시 뽑기 ✦" : "✦ 운세 뽑기 ✦"}
      </button>
    </div>
  );
}
