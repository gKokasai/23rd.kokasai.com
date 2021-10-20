import React from "react";

export type TabChangeBarProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  select: "day1" | "day2";
};

const TabChangeBar: React.FC<TabChangeBarProps> = (props) => {
  const { onClick, select } = props;
  const defaultClassName =
    "mx-auto p-2 border border-orangeF2954B rounded-sm text-black";
  const day1ClassName = `${defaultClassName} ${
    select === "day1" ? "bg-orangeF2954B" : "bg-white"
  }`;
  const day2ClassName = `${defaultClassName} ${
    select === "day2" ? "bg-orangeF2954B" : "bg-white"
  }`;
  return (
    <div className="flex justify-center text-lg p-4">
      <button
        type="button"
        className={day1ClassName}
        data-key="day1"
        onClick={(e) => onClick(e)}
      >
        1日目
      </button>
      <button
        type="button"
        className={day2ClassName}
        data-key="day2"
        onClick={(e) => onClick(e)}
      >
        2日目
      </button>
    </div>
  );
};

export default TabChangeBar;
