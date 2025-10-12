import React, {useEffect, useContext, useState } from 'react';
import { AuthContext } from '../../contex/AuthProvider';
import Swal from 'sweetalert2';

const AddReview = () => {
const { user } = useContext(AuthContext);
 const [name, setName] = useState("");
   const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [dbUser, setDbUser] = useState(null);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:4000/users/${user.email}`)
        .then(res => res.json())
        .then(data => setDbUser(data))
        .catch(err => console.error(err));
    }
  }, [user?.email]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!rating) {
      Swal.fire({
        icon: "warning",
        title: "Missing Rating",
        text: "Please select a star rating",
      });
      return;
    }

    const data = {
      username: user.displayName,
      rating,
      comment,
    };

    try {
      const res = await fetch("http://localhost:4000/review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Review Submitted!",
          text: result.message || "Thanks for your feedback 💙",
        });

        setRating(0);
        setComment("");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: result.error || "Something went wrong",
        });
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Network Error",
        text: "Failed to connect to the server",
      });
    }
  };

    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center p-6">
      <div className="card w-full max-w-md shadow-xl bg-base-100">
        <div className="card-body">
          <h2 className="card-title justify-center text-2xl font-serif">
            Add Your Review
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Your Name</span>
              </label>
             <input
  type="text"
  className="input input-bordered"
  value={user?.displayName || dbUser?.name || ""}
  onChange={(e) => setName(e.target.value)}
  required
/>
            </div>

            {/* Star Rating */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Rating</span>
              </label>
              <div className="rating rating-lg">
                {[1, 2, 3, 4, 5].map((num) => (
                  <input
                    key={num}
                    type="radio"
                    name="rating"
                    className="mask mask-star-2 bg-yellow-400"
                    checked={rating === num}
                    onChange={() => setRating(num)}
                  />
                ))}
              </div>
            </div>

            {/* Comment */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Your Review</span>
              </label>
              <textarea
                className="textarea textarea-bordered h-24"
                placeholder="Write your review here..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
              ></textarea>
            </div>
 {/* <div>
      {dbUser ? (
        <div>
          <h2>Name: {dbUser.name}</h2>
          <h2>Email: {dbUser.email}</h2>
          <h2>Role: {dbUser.role}</h2>
        </div>
      ) : (
        <p>Loading user...</p>
      )}
    </div> */}
            {/* Submit */}
            <button type="submit" className="btn btn-primary w-full">
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </div>
    );
};

export default AddReview;