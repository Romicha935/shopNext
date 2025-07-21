// // "use client";
// // import React, { useState } from "react";

// // type Review = {
// //   name: string;
// //   comment: string;
// //   rating: number;
// // };

// // const ProductReview = () => {
// //   const [reviews, setReviews] = useState<Review[]>([]);
// //   const [name, setName] = useState("");
// //   const [comment, setComment] = useState("");
// //   const [rating, setRating] = useState(5);

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     const newReview: Review = { name, comment, rating };
// //     setReviews([newReview, ...reviews]);
// //     setName("");
// //     setComment("");
// //     setRating(5);
// //   };

// //   return (
// //     <div>
// //       <h2 className="text-xl font-bold">Add a Review</h2>
// //       <form onSubmit={handleSubmit} className="space-y-2 my-4">
// //         <input
// //           type="text"
// //           placeholder="Your Name"
// //           className="border w-full px-3 py-1"
// //           value={name}
// //           onChange={(e) => setName(e.target.value)}
// //           required
// //         />
// //         <textarea
// //           placeholder="Your Review"
// //           className="border w-full px-3 py-1"
// //           value={comment}
// //           onChange={(e) => setComment(e.target.value)}
// //           required
// //         ></textarea>
// //         <select
// //           value={rating}
// //           onChange={(e) => setRating(Number(e.target.value))}
// //           className="border px-2"
// //         >
// //           {[5, 4, 3, 2, 1].map((r) => (
// //             <option key={r} value={r}>
// //               {r} Star
// //             </option>
// //           ))}
// //         </select>
// //         <button type="submit" className="bg-black text-white px-4 py-2">
// //           Submit Review
// //         </button>
// //       </form>

// //       <div>
// //         <h3 className="font-semibold">All Reviews:</h3>
// //         {reviews.map((rev, idx) => (
// //           <div key={idx} className="border p-2 my-2">
// //             <p className="font-bold">{rev.name}</p>
// //             <p>{rev.comment}</p>
// //             <p>⭐ {rev.rating} / 5</p>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductReview;






// import React from "react";

// interface Review {
//   name: string;
//   comment: string;
//   rating: number;
//   date: string;
// }

// const ReviewList = ({ reviews = [] }: { reviews?: Review[] }) => {
//   return (
//     <div className="space-y-4">
//       {reviews.length === 0 && <p>No reviews yet.</p>}

//       {reviews.map((review, idx) => (
//         <div
//           key={idx}
//           className="border rounded p-4 shadow-sm bg-white text-black"
//         >
//           <div className="flex justify-between">
//             <h4 className="font-semibold">{review.name}</h4>
//             <span className="text-sm text-gray-500">{review.date}</span>
//           </div>
//           <div className="text-yellow-500">
//             {"★".repeat(review.rating)}{" "}
//             {"☆".repeat(5 - review.rating)}
//           </div>
//           <p className="mt-2">{review.comment}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ReviewList;







"use client"
import { useEffect, useState } from 'react';

const ReviewsSection = ({ count }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const res = await fetch('/api/reviews');
      const data = await res.json();
      setReviews(data.slice(0, count)); // যত টা দেখাতে চাও
    };

    fetchReviews();
  }, [count]);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Customer Reviews</h2>
      {reviews.map((review, index) => (
        <div key={index} className="border p-4 rounded shadow">
          <p className="font-medium">{review.user}</p>
          <p className="text-yellow-500">
            {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
          </p>
          <p>{review.comment}</p>
          <p className="text-sm text-gray-500">
            {new Date(review.date).toLocaleDateString()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ReviewsSection;
