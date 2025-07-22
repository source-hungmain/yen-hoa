import React from "react";
import { IRelatePosts } from "@/interfaces/RelatePosts";
import Image from "next/image";

const RelatePosts = ({ post }: { post: IRelatePosts }) => {
  return (
    <>
      <div className="bg-[#F7F7F7] hover:shadow-md transition-shadow cursor-pointer">
        <Image
          src={post.images}
          alt={post.title}
          width={200}
          height={120}
          className="w-full h-[200px] object-cover"
        />
        <div className="p-3">
          <h3 className="font-bold text-lg mb-2 line-clamp-2">{post.title}</h3>
          <p className="text-sm text-gray-500 line-clamp-3">{post.content}</p>
        </div>
      </div>
    </>
  );
};

export default RelatePosts;
