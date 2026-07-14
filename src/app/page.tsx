import FortuneCard from "@/components/FortuneCard";

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col items-center justify-center gap-10 overflow-hidden bg-gradient-to-b from-[#0f0524] via-[#1a0b3a] to-[#050211] px-6 py-16">
      {/* 별빛 배경 */}
      <div className="starfield pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_50%_-10%,rgba(147,51,234,0.35),transparent_55%)]" />

      <div className="relative z-10 flex flex-col items-center gap-3 text-center">
        <h1 className="font-serif text-4xl font-bold tracking-tight text-amber-100 drop-shadow-[0_0_20px_rgba(251,191,36,0.4)] sm:text-5xl">
          🔮 오늘의 운세
        </h1>
        <p className="max-w-sm text-sm text-indigo-200/80">
          운명의 카드를 뒤집어 오늘의 운세와 행운의 상징, 그리고 행운의 아이템을
          확인하세요.
        </p>
      </div>

      <div className="relative z-10">
        <FortuneCard />
      </div>
    </div>
  );
}
