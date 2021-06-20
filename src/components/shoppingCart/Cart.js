import React, { useState } from 'react'
import './cart.css'
import OrderList from './OrderList'
import Summary from './Summary'

const Cart = () => {
  const [total, setTotal] = useState(0)
  function getTotal(total) {
    setTotal(total)
  }
  return (
    <div className="card">
      <div className="row">
        <OrderList getTotal={getTotal} />
        <Summary total={total} />
      </div>
    </div>
  )
}

export default Cart
