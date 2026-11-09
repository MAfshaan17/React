import React from 'react'
import RightContent from './RightContent'
import LeftContent from './LeftContent'

const Page1Content = () => {
  return (
    <div className='py-50 px-18 bg-amber-900 flex items-center gap-2.5'>
      <LeftContent />
      <RightContent />
    </div>
  )
}

export default Page1Content