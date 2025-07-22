import Header from "@/components/Header/Header";
import IconAddress from "@/components/Icons/IconAddress";
import IconCoQuan from "@/components/Icons/IconCoQuan";
import IconFood from "@/components/Icons/IconFood";
import IconHome from "@/components/Icons/IconHome";
import IconSearch from "@/components/Icons/IconSearch";
import IconTienTich from "@/components/Icons/IconTienTich";
import IconWeather from "@/components/Icons/IconWeather";
import PostCard from "@/components/PostCard";



const posts = [
  {
    id: 1,
    user: "Ngọc Anh Chuyên xe...",
    time: "3 giờ trước",
    location: "Thái Nguyên",
    content: "SH 125 Abs đời 2019 còn mới 90% chưa đụng chạm pass ngay...",
    images: ["/home1.png", "/home2.png", "/home3.png"],
    likes: 12,
    comments: 12,
  },
  {
    id: 2,
    user: "Ngọc Anh Chuyên xe...",
    time: "3 giờ trước",
    location: "Thái Nguyên",
    content: "SH 125 Abs đời 2019 còn mới 90% chưa đụng chạm pass ngay...",
    images: ["/home1.png", "/home2.png", "/home3.png"],
    likes: 12,
    comments: 12,
  },
  {
    id: 3,
    user: "Ngọc Anh Chuyên xe...",
    time: "3 giờ trước",
    location: "Thái Nguyên",
    content: "SH 125 Abs đời 2019 còn mới 90% chưa đụng chạm pass ngay...",
    images: ["/home1.png", "/home2.png", "/home3.png"],
    likes: 12,
    comments: 12,
  },

  {
    id: 4,
    user: "Ngọc Anh Chuyên xe...",
    time: "3 giờ trước",
    location: "Thái Nguyên",
    content: "SH 125 Abs đời 2019 còn mới 90% chưa đụng chạm pass ngay...",
    images: ["/home1.png", "/home2.png", "/home3.png"],
    likes: 12,
    comments: 12,
  },


];



export default function Home() {

  return (
    <>
      <div>
        <Header />
        <div className="flex flex-col gap-2.5 container-main mb-[80px]">
          <div className="w-[100%] ">
            <img src="/logo.png" alt="logo" className="w-[256px] h-[108px] aspect-[265/108] mx-auto" />
          </div>

          <div className="flex items-center justify-between w-[60%] mx-auto bg-white rounded-full shadow px-4 py-2 border border-gray-300">
            <input
              type="text"
              placeholder="Khám phá Yên Hoà"
              className="flex-1 bg-transparent focus:outline-none text-[#757574] placeholder-gray-400 px-2"
            />
            <div className="flex gap-2 ">
              <button className="flex items-center flex-col mt-1">
                <IconAddress />
                <span className="text-[#757574] text-[8px]">Yen Hoa</span>
              </button>

              <div className="mt-2">
                <IconSearch />
              </div>


            </div>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-5">
            <div className="p-4 bg-white ">
              <div className="flex items-center gap-3">

                <div className="w-12 h-12 bg-[#C1E1FF] rounded-full flex items-center justify-center">
                  <IconCoQuan />
                </div>


                <div className="text-[#328BDE] font-semibold leading-[20px]">
                  <div className="text-[16px] uppercase">cơ quan</div>
                  <div className="text-[16px] uppercase">Yên Hòa</div>
                </div>
              </div>

              <div className="mt-4 text-[13px] text-black leading-[25px]">
                <p>Trụ sở Uỷ ban Yên Hoà</p>
                <p>Trụ sở HDND Yên Hoà</p>
                <p>Trụ sở Công An Yên Hoà</p>
                <p>Trụ sở Trạm Y tế Yên Hoà</p>
                <p>Trường tiểu học Yên Hoà</p>
              </div>
            </div>

            <div className="p-4 bg-white hidden md:block">
              <div className="flex items-center gap-3">

                <div className="w-12 h-12 bg-[#C1E1FF] rounded-full flex items-center justify-center">
                  <IconWeather />
                </div>


                <div className="text-[#328BDE] font-semibold leading-[20px]">
                  <div className="text-[16px] uppercase">Thời tiết</div>
                  <div className="text-[16px] uppercase">Yên Hòa</div>
                </div>
              </div>

              <div className="mt-4 text-[13px] text-black leading-[25px]">
                <p>Thời tiết hôm nay Yên Hòa</p>
                <p>Thời tiết ngày mai Yên Hòa</p>
                <p>Thời tiết Yên Hòa 7 ngày tới</p>
              </div>
            </div>

            <div className="p-4 bg-white">
              <div className="flex items-center gap-3">

                <div className="w-12 h-12 bg-[#C1E1FF] rounded-full flex items-center justify-center">
                  <IconFood />
                </div>


                <div className="text-[#328BDE] font-semibold leading-[20px]">
                  <div className="text-[16px] uppercase">Ẩm thực</div>
                  <div className="text-[16px] uppercase">Yên Hòa</div>
                </div>
              </div>

              <div className="mt-4 text-[13px] text-black leading-[25px]">
                <p>Nhà hàng Yên Hoà</p>
                <p>Đặc sản Yên Hoà</p>
                <p>Quán ngon Yên Hoà</p>
                <p>Quán ăn sáng Yên Hoà</p>
              </div>
            </div>

            <div className="p-4 bg-white">
              <div className="flex items-center gap-3">

                <div className="w-12 h-12 bg-[#C1E1FF] rounded-full flex items-center justify-center">
                  <IconHome />
                </div>


                <div className="text-[#328BDE] font-semibold leading-[20px]">
                  <div className="text-[16px] uppercase">nhà đất</div>
                  <div className="text-[16px] uppercase">Yên Hòa</div>
                </div>
              </div>

              <div className="mt-4 text-[13px] text-black leading-[25px]">
                <p>Cần bán nhà Yên Hoà</p>
                <p>Cần bán đất Yên Hoà</p>
                <p>Cho thuê nhà Yên Hoà</p>
                <p>Cho thuê phòng trọ</p>
                <p>Yên Hoà</p>
              </div>
            </div>

            <div className="p-4 bg-white">
              <div className="flex items-center gap-3">

                <div className="w-12 h-12 bg-[#C1E1FF] rounded-full flex items-center justify-center">
                  <IconTienTich />
                </div>


                <div className="text-[#328BDE] font-semibold leading-[20px]">
                  <div className="text-[16px] uppercase">TIỆN ÍCH</div>
                  <div className="text-[16px] uppercase">Yên Hòa</div>
                </div>
              </div>

              <div className="mt-4 text-[13px] text-black leading-[25px]">
                <p>Ngân hàng, cây ATM</p>
                <p>Quán cafe tại Yên Hoà</p>
                <p>Quán spa tại Yên Hoà</p>
                <p>Cứu hộ ô tô Yên Hoà</p>
                <p>Taxi tại Yên Hoà</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>



        </div>
      </div>


    </>
  );
}
