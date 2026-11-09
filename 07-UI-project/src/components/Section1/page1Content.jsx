import React from 'react'
import RightContent from './RightContent'
import LeftContent from './LeftContent'

const Page1Content = () => {
  return (
    <div className='py-60 px-10 bg-amber-900 flex items-center gap-10'>
      <LeftContent />
      <RightContent />
    </div>
  )
}

export default Page1Content