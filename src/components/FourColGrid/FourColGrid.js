import React from "react";

export default function FourColGrid({ children, header, loading }) {
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
    <div>
      {header && !loading ? (
        <h1 className="text-4xl font-medium mt-8">{header}</h1>
      ) : null}
      <div className="mx-0 mt-10 grid grid-cols-4 gap-9">
        {renderElements()}
      </div>
    </div>
  );
}
