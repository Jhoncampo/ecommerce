import React from 'react'

interface FooterProps {
    children: React.ReactNode
}

const FooterList = ({children}: FooterProps) => {
  return (
    <div className='w-full mb-6 flex flex-col gap-2 sm:w-1/2 md:w-1/4 lg:w-1/6 '>{children}</div>
  )
}

export default FooterList