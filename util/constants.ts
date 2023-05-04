import { GithubRepo, TimelineItem } from "../types";
import moment from "moment";

export const githubRepos: GithubRepo[] = [
  {
    name: "wrapp3d",
    url: "https://github.com/alebar-js/wrapp3d",
    avatar: "https://avatars.githubusercontent.com/u/114897103",
    username: "alebar-js",
    description: "",
  },
  {
    name: "tell-em-functions",
    url: "https://github.com/abarnola/tell-em-functions",
    avatar: "https://avatars.githubusercontent.com/u/42553291",
    username: "abarnola",
    description: "",
  },
  {
    name: "tell-em-client",
    url: "https://github.com/abarnola/tell-em-client",
    avatar: "https://avatars.githubusercontent.com/u/42553291",
    username: "abarnola",
    description: "",
  },
  {
    name: "tindog",
    url: "https://github.com/abarnola/tindog",
    avatar: "https://avatars.githubusercontent.com/u/42553291",
    username: "abarnola",
    description: "",
  },
  {
    name: "alebar-js.github.io",
    url: "https://github.com/alebar-js/alebar-js.github.io",
    avatar: "https://avatars.githubusercontent.com/u/114897103",
    username: "alebar-js",
    description: "",
  },
];

export const githubTimelineItems: TimelineItem[] = [
  {
    title: "Initial Commit",
    description: "The project has begun!",
    date: `${Math.floor(
      moment().diff(moment("2023-04-10")) / 86400000
    )} days ago`,
  },
  {
    title: "Second Commit",
    description: "The project has begun!",
    date: `${Math.floor(
      moment().diff(moment("2023-04-10")) / 86400000
    )} days ago`,
  },
];
