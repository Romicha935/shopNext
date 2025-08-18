import { Card, CardContent } from '@/components/ui/card'
import React from 'react'
import SignIn from './signin'
import Image from 'next/image'
import logo from '../../../../public/logo.png'
import Link from 'next/link'

const page = () => {
  return (
    <div className='w-[400px] mx-auto py-3'>
      <Image className='h-24 w-24 items-center mx-auto flex' src={logo} alt='shopNext'/>
    <Card>
      <CardContent>
        <SignIn/>
      </CardContent>
    </Card>
    <Link href='/sign-up'>
    <button className='text-blue-500 py-2 text-center cursor-pointer'>Create your Shopnxt account</button>
    </Link>
    
    </div>
  )
}

export default page