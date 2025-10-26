export default function SidebarFilters() {
  return (
    <aside className="bg-white border rounded-xl p-4 sticky top-24 h-fit">
      <h3 className="font-semibold">Bộ lọc</h3>
      <div className="mt-2 space-y-2 text-gray-600">
        {["Có máy lạnh","WC riêng","Cho để xe","Ở ghép"].map((t)=>(
          <label key={t} className="block">
            <input type="checkbox" className="mr-2" /> {t}
          </label>
        ))}
      </div>
      <hr className="my-3" />
      <h4 className="font-medium">Diện tích</h4>
      <select className="mt-2 w-full px-3 py-2 border rounded-lg">
        <option>Tất cả</option>
        <option>10–20 m²</option>
        <option>20–30 m²</option>
        <option>30+ m²</option>
      </select>
    </aside>
  );
}
