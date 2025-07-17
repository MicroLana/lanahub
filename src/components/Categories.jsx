// src/components/Categories.jsx
const categories = [
  { name: "Plumbing", emoji: "🚰" },
  { name: "Electrical", emoji: "💡" },
  { name: "Cleaning", emoji: "🧹" },
  { name: "Mechanic", emoji: "🛠️" },
];

export default function Categories() {
  return (
    <div className="py-10 px-4 bg-white">
      <h2 className="text-2xl font-bold text-center mb-6">Popular Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="bg-gray-100 p-6 rounded-xl text-center hover:shadow-md transition"
          >
            <div className="text-3xl mb-2">{cat.emoji}</div>
            <div className="font-semibold">{cat.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}