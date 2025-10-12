import React, { useEffect, useState } from 'react';
import MakeUpShowDetails from './MakeUpShowDetails';

const MakeUpShow = () => {
   const [makeUpProducts ,setMakeUpProducts] = useState([]);
    useEffect ( () => {
        fetch('http://localhost:4000/makeupcosmetics')
        .then(res => res.json())
        .then(data => setMakeUpProducts(data))
    })
  
  return (
    <div className='bg-black'>
       <div className='text-3xl text-center p-7 underline md:underline-offset-4 text-white '>💄  𝐌𝐚𝐤𝐞𝐔𝐩 𝐏𝐫𝐨𝐝𝐮𝐜𝐭𝐬</div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5   gap-4'>
        {
           makeUpProducts.map(makeUpProduct => <MakeUpShowDetails makeUpProduct={makeUpProduct} key={makeUpProduct._id}></MakeUpShowDetails>) 
        }
      </div>
    </div>
    );
};
export default MakeUpShow;