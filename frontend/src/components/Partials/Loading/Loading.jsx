import React from 'react'
import './Loading.css'

const Loading = () => {
  return (
     <div className="spinner">
 <div className='w-full h-full bg-yellow-50 flex items-center justify-center'>
 <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
 </div>
</div>
  )
}

export default Loading
