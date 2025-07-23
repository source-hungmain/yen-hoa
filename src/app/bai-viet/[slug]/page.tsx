import React from 'react';
import Image from 'next/image';
import RelatePosts from '@/components/RelatePosts';
import Link from 'next/link';
import ArticlesCard from '@/components/home/ArticlesCard';

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

const relatePosts = [
  {
    id: 1,
    title: 'Hộ kinh doanh đóng thuế ra sao sau khi bị thuế khoán?',
    content:
      'Praesent porta, magna vitae dapibus pharetra, erat eros efficitur nunc, in mattis lectus libero a velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque suscipit ligula eu turpis dignissim, a eleifend ipsum cursus. Curabitur lacinia nisl ut turpis convallis, at dictum urna aliquet. Sed cursus libero id ullamcorper interdum.',
    images: '/bai-viet-1.png',
  },
  {
    id: 2,
    title: 'Hộ kinh doanh đóng thuế ra sao sau khi bị thuế khoán?',
    content:
      'Praesent porta, magna vitae dapibus pharetra, erat eros efficitur nunc, in mattis lectus libero a velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque suscipit ligula eu turpis dignissim, a eleifend ipsum cursus. Curabitur lacinia nisl ut turpis convallis, at dictum urna aliquet. Sed cursus libero id ullamcorper interdum.',
    images: '/bai-viet-1.png',
  },
  {
    id: 3,
    title: 'Hộ kinh doanh đóng thuế ra sao sau khi bị thuế khoán?',
    content:
      'Praesent porta, magna vitae dapibus pharetra, erat eros efficitur nunc, in mattis lectus libero a velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque suscipit ligula eu turpis dignissim, a eleifend ipsum cursus. Curabitur lacinia nisl ut turpis convallis, at dictum urna aliquet. Sed cursus libero id ullamcorper interdum.',
    images: '/bai-viet-1.png',
  },

  {
    id: 4,
    title: 'Hộ kinh doanh đóng thuế ra sao sau khi bị thuế khoán?',
    content:
      'Praesent porta, magna vitae dapibus pharetra, erat eros efficitur nunc, in mattis lectus libero a velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque suscipit ligula eu turpis dignissim, a eleifend ipsum cursus. Curabitur lacinia nisl ut turpis convallis, at dictum urna aliquet. Sed cursus libero id ullamcorper interdum.',
    images: '/bai-viet-1.png',
  },
];

const newPosts = [
  {
    id: 1,
    title: 'Đồng loạt tổ chức lễ cờ chuông, trồng cầu quốc thái dân an',
    slug: 'le-co-chuong-quoc-thai-dan-an',
  },
  {
    id: 2,
    title: 'Hồ lô 2 dự án có quỹ mở đến số hơn 100 nghìn người ở Khu kinh tế',
    slug: 'ho-lo-2-du-an-quy-mo',
  },
  {
    id: 3,
    title: 'Vì sao các thương hiệu lớn vẫn chọn báo in để truyền thông?',
    slug: 'bao-in-truyen-thong-thuong-hieu-lon',
  },
  {
    id: 4,
    title: 'Đồng loạt tổ chức lễ cờ chuông, trồng cầu quốc thái dân an',
    slug: 'le-co-quoc-thai-lan-2',
  },
  {
    id: 5,
    title: 'Trí tuệ nhân tạo góp phần hồi sinh du lịch địa phương?',
    slug: 'ai-hoi-sinh-du-lich-dia-phuong',
  },
];

const DetailPost = () => {
  return (
    <div className='2xl:w-[70%] w-[90%] mx-auto bg-white'>
      {/* Breadcrumb */}
      <div className='text-xs text-gray-500 px-4 py-2'>
        <p>Trang chủ / Pháp luật / Hồ sơ dự án</p>
      </div>

      {/* Main Content */}
      <div className='flex flex-col md:flex-row px-4 gap-6'>
        {/* Left Sidebar */}
        <div className='md:w-1/5 order-2 md:order-1'>
          <h2 className='font-bold text-lg mb-3'>Bài viết mới</h2>
          <div className='space-y-4'>
            {newPosts.map((post) => (
              <div key={post.id} className='pb-3 border-b border-gray-200'>
                <Link href={`/bai-viet/${post.slug}`}>
                  <p className='font-medium hover:text-blue-600 transition-colors cursor-pointer'>
                    {post.title}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Main Article */}
        <div className='md:w-1/2 order-1 md:order-2'>
          <h1 className='text-2xl font-bold mb-2'>
            Chuyển đổi, chuyển nghề: Hạnh phúc có trong từng con chữ
          </h1>
          <p className='text-gray-500 text-sm mb-4'>01/10/2023 11:56 GMT+7</p>

          <p className='mb-4 font-bold text-justify'>
            Nghề báo là một hành trình đặc biệt, nơi những con chữ không chỉ kể
            chuyện mà còn gửi gắm tâm hơn, cảm xúc và cả những giấc mơ của người
            viết. Trong từng bài viết, từng dòng tin, nhà báo không chỉ truyền
            tải thông tin mà còn mang đến những giá trị nhân văn, những góc nhìn
            mới về cuộc sống.
          </p>

          <div className='my-4'>
            <Image
              src='/detail-1.png'
              alt='Người dân trong khu vực phong tỏa'
              width={600}
              height={400}
              className='w-full h-auto'
            />
          </div>

          <p className='mb-4 text-justify'>
            thoại nhìn, có thể đẩy hào quang với những bài viết được hàng triệu
            người đọc, những chuyến đi khắp muôn nơi, hay những cuộc phỏng vấn
            với những nhân vật nổi tiếng. Nhưng đằng sau đó là những ngày dài
            miệt mài, những đêm thức trắng để hoàn thiện bài viết, và cả những
            áp lực vô hình từ thời hạn, từ trách nhiệm với sự thật. Hạnh phúc
            của người làm báo không phải là điều dễ thấy, mà thường ẩn sâu trong
            những khoảnh khắc nhỏ bé: một lời cảm ơn từ người được giúp đỡ, một
            câu chuyện thay đổi cách nhìn của độc giả, hay đơn giản là cảm giác
            thỏa mãn khi hoàn thành một bài viết tâm huyết.
          </p>

          <p className='mb-4 text-justify'>
            Nhiều người cho rằng nghề báo là một nghề nhiều áp lực: chạy đua với
            thời gian, đối mặt với hiểm nguy, chịu sự soi xét từ công chúng.
            Điều đó đúng, nhưng với những người đã trót hello world với nghề,
            niềm hạnh phúc lại đến từ chính những điều tưởng chừng rất nhỏ: một
            tin bài kịp thời, một câu chuyện được phản ánh trung thực, một mảnh
            đời nhỏ bài viết mà được sẻ chia, cứu giúp. Hạnh phúc đôi khi chỉ
            đơn giản là những dòng chữ, tưởng vô tri vô tri, nhưng thực sự có
            thể làm ấm áp cả một cuộc đời.
          </p>

          <div className='my-4'>
            <Image
              src='/detail-2.png'
              alt='Người dân trong khu vực phong tỏa'
              width={600}
              height={400}
              className='w-full h-auto'
            />
          </div>

          <p className='mb-4 text-justify'>
            thoạt nhìn, có thể đầy hào quang với những bài viết được hàng triệu
            người đọc, những chuyến đi khắp muôn nơi, hay những cuộc phỏng vấn
            với những nhân vật nổi tiếng. Nhưng đằng sau đó là những ngày dài
            miệt mài, những đêm thức trắng để hoàn thiện bài viết, và cả những
            áp lực vô hình từ thời hạn, từ trách nhiệm với sự thật. Hạnh phúc
            của người làm báo không phải là điều dễ thấy, mà thường ẩn sâu trong
            những khoảnh khắc nhỏ bé: một lời cảm ơn từ người được giúp đỡ, một
            câu chuyện thay đổi cách nhìn của độc giả, hay đơn giản là cảm giác
            thỏa mãn khi hoàn thành một bài viết tâm huyết. Nhiều người cho rằng
            nghề báo là một nghề nhiều áp lực: chạy đua với thời gian, đối mặt
            với hiểm nguy, chịu sự soi xét từ công chúng. Điều đó đúng, nhưng
            với những người đã trót “nặng lòng” với nghề, niềm hạnh phúc lại đến
            từ chính những điều tưởng chừng rất nhỏ: một tin bài kịp thời, một
            câu chuyện được phản ánh trung thực, một mảnh đời nhờ bài viết mà
            được sẻ chia, cứu giúp. Hạnh phúc đôi khi chỉ đơn giản là những dòng
            chữ, tưởng như vô tri, nhưng thực sự có thể làm ấm áp cả một cuộc
            đời.
          </p>

          {/* Social Engagement Section */}
          <div className='flex items-center justify-between pt-4'>
            <div className='flex items-center space-x-4'>
              <button className='flex items-center space-x-1 bg-[#E6E6E6] py-2 px-3 rounded-full cursor-pointer'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='14'
                  viewBox='0 0 16 14'
                  fill='none'
                >
                  <path
                    d='M8 14L6.84 12.9929C2.72 9.42997 0 7.07248 0 4.19619C0 1.83869 1.936 0 4.4 0C5.792 0 7.128 0.617984 8 1.58692C8.872 0.617984 10.208 0 11.6 0C14.064 0 16 1.83869 16 4.19619C16 7.07248 13.28 9.42997 9.16 12.9929L8 14Z'
                    fill='#FA4949'
                  />
                </svg>
                <span className='text-sm'>0</span>
              </button>
              <button className='flex items-center space-x-1 bg-[#E6E6E6] py-2 px-3 rounded-full cursor-pointer'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='14'
                  height='13'
                  viewBox='0 0 14 13'
                  fill='none'
                >
                  <path
                    d='M14 5.85C14 5.50522 13.8659 5.17456 13.6272 4.93076C13.3885 4.68696 13.0648 4.55 12.7273 4.55H8.70545L9.31636 1.5795C9.32909 1.5145 9.33545 1.443 9.33545 1.3715C9.33545 1.105 9.22727 0.858 9.05545 0.6825L8.38091 0L4.19364 4.277C3.95818 4.5175 3.81818 4.8425 3.81818 5.2V11.7C3.81818 12.0448 3.95227 12.3754 4.19095 12.6192C4.42964 12.863 4.75336 13 5.09091 13H10.8182C11.3464 13 11.7982 12.675 11.9891 12.207L13.9109 7.6245C13.9682 7.475 14 7.319 14 7.15V5.85ZM0 13H2.54545V5.2H0V13Z'
                    fill='#328BDE'
                  />
                </svg>
                <span className='text-sm'>10</span>
              </button>
              <button className='flex items-center space-x-1 bg-[#E6E6E6] py-2 px-3 rounded-full cursor-pointer'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='15'
                  height='15'
                  viewBox='0 0 15 15'
                  fill='none'
                >
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M3.55667 13.11L1.66667 15V11.5358C0.625 10.3192 0 8.77 0 7.08333C0 3.17167 3.35833 0 7.5 0C11.6417 0 15 3.17167 15 7.08333C15 10.995 11.6417 14.1667 7.5 14.1667C6.115 14.1712 4.75384 13.8064 3.55667 13.11Z'
                    fill='black'
                  />
                </svg>
                <span className='text-sm'>15</span>
              </button>
            </div>

            <div className='flex items-center space-x-3'>
              <button className='p-2 cursor-pointer '>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='30'
                  height='30'
                  viewBox='0 0 30 30'
                  fill='none'
                >
                  <circle cx='15' cy='15' r='14.5' stroke='#444545' />
                  <path
                    d='M16.3636 16.8183H18.6364L19.5455 13.182H16.3636V11.3638C16.3636 10.4274 16.3636 9.54559 18.1818 9.54559H19.5455V6.49104C19.2491 6.45195 18.13 6.36377 16.9482 6.36377C14.48 6.36377 12.7273 7.87013 12.7273 10.6365V13.182H10V16.8183H12.7273V24.5456H16.3636V16.8183Z'
                    fill='#444545'
                  />
                </svg>
              </button>
              <button className='p-2 cursor-pointer '>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='31'
                  height='30'
                  viewBox='0 0 31 30'
                  fill='none'
                >
                  <circle cx='15.0769' cy='15' r='14.5' stroke='#444545' />
                  <path
                    d='M16.1996 13.5337V13.1521H17.3221V18.5139H16.6804C16.5534 18.5141 16.4315 18.4631 16.3414 18.372C16.2512 18.2809 16.2003 18.1572 16.1996 18.0279C15.7311 18.3772 15.1653 18.5658 14.5846 18.5648C13.8591 18.5648 13.1632 18.2716 12.6501 17.7496C12.1369 17.2276 11.8484 16.5196 11.8479 15.7813C11.8484 15.0429 12.1369 14.3349 12.6501 13.8129C13.1632 13.2909 13.8591 12.9977 14.5846 12.9977C15.165 12.9969 15.7314 13.1847 16.1996 13.5337ZM11.5571 11.4287V11.6026C11.5571 11.9266 11.5146 12.1912 11.3071 12.5016L11.2821 12.5304C11.213 12.6094 11.1458 12.69 11.0804 12.7721L7.47793 17.374H11.5571V18.0254C11.5571 18.0896 11.5447 18.1532 11.5205 18.2125C11.4963 18.2718 11.4609 18.3257 11.4162 18.3711C11.3715 18.4165 11.3185 18.4525 11.2602 18.477C11.2019 18.5015 11.1394 18.514 11.0763 18.5139H5.79126V18.2069C5.79126 17.8312 5.88293 17.6632 5.99959 17.4885L9.83959 12.65H5.95126V11.4287H11.5571ZM18.6829 18.5139C18.5768 18.5139 18.4751 18.471 18.4001 18.3947C18.3251 18.3183 18.2829 18.2148 18.2829 18.1068V11.4287H19.4838V18.5139H18.6829ZM23.0354 12.9638C23.3972 12.9637 23.7555 13.0361 24.0898 13.1769C24.4241 13.3177 24.7278 13.5242 24.9837 13.7844C25.2397 14.0447 25.4427 14.3538 25.5812 14.6939C25.7198 15.034 25.7911 15.3986 25.7913 15.7668C25.7914 16.135 25.7202 16.4997 25.5819 16.8399C25.4435 17.1801 25.2407 17.4893 24.9849 17.7497C24.7292 18.0102 24.4255 18.2168 24.0913 18.3578C23.7571 18.4988 23.3989 18.5715 23.0371 18.5716C22.3064 18.5718 21.6056 18.2766 21.0888 17.7509C20.5719 17.2253 20.2815 16.5122 20.2813 15.7685C20.281 15.0249 20.5711 14.3116 21.0876 13.7856C21.6041 13.2597 22.3048 12.964 23.0354 12.9638ZM14.5854 17.419C14.7999 17.4239 15.0131 17.3852 15.2127 17.3051C15.4123 17.2251 15.5941 17.1052 15.7475 16.9526C15.9009 16.8 16.0228 16.6177 16.106 16.4165C16.1892 16.2153 16.2321 15.9991 16.2321 15.7808C16.2321 15.5625 16.1892 15.3464 16.106 15.1452C16.0228 14.944 15.9009 14.7617 15.7475 14.6091C15.5941 14.4565 15.4123 14.3366 15.2127 14.2565C15.0131 14.1764 14.7999 14.1377 14.5854 14.1427C14.1649 14.1524 13.7648 14.3293 13.4707 14.6354C13.1767 14.9416 13.0121 15.3527 13.0121 15.7808C13.0121 16.209 13.1767 16.6201 13.4707 16.9262C13.7648 17.2324 14.1649 17.4092 14.5854 17.419ZM23.0354 17.4164C23.4653 17.4164 23.8776 17.2426 24.1815 16.9333C24.4855 16.6239 24.6563 16.2043 24.6563 15.7668C24.6563 15.3293 24.4855 14.9098 24.1815 14.6004C23.8776 14.291 23.4653 14.1172 23.0354 14.1172C22.6056 14.1172 22.1933 14.291 21.8893 14.6004C21.5854 14.9098 21.4146 15.3293 21.4146 15.7668C21.4146 16.2043 21.5854 16.6239 21.8893 16.9333C22.1933 17.2426 22.6056 17.4164 23.0354 17.4164Z'
                    fill='#444545'
                  />
                </svg>
              </button>
              <button className='p-2 cursor-pointer '>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='31'
                  height='30'
                  viewBox='0 0 31 30'
                  fill='none'
                >
                  <circle cx='15.1538' cy='15' r='14.5' stroke='#444545' />
                  <path
                    d='M12.6821 17.472L17.6255 12.5287M10.9322 13.6261L9.88417 14.6741C9.14211 15.4161 8.72522 16.4226 8.72522 17.472C8.72522 18.5215 9.14211 19.5279 9.88417 20.27C10.6262 21.012 11.6327 21.4289 12.6821 21.4289C13.7315 21.4289 14.738 21.012 15.4801 20.27L16.528 19.222M19.3754 16.3746L20.4234 15.3266C21.1655 14.5846 21.5824 13.5781 21.5824 12.5287C21.5824 11.4792 21.1655 10.4728 20.4234 9.73072C19.6814 8.98866 18.6749 8.57178 17.6255 8.57178C16.576 8.57178 15.5696 8.98866 14.8275 9.73072L13.7795 10.7787'
                    stroke='#444545'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>
              <button className='p-2 cursor-pointer '>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='31'
                  height='30'
                  viewBox='0 0 31 30'
                  fill='none'
                >
                  <circle cx='15.2307' cy='15' r='14.5' stroke='#444545' />
                  <path
                    d='M11.7682 10L8.80212 12.969L11.7692 15.936'
                    stroke='#444545'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M13.7473 18.9028H18.6924C20.6704 18.9028 21.6594 17.9138 21.6594 15.9358C21.6594 12.9688 20.6704 12.9688 18.6924 12.9688H8.80225'
                    stroke='#444545'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Ads */}
        <div className='hidden md:block md:w-1/4 md:order-3'>
          <div className='space-y-4'>
            <div>
              <Image
                src='/banner-1.png'
                alt='Lumière Advertisement'
                width={250}
                height={300}
                className='w-full h-auto'
              />
            </div>
            <div>
              <Image
                src='/banner-2.png'
                alt='Real Estate Advertisement'
                width={250}
                height={300}
                className='w-full h-auto'
              />
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles Section */}
      <div className='mt-8'>
        <h2 className='text-xl font-bold mb-4'>Bài viết liên quan</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          {relatePosts.map((item) => (
            <RelatePosts key={item.id} post={item} />
          ))}
        </div>
      </div>
      {/* Classified Ads Section */}
      <div className='mt-8 mb-20'>
        <h2 className='text-xl font-bold mb-4'>Tin rao vặt</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          {posts.map((post) => (
            <ArticlesCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default DetailPost;
