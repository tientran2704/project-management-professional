const ITEMS = [
  "Trang chủ",
  "Cho thuê phòng trọ",
  "Nhà cho thuê",
  "Cho thuê căn hộ",
  "Cho thuê mặt bằng",
  "Tìm người ở ghép",
  "Bán Căn Hộ",
  "Bán Nhà",
  "Blog",
];

export default function PrimaryNav() {
  return (
    <div className="w-full bg-blue-700">
      <nav className="max-w-6xl mx-auto px-4 overflow-x-auto no-scrollbar">
        <ul className="flex items-center gap-1 py-2 text-white text-[15px] whitespace-nowrap">
          {ITEMS.map((t, i) => (
            <li key={t}>
              <a
                href="#"
                className={`px-4 py-2 inline-block rounded-sm border border-blue-600/50
                 hover:bg-blue-600 transition
                 ${i === 0 ? "bg-rose-600 border-rose-600" : ""}`}
              >
                {t}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
