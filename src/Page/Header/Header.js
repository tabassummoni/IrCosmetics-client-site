import React, { useContext, useEffect, useState } from 'react';
import logo from '../../image/logo2.png'
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import { AuthContext } from '../../contex/AuthProvider';

const Header = () => {
  const [cart] = useCart();
    const { user } = useContext(AuthContext);
  const [role, setRole] = useState(null);

  // 🔹 Get user role from server when logged in
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:4000/users/${user.email}/role`)
        .then((res) => res.json())
        .then((data) => setRole(data.role))
        .catch((err) => console.error("Error getting role", err));
    } else {
      setRole(null);
    }
  }, [user?.email]);
  return (
    <div>

      <div className=' w-full  text-white' style={{ background: '#4a0429' }}>
        <div class="navbar ">
          <div class="flex-1">

            <img className='lg:w-32 lg:h-20 md:h-36 md:w-44 h-20 w-32  lg:ml-2   hidden md:hidden' src={logo}></img>
            <a href='/' class="btn btn-ghost text-xl"> </a>
          </div>

          <div class=" lg:flex-none">


            <ul class="menu menu-horizontal px-1 gap-5 lg:ml-3 ml-20  lg:text-lg md:text-base text-base ">

              <Link className=' lg:text-xl md:text-base text-sm text-white font-bold' to='/'>𝙷𝚘𝚖𝚎</Link>
              <Link className=' lg:text-xl md:text-base text-sm text-white font-bold' to='/skincare'>𝚂𝚔𝚒𝚗 𝙲𝚊𝚛𝚎</Link>
              <Link className=' lg:text-xl md:text-base text-sm text-white font-bold' to='/makeUpCare'>𝙼𝚊𝚔𝚎 𝚄𝚙</Link>
              <Link className=' lg:text-xl md:text-base text-sm text-white font-bold' to='/hairCare'>𝙷𝚊𝚒𝚛 𝙲𝚊𝚛𝚎</Link>
              <Link className=' lg:text-xl md:text-base text-sm text-white font-bold' to='/babyCare'> 𝙱𝚊𝚋𝚢 𝙲𝚊𝚛𝚎</Link>
              {/* <Link className=' lg:text-xl md:text-base text-sm text-white font-bold' to='dashboard/cart'>𝙲𝚊𝚛𝚝 𝙸𝚝𝚎𝚖
                <div className='badge badge-outline ml-2 text-white text-xl' style={{ background: '#4a0429' }}>{cart.length}</div></Link> */}
                {/* {user && (
              role === "admin" ? (
                <Link
                  className="lg:text-xl md:text-base text-sm text-white font-bold"
                  to="/dashboard"
                >
                  🛠️ 𝙳𝚊𝚜𝚑𝚋𝚘𝚊𝚛𝚍
                </Link>
              ) : (
                <Link
                  className="lg:text-xl md:text-base text-sm text-white font-bold"
                  to="/dashboard/cart"
                >
                  𝙲𝚊𝚛𝚝 𝙸𝚝𝚎𝚖
                  <div
                    className="badge badge-outline ml-2 text-white text-xl"
                    style={{ background: "#4a0429" }}
                  >
                    {cart.length}
                  </div>
                </Link>
              )
            )} */}



              {/* <li>
  <details>
    <summary>Parent</summary>
    <ul class="bg-base-100 rounded-t-none p-2">
      <li><a>Login</a></li>
      <li><a>SignUp</a></li>
    </ul>
  </details>
</li> */}

{/* 🔹 Conditional Role-Based Links */}
            {user ? (
              role === 'admin' ? (
                <Link
                  className="lg:text-xl md:text-base text-sm text-white font-bold"
                  to="/dashboard"
                >
                  🛠️ 𝙳𝚊𝚜𝚑𝚋𝚘𝚊𝚛𝚍
                </Link>
              ) : (
                <Link
                  className="lg:text-xl md:text-base text-sm text-white font-bold flex items-center"
                  to="/dashboard/cart"
                >
                  𝙲𝚊𝚛𝚝 𝙸𝚝𝚎𝚖
                  <div
                    className="badge badge-outline ml-2 text-white text-sm md:text-base lg:text-xl"
                    style={{ background: '#4a0429' }}
                  >
                    {cart.length}
                  </div>
                </Link>
              )
            ) : (
              // 🔹 Guest → Always show Cart Item (0)
              <Link
                className="lg:text-xl md:text-base text-sm text-white font-bold flex items-center"
                to="/dashboard/cart"
              >
                𝙲𝚊𝚛𝚝 𝙸𝚝𝚎𝚖
                <div
                  className="badge badge-outline ml-2 text-white text-sm md:text-base lg:text-xl"
                  style={{ background: '#4a0429' }}
                >
                  0
                </div>
              </Link>
            )}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Header;