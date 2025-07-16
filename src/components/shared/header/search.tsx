import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { SearchIcon } from 'lucide-react'
import React from 'react'

export const Search = () => {
  return (
    <form action="/search" method='GET' className='flex items-stretch h-10'>
        {/* select dropdowm for category */}
       <Select name='category'>
        <SelectTrigger className='w-auto h-full dark:border-gray-200 bg-gray-100 text-black border-r rounded-r-none rounded-l-md rtl:rounded-r-md rtl:rounded-l-none'>
            <SelectValue placeholder='All' className=''/>
        </SelectTrigger>
        <SelectContent>
            <SelectItem value='all' >All</SelectItem>
            {/* {categories.map((category)=>(
                <SelectItem key={category} value={category}>
                    {category}
                </SelectItem>
            ))} */}
        </SelectContent>
       </Select>
    
       {/* search input */}
       <Input className='flex-1 rounded-none dark:border-gray-200  bg-gray-100 text-black text-base h-full  ' placeholder={`search $`} name='q' type='search' />

       {/* button */}
       <Button type='submit' className='bg-primary text-primary-foreground text-black rounded-s-none rounded-e-md h-full px-3 py-2'/>
       <SearchIcon className='w-5 h-5'/>
    </form>
  )
}
