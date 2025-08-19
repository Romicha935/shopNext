// components/Sidebar.tsx
'use client';
import Link from 'next/link';

const categories = ['all', 'beauty', 'jewelry', 'saree', 'western'];
const prices = [
  { label: '$1 - $2000', min: 1, max: 2000 },
  { label: '$2001 - $5000', min: 2001, max: 5000 },
  { label: '$5001 - $10000', min: 5001, max: 10000 },
];

export default function Sidebar() {
  return (
    <aside className="w-48 p-4 border-r">
      <h2 className="font-bold mb-2">Categories</h2>
      <ul className="space-y-1 mb-4">
        {categories.map((cat) => (
          <li key={cat}>
            <Link href={`/products?category=${cat}&price=all`}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </Link>
          </li>
        ))}
      </ul>

      <h2 className="font-bold mb-2">Price</h2>
      <ul className="space-y-1">
        {prices.map((p) => (
          <li key={p.label}>
            <Link href={`/products?category=all&price=${p.min}-${p.max}`}>
              {p.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
