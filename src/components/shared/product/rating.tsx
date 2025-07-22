"use client"
import React from "react"
import { Star } from "lucide-react"

interface RatingProps {
  rating: number
  numReviews?: number
  avgRating?: string,
  ratingDistribution?: {
    5?: number
    4?: number
    3?: number
    2?: number
    1?: number
  }
  size?: number
}

export default function Rating({
  rating = 0,
  numReviews = 0,
  // avgRating= "",
  ratingDistribution,
  size = 6,
}: RatingProps) {
  const fullStars = Math.floor(rating)
  const partialStar = rating - fullStars
  const emptyStars = 5 - Math.ceil(rating)

  return (
    <div>
      {/* Stars */}
      <div
        className="flex text-yellow-400 items-center"
        aria-label={`Rating: ${rating} out of 5 stars`}
      >
        {[...Array(fullStars)].map((_, i) => (
          <Star
            key={`full-${i}`}
            style={{ width: `${size * 4}px`, height: `${size * 4}px` }}
            className="fill-yellow-400 text-yellow-400"
          />
        ))}
        {partialStar > 0 && (
          <div className="relative" style={{ width: `${size * 4}px`, height: `${size * 4}px` }}>
            <Star
              className="text-yellow-400"
              style={{ width: `${size * 4}px`, height: `${size * 4}px` }}
            />
            <div
              className="absolute top-0 left-0 overflow-hidden"
              style={{ width: `${partialStar * 100}%`, height: '100%' }}
            >
              <Star
                className="fill-yellow-400 text-yellow-400"
                style={{ width: `${size * 4}px`, height: `${size * 4}px` }}
              />
            </div>
          </div>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Star
            key={`empty-${i}`}
            className="text-gray-300"
            style={{ width: `${size * 4}px`, height: `${size * 4}px` }}
          />
        ))}
      </div>

      {/* Number of Reviews */}
      <p className="text-sm text-gray-600 mt-1">
        {numReviews} review{numReviews !== 1 ? "s" : ""}
      </p>

      {/* Optional: Show rating distribution bars */}
      {ratingDistribution && (
        <div className="mt-2 w-40">
          {[5, 4, 3, 2, 1].map((star) => {
            const count = ratingDistribution[star as keyof typeof ratingDistribution] || 0
            const total =
              Object.values(ratingDistribution).reduce((acc, val) => acc + val, 0) || 1
            const widthPercent = (count / total) * 100

            return (
              <div key={star} className="flex items-center mb-1 text-xs text-gray-700">
                <span className="w-4">{star}★</span>
                <div className="flex-1 h-2 bg-gray-300 rounded mx-2 overflow-hidden">
                  <div
                    className="h-2 bg-yellow-400"
                    style={{ width: `${widthPercent}%` }}
                  ></div>
                </div>
                <span>{count}</span>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
