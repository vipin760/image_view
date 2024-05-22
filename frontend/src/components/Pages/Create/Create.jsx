import React from 'react'
import './Create.css'
const Create = () => {
  return (
   <>
<div className="form_class flex justify-center items-center p-4">
 <div>
  <h1 className='text-2xl font-serif border-l underline'>CREATE DATA</h1>
  <form action="" className='flex flex-col gap-3'>
    <div>
    <label htmlFor="imgUrl">Enter Image Url</label>
    <input type="text" className='border w-full rounded-md'/>
    </div>
    <div>
    <label htmlFor="imgUrl">Enter Image Url</label>
    <input type="text" className='border w-full rounded-md'/>
    </div>
    <div>
    <label htmlFor="Description">Enter Image Url</label>
    <textarea type="text" className='border w-full rounded-md'/>
    </div>
    <button className='bg-indigo-700 text-blue-50 p-2 rounded-lg px-4'>Submit</button>
  </form>
 </div>
</div>
   </>
  )
}

export default Create
