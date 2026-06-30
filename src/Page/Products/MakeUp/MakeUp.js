import React, { useEffect, useState } from 'react';
import MakeUpPro from './MakeUpPro';

const MakeUp = () => {
  const [makeUpProducts, setMakeUpProducts] = useState([]);
  useEffect(() => {
    fetch('https://ir-server-site-1.onrender.com/makeupcosmetics')
      .then(res => res.json())
      .then(data => setMakeUpProducts(data))
  })

  return (
    <div className='bg-black'>
      <div className='text-3xl text-center p-7 underline underline-offset-4 text-white '>💄 𝐌𝐚𝐤𝐞𝐔𝐩 𝐈𝐭𝐞𝐦 𝐏𝐫𝐨𝐝𝐮𝐜𝐭𝐬</div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5   gap-4'>
        {
          makeUpProducts.map(makeUpProduct => <MakeUpPro makeUpProduct={makeUpProduct} key={makeUpProduct._id}></MakeUpPro>)
        }
      </div>
    </div>
  );
};

export default MakeUp;