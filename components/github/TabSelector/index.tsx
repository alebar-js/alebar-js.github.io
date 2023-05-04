import React from "react";
import styles from "../Github.module.css";
import { toCapitalize } from "@/util";

interface ITabItemProps {
  selected: boolean;
  onClick?: (name: string) => void;
  title: string;
  children?: React.ReactNode;
}

const TabItem = ({ title, selected, children, onClick }: ITabItemProps) => {
  const handleClick = () => {
    onClick && onClick(title);
  };

  return (
    <>
      <li
        className={`flex cursor-pointer items-center px-2 text-sm ${
          selected ? "border-b-2 border-b-[#f78166]" : ""
        }`}
        onClick={handleClick}
      >
        <span
          className={`rounded-md transition duration-150 ease-out
         hover:bg-[#e6edf3]/[0.12] ${selected && "font-semibold"}`}
        >
          {toCapitalize(title)}
        </span>
      </li>
    </>
  );
};

const TabSelector = (props: {
  selectedTab: string;
  onSelect: (name: string) => void;
}) => {
  const tabs = ["home", "about me", "repository"];
  const { onSelect } = props;
  console.log(props.selectedTab);
  return (
    <div className={styles.tabSelector}>
      <ul className="flex cursor-pointer list-none items-stretch gap-2">
        {tabs.map((tab) => (
          <TabItem
            title={tab}
            onClick={onSelect}
            selected={props.selectedTab === tab}
            key={`${tab}-tab`}
          />
        ))}
        {/* <TabItem
          title="Home"
          onClick={onSelect}
          selected={props.selectedTab === "home"}
        />
        <TabItem
          title="About Me"
          onClick={onSelect}
          selected={props.selectedTab.toLowerCase() === "about me"}
        ></TabItem> */}
      </ul>
    </div>
  );
};

export default TabSelector;
