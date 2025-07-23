import Image from 'next/image';
import IconLike from '../icons/IconLike';
import IconCmt from '../icons/IconCmt';
import { IPost } from '@/interfaces/IPost';
import Link from 'next/link';

export default function ArticlesCard({ post }: { post: IPost }) {
  return (
    <Link href={'/bai-viet/a'}>
      <div className='border border-[#E6E6E6] rounded-md p-3 '>
        <div className='flex gap-1.5'>
          <div className='rounded-[28.524px] w-[29px] h-[29px] overflow-hidden aspect-[1]'>
            <Image
              src='/ava.png'
              width={1000}
              height={1000}
              sizes='100vw'
              alt='ava'
              className='w-full h-full object-cover'
            />
          </div>
          <div>
            <div className='font-semibold text-sm'>{post.user}</div>
            <div className='text-xs text-gray-500'>
              {post.time} · {post.location}
            </div>
          </div>
        </div>

        <p className='text-sm mt-1 line-clamp-2'>{post.content}</p>

        <div className='grid grid-cols-2 gap-1 mt-2'>
          <div className='relative w-full h-[131px] aspect-[100/131]'>
            <Image
              fill
              quality={100}
              sizes='100vw'
              src={post.images[0]}
              alt={``}
              className='object-cover rounded'
            />
          </div>
          <div className='flex flex-col gap-1'>
            {post.images.slice(1).map((img, index) => (
              <div key={index} className='relative w-full h-full'>
                <Image
                  src={img}
                  alt={`post-${post.id}-${index + 1}`}
                  fill
                  quality={100}
                  sizes='100vw'
                  className='object-cover rounded'
                />
              </div>
            ))}
          </div>
        </div>

        <div className='flex gap-5 items-center mt-3 text-sm text-gray-600'>
          <span className='flex gap-2'>
            <IconLike /> {post.likes}
          </span>
          <span className='flex gap-2'>
            <IconCmt /> {post.comments}
          </span>
        </div>
      </div>
    </Link>
  );
}
