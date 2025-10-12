import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../contex/AuthProvider';
import Swal from 'sweetalert2';


const Payment = () => {
    const location = useLocation();
    const { totalAmount, totalItems } = location.state || {};
    const { user } = useContext(AuthContext);
 const navigate = useNavigate();

const [method, setMethod] = useState('');
  const [phone, setPhone] = useState('');

  const deliveryCharge = 200;
  const finalAmount = (totalAmount || 0) + deliveryCharge;

 const handleConfirm = async () => {
  if (!phone.trim()) {
    alert('Please enter your phone number.');
    return;
  }
  if (!/^\d{10,15}$/.test(phone)) {
    alert('Please enter a valid phone number (10–15 digits).');
    return;
  }
  if (!method) {
    alert('Please choose a payment method.');
    return;
  }

  // Prepare order data
  const orderData = {
    userName: user?.displayName || "Guest",
    email: user?.email || "N/A",
    phone,
    totalItems: totalItems || 0,
    totalAmount: finalAmount,
    paymentMethod: method,
    status: method === "cod" ? "pending" : "paid", // optional
  };

  try {
    const res = await fetch("http://localhost:4000/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderData),
    });

    const data = await res.json();

    if (res.ok) {
        await fetch(`http://localhost:4000/cartItem?email=${user.email}`, {
        method: "DELETE",
      });
      // show success alert
      Swal.fire("Success!", "Order confirmed and saved ✅", "success");
      // optional: navigate to success page
      // navigate('/orderSuccess')
      
       navigate('/');
    } else {
      Swal.fire("Error!", data.message || "Order failed", "error");
    }
  } catch (err) {
    console.error(err);
    Swal.fire("Error!", "Network error", "error");
  }
};


    return (
        <div>
               <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          💳 Payment Summary
        </h1>

        {/* Payment Details */}
        <div className="space-y-3 border-b border-gray-200 pb-4 mb-4">
          <div className="flex justify-between text-gray-700 text-lg">
            <span className="font-medium">Total Items</span>
            <span className="font-semibold">{totalItems || 0}</span>
          </div>
          <div className="flex justify-between text-gray-700 text-lg">
            <span className="font-medium">Subtotal</span>
            <span className="font-semibold">{totalAmount || 0} TK</span>
          </div>
          <div className="flex justify-between text-gray-700 text-lg">
            <span className="font-medium">Delivery Charge</span>
            <span className="font-semibold text-orange-600">{deliveryCharge} TK</span>
          </div>
          <div className="flex justify-between text-gray-800 text-xl font-bold pt-2 border-t">
            <span>Total</span>
            <span className="text-green-600">{finalAmount} TK</span>
          </div>
        </div>

        {/* User Info */}
        <div className="space-y-1 mb-4 text-gray-600">
          <p className="text-sm">
            <span className="font-medium">Name:</span> {user?.displayName || 'Guest'}
          </p>
          <p className="text-sm">
            <span className="font-medium">Email:</span> {user?.email || 'N/A'}
          </p>
        </div>

        {/* Phone Number */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-1 font-medium">Phone Number</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Payment Method Selection */}
        <div className="space-y-3 mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Choose Payment Method</h2>
          <label className="flex items-center gap-3 border rounded-xl px-4 py-3 hover:bg-gray-50 cursor-pointer">
            <input
              type="radio"
              name="payment"
              value="paynow"
              onChange={(e) => setMethod(e.target.value)}
            />
            <span className="text-gray-700 font-medium">💳 Pay Now</span>
          </label>
          <label className="flex items-center gap-3 border rounded-xl px-4 py-3 hover:bg-gray-50 cursor-pointer">
            <input
              type="radio"
              name="payment"
              value="cod"
              onChange={(e) => setMethod(e.target.value)}
            />
            <span className="text-gray-700 font-medium">🚚 Cash on Delivery</span>
          </label>
        </div>

        {/* Confirm Button */}
        <button
          onClick={handleConfirm}
          className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold text-lg shadow hover:bg-blue-700 transition"
        >
          Confirm Order
        </button>
      </div>
    </div>
</div>
    );
};

export default Payment;