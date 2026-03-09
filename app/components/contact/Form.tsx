import React from 'react'

const Form = () => {
  return (
    <div>
        <div className="px-4 md:px-20 lg:px-40 py-20 bg-[#0b4141] contactimage">
            <form action="">
                <div className="flex flex-col md:flex-row justify-center items-center pb-5 gap-3">
                    <input type="text" name="" id="" placeholder='Name *' className='outline-none p-2 w-full bg-[#FFFFF0]' />
                    <input type="email" name="" id="" placeholder='Email *' className='outline-none p-2 w-full bg-[#FFFFF0]' />
                </div>
                <input type="text" name="" id="" placeholder='Subject' className='outline-none p-2 mb-5 w-full bg-[#FFFFF0] text-sm' />
                <textarea name="" id="" placeholder='Message' rows={5} className='resize-none mb-5 w-full bg-[#FFFFF0] p-2 text-sm'></textarea>
                <input type="submit" value="Submit" className='bg-[#8db48e] p-2 w-full cursor-pointer hover:bg-[#F7E7CE] hover:text-[#020035] font-semibold' />
            </form>
        </div>
    </div>
  )
}

export default Form