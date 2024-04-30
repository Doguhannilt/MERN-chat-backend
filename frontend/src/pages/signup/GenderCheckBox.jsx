import React from 'react'

const GenderCheckBox = () => {
  return (
    <div>
      <div>
        <label>
            <span>Male</span>
            <input type='checkbox' className='checkbox' />
        </label>
      </div>
      <div>
        <label>
            <span>Female</span>
            <input type='checkbox' className='checkbox'/>
        </label>
      </div>
    </div>
  )
}

export default GenderCheckBox
