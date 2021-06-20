import React, { useState } from 'react'

const Accordion = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null)
  const onTitleClick = (index) => {
    setActiveIndex(index)
  }
  const renderData = data.map((data, index) => {
    const active = index === activeIndex ? 'active' : ''

    return (
      <React.Fragment key={index}>
        <div
          className={`container title ${active}`}
          onClick={() => {
            onTitleClick(index)
          }}
        >
          <i className="dropdown icon"></i>
          {data.title}
        </div>
        <div className={`content ${active}`}>
          <p>{data.content}</p>
        </div>
      </React.Fragment>
    )
  })
  return <div className="ui styled accordion">{renderData}</div>
}

export default Accordion
