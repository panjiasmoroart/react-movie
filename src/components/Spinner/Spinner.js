import React from "react";

export default function Spinner() {
  const loader = {
    border: "5px solid #f3f3f3",
    borderTop: "5px solid #16d47b",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
  };

  return (
    <div className="flex justify-center my-5">
      <div className="animate-spin" style={loader}></div>
    </div>
  );
}
