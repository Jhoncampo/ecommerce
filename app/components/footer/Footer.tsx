import React from 'react'
import Container from '../Container'
import FooterList from './FooterList'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-slate-700 text-slate-200 text-sm mt-16'>
      <Container>
        <div className='flex flex-col md:flex-row justify-between pt-16 pb-8'>
          <FooterList>
            <h3 className='text-base font-bold mb-2'>Shop Categories</h3>
            <Link href="#">Phones</Link>
            <Link href="#">Laptops</Link>
            <Link href="#">Desktops</Link>
            <Link href="#">Watches</Link>
            <Link href="#">Tvs</Link>
            <Link href="#">Accessories</Link>
          </FooterList>
          <FooterList>
            <h3 className='text-base font-bold mb-2'>Customer Services</h3>
            <Link href="#">Contact Us</Link>
            <Link href="#">Chipping Policy</Link>
            <Link href="#">Returns & Exchanges</Link>
            <Link href="#">Watches</Link>
            <Link href="#">FAQs</Link>
          </FooterList>
        </div>
      </Container>
    </footer>
  )
}

export default Footer