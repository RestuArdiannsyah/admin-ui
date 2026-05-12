import React, { useState } from "react";

const PostCard = (props) => {
  const { userId, id, title, body, ...rest } = props;
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <div className="py-4 px-6 flex flex-col rounded-lg bg-white hover:bg-red-50 transition duration-300 ease-in-out hover:border hover:scale-105 shadow">
        <h1 className="font-bold text-2xl text-center mb-3">{title}</h1>
        <p className="font-medium text-gray-700 text-center mb-3">{body}</p>
        <button
          className={`mt-auto ${clicked ? "bg-special-red2  hover:bg-red-600 transition duration-300 ease-in-out" : "bg-gray-01"} w-full text-white p-2 rounded-lg cursor-pointer`}
          onClick={() => setClicked(true)}
        >
          {clicked ? "Tombol sudah diklik" : "Silakan Klik"}
        </button>
      </div>
    </>
  );
};

export default PostCard;
