import React, { useState } from "react";
import { useSprings, animated, to as interpolate } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import styles from "./styles.module.css";
import { cards, icons } from "./constants";
import { GoTelescope } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const to = (i: number) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});
const from = (_i: number) => ({ x: 1000, rot: 0, scale: 1.5, y: 0 });
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r: number, s: number) =>
  `perspective(1500px) rotateX(30deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`;

const Deck = () => {
  const observer = React.useRef<HTMLDivElement>(null);
  const [gone] = useState(() => new Set()); // Track the cards that are flicked out (gone)

  // Create one spring state for each card
  const [props, api] = useSprings(cards.length, (i) => ({
    ...to(i),
    from: from(i),
  }));

  const bind = useDrag(
    ({
      args: [index],
      active,
      movement: [mx],
      direction: [xDir],
      velocity: [vx],
    }) => {
      const trigger = vx > 0.2; // If you flick hard enough it should trigger the card to fly out

      // If mouse/finger's up and trigger velocity is reached, we flag the card ready to fly out
      if (!active && trigger) gone.add(index);

      //
      api.start((i) => {
        if (index !== i) return; // We're only interested in changing spring-data for the current spring
        const isGone = gone.has(index);
        const x = isGone ? (200 + window.innerWidth) * xDir : active ? mx : 0; // When a card is gone it flys out left or right, otherwise goes back to zero
        const rot = mx / 100 + (isGone ? xDir * 10 * vx : 0); // How much the card tilts, flicking it harder makes it rotate faster
        const scale = active ? 1.1 : 1; // Active cards lift up a bit
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: active ? 800 : isGone ? 200 : 500 },
        };
      });
      if (!active && gone.size === cards.length)
        setTimeout(() => {
          gone.clear();
          api.start((i) => to(i));
        }, 600);
    }
  );

  return (
    <>
      {props.map(({ x, y, rot, scale }, i) => {
        const card = cards[i];
        return (
          <>
            <div className="hidden" ref={observer}></div>
            <animated.div className={styles.deck} key={i} style={{ x, y }}>
              <animated.div
                className="p-8"
                {...bind(i)}
                style={{
                  transform: interpolate([rot, scale], trans),
                }}
              >
                <div
                  className="h-full select-none rounded-md p-2 relative"
                  style={{ border: "3px solid #087EA4" }}
                >
                  <h2 className="text-lg font-bold">{card.title}</h2>
                  <p className="my-2">{card.description}</p>
                  <h3 className="my-6 text-lg font-semibold">Tools Used:</h3>
                  {card.toolsUsed.map((tool, i) => (
                    <div
                      title={tool}
                      key={`${tool}-icon-${i}`}
                      className="mr-2 inline-block h-12 w-12"
                    >
                      {icons[tool]}
                    </div>
                  ))}
                  <div className="absolute bottom-2 w-full text-right right-4 font-semibold text-blue">
                    {card.codeLink && (
                      <Link href={card.codeLink} className="block my-1">
                        View Source
                        <FaGithub className="inline-block ml-1" />
                      </Link>
                    )}
                    {card.liveLink && (
                      <Link href={card.liveLink}>
                        Live Demo
                        <GoTelescope className="inline-block ml-1" />
                      </Link>
                    )}
                  </div>
                </div>
              </animated.div>
            </animated.div>
          </>
        );
      })}
    </>
  );
};

export default Deck;
