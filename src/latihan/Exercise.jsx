import React from "react";
import UserCard from "./UserCard";
import posts from "./postsData";
import PostCard from "./PostCard";

function Exercise() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-special-red2">
          Post Cards
        </h1>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 md:mx-6 lg:mx-24">
          {posts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Exercise;
