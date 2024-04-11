import React from 'react'

const Addproduct = () => {
  return (
    <div className="flex f items-center justify-center h-screen">
      <div className="flex flex-col items-center bg-blue-500 gap-5 p-10 rounded-xl">
        <h2 className='text-white text-2xl font-semibold'>Add Product</h2>
        <input type="text" placeholder="Product Title"  className='p-2 rounded'/>
        <input type='number' placeholder="Product Price" className='p-2 rounded'/>
        <input type='url' placeholder="Product Image Url" className='p-2 rounded'/>
        <input type='text' placeholder="Product Category" className='p-2 rounded'/>
        <textarea type='text' rows='5' placeholder="Product Description"className='p-2  w-full text-start rounded' />
        <button type='submit' className='text-2xl bg-green-400 w-full rounded-lg p-2'>Submit</button>
      </div>
    </div>
  );
}

export default Addproduct