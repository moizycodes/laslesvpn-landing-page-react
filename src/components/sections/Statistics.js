import { useEffect, useRef, useState } from "react";
import Container from "../common/Container";

const statistics = [
  {
    id: 1,
    target: 90000,
    suffix: "K+",
    divisor: 1000,
    label: "Users",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2m12-13a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm2 2a4 4 0 0 0 0-8m4 19v-2a4 4 0 0 0-3-3.87"
        />
      </svg>
    ),
  },
  {
    id: 2,
    target: 30,
    suffix: "+",
    divisor: 1,
    label: "Locations",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
        />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
  },
  {
    id: 3,
    target: 50,
    suffix: "+",
    divisor: 1,
    label: "Servers",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="7" rx="2" />
        <rect x="3" y="14" width="18" height="7" rx="2" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 6.5h.01M7 17.5h.01M11 6.5h6M11 17.5h6"
        />
      </svg>
    ),
  },
];

function AnimatedCounter({ target, divisor, suffix, animate }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!animate) return;

    let frameId;
    const duration = 1800;
    let startTime;

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Smooth ease-out animation
      const easedProgress = 1 - Math.pow(1 - progress, 4);

      setCount(Math.floor((target / divisor) * easedProgress));

      if (progress < 1) {
        frameId = requestAnimationFrame(updateCount);
      } else {
        setCount(target / divisor);
      }
    };

    frameId = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(frameId);
  }, [animate, target, divisor]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

function Statistics() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 bg-white pb-16 sm:pb-20 lg:pb-24"
      aria-label="LaslesVPN statistics"
    >
      <Container>
        <div className="grid grid-cols-1 divide-y divide-gray-200 rounded-2xl bg-white px-6 py-4 shadow-[0_25px_60px_rgba(13,16,37,0.08)] sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-4 lg:px-12">
          {statistics.map((stat) => (
            <div
              key={stat.id}
              className="flex items-center justify-center gap-5 py-7 sm:py-8 lg:gap-7"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-red-50 text-brand sm:h-16 sm:w-16">
                {stat.icon}
              </div>

              <div>
                <p className="text-xl font-bold leading-tight text-heading sm:text-2xl">
                  <AnimatedCounter
                    target={stat.target}
                    divisor={stat.divisor}
                    suffix={stat.suffix}
                    animate={isVisible}
                  />
                </p>
                <p className="mt-1 text-sm text-body sm:text-base">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Statistics;
