import React from "react";
import { faker } from "@faker-js/faker";
const CommentDetail = ({ author, time, imgUrl }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mb-10 bg-red-50">
      <div class="flex items-center">
        <img
          className="w-10 h-10 rounded-full mr-4"
          src={faker.image.avatar()}
          alt="Avatar "
        />
        <div className="text-sm">
          <p className="text-gray-900 font-bold leading-none">{author}</p>
          <p className="text-gray-400">{time}</p>
        </div>
      </div>
      <img
        className="w-full p-2 rounded-lg"
        src={imgUrl}
        alt="Sunset in the mountains"
      />

      <p class="text-gray-700 text-[14px] text-base p-2">
        {faker.lorem.paragraph()}
      </p>
    </div>
  );
};

export default CommentDetail;
