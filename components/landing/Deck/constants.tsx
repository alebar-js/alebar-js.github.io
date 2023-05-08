import IconReact from "../logos/IconReact";
import IconThreeJs from "../logos/IconThreeJs";
import IconNext from "../logos/IconNext";
import IconTailwind from "../logos/IconTailwind";
import IconJs from "../logos/IconJs";
import IconTs from "../logos/IconTs";
import IconSpring from "../logos/IconSpring";

enum IconEnum {
  react = "react",
  next = "next",
  tailwind = "tailwind",
  threejs = "threejs",
  typescript = "typescript",
  javascript = "javascript",
  figma = "figma",
  reactSpring = "reactSpring",
}

export type ProjectInfo = {
  title: string;
  description: string;
  toolsUsed: Array<string>;
  codeLink?: string;
  liveLink?: string;
};

export const icons: { [key: string]: JSX.Element } = {
  [IconEnum.react]: <IconReact hovered />,
  [IconEnum.next]: <IconNext hovered />,
  [IconEnum.tailwind]: <IconTailwind hovered />,
  [IconEnum.threejs]: <IconThreeJs hovered />,
  [IconEnum.javascript]: <IconJs hovered />,
  [IconEnum.typescript]: <IconTs hovered />,
  [IconEnum.figma]: <></>,
  [IconEnum.reactSpring]: <IconSpring />,
};
export const cards: ProjectInfo[] = [
  {
    title: "Portfolio Website",
    description:
      "You're looking at it! I wanted a creative way to show my work to everyone interested. Inspired by many portfolio websites around the Internet, since I'm not the best designer",
    toolsUsed: ["react", "next", "typescript", "tailwind", "reactSpring"],
  },
  {
    title: "Github Homepage Clone",
    description:
      "Made as a series of website clones, to diversify my knowledge and learn about how other companies implement their websites.",
    toolsUsed: ["react", "next", "tailwind", "typescript"],
    codeLink: "",
  },
  {
    title: "Slack Homepage Clone",
    description:
      "Second one in the series of website clones, the Slack website caught my attention because of its fun and inviting landing page",
    toolsUsed: ["react", "next", "tailwind", "typescript"],
  },
  {
    title: "The Agency Design Implementation",
    description:
      "Landing page for The Agency, a concept project by a talented friend of mine, Valentina Sanchez. Explore this project:",
    toolsUsed: ["react", "next", "tailwind", "figma", "typescript"],
  },
  {
    title: "Wrapp3D",
    description:
      "Re-live your listening trends in a 3D fashion, using Spotify API Data!",
    toolsUsed: ["react", "next", "tailwind", "threejs", "reactSpring"],
  },
];
