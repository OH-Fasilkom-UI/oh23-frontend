import React, { useState } from "react";
import { TabsProps } from "./interface";

const Tabs: React.FC<TabsProps> = ({
  buttonsText,
  defaultIndex,
  className,
  onClicks,
}) => {
  const [activeButton, setActiveButton] = useState<number>(defaultIndex);

  const tabClick = (index: number) => {
    onClicks[index]();
    setActiveButton(index);
  };

  return (
    <div
      className={`bg-white-3 rounded-[40px] flex gap-2 font-satoshi ${className}`}
    >
      {buttonsText.map((buttonText, index) => {
        return (
          <button
            className={`p-2 rounded-[40px] flex-1 ${
              index == activeButton
                ? "border-[3px] border-screaminGreen-3 tabs-glow border-opacity-30 text-white-1"
                : ""
            }`}
            onClick={() => {
              tabClick(index);
            }}
          >
            {buttonText}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
