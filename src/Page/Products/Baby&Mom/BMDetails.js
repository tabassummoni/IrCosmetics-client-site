import React, { useContext } from 'react';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contex/AuthProvider';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useCart from '../../../hooks/useCart';

const BMDetails = () => {
  const { _id, name, image, price, details, expiration } = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handleAddTOCart = () => {
    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price
      };
      axiosSecure.post('/cartItem', cartItem)
        .then(res => {
          if (res.data.insertedId) {
            refetch();
            Swal.fire({
              title: "Success!",
              text: `${name} has been added to your cart.`,
              icon: "success",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "View Cart",
              cancelButtonText: "Continue Shopping"
            }).then((result) => {
              if (result.isConfirmed) {
                navigate('/dashboard/cart');
              }
            });
          }
        })
        .catch(error => {
          console.error("Failed to add item to cart:", error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong! Please try again.',
          });
        });
    } else {
      Swal.fire({
        title: "You are not logged In",
        text: "Please login to add to the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className='lg:p-7 bg-black lg:flex'>
      <div className='w-96'>
        <img className='w-96 md:ml-48' src={image} alt={name} />
      </div>
      <div className="lg:ml-56 md:ml-14 ml-4">
        <h2 className="text-amber-50 font-bold text-2xl mt-12">{name}</h2>
        <h2 className="text-amber-50 font-xl mt-5">{price} Tk</h2>
        <p className='text-amber-50 font-xl mt-5'>{details}</p>
        <h2 className="text-amber-50 text-xl mt-2">Expiration Date: {expiration}</h2>
        <div className='flex gap-3'>
          <div className="card-actions lg:justify-center justify-end mt-4">
            <button
              onClick={handleAddTOCart}
              className="mb-5">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BMDetails;