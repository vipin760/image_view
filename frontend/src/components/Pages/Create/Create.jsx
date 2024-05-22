import React, { useState } from 'react'
import './Create.css'
import axios from 'axios'
const Create = () => {
  const USER_API = "http://localhost:3000/api/v2"
  const [formData, setFormData]=useState({
    imgUrl:'',title:'',description:''
  })
  const [errors,setErrors] = useState({})

  const handleChange = (e)=>{
    const {name,value}= e.target
    setFormData({
      ...formData,[name]:value
    })
  }
  const handleSubmit=async(e)=>{
    e.preventDefault()
    const validationErrors={}
    if(!formData.imgUrl.trim()){
      validationErrors.imgUrl="this field required"
    }
    if(!formData.title.trim()){
      validationErrors.title="this field required"
    }
    if(!formData.description.trim()){
      validationErrors.description="this field required"
    }
    setErrors(validationErrors)
    if(Object.keys(validationErrors).length===0){
      await axios.post(`${USER_API}/image`,formData).then(data=>{
        console.log("data",data)
      })
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
    </div>
    <div>
    <label htmlFor="title">Enter Image Title</label>
    <input type="text" name='title' className='border w-full rounded-md'onChange={handleChange}/>
    </div>  
    <div>
    <label htmlFor="Description">Enter Image Description</label>
    <textarea type="text" name='description' className='border w-full rounded-md' onChange={handleChange}/>
    </div>
    <button type='submit' className='bg-indigo-700 text-blue-50 p-2 rounded-lg px-4'>Submit</button>
  </form>
 </div>
</div>
   </>
  )
}

export default Create