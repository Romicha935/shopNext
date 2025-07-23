'use client'

import { useEffect, useState } from 'react'
import Rating from '@/components/shared/product/rating'

export type Review = {
  user: string;
  rating: number;
  comment: string;
  date: string;
};

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [visibleCount, setVisibleCount] = useState(3)

  const rating = reviews.length
    ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
    : 0;

  const ratingDistribution = reviews.reduce((acc, r) => {
    acc[r.rating] = (acc[r.rating] || 0) + 1;
    return acc;
  }, {} as Record<number, number>)

  useEffect(() => {
    fetch('/api/reviews')
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error('Failed to fetch reviews:', err))
  }, [])

  return (
    <section className="w-full py-2">
      <h1 className="text-2xl font-bold mb-4">Customers Review</h1>
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <div className="w-full md:w-1/3 bg-gray-50 p-10  rounded shadow">
        <div className='w-full text-4xl'>
          
          <Rating rating={rating} numReviews={reviews.length} ratingDistribution={ratingDistribution} />
        </div>
        </div>
        <div className="w-full md:w-2/3 bg-white p-4 rounded shadow space-y-4">
          {reviews.slice(0, visibleCount).map((review, idx) => (
            <div key={idx} className="border p-3 rounded">
              <p className="font-semibold text-2xl">{review.user}</p>
               <p>{review.comment}</p>
              <div className='flex gap-10 items-center '>
                <p className="text-yellow-500 text-4xl">
                {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
              </p>
             
              <p className="text-sm text-gray-500">
                {new Date(review.date).toLocaleDateString()}
              </p>
              </div>
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
