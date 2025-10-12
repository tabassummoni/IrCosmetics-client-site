import React, { useState } from 'react';
import toast from 'react-hot-toast';

const AddskinPro = () => {
    const imageHostKey = `65712c5ead07797616fe96b846828efd`;
 
   const [loader, setLoader] = useState(false);
    const handleAddSkinProduct = e => {
        e.preventDefault();
        const allData = e.target;
        const name = allData.name.value;
        const image = allData.image.value;
        const price = allData.price.value;
        const details = allData.details.value;
        const expiration = allData.expiration.value;
        const quentity = allData.quentity.value

        const formData = new FormData(e.target);
       
        formData.append('Image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url,{
            method:'POST',
            body : formData
        })
        .then(res => res.json())
        .then(imagedata =>{
            console.log(imagedata)
          if(imagedata.success){

 const addSkinnewproducts = {
                name:name,
                image:imagedata.data.url,
                price:price,
                details:details,
                expiration:expiration,
                quentity:quentity,
            }

          
        

        // const initialData = Object.fromEntries(formData.entries());
        // console.log(initialData);

        fetch('http://localhost:4000/skin',{
            method :'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addSkinnewproducts)
        })
            .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){
              setLoader(false);
              toast.success('Add a new Skin care Product.....')
            
            }
        })
    }})
    }
    return (
        <div className=''>
            <form onSubmit={handleAddSkinProduct}  class="max-w-3xl mx-auto p-6 bg-black rounded-2xl shadow-lg space-y-4">
  <h2 class="text-2xl font-semibold text-gray-300 underline">𝐀𝐝𝐝 𝐀 𝐍𝐞𝐰 𝐒𝐤𝐢𝐧 𝐂𝐚𝐫𝐞 𝐏𝐫𝐨𝐝𝐮𝐜𝐭</h2>
  <div>
    <label for="image" class="block text-sm font-medium text-gray-300" >𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐈𝐦𝐚𝐠𝐞 </label>
    <input type="file" id="image" name="image" required
      class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400" />
  </div>
  <div>
    <label for="name" class="block text-sm font-medium text-gray-300" >𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐍𝐚𝐦𝐞 </label>
    <input type="text" id="name" name="name" required
      class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400" />
  </div>

  <div>
    <label for="price" class="block text-sm font-medium text-gray-300">𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐏𝐫𝐢𝐜𝐞</label>
    <input type="price" id="price" name="price" required
      class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400" />
  </div>

  <div>
    <label for="details" class="block text-sm font-medium text-gray-300">𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐃𝐞𝐭𝐚𝐢𝐥𝐬</label>
    <textarea id="details" name="details" rows="4" required
      class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"></textarea>
  </div>
 <div>
    <label for="expiration" class="block text-sm font-medium text-gray-300">𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐄𝐱𝐩𝐢𝐫𝐚𝐭𝐢𝐨𝐧 𝐃𝐚𝐭𝐞</label>
    <input type="expiration" id="expiration" name="expiration" required
      class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400" />
 </div>
 <div>
    <label for="quentity" class="block text-sm font-medium text-gray-300">𝐀𝐝𝐝 𝐐𝐮𝐚𝐧𝐭𝐢𝐭𝐲</label>
    <input type="quentity" id="quentity" name="quentity" required
      class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400" />
 </div>
  <button type="submit"
    class="w-full bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300">
    𝐒𝐮𝐛𝐦𝐢𝐭
  </button>
</form>

  
        </div>
    );
};

export default AddskinPro;