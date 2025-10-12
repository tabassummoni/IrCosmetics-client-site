import React, { useEffect, useState } from 'react';
import BabyShowDetails from './BabyShowDetails';

const BabyShow = () => {
     const [babyProducts ,setSkinProducts] = useState([]);
    useEffect ( () => {
        fetch('http://localhost:4000/babyCosmetics')
        .then(res => res.json())
        .then(data => setSkinProducts(data))
    })
  
  return (
    <div className='bg-black'>
       <div className='text-3xl text-center p-7 underline md:underline-offset-4 text-white '>✨ 𝐁𝐚𝐛𝐲 𝐂𝐚𝐫𝐞 𝐏𝐫𝐨𝐝𝐮𝐜𝐭𝐬</div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5   gap-4'>
        {
           babyProducts.map(babyProduct => <BabyShowDetails babyProduct={babyProduct} key={babyProduct._id}></BabyShowDetails>) 
        }
      </div>
    </div>
    );
};

export default BabyShow;