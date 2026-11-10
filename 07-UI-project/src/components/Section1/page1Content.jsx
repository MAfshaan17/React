import React from 'react'
import RightContent from './RightContent'
import LeftContent from './LeftContent'

const Page1Content = () => {
  return (
    <div className='h-full w-full flex items-center justify-center gap-16'>
      <LeftContent />
      <RightContent />
    </div>
  )
}

export default Page1Content