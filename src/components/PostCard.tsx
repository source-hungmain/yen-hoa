import Image from "next/image";
import IconLike from "./Icons/IconLike";
import IconCmt from "./Icons/IconCmt";
import { IPost } from "@/interfaces/IPost";


export default function PostCard({ post }: { post: IPost }) {
    return (
        <div className="border border-[#E6E6E6] rounded-md p-3 w-[300px]">
            <div className="font-semibold text-sm">{post.user}</div>
            <div className="text-xs text-gray-500">
                {post.time} · {post.location}
            </div>

            <p className="text-sm mt-1">{post.content}</p>

            <div className="grid grid-cols-3 gap-1 mt-2">
                {post.images.map((img, index) => (
                    <Image
                        key={index}
                        src={img}
                        alt={`post-${post.id}-${index}`}
                        width={100}
                        height={100}
                        className="object-cover w-full h-20 rounded"
                    />
                ))}
            </div>

            <div className="flex justify-between items-center mt-3 text-sm text-gray-600">
                <span className="flex gap-2">
                    <IconLike /> {post.likes}
                </span>
                <span className="flex gap-2">
                    <IconCmt /> {post.comments}
                </span>
            </div>
        </div>
    );
}
