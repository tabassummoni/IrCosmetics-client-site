import React from 'react';
import { Link } from 'react-router-dom';

const HairShowdetails = ({hairProduct}) => {
    const {_id,name,price,image,details,quentity}=hairProduct;
       
    const handleDelete =_id =>{
        console.log(_id)
        fetch (`http://localhost:4000/cosmetics/${_id}`,{
            method:'DELETE'
        })
        
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.deletedCount>0){
                alert('deleted Success....')
            }
        })
    }
        return (
            <div className='text-center justify-center   p-4'>
            <div className="card bg-base-100 lg:w-80 shadow-sm border-2 rounded-lg border-red-300">
     <figure>
       <img className='mt-3 h-96 w-72' src={image} alt="Shoes" />
     </figure>
     <div className="">
       <div className='flex'>
       <h1 className="card-title p-3 ml-16">{name}</h1>
       <h1 className="card-title p-3 ml-16">{price}</h1>
      
    </div> <p className='line-clamp-2 text-xs w-64 ml-4'>{details}</p>
    <p>Product Quantity : {quentity}</p>
       <div className=" p-3  gap-4 flex">
    <Link  to={`/hairEdit/${_id}`} >   <button className="h-12 w-28  mt-4 bg-white text-pink-950 font-bold border-4 border-pink-950 ml-4 mb-2">✏️ 𝐔𝐩𝐝𝐚𝐭𝐞  </button></Link> 
    <button onClick={() =>handleDelete(_id)} className="h-12 w-28 mt-4 bg-white text-pink-950 font-bold border-4 border-pink-950 mr-4 mb-2"> 🗑️ 𝐃𝐞𝐥𝐞𝐭𝐞 </button> 
      </div>
</div>
       </div></div>
    );
};

export default HairShowdetails;