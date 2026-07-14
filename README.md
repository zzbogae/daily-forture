# 🔮 오늘의 운세 (Today's Fortune)

카드를 뒤집으면 오늘의 운세와 행운의 상징·아이템이 나타나는 Next.js 웹 앱입니다.

## ✨ 기능

- **3D 카드 뒤집기** — 버튼이나 카드를 누르면 카드가 뒤집히며 운세가 공개됩니다.
- **랜덤 운세** — 15가지 운세 문구 중 하나가 무작위로 표시됩니다.
- **행운의 상징(이미지)** — 청룡·유니콘·수정구 등 판타지 상징이 오라 효과와 함께 등장합니다.
- **행운의 아이템 / 색 / 숫자 / 점수** — 매번 새롭게 조합되어 표시됩니다.
- **다시 뽑기** — 카드를 다시 뒤집어 새로운 운세를 뽑을 수 있습니다.
- **판타지 테마 디자인** — 별빛이 흐르는 밤하늘 배경과 황금빛 카드 스타일.

## 🛠 기술 스택

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)

## 🚀 시작하기

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 을 열면 됩니다.
(포트가 사용 중이면 `npm run dev -- -p 3001` 처럼 다른 포트를 지정하세요.)

## 📦 스크립트

| 명령어          | 설명           |
| --------------- | -------------- |
| `npm run dev`   | 개발 서버 실행 |
| `npm run build` | 프로덕션 빌드  |
| `npm run start` | 빌드된 앱 실행 |
| `npm run lint`  | ESLint 검사    |

## 📁 프로젝트 구조

```
src/
├── app/
│   ├── globals.css        # 전역 스타일 · 카드 뒤집기 애니메이션
│   ├── layout.tsx         # 루트 레이아웃 · 메타데이터
│   └── page.tsx           # 메인 페이지 (별빛 배경)
├── components/
│   └── FortuneCard.tsx    # 운세 카드 컴포넌트 (뒤집기 로직)
└── lib/
    └── fortunes.ts        # 운세 · 행운의 아이템/상징 데이터 및 랜덤 로직
```

## 📝 운세 데이터 추가하기

`src/lib/fortunes.ts` 의 배열을 수정하면 운세 문구, 행운의 아이템, 상징, 색상을 자유롭게 추가·변경할 수 있습니다.
