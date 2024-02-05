import React from 'react'

const AdminView = (Admin) => {
  const mentors = ['hari','naveen','sudheer','johith','pahal','vergab','mihir','abhay','nitesh','ragavan','venkat','kumar','jain','ghosh','oswal','dayma','modi']
  return (
    <div className='w-full flex p-5 flex-col bg-slate-400'>
        <div className='flex items-end'>
            <span>Hello {Admin}</span>
            <button>Log Out</button>
        </div>
        <div className='grid'></div>
    </div>
  )
}

export default AdminView