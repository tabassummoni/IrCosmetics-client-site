import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../contex/AuthProvider';


const TopHeade = () => {
  const { user, logOut } = useContext(AuthContext);

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

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log('log out')
      })
      .catch(error => {
        console.log('Failed LogOut....')
      })
  }
  return (
    <div className='flex  justify-between font-bold border-b-2 border-spacing-1  border-sky-600  md:border-white lg:border-pink-50' style={{ background: '#4a0429' }} >
 <div className="avatar">
        <div className="w-16 rounded-xl"></div>
      </div>
      <div>
        <ul className='  menu menu-horizontal px-1 gap-3'>
          <li className=' lg:ml-24 md:ml-4  text-white'><a></a></li>
        </ul>
      </div>

      <div >
        <div className='text-white text-end p-2 menu menu-horizontal px-1 gap-5 lg:mr-9  text-xs md:text-sm lg:text-lg'>
          <Link to='/about' className='text-xl'>𝙰𝚋𝚘𝚞𝚝 𝚄𝚜</Link>
          {user ? <>
         
            <Link  className='text-xl  ' to="" onClick={handleLogOut}>𝙻𝚘𝚐 𝙾𝚞𝚝</Link>
             <h2 className='font-bold border border-spacing-2 rounded-xl text-base p-2' style={{fontFamily:'serif'}}>{user?.displayName || dbUser?.name || ""}</h2>
                       
          </> : <>
            <Link to='/sign'className='text-xl '>𝚂𝚒𝚐𝚗 𝚄𝚙</Link>
            <Link to='/login' className='text-xl '>𝙻𝚘𝚐 𝙸𝚗</Link>
          </>}
        </div>
      </div>


    </div>

  );
};

export default TopHeade;