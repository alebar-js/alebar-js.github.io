import React from "react";
import { TimelineItem } from "@/types";
import moment from "moment";

interface ITimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<ITimelineProps> = ({ items }) => {
  return (
    <div>
      <h2 className="mb-2 text-sm font-semibold">Latest Changes</h2>
      <ul>
        {items.map((item, i) => (
          <li
            key={`timeline-${i}`}
            className='relative before:absolute before:bottom-0 before:left-0 before:top-0 before:block before:w-[1px] before:bg-[#21262d] before:text-[#21262d] before:content-[""]'
          >
            <svg
              className="absolute left-[-7.5px] top-[-3px] inline overflow-visible fill-[#30363d] align-text-bottom"
              aria-hidden={true}
              height={16}
              viewBox="0 0 16 16"
              width={16}
            >
              <path d="M8 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z"></path>
            </svg>
            <div className="relative top-[-8px] ml-6">
              <time className="text-[12px] text-[#7d8590]">
                {item.date.toLocaleString("en-US")}
              </time>
              <h2 className="text-sm text-[#e6edf3]">{item.title}</h2>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
