import React, { MouseEventHandler } from "react";

export type LabelProps = {
  labelItems: string[];
  selects: string[];
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const FilterLabel: React.FC<LabelProps> = (props) => {
  const { labelItems, onClick, selects } = props;
  return (
    <div className="container text-center w-full">
      <ul className="flex justify-around bg-gray w-full p-1">
        {labelItems.map((item) => {
          const isSelected = selects.find((select) => select === item);

          const className = `border border-purple-600 rounded-sm text-purple-600 ${
            isSelected ? "bg-gray-400" : "shadow-2xl"
          }`;

          return (
            <li className={className}>
              <button
                type="button"
                data-key={item}
                onClick={(event) => onClick(event)}
                className="p-2"
              >
                {item}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FilterLabel;
