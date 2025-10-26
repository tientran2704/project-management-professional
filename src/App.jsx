import { useMemo, useState } from "react";
import Header from "./components/Header";
import PrimaryNav from "./components/PrimaryNav";   // ← thêm
import SearchBar from "./components/SearchBar";
import SidebarFilters from "./components/SidebarFilters";
import RoomCard from "./components/RoomCard";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";
import { ROOMS } from "./data/rooms";

export default function App() {
  const [query, setQuery] = useState({});
  const data = useMemo(() => {
    let list = [...ROOMS];
    if (query.keyword) {
      const k = query.keyword.toLowerCase();
      list = list.filter(
        (r) =>
          r.title.toLowerCase().includes(k) ||
          r.desc.toLowerCase().includes(k)
      );
    }
    if (query.district) list = list.filter((r) => r.district === query.district);
    if (query.price) {
      if (query.price === "under2") list = list.filter((r) => r.price < 2_000_000);
      if (query.price === "2to3") list = list.filter((r) => r.price >= 2_000_000 && r.price <= 3_000_000);
      if (query.price === "3to5") list = list.filter((r) => r.price > 3_000_000 && r.price <= 5_000_000);
      if (query.price === "over5") list = list.filter((r) => r.price > 5_000_000);
    }
    return list;
  }, [query]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <PrimaryNav />       {/* ← nằm dưới header, giống web mẫu */}
      <SearchBar onSearch={setQuery} />

      <main className="max-w-6xl mx-auto px-4 py-6 grid gap-5 md:grid-cols-[260px_1fr]">
        <SidebarFilters />
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold">Tin nổi bật gần Đại học Đông Á</h2>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <span>Sắp xếp:</span>
              <select className="px-2 py-1 border border-slate-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/60">
                <option>Mới nhất</option>
                <option>Giá tăng dần</option>
                <option>Giá giảm dần</option>
                <option>Gần bạn</option>
              </select>
            </div>
          </div>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {data.map((it) => (
              <RoomCard key={it.id} item={it} />
            ))}
          </div>

          <Pagination />
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto h-16 px-4 flex items-center justify-between text-sm text-slate-600">
          <p>© 2025 Nền tảng thuê trọ sinh viên Đông Á</p>
          <div className="flex gap-4">
            <a className="hover:text-slate-900">Điều khoản</a>
            <a className="hover:text-slate-900">Chính sách</a>
            <a className="hover:text-slate-900">Hỗ trợ</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
