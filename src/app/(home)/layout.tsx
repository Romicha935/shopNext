import Footer from '@/components/footer'
import { Header } from '@/components/shared/header'
import { store } from '@/redux/store'
import React from 'react'
import { Provider } from 'react-redux'

export default function HomeLayout ({children}: {children:React.ReactNode})  {
  return (
    <Provider store={store}>
      <div className='flex flex-col min-h-screen'>
        <Header/>
        <main className='flex-1 flex flex-col '>{children}</main>
        <Footer/>
    </div>
    </Provider>
  )
}
