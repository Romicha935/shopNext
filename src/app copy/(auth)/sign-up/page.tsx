"use client"
import { Card, CardContent } from '@/components/ui/card'
import React from 'react'
import SignUp from './signup'
import logo from '../../../../public/logo.png'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <div className='w-[400px] mx-auto'>
     <Image src={logo} alt='shopnext' className='h-24 w-24 mx-auto '/>
      <Card>
        <CardContent>
          <SignUp/>
        </CardContent>
      </Card>
      <p className='py-4'>Already have an account <Link href='/sign-in' className='text-blue-500 py-3'> Sign In</Link> </p>
    </div>
  )
}

export default page