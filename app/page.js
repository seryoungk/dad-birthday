"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";

const reasons = [
  "항상 우리를 위해 희생하셔서",
  "따뜻한 미소를 지으셔서",
  "유머감각이 멋지셔서",
  "가족을 최우선으로 생각하셔서",
  "늘 도움되는 조언을 해주셔서",
  "사랑을 표현하는 방식이 특별하셔서",
  "항상 웃음을 주셔서",
  "어려운 일도 즐겁게 해내셔서",
  "가족의 꿈을 응원해주셔서",
  "겸손한 마음을 가지셔서",
  "시간이 지나도 변함없는 사랑을 주셔서",
  "작은 순간들을 소중히 여기셔서",
  "어려움을 함께 견뎌주셔서",
  "항상 가족을 위해 최선을 다하셔서",
  "따뜻한 말씀을 해주셔서",
  "가족의 행복을 위해 늘 노력하셔서",
  "좋은 성격을 가지셔서",
  "작은 것에도 기뻐하셔서",
  "가족을 지켜주셔서",
  "긍정적인 에너지를 늘 주셔서",
  "어려운 결정을 현명하게 내려주셔서",
  "가족의 성장을 기뻐해주셔서",
  "관심과 배려를 보여주셔서",
  "내가 사준 발마사지기를 좋아하셔서",
  "아빠 자신보다 가족이 우선이라서",
  "항상 격려의 말을 해주셔서",
  "리액션이 좋아서",
  "내 말을 잘 들어주셔서",
  "어려움을 함께 나눠주셔서",
  "항상 나를 믿어주셔서",
  "작은 성취도 자랑스러워해주셔서",
  "가족의 선택을 존중해주셔서",
  "어려운 순간에도 웃음을 잃지 않으셔서",
  "늘 응원해주셔서",
  "관심이 큰 사랑이 되어주셔서",
  "가족을 위해 애써주시는 모습이 아름다우셔서",
  "어려움을 함께 극복해주셔서",
  "사랑을 아낌없이 표현해주셔서",
  "작은 순간도 소중히 느끼게 해주셔서",
  "가족의 꿈을 응원해주셔서",
  "어려운 일도 즐겁게 만들어주셔서",
  "항상 감사할 줄 아는 마음을 가지셔서",
  "작은 기쁨에도 환하게 웃어주셔서",
  "가족을 위해 희생이 크셔서",
  "힘든 일을 함께 나눠주셔서",
  "언제나 응원해주셔서",
  "아빠가 큰 힘이 되어주셔서",
  "가족의 행복을 위해 늘 마음 써주셔서",
  "내가 사준 플레이스테이션 이용권을 잘 써주셔서",
  "항상 사랑을 주셔서",
  "멋진 아빠셔서",
  "긍정적인 에너지를 늘 나눠주셔서",
  "가족을 늘 가장 먼저 생각하셔서",
  "항상 나를 도와주셔서",
  "루엘이를 잘 돌봐주셔서",
  "가족을 존중할 줄 아시는 분이셔서",
  "똑똑하셔서",
  "늘 내 편이 되어주셔서",
  "엄마를 많이 사랑하셔서",
  "그냥 우리 아빠여서",
];

const timeline = [
  {
    year: 1965,
    title: "태어나신 해",
    description: "1965년 12월 10일,\n아빠가 세상에 오셨어요.",
  },
  {
    year: 1985,
    title: "서울대학교 입학",
    description: "아빠의 멋진 청춘이\n시작되던 시절!",
  },
  {
    year: 1996,
    title: "삼성증권 입사",
    description: "열정 넘치던\n회사 생활의 시작!",
  },
  {
    year: 1997,
    title: "결혼",
    description: "가장 큰 인생의 전환점~\n멋진 선택이었어요!",
  },
  {
    year: 1998,
    title: "첫 아이 탄생",
    description: "제가 세상에 나온 해예요!",
  },
  {
    year: 2004,
    title: "둘째 아이 탄생",
    description: "저한테도 남동생이 생겼어요!",
  },
  {
    year: 2014,
    title: "은퇴",
    description: "새로운 시작을 응원해요~!",
  },
  {
    year: 2025,
    title: "환갑",
    description: "사랑하는 아빠, \n환갑 진심으로 축하드려요!",
  },
];

export default function Home() {
  const [blobs, setBlobs] = useState([]);
  const [confetti, setConfetti] = useState([]);

  useEffect(() => {
    // 배경 스카이블루 톤의 작은 원들
    const blobColors = [
      "rgba(112, 184, 212, 0.4)",
      "rgba(105, 183, 194, 0.4)",
      "rgba(107, 212, 247, 0.4)",
      "rgba(43, 113, 226, 0.4)",
      "rgba(67, 136, 221, 0.4)",
      "rgba(75, 153, 243, 0.4)",
    ];

    const newBlobs = [];
    for (let i = 0; i < 20; i++) {
      newBlobs.push({
        id: i,
        size: 80 + Math.random() * 120,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: 8 + Math.random() * 8,
        delay: Math.random() * 3,
        color: blobColors[Math.floor(Math.random() * blobColors.length)],
      });
    }
    setBlobs(newBlobs);

    // 큰 꽃가루 생성
    const confettiColors = [
      "rgba(135, 206, 235, 0.8)",
      "rgba(176, 224, 230, 0.8)",
      "rgba(173, 216, 230, 0.8)",
      "rgba(59, 130, 246, 0.8)",
      "rgba(96, 165, 250, 0.8)",
      "rgba(147, 197, 253, 0.8)",
      "rgba(255, 255, 255, 0.9)",
    ];

    const newConfetti = [];
    for (let i = 0; i < 30; i++) {
      // 좌측 하단 또는 우측 하단에서 시작
      const isLeftSide = Math.random() > 0.5;
      const startPosition = isLeftSide
        ? 5 + Math.random() * 15 // 좌측 하단 (5-20%)
        : 80 + Math.random() * 15; // 우측 하단 (80-95%)

      newConfetti.push({
        id: i,
        size: 20 + Math.random() * 40,
        left: startPosition,
        duration: 6 + Math.random() * 8,
        delay: Math.random() * 3,
        rotation: Math.random() * 360,
        color:
          confettiColors[Math.floor(Math.random() * confettiColors.length)],
        drift: isLeftSide
          ? 20 + Math.random() * 40 // 좌측에서 시작하면 오른쪽으로
          : -40 + Math.random() * -20, // 우측에서 시작하면 왼쪽으로
        peakHeight: 15 + Math.random() * 15, // 화면 중앙 상단 (15-30vh)
        initialVelocity: 0.3 + Math.random() * 0.4,
      });
    }
    setConfetti(newConfetti);
  }, []);

  return (
    <div className={styles.container}>
      {/* 배경 블루~라벤더 톤의 작은 원들 */}
      <div className={styles.backgroundBlobs}>
        {blobs.map((blob) => (
          <div
            key={blob.id}
            className={styles.blob}
            style={{
              width: `${blob.size}px`,
              height: `${blob.size}px`,
              left: `${blob.x}%`,
              top: `${blob.y}%`,
              background: blob.color,
              animationDuration: `${blob.duration}s`,
              animationDelay: `${blob.delay}s`,
            }}
          />
        ))}
      </div>

      {/* 큰 꽃가루 효과 */}
      <div className={styles.confettiContainer}>
        {confetti.map((item) => (
          <div
            key={item.id}
            className={styles.confetti}
            style={{
              left: `${item.left}%`,
              width: `${item.size}px`,
              height: `${item.size}px`,
              background: item.color,
              animationDuration: `${item.duration}s`,
              animationDelay: `${item.delay}s`,
              "--drift": `${item.drift}px`,
              "--peak-height": `${item.peakHeight}vh`,
              "--initial-rotation": `${item.rotation}deg`,
            }}
          />
        ))}
      </div>

      {/* 히어로 섹션 */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.dateBadge}>1965. 12. 10</div>
          <h1 className={styles.mainTitle}>
            <span className={styles.titleMain}>Happy Birthday!</span>
            <span className={styles.titleSub}>사랑하는 아빠,</span>
          </h1>
          <p className={styles.heroDescription}>
            {"60번째 생일,\n환갑을 축하드려요!"}
          </p>
        </div>
      </section>

      {/* 일대기 섹션 */}
      <section className={styles.timelineSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNumber}>60</span>
          <h2 className={styles.sectionTitle}>아빠의 멋진 삶</h2>
        </div>
        <div className={styles.timeline}>
          {timeline.map((event, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <div className={styles.timelineYear}>{event.year}</div>
                <h3 className={styles.timelineTitle}>{event.title}</h3>
                <p className={styles.timelineDescription}>
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 사랑하는 이유 섹션 */}
      <section className={styles.reasonsSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNumber}>60</span>
          <h2 className={styles.sectionTitle}>
            {"아빠를 사랑하는 \n60가지 이유"}
          </h2>
        </div>
        <div className={styles.reasonsGrid}>
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={styles.reasonCard}
              style={{ animationDelay: `${index * 0.03}s` }}
            >
              <span className={styles.reasonNumber}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className={styles.reasonText}>{reason}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 마지막 메시지 섹션 */}
      <section className={styles.finalSection}>
        <div className={styles.finalMessage}>
          <div className={styles.finalNumber}>Dear Dad,</div>
          <h2 className={styles.finalTitle}>{"사랑하는 아빠,"}</h2>
          <div className={styles.finalText}>
            {
              "환갑을 진심으로 축하드려요,\n지금까지 누구보다 성실하고 따뜻하게\n가족을 지켜주신 아버지의 60년 삶에\n존경을 보냅니다! \n\n앞으로의 모든 날들이\n건강과 행복으로 가득하시길 바라요.\n늘 감사드리고, 사랑합니다. \n\n 딸 세령 올림"
            }
          </div>
          <div className={styles.birthdayDate}>2025. 12. 10</div>
        </div>
      </section>
    </div>
  );
}
