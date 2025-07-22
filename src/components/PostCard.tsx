import Image from "next/image";
import IconLike from "./Icons/IconLike";
import IconCmt from "./Icons/IconCmt";
import { IPost } from "@/interfaces/IPost";


export default function PostCard({ post }: { post: IPost }) {
    return (
        <div className="border border-[#E6E6E6] rounded-md p-3 ">
            <div className="flex gap-1.5">
                <div className="rounded-[28.524px] w-[29px] h-[29px] overflow-hidden aspect-[1]">
                    <img src="/ava.png" alt="ava" className="h-[100%]" />
                </div>
                <div >
                    <div className="font-semibold text-sm">{post.user}</div>
                    <div className="text-xs text-gray-500">
                        {post.time} · {post.location}
                    </div>
                </div>

            </div>


            <p className="text-sm mt-1">{post.content}</p>

            <div className="grid grid-cols-2 gap-1 mt-2">
                <div>
                    <Image

                        src={post.images[0]}
                        alt={``}
                        width={100}
                        height={100}
                        className="object-cover w-full h-full rounded"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    {post.images.slice(1).map((img, index) => (
                        <Image
                            key={index}
                            src={img}
                            alt={`post-${post.id}-${index + 1}`}
                            width={100}
                            height={100}
                            className="object-cover w-full h-20 rounded"
                        />
                    ))}
                </div>



            </div>

            <div className="flex gap-5 items-center mt-3 text-sm text-gray-600">
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
