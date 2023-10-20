import IconReact from "../logos/IconReact";
import IconThreeJs from "../logos/IconThreeJs";
import IconNext from "../logos/IconNext";
import IconTailwind from "../logos/IconTailwind";
import IconJs from "../logos/IconJs";
import IconTs from "../logos/IconTs";
import IconSpring from "../logos/IconSpring";
import IconFigma from "../logos/IconFigma";
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
  [IconEnum.figma]: <IconFigma />,
  [IconEnum.reactSpring]: <IconSpring />,
};
export const cards: ProjectInfo[] = [
  {
    title: "Portfolio Website",
    description:
      "You're looking at it! Inspired by many portfolio websites around the Internet",
    toolsUsed: ["react", "next", "typescript", "tailwind", "reactSpring"],
    codeLink: "https://github.com/alebar-js/alebar-js.github.io",
  },
  {
    title: "Github Dashboard Clone",
    description:
      "Let's build from here! A small homage to the home of open source software. WIP",
    toolsUsed: ["react", "next", "tailwind", "typescript"],
    codeLink:
      "https://github.com/alebar-js/alebar-js.github.io/tree/main/components/github",
    liveLink: "/github",
  },
  {
    title: "Slack Homepage Clone",
    description:
      "Second one in the series of website clones, the Slack website caught my attention because of its fun and inviting landing page",
    toolsUsed: ["react", "next", "tailwind", "typescript"],
    codeLink:
      "https://github.com/alebar-js/alebar-js.github.io/tree/main/components/slack",
    liveLink: "/slack",
  },
  {
    title: "The Agency Design Implementation",
    description:
      "Landing page for The Agency, a concept project by a talented friend",
    toolsUsed: ["react", "next", "tailwind", "figma", "typescript"],
  },
  {
    title: "Wrapp3D",
    description:
      "Re-live your listening trends in a 3D fashion, using Spotify API Data!",
    toolsUsed: ["react", "next", "tailwind", "threejs", "reactSpring"],
    codeLink: "https://github.com/alebar-js/wrapp3d",
    liveLink: "https://wrapp3d.vercel.app",
  },
  {
    title: "Alebar-Snippets",
    description:
      "Personal tech/code blog, created using NextJS/Tailwind template",
    toolsUsed: ["react", "next", "tailwind"],
    codeLink: "https://github.com/alebar-js/wrapp3d",
    liveLink: "https://wrapp3d.vercel.app",
  },
];
