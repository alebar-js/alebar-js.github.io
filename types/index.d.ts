import React from "react";
export type GithubRepo = {
  name: string;
  url: string;
  avatar: string;
  username: string;
  description: string;
};

export type TimelineItem = {
  title: string;
  description: string;
  date: Date | number | string;
};

export interface LayerProps {
  children?: React.ReactNode;
  onScroll?: (offset: number) => void;
}
