import React from 'react';
import ArticlesCard from './ArticlesCard';

export default function ArticlesList() {
  const posts = [
    {
      id: 1,
      user: 'Ngọc Anh Chuyên xe...',
      time: '3 giờ trước',
      location: 'Thái Nguyên',
      content: 'SH 125 Abs đời 2019 còn mới 90% chưa đụng chạm pass ngay...',
      images: ['/home1.png', '/home2.png', '/home3.png'],
      likes: 12,
      comments: 12,
    },
    {
      id: 2,
      user: 'Ngọc Anh Chuyên xe...',
      time: '3 giờ trước',
      location: 'Thái Nguyên',
      content: 'SH 125 Abs đời 2019 còn mới 90% chưa đụng chạm pass ngay...',
      images: ['/home1.png', '/home2.png', '/home3.png'],
      likes: 12,
      comments: 12,
    },
    {
      id: 3,
      user: 'Ngọc Anh Chuyên xe...',
      time: '3 giờ trước',
      location: 'Thái Nguyên',
      content: 'SH 125 Abs đời 2019 còn mới 90% chưa đụng chạm pass ngay...',
      images: ['/home1.png', '/home2.png', '/home3.png'],
      likes: 12,
      comments: 12,
    },

    {
      id: 4,
      user: 'Ngọc Anh Chuyên xe...',
      time: '3 giờ trước',
      location: 'Thái Nguyên',
      content: 'SH 125 Abs đời 2019 còn mới 90% chưa đụng chạm pass ngay...',
      images: ['/home1.png', '/home2.png', '/home3.png'],
      likes: 12,
      comments: 12,
    },
  ];
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
      {posts &&
        posts.length > 0 &&
        posts.map((post) => <ArticlesCard key={post.id} post={post} />)}
    </div>
  );
}
