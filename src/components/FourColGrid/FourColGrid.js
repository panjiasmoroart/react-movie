import React from "react";

export default function FourColGrid({ children }) {
  const renderElements = () => {
    const gridElements = children.map((element, i) => {
      return (
        <div key={i} className="h-auto w-full bg-gray-700">
          {element}
        </div>
      );
    });
    return gridElements;
  };

  return (
    <div className="mx-0 mt-10 grid grid-cols-4 gap-9">{renderElements()}</div>
  );
}
