import React from "react";
import { faker } from "@faker-js/faker";
const CommentDetail = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div class="flex items-center">
        <img
          className="w-10 h-10 rounded-full mr-4"
          src={faker.image.avatar()}
          alt="Avatar "
        />
        <div className="text-sm">
          <p className="text-gray-900 leading-none">
            {faker.internet.userName()}
          </p>
          <p className="text-gray-400">4 Jul 2002</p>
        </div>
      </div>
      <img
        className="w-full"
        src={faker.image.fashion()}
        alt="Sunset in the mountains"
      />

      <p class="text-gray-700 text-base">{faker.lorem.paragraph()}</p>
    </div>
  );
};

export default CommentDetail;
