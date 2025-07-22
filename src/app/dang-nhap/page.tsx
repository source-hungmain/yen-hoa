import IconFacebook from "@/components/icons/IconFacebook";
import IconMail from "@/components/icons/IconMail";

export default function Page() {
    return <>
        <div className="flex min-h-[100vh] bg-[url(/banner.png)] lg:bg-none">
            <div className="hidden lg:block">
                <img src="/banner.png" alt="banner" className="h-[100vh]" />
            </div>
            <div className=" flex flex-col rounded-[10px] bg-white shadow-[1px_1px_4px_1px_rgba(0,0,0,0.15)] gap-[30px] w-[80%] lg:w-[25%] m-auto px-[18px] pb-[38px] pt-[10px]">
                <div className="w-[139px] h-[57px] flex-shrink-0 aspect-[139/57] mx-auto ">
                    <img src="/logo.png" alt="logo" />
                </div>
                <div className="flex flex-col gap-4">
                    <p className="text-[#2A2B2B] text-xl font-semibold leading-[18px] uppercase">ĐĂNG NHẬP</p>
                    <div className="flex flex-col gap-4">
                        <p className="text-[#757574] font-medium text-xs leading[18px]">
                            Với tài khoản YenhoaFun, bạn có thể quản lý thông tin cá nhân và đồng bộ dữ liệu giữa các thiết bị một cách thuận tiện và an toàn.
                        </p>
                        <p className="text-[#757574] font-medium text-xs leading[18px]" >Chưa có tài khoản? <span className="text-xs font-medium leading-[18px] text-[#328BDE] ">Đăng ký</span></p>
                    </div>

                    <button className=" flex rounded-[5px] border border-[#DFDFDF] justify-around pt-[9px] pb-2.5 py-3">
                        <IconMail />
                        <p className="text-[#2A2B2B] text-xs font-medium leading-[18px]">Đăng nhập với Email</p>
                        <div></div>
                    </button>

                    <div className="flex justify-center items-center text-center gap-2 w-[100%]">
                        <div className="h-[1px] bg-[#DFDFDF] w-[43%]"></div>
                        <p className="text-[#757574] text-xs leading-[18px]">Hoặc</p>
                        <div className="h-[1px] bg-[#DFDFDF] w-[43%]"></div>
                    </div>

                    <button className=" flex rounded-[5px] border border-[#DFDFDF] justify-around pt-[9px] pb-2.5 py-3">
                        <IconFacebook />
                        <p className="text-[#2A2B2B] text-xs font-medium leading-[18px]">Tiếp tục với Facebook</p>
                        <div></div>
                    </button>

                    <button className=" flex rounded-[5px] border border-[#DFDFDF] justify-around pt-[9px] pb-2.5 py-3">
                        <div>
                            <img src="/google.png" alt="google" className="w-[18px] h-[18px]" />
                        </div>
                        <p className="text-[#2A2B2B] text-xs font-medium leading-[18px]">Tiếp tục với Google</p>
                        <div></div>
                    </button>

                    <button className=" flex rounded-[5px] border border-[#DFDFDF] justify-around pt-[9px] pb-2.5 py-3">
                        <div>
                            <img src="apple.png" alt="apple" className="w-[14px] h-[17px]" />
                        </div>
                        <p className="text-[#2A2B2B] text-xs font-medium leading-[18px]">Tiếp tục với Apple</p>
                        <div></div>
                    </button>
                </div>
            </div>
        </div>


    </>
}