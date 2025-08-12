import React from 'react'

const SignIn = () => {
  return (
    <div className=' mx-auto'>
        <h1 className='text-2xl font-bold py-5'>Sign In</h1>
        <form>
            <div className='text-sm font-bold text-left mb-5'>
                <label htmlFor="" className='mb-3'>Email</label><br />
                <input type="email" placeholder='Enter your Email' className='input input-bordered w-full bg-blue-100 py-2 px-2' />
                
            </div>
            <div className='text-sm font-bold text-left'>
                <label htmlFor="" className='mb-3'>Password</label><br />
                <input type="password" placeholder='Enter your Password' className='input input-bordered w-full bg-blue-100 py-2 px-2' />
                
            </div>
            <button type='submit' className='bg-yellow-500 py-1 px-4 text-white rounded-md my-9 cursor-pointer'>Sign In</button>
            <p className='text-center pb-5 border-b-1'>or</p>
            <button className='text-sm font-bold py-2 w-full border cursor-pointer'>
                Sign in With Google
            </button>
        </form>

    </div>
  )
}

export default SignIn