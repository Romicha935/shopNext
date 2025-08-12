import React from 'react'

const SignUp = () => {
  return (
    <div>
        <h1 className='text-2xl font-bold '>Create Account</h1>
        <form className='py-3'>
            <div className='tex-sm'>
                <label htmlFor="" className='  text-xl'>Name</label><br />
                <input type="text" placeholder='Enter name address' className='input input-bordered w-full py-1 px-2 border-1 border-gray-200 mt-3' />
            </div>
            <div className='tex-sm'>
                <label htmlFor="" className=' text-xl'>Email</label><br />
                <input type="email" placeholder='Enter email address' className='input input-bordered w-full py-1 px-2 border-1 border-gray-200 mt-3' />
            </div>
            <div className='tex-sm'>
                <label htmlFor="" className=' text-xl'>password</label><br />
                <input type="password" placeholder='Enter password' className='input input-bordered w-full py-1 px-2 border-1 border-gray-200 mt-3' />
            </div>
            <div className='tex-sm'>
                <label htmlFor="" className=' text-xl'>Confirm Pasword</label><br />
                <input type="confirm password" placeholder='Enter confiorm password' className='input input-bordered w-full py-1 px-2 border-1 border-gray-200 mt-3' />
            </div>
            <button className='bg-yellow-500 text-white py-1 px-4  my-3 rounded-md cursor-pointer'>Sign Up</button>
        </form>
    </div>
  )
}

export default SignUp