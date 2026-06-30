import React, { useEffect, useState } from 'react';
import HairShowdetails from './HairShowdetails';

const HairShow = () => {
     
    const [hairProducts ,setHairProducts] = useState([]);
    useEffect ( () => {
        fetch('https://ir-server-site-1.onrender.com/cosmetics')
        .then(res => res.json())
        .then(data => setHairProducts(data))
    })
  
  return (
    <div className='bg-black'>
       <div className='text-3xl text-center p-7 underline md:underline-offset-4 text-white '>💇‍♀️  𝐇𝐚𝐢𝐫 𝐂𝐚𝐫𝐞 𝐏𝐫𝐨𝐝𝐮𝐜𝐭𝐬</div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5   gap-4'>
        {
           hairProducts.map(hairProduct => <HairShowdetails hairProduct={hairProduct} key={hairProduct._id}></HairShowdetails>) 
        }
      </div>
    </div>
    );
};

export default HairShow;