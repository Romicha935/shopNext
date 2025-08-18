export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="h-80 bg-gray-200 animate-pulse rounded-2xl" />
      ))}
    </div>
  )
}
