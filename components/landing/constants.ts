import IconReact from "./logos/IconReact";
import IconTailwind from "./logos/IconTailwind";
import IconTs from "./logos/IconTs";
import IconJs from "./logos/IconJs";
import IconHtml from "./logos/IconHtml";
import IconNext from "./logos/IconNext";
import IconGcp from "./logos/IconGcp";
import IconThreeJS from "./logos/IconThreeJs";
import { SvgProps } from "./logos/IconTailwind";
import IconCss from "./logos/IconCss";

interface Image {
  blurHeight: number;
  blurWidth: number;
  height: number;
  width: number;
  src: string;
}

interface Logo {
  Img: ({ hovered }: SvgProps) => JSX.Element;
  position: {
    x: number | string;
    y: number | string;
  };
}

export const logos: Logo[] = [
  {
    Img: IconReact,
    position: { y: "-63vh", x: "-6vw" },
  },
  {
    Img: IconTailwind,
    position: { y: "-43vh", x: "-37vw" },
  },
  {
    Img: IconCss,
    position: { y: "55vh", x: "32vw" },
  },
  {
    Img: IconTs,
    position: { y: "4vh", x: "-55vw" },
  },
  {
    Img: IconNext,
    position: { y: "47vh", x: "-34vw" },
  },
  {
    Img: IconJs,
    position: { y: "12vh", x: "52vw" },
  },
  {
    Img: IconHtml,
    position: { y: "-68vh", x: "23vw" },
  },
  {
    Img: IconGcp,
    position: { y: "-31vh", x: "53vw" },
  },
  {
    Img: IconThreeJS,
    position: { y: "53vh", x: "-8vw" },
  },
];
