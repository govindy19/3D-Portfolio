import React from 'react'

const Alert = (type,text) => {
  return (
    <div className='absolute top-10 left-0 right-0 bottom-0 flex justify-center items-center'>
        <div className={`${type ==='danger' ? 'bg-red-500' : 'bg-green-500'} p-2 text-indigo-100 leading-none lg:rounded-full  lg : inline-flex `} role  ="alert">
            <p className={`${type === 'danger' ? 'bg-red-500':'bg-blue-500'} flex rounded-full uppercase px-2  py-1 font-semibold mr-3    `}>{type === 'danger'? 'Failed' : 'Success'}</p>
            <p className='mr-2 text-left '>{text}</p>

        </div>
    
      
    </div>
  )
}

export default Alert
