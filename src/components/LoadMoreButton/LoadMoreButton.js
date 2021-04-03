import React from "react";

export default function LoadMoreButton({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="mt-14 w-full text-center bg-green-400 text-white py-6 text-3xl rounded-sm"
    >
      {text}
    </button>
  );
}
