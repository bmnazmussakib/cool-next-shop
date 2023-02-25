import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Layout({ children }) {
    return (
        <div className=''>
            <Header />
            <main className='container'>
                {children}
            </main>
            <Footer />
        </div>
    )
}
