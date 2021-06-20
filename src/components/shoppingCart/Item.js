import React, { useState } from 'react'

const Item = (props) => {
  const [tshirt, setTshirt] = useState(1)

  props.getTotal(props.item.id, props.item.price * tshirt)
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
        <a
          href="#/"
          onClick={() => {
            const newtshirt = tshirt - 1 < 1 ? 1 : tshirt - 1
            setTshirt(newtshirt)
          }}
        >
          -
        </a>
        <a href="#/" className="border">
          {tshirt}
        </a>
        <a
          href="#/"
          onClick={() => {
            setTshirt(tshirt + 1)
          }}
        >
          +
        </a>
      </div>
      <div className="col">
        &euro; {props.item.price}{' '}
        <span className="close">&euro; {tshirt * props.item.price}</span>
      </div>
    </div>
  )
}

export default Item
