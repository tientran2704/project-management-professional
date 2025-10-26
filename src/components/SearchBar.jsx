export default function SearchBar({ onSearch }) {
  const submit = (e) => {
    e.preventDefault();
    const q = Object.fromEntries(new FormData(e.currentTarget));
    onSearch?.(q);
  };

  return (
    <section className="bg-white border-b">
      <form
        onSubmit={submit}
        className="max-w-6xl mx-auto px-4 py-4 grid gap-2 md:grid-cols-5"
      >
        <input name="keyword" placeholder="Từ khóa: gần trường, có gác..." className="md:col-span-2 px-3 py-2 border rounded-lg" />
        <select name="city" className="px-3 py-2 border rounded-lg">
          <option value="">Đà Nẵng</option>
          <option>Quảng Nam</option>
          <option>Quảng Ngãi</option>
        </select>
        <select name="district" className="px-3 py-2 border rounded-lg">
          <option value="">Quận/Huyện</option>
          <option>Ngũ Hành Sơn</option>
          <option>Liên Chiểu</option>
          <option>Sơn Trà</option>
        </select>
        <select name="price" className="px-3 py-2 border rounded-lg">
          <option value="">Mức giá</option>
          <option value="under2">Dưới 2 triệu</option>
          <option value="2to3">2–3 triệu</option>
          <option value="3to5">3–5 triệu</option>
          <option value="over5">Trên 5 triệu</option>
        </select>
        <button className="md:col-span-5 md:justify-self-end px-4 py-2 rounded-lg bg-red-500 text-white">
          Tìm kiếm
        </button>
      </form>

      <div className="max-w-6xl mx-auto px-4 pb-3 flex flex-wrap gap-2">
        {["Gần ĐH Đông Á", "Có máy lạnh", "Ở ghép", "Có gác", "Có nội thất"].map(t=>(
          <button key={t} className="px-3 py-1 rounded-full border bg-gray-50">{t}</button>
        ))}
      </div>
    </section>
  );
}
