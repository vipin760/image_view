import './Edit.css'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { imageFetch, imageUpdate } from '../../../redux/img/img.action'
import Loading from '../../Partials/Loading/Loading'

const Edit = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const [formdata,setFormData] = useState({imgUrl:'',title:'',description:''})
  const [errors,setErrors] = useState({})
  const imageFiles = useSelector(state=> state.imageFiles)
  const { errormessage,loading,imageData } = imageFiles
  useEffect(()=>{
    dispatch(imageFetch(id))
  },[id])

  useEffect(() => {
    if (imageData && imageData.data) {
      setFormData(imageData.data);
    }
  }, [imageData]);
  

  const handleChange = (e)=>{
    setErrors({})
    const {name,value} = e.target
    setFormData({
      ...formdata,[name]:value
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    const validationErrors ={}

    if(!formdata.imgUrl.trim()){
      validationErrors.imgUrl="This field required"
    }
    if(!formdata.title.trim()){
      validationErrors.title="This field required"
    }
    if(!formdata.description.trim()){
      validationErrors.description="This field required"
    }
    setErrors(validationErrors)
    if(Object.keys(validationErrors).length===0){
      dispatch(imageUpdate(formdata))
    }
  }

  return (
    <>
 {
  loading?(<><Loading/></>):(
  <>
    <div className="form_class flex justify-center items-center p-4 bg-slate-100">
 <div className='shadow-lg p-5'>
<h1 className='text-2xl font-serif border-l underline'>EDIT DATA</h1>
    {
    imageData&&imageData.data&&(
      <>
      <form action="" className='flex flex-col gap-3' onSubmit={handleSubmit}>
    <div>
    <label htmlFor="imgUrl">Enter Image Url</label>
    <input type="text" name='imgUrl' value={formdata.imgUrl} className='border w-full rounded-md' onChange={handleChange} />
    </div>
    <div>
    <label htmlFor="title">Enter Image Title</label>
    <input type="text" name="title" value={formdata.title} className='border w-full rounded-md' onChange={handleChange}/>
    </div>  
    <div>
    <label htmlFor="Description">Enter Image Description</label>
    <textarea type="text" name="description" value={formdata.description} className='border w-full rounded-md' onChange={handleChange}/>
    </div>
    <button className='bg-indigo-700 text-blue-50 p-2 rounded-lg px-4' type='submit'>Submit</button>
  </form>
      </>
    )}
</div>
</div>
  </>)
 }
</>
  )
}

export default Edit
