import React from 'react'

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const renderOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null
    }
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => {
          onSelectedChange(option)
        }}
      >
        {option.label}
      </div>
    )
  })
  return (
    <div className="ui form container">
      <div className="field">
        <label className="label">Select an item</label>
        <div className="ui selection dropdown visible active">
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className="menu visible transition">{renderOptions}</div>
        </div>
      </div>
    </div>
  )
}

export default Dropdown
