'use client'

import { useState } from 'react'
import Rating from '@/components/shared/product/rating'

type Review = {
  user: string;
  rating: number;
  comment: string;
  date: string;
};

type Props = {
  rating: number;
  ratingDistribution: Record<number, number>;
  reviews: Review[];
};

export default function ReviewsSection({ rating, ratingDistribution, reviews }: Props) {
  const [visibleCount, setVisibleCount] = useState(2)

  return (
    <section className="w-full py-8">
      <h1 className="text-2xl font-bold mb-4">Customers Review</h1>
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <div className="w-full md:w-1/3 bg-gray-50 p-4 rounded shadow">
          <Rating rating={rating} ratingDistribution={ratingDistribution} />
        </div>
        <div className="w-full md:w-2/3 bg-white p-4 rounded shadow space-y-4">
          {reviews.slice(0, visibleCount).map((review, idx) => (
            <div key={idx} className="border p-3 rounded">
              <p className="font-semibold">{review.user}</p>
              <p className="text-yellow-500">
                {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
              </p>
              <p>{review.comment}</p>
              <p className="text-sm text-gray-500">
                {new Date(review.date).toLocaleDateString()}
              </p>
            </div>
          ))}
          {visibleCount < reviews.length && (
            <button
              onClick={() => setVisibleCount((prev) => prev + 2)}
              className="text-blue-500 underline hover:text-blue-700"
            >
              See more
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
