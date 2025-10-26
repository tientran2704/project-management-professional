export default function RoomCard({ item }) {
  return (
    <article className="bg-white border rounded-xl overflow-hidden flex flex-col">
      <img src={item.img} alt={item.title} className="w-full h-44 object-cover" />
      <div className="p-3 flex flex-col gap-2">
        <h3 className="text-base font-semibold">{item.title}</h3>
        <div className="flex flex-wrap gap-2 text-sm text-gray-600">
          <span className="text-green-600 font-bold">{item.price.toLocaleString()}đ/tháng</span>
          <span>{item.area} m²</span>
          <span>{item.district}, {item.city}</span>
        </div>
        <p className="text-sm text-gray-800">{item.desc}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{item.time}</span>
          <button className="px-3 py-1 rounded-lg border">Xem chi tiết</button>
        </div>
      </div>
    </article>
  );
}
