import React, { useState } from "react";
import Header from "./Header";
import styles from "./Github.module.css";
import Sidebar from "./Sidebar";
import Link from "next/link";
import Image from "next/image";
import Router from "next/router";
import TabSelector from "./TabSelector";
import Card from "./Card";
import Button from "./Button";
import Timeline from "./Timeline";
// Constants
import {
  githubRepos as repos,
  githubTimelineItems as timelineItems,
} from "../../util/constants";

const classes = {
  cardHeading: "mb-2 text-2xl font-bold text-[#e6edf3]",
};

const HomeContent = (props: { onTabChange: (s: string) => void }) => {
  return (
    <>
      <Card className="my-4 mb-2 w-full p-8">
        <h2 className={classes.cardHeading}>What is this page?</h2>
        <p className="text-base text-[#7d8590]">
          This project acts as a learning tool and showcase for my web
          development skillset. I&apos;ve challenged myself to re-create
          websites that I know and love from around the software development
          industry, to learn about different visual components, how other
          companies are using them, and how their developers implement them
        </p>
        <Button onClick={() => Router.push("/")}>Discover More Sites</Button>
      </Card>
      <Card className="my-4 w-full p-8 text-base text-[#7d8590]">
        <h2 className={classes.cardHeading}>Why Github?</h2>
        <p>
          I&apos;ve used Github for years, and have always admired its UX
          designs, as well as the website&apos;s clean look. I believe that
          these features have played a large part in Github&apos;s ubiquitous
          presence within the sofwtare development industry
        </p>
        <p className="mt-2">
          This page is inspired by the Github Dashboard. You can click on any of
          my repositories on the sidebar to learn about each project
        </p>
        <Button onClick={() => props.onTabChange("repository")}>
          Learn About This Project
        </Button>
      </Card>
    </>
  );
};

const RepositoryContent = (props: { repo: string }) => {
  return (
    <>
      <Card className="my-4 mb-2 w-full p-8">
        <h2 className={classes.cardHeading}>What is this page?</h2>
        <p className="text-base text-[#7d8590]">
          This project acts as a learning tool and showcase for my web
          development skillset. I&apos;ve challenged myself to re-create
          websites that I know and love from around the software development
          industry, to learn about different visual components, how other
          companies are using them, and how their developers implement them
        </p>
        <Button onClick={() => Router.push("/")}>Discover More Sites</Button>
      </Card>
    </>
  );
};

const Index: React.FC = () => {
  const [repo, setRepo] = useState("");
  const [tab, setTab] = useState("home");
  const [filter, setFilter] = useState("");

  const tabContents: { [key: string]: React.ReactNode } = {
    home: <HomeContent onTabChange={(tab: string) => setTab(tab)} />,
    repository: <RepositoryContent repo="" />,
  };

  return (
    <>
      <Header />
      <div className={styles.pageContainer} data-color-mode="auto">
        <Sidebar>
          <div className={styles.sidebarHeading}>
            <h2 className="text-sm font-semibold">Top Repositories</h2>
            <input
              className={styles.searchbar}
              placeholder="Find a repository..."
            />
          </div>
          <div className={styles.sidebarContent}>
            <div className={styles.sidebarRepoList}>
              {repos.map((repo, i) => (
                <div className={styles.repoLink} key={`repoList-${i}`}>
                  <Link href={repo.url} target="_blank">
                    <Image
                      src={repo.avatar}
                      alt="profile image"
                      className={styles.repoAvatar}
                      width={15}
                      height={15}
                    />
                    {`${repo.username}/${repo.name}`}
                  </Link>
                </div>
              ))}
            </div>
            <h2 className="mt-6 text-sm font-semibold">Other Work</h2>
            <div className={styles.repoLink}>
              <Link href="/" target="_blank">
                Slack
              </Link>
            </div>
          </div>
        </Sidebar>
        <div className="flex w-full px-8 py-4">
          <div className="w-[65%]">
            <TabSelector
              selectedTab={tab}
              onSelect={(name: string) => setTab(name)}
            />
            {tabContents[tab]}
          </div>
          <div className="mt-4 hidden px-6 md:block">
            <Timeline items={timelineItems} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
