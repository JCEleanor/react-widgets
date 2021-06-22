import React, { useState } from 'react'

const Item = (props) => {
  const [tshirt, setTshirt] = useState(1)

  props.getTotal(props.item.id, props.item.price * tshirt, tshirt)
  return (
    <div className={`row main align-items-center border-bottom`}>
      <div className="col-2">
        <img className="img-fluid" src={props.item.image} alt="" />
      </div>
      <div className="col">
        <div className="row text-muted">Shirt</div>
        <div className="row">{props.item.name}</div>
      </div>
      <div className="col">
        <button
          className="btn btn-sm p-0 m-0"
          style={{ width: '20px' }}
          onClick={() => {
            const newtshirt = tshirt - 1 < 1 ? 1 : tshirt - 1
            setTshirt(newtshirt)
          }}
        >
          -
        </button>
        <span className="border p-1 px-2">{tshirt}</span>
        <button
          className="btn btn-sm p-0 m-0"
          style={{ width: '20px' }}
          onClick={() => {
            setTshirt(tshirt + 1)
          }}
        >
          +
        </button>
      </div>
      <div className="col">
        &euro; {props.item.price}{' '}
        <span className="close">&euro; {tshirt * props.item.price}</span>
      </div>
    </div>
  )
}

export default Item
