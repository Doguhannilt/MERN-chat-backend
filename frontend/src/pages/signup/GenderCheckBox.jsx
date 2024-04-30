import React from 'react'

const GenderCheckBox = ({onCheckboxChange, selectedGender}) => {
  return (
    <div>
      <div>
        <label>
            <span>Male</span>
            <input type='checkbox' className='checkbox' 
            checked = {selectedGender ==="male"}
            onChange={() => onCheckboxChange("male")}/>
        </label>
      </div>
      <div>
        <label>
            <span>Female</span>
            <input type='checkbox' className='checkbox'
                        checked = {selectedGender ==="female"}
                        onChange={() => onCheckboxChange("female")}/>
        </label>
      </div>
    </div>
  )
}

export default GenderCheckBox
