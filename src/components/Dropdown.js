import React from 'react'

const Dropdown = ({ options }) => {
  const renderOptions = options.map((option) => (
    <div key={option.value} className="item">
      {option.label}
    </div>
  ))
  return (
    <div className="ui form container">
      <div className="field">
        <label className="label">Select an item</label>
        <div className="ui selection dropdown visible active">
          <i className="dropdown icon"></i>
          <div className="text">Select item</div>
          <div className="menu visible transition">{renderOptions}</div>
        </div>
      </div>
    </div>
  )
}

export default Dropdown
