"use client"
import { useAuth } from '@/hooks/useAuth'
import { RootState } from '@/redux/store'
import { LogOutIcon, ShoppingCartIcon, UserIcon } from 'lucide-react'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'

export const Menu = () => {
  const { user, logOut } = useAuth()
  const [dropDownOpen, setDropDownOpen] = useState(false)
  const [mounted, setMounted] = useState(false) // ✅ for hydration fix

  const totalQuantity = useSelector((state: RootState) => state.cart.totalQuantity)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Logged Out',
          text: 'You have successfully logged out!',
        })
      })
      .catch(err => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: err.message,
        })
      })
  }

  return (
    <div className='flex gap-3 px-6 justify-end'>
      <nav className='flex gap-3 w-full'>
        {user ? (
          <div className='relative'>
            <button
              onClick={() => setDropDownOpen(!dropDownOpen)}
              className='flex items-center gap-2 header-button'
            >
              <UserIcon className='h-8 w-8' />
              <span className='font-bold'>{user.email || "User"}</span>
            </button>

            {dropDownOpen && (
              <div className='absolute right-0 ml-8 mt-2 w-52 p-3 bg-white rounded-md shadow-lg z-50'>
                <button
                  onClick={handleLogout}
                  className='flex items-center bg-amber-400 rounded-md gap-2 px-4 py-2 cursor-pointer hover:bg-amber-500 w-full text-left'
                >
                  <LogOutIcon className='h-5 w-5' />
                  Logout
                </button>
                <p className='text-black'>
                  New customer <Link href='/sign-up'> Sign Up</Link>
                </p>
              </div>
            )}
          </div>
        ) : (
          <Link href='/sign-in' className='header-button flex items-center gap-2'>
            <UserIcon className='h-8 w-8' />
            <span className='font-bold'>Hello, Sign in</span>
          </Link>
        )}

        {/* ✅ Cart Button */}
        <Link href='/cart' className='header-button flex items-center gap-2 relative'>
          <ShoppingCartIcon className='h-8 w-8' />
          <span className='font-bold ml-1'>Cart</span>

          {/* ✅ only show badge after client mounted (hydration fix) */}
          {mounted && totalQuantity > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
              {totalQuantity}
            </span>
          )}
        </Link>
      </nav>
    </div>
  )
}
