// app/layout.tsx
"use client"
import { Provider } from 'react-redux'
import './globals.css'
import { store } from '@/redux/store'
import React from 'react'
import { Header } from '@/components/shared/header'
import Footer from '@/components/footer'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import AuthProvider from '@/provider/Provider'


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
       <Provider store={store}>
        <AuthProvider>
        <Header/>
   {children}
      <Footer/>
   </AuthProvider>

       </Provider>
       
        
      </body>
    </html>
  )
}
