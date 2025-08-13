"use client"
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'

type SignInFormData = {
  email: string
  password: string
}
const SignIn = () => {
      const { register, handleSubmit, formState: { errors } } = useForm<SignInFormData>()
  const { signIn, googleSignIn } = useAuth()
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  // Email & Password SignIn
  const onSubmit = (data: SignInFormData) => {
    setLoading(true)
    signIn(data.email, data.password)
      .then(result => {
        setLoading(false)
        Swal.fire({
          icon: 'success',
          title: 'Signed In!',
          text: `Welcome back, ${result.user.email}`,
        }).then(() => {
          router.push('/') // Redirect home
        })
      })
       .catch(err => {
        setLoading(false)
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: err.message,
        })
      })
}

  // Google Sign-In
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        Swal.fire({
          icon: 'success',
          title: 'Signed in with Google!',
          text: `Welcome, ${result.user.displayName || result.user.email}`,
        }).then(() => {
          router.push('/') // Redirect home
        })
      })
      .catch(err => {
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: err.message,
        })
      })
  }

  return (
    <div className=' mx-auto'>
        <h1 className='text-2xl font-bold py-5'>Sign In</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='text-sm font-bold text-left mb-5'>
                <label htmlFor="" className='mb-3'>Email</label><br />
                <input type="email" placeholder='Enter your Email' className='input input-bordered w-full bg-blue-100 py-2 px-2' {...register("email", {required:true})} />
                 {errors.email && <span className='text-red-500'>Email is required</span>}
                
            </div>
            <div className='text-sm font-bold text-left'>
                <label htmlFor="" className='mb-3'>Password</label><br />
                <input type="password" placeholder='Enter your Password' className='input input-bordered w-full bg-blue-100 py-2 px-2' {...register("password",{required:true})} />
                 {errors.password && <span className='text-red-500'>Password is required</span>}
            </div>
            <button type='submit' className='bg-yellow-500 py-1 px-4 text-white rounded-md my-9 cursor-pointer'>Sign In</button>
            <p className='text-center pb-5 border-b-1'>or</p>
            <button onClick={handleGoogleSignIn} className='text-sm font-bold py-2 w-full border cursor-pointer'>
                Sign in With Google
            </button>
        </form>

    </div>
  )
}


export default SignIn