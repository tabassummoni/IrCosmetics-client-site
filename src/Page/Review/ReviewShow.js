
import React, { useEffect, useState } from "react";
const ReviewShow = () => {
  const [reviews, setReviews] = useState([]);

  const fetchReviews = async () => {
    try {
      const res = await fetch("http://localhost:4000/review");
      const data = await res.json();
      setReviews(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  if (reviews.length === 0)
    return <p className="text-center text-gray-500">No reviews yet.</p>;
    return (
      
       <div className="carousel w-full space-x-4 p-4">
      {reviews.map((rev) => {
        // Safe rating values
        const rating = Math.min(Math.max(rev.rating ?? 0, 0), 5);

        // Fallback initials for avatar
        const initials = rev.username
          ? rev.username
              .split(" ")
              .map((n) => n[0])
              .join("")
              .toUpperCase()
          : "A";

        return (
          
          <div key={rev._id} className="carousel-item w-full md:w-1/2 lg:w-1/3 p-2">
            
            <div className="card bg-base-100 shadow-xl w-full">
              <div className="card-body">
                {/* Avatar + Username */}
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center text-center  justify-center text-pink-950 font-bold"style={{fontFamily:'serif'}}>
                      {initials}
                    </div>
                  </div>
                  <h3 className="font-bold text-white">{rev.username || "Anonymous"}</h3>
                </div>

                {/* Star Rating */}
                <div className="flex gap-1 text-yellow-400 mt-2">
                  {"★".repeat(rating)}
                  {"☆".repeat(5 - rating)}
                </div>

                {/* Comment */}
                <p className="mt-2 text-gray-600">{rev.comment}</p>

                {/* Date */}
                <span className="text-xs text-gray-400 mt-2 block">
                  {rev.createdAt
                    ? new Date(rev.createdAt).toLocaleString()
                    : ""}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
      
export default ReviewShow;