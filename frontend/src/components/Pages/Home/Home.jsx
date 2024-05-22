import './Home.css'
import React from 'react'

const Home = () => {
  return (
    <section className='min-h-screen'>
    <div className="py-2">
        <div className="mx-auto max-w-6xl text-gray-500">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                
                <div className="relative group object-contain p-1 rounded-2xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
                    <img className='rounded-2xl' src="https://plus.unsplash.com/premium_photo-1669562729042-b0a3d23afcf1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    <div className="relative">
                        <div className="mt-1 pb-1 rounded-b-[--card-border-radius]">
                          <h3 className='text-2xl'>wall papper</h3>
                            <p className="text-gray-700 dark:text-gray-300">Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente.</p>
                            <div className='flex gap-2'>
                              <a href="/edit/1542515151" className='bg-indigo-500 hover:bg-indigo-600 text-white rounded pl-2 pr-2'><button>Edit</button></a>
                              <a href="/edit/" className='bg-pink-500 hover:bg-pink-600 text-white rounded pl-2 pr-2'><button>Edit</button></a>
                            </div>
                        </div>
                    </div>
                </div>

            
            </div>
        </div>
    </div>
</section>
  )
}

export default Home
