import React from 'react'

const leftContent = (props) => {
  return (
    <div className='px-30 py-30 bg-amber-50'>
    
    <div className='Top' >
        <img
          src={props.brandLogo}
          alt={props.company}
        />
        <button>Save <Bookmark size={12} /></button>
      </div>
        </div>
  )
}

export default leftContent
