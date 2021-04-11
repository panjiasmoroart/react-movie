import React from "react";
import { IMAGE_BASE_URL } from "../../utils/config";

export default function Actor({ actor }) {
  const POSTER_SIZE = "w154";

  return (
    <div className="bg-gray-700">
      <div className="container mx-auto grid grid-flow-row grid-cols-12">
        <div className="col-span-5">
          <img
            className="h-44"
            src={
              actor?.profile_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}/${actor?.profile_path}`
                : process.env.PUBLIC_URL + "/images/no_image.jpg"
            }
            alt="Actor"
          />
        </div>
        <div className="col-span-7 text-white p-4">
          <p className="text-xl mb-3">{actor?.name}</p>
          <p className="text-sm">{actor?.character}</p>
        </div>
      </div>
    </div>
  );
}
