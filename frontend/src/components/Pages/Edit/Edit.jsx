import './Edit.css'
import React from 'react'

const Edit = () => {
  return (
    <div className="form_class flex justify-center items-center p-4 bg-slate-100">
 <div className='shadow-lg p-5'>
  <h1 className='text-2xl font-serif border-l underline'>EDIT DATA</h1>
  <form action="" className='flex flex-col gap-3'>
    <div>
    <label htmlFor="imgUrl">Enter Image Url</label>
    <input type="text" className='border w-full rounded-md'/>
    </div>
    <div>
    <label htmlFor="title">Enter Image Title</label>
    <input type="text" className='border w-full rounded-md'/>
    </div>  
    <div>
    <label htmlFor="Description">Enter Image Description</label>
    <textarea type="text" className='border w-full rounded-md'/>
    </div>
    <button className='bg-indigo-700 text-blue-50 p-2 rounded-lg px-4'>Submit</button>
  </form>
 </div>
</div>

  )
}

export default Edit
