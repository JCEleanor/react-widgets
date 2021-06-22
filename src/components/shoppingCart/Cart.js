import React, { useState } from 'react'
import './cart.css'
import OrderList from './OrderList'
import Summary from './Summary'

const Cart = () => {
  const [total, setTotal] = useState(0)
  const [pieces, setPieces] = useState(3)
  function getTotal(total) {
    setTotal(total)
  }
  function getAmount(amount) {
    setPieces(amount)
  }

  return (
    <div className="card">
      <div className="row">
        <OrderList getTotal={getTotal} getAmount={getAmount} />
        <Summary total={total} pieces={pieces} />
      </div>
    </div>
  )
}

export default Cart
