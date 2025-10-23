import React from 'react'
import Card from "../Components/Card"
import turfdata from "../data/turf"

const Turfs = () => {
  const turfs=[
    {

    }
  ]
  return (
    <div className='relative w-screen min-w-screen'>
       <div className='w-full p-[2vmin] '>
        <h1 className='text-4xl font-semibold '>Find Your Perfect Turf</h1>
        <h2>Showing some of the best turfs available</h2>
        </div>
        <div className='w-full h-full flex justify-center items-center gap-[2vmin]'>
           <div className='w-[30%] h-full rounded-2xl border-2 p-[1vmin] border-red-500'> 
            <h2>Filter</h2>
           </div>
           
           <div className='h-full w-[65%] rounded-2xl border-2  border-blue-500 flex flex-wrap'>
            {turfdata.map((turf)=>(
              <Card
              key={turf.id}
              turf={turf}
              onClick={()=>navigate(`/turfs/${turf.id}`)}/>
            ))}
           </div>

        </div>
    </div>
  )
}

export default Turfs
