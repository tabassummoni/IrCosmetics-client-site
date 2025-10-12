import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MakeUpEdit = () => {
const { name,image,price,details,expiration,_id} = useLoaderData();
const handleUpdate =  event =>{
    event.preventDefault();
    const form = event.target;
    const name =form.productName.value;
    const price =form.price.value;
    const expiration = form.expiration.value;
    const details = form.details.value;
    console.log(name,price);
    const updateSkinProduct ={name,price,expiration,details}
    fetch(`http://localhost:4000/makeupcosmetics/${_id}`,{
      method :'PUT',
      headers:{
        'content-type' : 'application/json'
      },
      body : JSON.stringify(updateSkinProduct)
    })
    .then(res => res.json())
    .then(data => {
      console.log (data);
      if(data.modifiedCount > 0){
        alert('Product Update Successfully.......')
      }
    })
}
    return (
        <div>
            <div className='text-center text-white text-2xl  underline underline-offset-8 mt-6'>𝐇𝐚𝐢𝐫 𝐂𝐚𝐫𝐞 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 ✏️ 𝐔𝐩𝐝𝐚𝐭𝐞  </div>
           
<form onSubmit={handleUpdate}  class="max-w-md mx-auto bg-white mt-5 mb-5 rounded-2xl shadow-lg space-y-4 p-8">
<div className='flex'> 
   <p className='mt-5 block text-sm font-medium text-gray-700'>Product Image </p>
    <img className=' ml-2 h-20 w-40' src={image} ></img>
</div>

  <div>
    <label for="productName" class="block text-sm font-medium text-gray-700">Product Name</label>
    <input defaultValue={name}
      type="text"id="productName" name="productName"
      class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-blue-500 focus:border-blue-500"
      required />
  </div>

  <div>
    <label for="price" class="block text-sm font-medium text-gray-700">Price </label>
    <input type="text" id="price"name="price" defaultValue={price}
      class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-blue-500 focus:border-blue-500"
      required/>
  </div>
  <div>
    <label for="expiration" class="block text-sm font-medium text-gray-700">Experation Date</label>
    <input type="text" id="expiration"name="expiration" defaultValue={expiration}
      class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-blue-500 focus:border-blue-500"
      required/>
  </div>
  <div>
    <label for="details" class="block text-sm font-medium text-gray-700">Description</label>
    <textarea
      defaultValue={details} id="details" name="details" rows="4"class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-blue-500 focus:border-blue-500"
    ></textarea>
  </div>


  <div class="pt-4  ml-32">
    <button type="submit" class="w-1/2 bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition">
    ✏️ 𝐔𝐩𝐝𝐚𝐭𝐞 
    </button>
    {/* <button type="submit" class="w-1/2 bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition">
    🗑️ 𝐃𝐞𝐥𝐞𝐭𝐞
    </button> */}
  </div>
</form>

      
        </div>
    );
};
export default MakeUpEdit;