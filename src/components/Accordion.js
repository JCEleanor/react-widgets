import React from 'react'

const Accordion = ({ data }) => {
  const renderData = data.map((data) => {
    return (
      <React.Fragment key={data.title}>
        <div className="title active">
          <i className="dropdown icon"></i>
          {data.title}
        </div>
        <div className="content active">
          <p>{data.content}</p>
        </div>
      </React.Fragment>
    )
  })
  return <div className="ui styled accordion">{renderData}</div>
}

export default Accordion
