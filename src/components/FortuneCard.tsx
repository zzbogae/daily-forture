"use client";

import { useState } from "react";
import { getRandomFortune, type Fortune } from "@/lib/fortunes";

// 빨주노초파남보
const RAINBOW =
  "linear-gradient(135deg, #ff3b3b, #ff9500, #ffcc00, #34c759, #007aff, #3634a3, #af52de)";

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
          <div
            className="card-face card-glow absolute inset-0 overflow-hidden rounded-[1.75rem] p-[3px]"
            style={{ background: RAINBOW }}
          >
            <div className="flex h-full w-full flex-col items-center justify-center gap-5 rounded-[1.6rem] bg-white/90 p-6 backdrop-blur-sm">
              <span className="sparkle text-5xl">🌈</span>
              <div className="relative flex h-32 w-32 items-center justify-center">
                <span
                  className="absolute inset-0 rounded-full opacity-40 blur-xl"
                  style={{ background: RAINBOW }}
                />
                <span
                  className="sparkle text-7xl"
                  style={{ animationDelay: "0.6s" }}
                >
                  🔮
                </span>
              </div>
              <p className="rainbow-text text-2xl font-extrabold tracking-wide">
                오늘의 운세
              </p>
              <p className="text-sm font-medium text-zinc-500">
                카드를 눌러 운명을 확인하세요
              </p>
              <span
                className="sparkle text-4xl"
                style={{ animationDelay: "1.2s" }}
              >
                ⭐
              </span>
            </div>
          </div>

          {/* Back face */}
          <div
            className="card-face card-face-back card-glow absolute inset-0 overflow-hidden rounded-[1.75rem] p-[3px]"
            style={{ background: RAINBOW }}
          >
            <div className="flex h-full w-full flex-col items-center justify-start gap-3 overflow-hidden rounded-[1.6rem] bg-white/95 p-5 text-center">
              {fortune && (
                <>
                  {/* 행운의 이미지 */}
                  <div className="relative mt-1 flex h-28 w-28 items-center justify-center">
                    <span
                      className={`absolute inset-0 rounded-full bg-gradient-to-br ${fortune.luckyImage.aura} blur-xl`}
                    />
                    <span className="sparkle text-6xl drop-shadow">
                      {fortune.luckyImage.emoji}
                    </span>
                  </div>
                  <p className="rainbow-text text-sm font-bold tracking-wider">
                    ✦ {fortune.luckyImage.label} ✦
                  </p>

                  <p className="px-1 text-[15px] font-semibold leading-relaxed text-zinc-700">
                    {fortune.message}
                  </p>

                  <div className="mt-auto w-full space-y-2 rounded-2xl border border-zinc-200 bg-zinc-50/80 p-3 text-sm text-zinc-600">
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-400">운세 점수</span>
                      <span className="font-bold text-rose-500">
                        {fortune.score}점
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-400">행운의 아이템</span>
                      <span className="font-semibold text-zinc-700">
                        {fortune.luckyItem.icon} {fortune.luckyItem.name}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-400">행운의 색</span>
                      <span className="font-semibold text-zinc-700">
                        {fortune.luckyColor}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-400">행운의 숫자</span>
                      <span className="font-semibold text-zinc-700">
                        {fortune.luckyNumber}
                      </span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </button>
      </div>

      <button
        type="button"
        onClick={handleDraw}
        className="rainbow-btn rounded-full px-9 py-3 text-base font-bold text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
      >
        {fortune ? "✦ 다시 뽑기 ✦" : "✦ 운세 뽑기 ✦"}
      </button>
    </div>
  );
}
