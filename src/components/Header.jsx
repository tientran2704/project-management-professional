export default function Header() {
  return (
    <header className="bg-white border-b border-slate-200">
      {/* Hàng trên: logo + nút */}
      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo chỉnh chuẩn */}
        <a href="#" className="block select-none leading-tight">
          {/* Dòng nhỏ trên */}
          <div className="text-[15px] tracking-wide mb-1">
            <span className="text-rose-600 font-semibold">Alonhatro</span>
            <span className="text-slate-700"> cho thuê nhà trọ, phòng trọ</span>
          </div>

          {/* Logo chính */}
          <div className="flex items-baseline gap-1">
            <span className="text-[45px] font-black text-blue-700 leading-none">
              Alo
            </span>
            <span className="text-[45px] font-black text-rose-600 leading-none">
              nhatro
            </span>
          </div>

          {/* Gạch chân */}
          <div className="h-[5px] w-52 bg-blue-700 rounded-full mt-1 mb-1"></div>

          {/* Slogan */}
          <div className="text-[13px] text-slate-600 mt-1">
            Nâng tầm giá trị cuộc sống
          </div>
        </a>

        {/* Nút đăng nhập - đăng ký */}
        <div className="flex gap-3">
          <button className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:brightness-110 shadow-sm transition active:scale-[.97]">
            Đăng nhập
          </button>
          <button className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:brightness-110 shadow-sm transition active:scale-[.97]">
            Đăng ký
          </button>
        </div>
      </div>
    </header>
  );
}
