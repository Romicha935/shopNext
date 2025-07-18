import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../../../../public/logo.png'
import { Search } from './search'
import { Menu } from './menu'
import { Button } from '@/components/ui/button'
import { MenuIcon } from 'lucide-react'
import { data } from '@/lib/data'


export const Header = () => {
  return (
    <header className='bg-black text-white'>
    <div className='px-2'>
        <div className='flex items-center justify-between'>
            <div className='flex items-center'>
                <Link href='/' className='flex items-center header-button font-extrabold text-2xl m-1'>

                <Image src={logo} height={40} width={40} alt={`logo`} />
                ShopNext
                </Link>
            </div>
            <div>
                <Search/>
            </div>
            <Menu/>
        </div>
        <div className='md:hidden block py-2'>
            <Search/>
        </div>
    </div>

    <div className='flex  items-center px-3 mb-[1px] bg-gray-800'>
        <Button variant='ghost' className='header-button flex items-center gap-1'>
            <MenuIcon/>
            All
        </Button>
        <div className='flex items-center flex-wrap gap-3 overflow-hidden max-h[42px'>
            {data.headerMenus.map((menu)=>(
                <Link href={menu.href} key={menu.href} className='header-button p-2'>{menu.name}</Link>
            ))}
        </div>
    </div>
    </header>
  )
}
