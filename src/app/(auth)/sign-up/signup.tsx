"use client"
import { useAuth } from '@/hooks/useAuth'

import { UserCredential } from 'firebase/auth'
import { useRouter } from 'next/navigation'

import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import Swal from 'sweetalert2'


type SignUpFormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
const SignUp = () => {
    const {register,handleSubmit, formState: {errors}}  = useForm<SignUpFormData>()
    const [showPassword,setShopPassword] = useState(false)
    const {createUser,googleSignIn} = useAuth()
    const router = useRouter()

    
     const onSubmit = (data: SignUpFormData)  => {
        console.log('from info', data);
        if(data.password !== data.confirmPassword){
            Swal.fire({
                icon:'error',
                title:'opps..',
                text: "password do not match"
            })
        }

      createUser(data.email, data.password)
      .then((result : UserCredential) => {
        const user = result.user;
        router.push('/')
        console.log(user);
         Swal.fire({
        icon: 'success',
        title: 'Account Created!',
        text: `Welcome, ${data.name}`,
      });
        
      })

       .catch((err) => {
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: err.message,
      });
      console.error(err);
    });

    
        
     }

     const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        Swal.fire({
          icon: 'success',
          title: 'Signed in with Google!',
          text: `Welcome, ${result.user.displayName}`,
        }).then(() => {
          router.push('/'); // Redirect home
        });
      })
      .catch(err => {
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: err.message,
        });
      });
    }

  return (
    <div>
        <h1 className='text-2xl font-bold '>Create Account</h1>
        <form className='py-3' onSubmit={handleSubmit(onSubmit)}>
            <div className='tex-sm'>
                <label htmlFor="" className='  text-xl'>Name</label><br />
                <input type="text" placeholder='Enter name address' className='input input-bordered w-full py-1 px-2 border-1 border-gray-200 mt-3' {...register("name", {required:true})} />
                 {errors.name && <span className='text-red-500'>Name is required</span>}
            </div>
            <div className='tex-sm'>
                <label htmlFor="" className=' text-xl'>Email</label><br />
                <input type="email" placeholder='Enter email address' className='input input-bordered w-full py-1 px-2 border-1 border-gray-200 mt-3' {...register("email", {required:true})} />
                 {errors.email && <span className='text-red-500'>Email is required</span>}
            </div>
            <div className='tex-sm'>
                <label htmlFor="" className=' text-xl'>password</label><br />
                <input type="password" placeholder='Enter password' className='input input-bordered w-full py-1 px-2 border-1 border-gray-200 mt-3' {...register("password", {required:true})} />
                 {errors.password && <span className='text-red-500'>Please must be atleast 6 charactars</span>}
            </div>
            <div className='tex-sm'>
                <label htmlFor="" className=' text-xl'>Confirm Pasword</label><br />
                <input type={showPassword? "text" : "password"} placeholder='Enter confiorm password' className='input input-bordered w-full py-1 px-2 border-1 border-gray-200 mt-3' {...register("confirmPassword", {required:true})} />
                {errors.confirmPassword && <span className='text-red-500'>Please confirm your password</span>}
            </div>
            <div className='mt-2'>
                <input type="checkbox" onChange={()=> setShopPassword(!showPassword)} id='showPass'/>
                <label htmlFor="showPass" className='ml-2'>Show Password</label>
            </div> 
            <button className='bg-yellow-500 text-white py-1 px-4  my-3 rounded-md cursor-pointer'>Sign Up</button>
            <p className='text-center pb-5 border-b-1'>or</p>
            <button onClick={handleGoogleSignIn} className='text-sm font-bold py-2 w-full border hover:bg-gray-200 cursor-pointer'>
                Sign in With Google
            </button>
        </form>
    </div>
  )
}

export default SignUp