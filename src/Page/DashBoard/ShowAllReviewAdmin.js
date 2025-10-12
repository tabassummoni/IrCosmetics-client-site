import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ShowAllReviewAdmin = () => {
 const [reviews, setReviews] = useState([]);

  // Load all reviews
  const fetchReviews = async () => {
    const res = await fetch("http://localhost:4000/review");
    const data = await res.json();
    setReviews(data);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  // Delete review
  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This review will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      const res = await fetch(`http://localhost:4000/review/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (res.ok) {
        Swal.fire("Deleted!", data.message, "success");
        // remove deleted review from state instantly
        setReviews((prev) => prev.filter((r) => r._id !== id));
      } else {
        Swal.fire("Error!", data.message || "Failed to delete.", "error");
      }
    }
  };

  return (
<div className="p-6">
      <h2 className="text-3xl font-bold mb-4 text-center underline">𝐔𝐬𝐞𝐫 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐑𝐞𝐯𝐢𝐞𝐰𝐬</h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Rating</th>
              <th>Comment</th>
              {/* <th>Action</th> */}
            </tr>
          </thead>
          <tbody>
            {reviews.map((rev, i) => {
              const rating = Math.min(Math.max(rev.rating ?? 0, 0), 5);
              return (
                <tr key={rev._id}>
                  <td>{i + 1}</td>
                  <td>{rev.username}</td>
                  <td>
                    <span className="text-yellow-400">
                      {"★".repeat(rating)}
                      {"☆".repeat(5 - rating)}
                    </span>
                  </td>
                  <td>{rev.comment}</td>
                  {/* <td>
                    <button
                      onClick={() => handleDelete(rev._id)}
                      className="btn btn-sm btn-error"
                    >
                      Delete
                    </button>
                  </td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {reviews.length === 0 && (
        <p className="text-center text-gray-500 mt-4">No reviews found.</p>
      )}
    </div>
  );
}

export default ShowAllReviewAdmin;