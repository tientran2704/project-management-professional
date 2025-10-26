export default function Pagination() {
  return (
    <div className="flex gap-2 justify-center mt-4">
      {["1","2","3","Tiếp »"].map((p,i)=>(
        <a key={i} className={`px-3 py-1 rounded-lg border ${i===0 ? "bg-blue-600 text-white border-blue-600" : "bg-white"}`}>
          {p}
        </a>
      ))}
    </div>
  );
}
