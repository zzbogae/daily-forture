import FortuneCard from "@/components/FortuneCard";

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col items-center justify-center gap-10 overflow-hidden bg-gradient-to-b from-[#fff7f7] via-[#f7fbff] to-[#fbf7ff] px-6 py-16">
      {/* 무지개 오라 배경 */}
      <div className="rainbow-aura pointer-events-none absolute inset-0 opacity-70" />
      <div className="starfield pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative z-10 flex flex-col items-center gap-3 text-center">
        <h1 className="rainbow-text text-4xl font-extrabold tracking-tight drop-shadow-sm sm:text-5xl">
          🌈 오늘의 운세
        </h1>
        <p className="max-w-sm text-sm font-medium text-zinc-600">
          무지개 카드를 뒤집어 오늘의 운세와 행운의 상징, 그리고 행운의 아이템을
          확인하세요.
        </p>
      </div>

      <div className="relative z-10">
        <FortuneCard />
      </div>
    </div>
  );
}
