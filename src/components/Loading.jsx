import React from 'react'

const Loading = () => {
  return (
<div className="flex items-center justify-center h-[100vh] w-[100vw] bg-[#f2f2f3]">
        <div className='flex items-center'>
      <img src="loading.svg" alt="loading" className='w-[110px]'/>
      <h1 className='font-bold'>Loading...</h1>
    </div>
    </div>
  )
}

export default Loading
