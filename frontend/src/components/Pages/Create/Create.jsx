import React, { useState } from 'react'
import './Create.css'

import { useDispatch, useSelector } from 'react-redux'
import { imageCreate } from '../../../redux/img/img.action'
const Create = () => {
  const dispatch = useDispatch()
  const [formData, setFormData]=useState({
    imgUrl:'',title:'',description:''
  })
  const [errors,setErrors] = useState({})

  const handleChange = (e)=>{
    setErrors({})
    const {name,value}= e.target
    setFormData({
      ...formData,[name]:value
    })
  }
  const handleSubmit=async(e)=>{
    e.preventDefault()
    const validationErrors={}
    if(!formData.imgUrl.trim()){
      validationErrors.imgUrl="This field required"
    }
    if(!formData.title.trim()){
      validationErrors.title="This field required"
    }
    if(!formData.description.trim()){
      validationErrors.description="This field required"
    }
    setErrors(validationErrors)
    if(Object.keys(validationErrors).length===0){
      dispatch(imageCreate(formData))
      setTimeout(() => {
        // window.location.href="/"
      }, 2000);
    }
  }

  return (
   <>
<div className="form_class flex justify-center items-center p-4 bg-slate-100">
 <div className='shadow-lg p-5'>
  <h1 className='text-2xl font-serif border-l underline'>EDIT DATA</h1>
  <form action="" className='flex flex-col gap-3' onSubmit={handleSubmit}>
    <div>
    <label htmlFor="imgUrl">Enter Image Url</label>
    <input type="text" name='imgUrl' className='border w-full rounded-md' onChange={handleChange}/>
    {errors.imgUrl&&(<><p className='text-red-600'>*{errors.imgUrl}</p></>) }
    </div>
    <div>
    <label htmlFor="title">Enter Image Title</label>
    <input type="text" name='title' className='border w-full rounded-md'onChange={handleChange}/>
    {errors.title&&(<><p className='text-red-600'>*{errors.title}</p></>) }
    </div>  
    <div>
    <label htmlFor="Description">Enter Image Description</label>
    <textarea type="text" name='description' className='border w-full rounded-md' onChange={handleChange}/>
    {errors.description&&(<><p className='text-red-600'>*{errors.description}</p></>) }
    </div>
    <button type='submit' className='bg-indigo-700 text-blue-50 p-2 rounded-lg px-4'>Submit</button>
  </form>
 </div>
</div>
   </>
  )
}

export default Create