export type LuckyItem = {
  name: string;
  icon: string;
};

export type LuckyImage = {
  emoji: string;
  label: string;
  aura: string; // tailwind gradient classes for the glow behind the image
};

export type Fortune = {
  message: string;
  luckyItem: LuckyItem;
  luckyImage: LuckyImage;
  luckyColor: string;
  luckyNumber: number;
  score: number;
};

const messages = [
  "오늘은 생각지도 못한 곳에서 좋은 소식이 들려올 거예요.",
  "작은 용기가 큰 행운으로 이어지는 하루예요.",
  "주변 사람의 말 한마디가 오늘의 힌트가 될 수 있어요.",
  "미뤄뒀던 일을 시작하기에 아주 좋은 타이밍이에요.",
  "느긋하게 쉬어가도 괜찮은 하루, 무리하지 마세요.",
  "새로운 인연이 찾아올 수 있으니 마음을 열어두세요.",
  "돈이 들어올 운이지만 충동구매는 조심하세요.",
  "노력한 만큼 정확히 돌아오는 공정한 하루예요.",
  "고민하던 문제의 답이 뜻밖에 쉽게 풀릴 거예요.",
  "잠깐의 실수보다 회복하는 태도가 더 중요한 날이에요.",
  "낯선 도전이 뜻밖의 재미와 성취로 이어질 거예요.",
  "가까운 사람에게 먼저 연락해보면 좋은 일이 생겨요.",
  "컨디션 관리만 잘하면 모든 게 순조로운 하루예요.",
  "칭찬을 받을 일이 생기니 자신감을 가지세요.",
  "지나친 걱정은 내려놓고 흐름에 맡겨보세요.",
];

const luckyItems: LuckyItem[] = [
  { name: "우산", icon: "☂️" },
  { name: "손거울", icon: "🪞" },
  { name: "초콜릿", icon: "🍫" },
  { name: "만년필", icon: "🖋️" },
  { name: "머그컵", icon: "☕" },
  { name: "이어폰", icon: "🎧" },
  { name: "노란 양말", icon: "🧦" },
  { name: "향초", icon: "🕯️" },
  { name: "책갈피", icon: "🔖" },
  { name: "고서(古書)", icon: "📜" },
  { name: "수정 목걸이", icon: "📿" },
  { name: "텀블러", icon: "🥤" },
  { name: "행운의 동전", icon: "🪙" },
  { name: "꽃 한 송이", icon: "🌷" },
  { name: "열쇠고리", icon: "🗝️" },
];

// 오늘의 상징이 되는 판타지 이미지
const luckyImages: LuckyImage[] = [
  { emoji: "🐉", label: "동방의 청룡", aura: "from-emerald-400/50 to-teal-600/40" },
  { emoji: "🦄", label: "달빛 유니콘", aura: "from-fuchsia-400/50 to-purple-600/40" },
  { emoji: "🔮", label: "예언의 수정구", aura: "from-violet-400/50 to-indigo-600/40" },
  { emoji: "🌙", label: "초승달의 가호", aura: "from-amber-300/50 to-yellow-500/40" },
  { emoji: "⭐", label: "새벽의 샛별", aura: "from-yellow-300/50 to-amber-500/40" },
  { emoji: "🦋", label: "환생의 나비", aura: "from-sky-400/50 to-blue-600/40" },
  { emoji: "🕊️", label: "평화의 흰 비둘기", aura: "from-slate-200/50 to-sky-400/40" },
  { emoji: "🔱", label: "심연의 삼지창", aura: "from-cyan-400/50 to-blue-700/40" },
  { emoji: "👑", label: "황금 왕관", aura: "from-yellow-300/50 to-orange-500/40" },
  { emoji: "🪄", label: "마법사의 지팡이", aura: "from-purple-400/50 to-pink-600/40" },
  { emoji: "🦉", label: "지혜의 부엉이", aura: "from-amber-400/50 to-stone-600/40" },
  { emoji: "🐬", label: "바다의 인도자", aura: "from-cyan-300/50 to-teal-600/40" },
  { emoji: "🌟", label: "소원의 유성", aura: "from-yellow-200/50 to-fuchsia-500/40" },
  { emoji: "🍄", label: "요정의 버섯", aura: "from-rose-400/50 to-red-600/40" },
  { emoji: "🧚", label: "숲의 요정", aura: "from-green-300/50 to-emerald-600/40" },
];

const luckyColors = [
  "루비 레드",
  "선셋 오렌지",
  "골드 옐로",
  "에메랄드 그린",
  "사파이어 블루",
  "아메시스트 퍼플",
  "펄 화이트",
  "미드나잇 블랙",
  "로즈 핑크",
  "스카이 블루",
];

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function getRandomFortune(): Fortune {
  return {
    message: pick(messages),
    luckyItem: pick(luckyItems),
    luckyImage: pick(luckyImages),
    luckyColor: pick(luckyColors),
    luckyNumber: Math.floor(Math.random() * 45) + 1,
    score: Math.floor(Math.random() * 41) + 60,
  };
}
