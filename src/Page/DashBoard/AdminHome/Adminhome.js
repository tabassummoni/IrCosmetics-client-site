import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const Adminhome = () => {
    const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const res = await fetch('http://localhost:4000/orders');
      const data = await res.json();
      setOrders(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleConfirm = async (orderId) => {
   try {
    const res = await fetch(`http://localhost:4000/orders/${orderId}/confirm`, {
      method: 'PATCH',
    });
    const data = await res.json();

    if (data.modifiedCount > 0) {
      // Update UI: change status and disable button
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === orderId
            ? { ...order, status: 'confirmed', confirmed: true }
            : order
        )
      );
      Swal.fire('Success!', 'Order confirmed ✅', 'success');
    } else {
      Swal.fire('Error!', 'Failed to confirm order', 'error');
    }
  } catch (err) {
    console.error(err);
    Swal.fire('Error!', 'Network error', 'error');
  }
};

  const totalOrders = orders.length;
  const totalConfirmed = orders.filter((o) => o.confirmed).length;

    return (
        <div>
            <div className='justify-evenly flex px-3'>
                 <h1 className='text-center lg:text-3xl md:text-3xl text-xl  underline text-white'>𝐂𝐥𝐢𝐞𝐧𝐭 𝐎𝐫𝐝𝐞𝐫𝐬</h1>
          
            </div>
        <div className="p-8">
      {/* Total Orders Section */}
      <div className="mb-6  md:text-sm  p-4 bg-gray-100 rounded-lg shadow flex justify-between">
        <h2 className="text-lg md:text-sm font-bold">𝐓𝐨𝐭𝐚𝐥 𝐎𝐫𝐝𝐞𝐫 : {totalOrders}</h2>
        <h2 className="text-lg  font-bold text-green-600">
          𝐂𝐨𝐧𝐟𝐢𝐫𝐦𝐞𝐝: {totalConfirmed}
        </h2>
      </div>

      {/* Orders Table */}
      <div className="overflow-x-auto ">
        <table className="table-auto bg-black text-gray-200 w-full  border-collapse border border-gray-300">
          <thead className="bg-black text-gray-200">
            <tr>
              <th className="border p-2  lg:text-xl md:text-sm text-sm ">#</th>
              <th className="border p-2  lg:text-xl md:text-sm text-sm ">User Name</th>
              <th className="border p-2  lg:text-xl md:text-sm text-sm ">Email</th>
              <th className="border p-2  lg:text-xl md:text-sm text-sm ">Phone</th>
              <th className="border p-2  lg:text-xl md:text-sm text-sm ">Total Amount</th>
              <th className="border p-2  lg:text-xl md:text-sm text-sm ">Payment Method</th>
              <th className="border p-2  lg:text-xl md:text-sm text-sm ">Status</th>
              <th className="border p-2  lg:text-xl md:text-sm text-sm ">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order._id} className={order.confirmed ? 'bg-gray-100 text-gray-400' : ''}>
                <td className="border p-2 bg-black text-gray-200 lg:text-xl md:text-sm text-sm">{index + 1}</td>
                <td className="border p-2 bg-black text-gray-200 lg:text-xl md:text-sm text-sm">{order.userName}</td>
                <td className="border p-2 bg-black text-gray-200 lg:text-xl md:text-sm text-sm">{order.email}</td>
                <td className="border p-2 bg-black text-gray-200 lg:text-xl md:text-sm text-sm">{order.phone}</td>
                <td className="border p-2 bg-black text-gray-200 lg:text-xl md:text-sm text-sm">{order.totalAmount} TK</td>
                <td className="border p-2 bg-black text-gray-200 lg:text-xl md:text-sm text-sm">{order.paymentMethod}</td>
                <td className="border p-2 bg-black text-gray-200 lg:text-xl md:text-sm text-sm">{order.status}</td>
                <td className="border p-2 bg-black text-gray-200 lg:text-xl md:text-sm text-sm">
                  <button
                    disabled={order.confirmed}
                    onClick={() => handleConfirm(order._id)}
                    className={ `px-3 lg:text-xl md:text-sm text-sm py-1 rounded ${
                      order.confirmed
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    {order.confirmed ? 'Confirmed' : 'Confirm Order'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>   
        </div>
    );
};

export default Adminhome;