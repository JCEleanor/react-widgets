import React from 'react'
import Item from './Item'
const itemDetails = [
  {
    id: 0,
    name: '咖啡色 T-shirt',
    price: 20,
    image: 'https://i.imgur.com/1GrakTl.jpg',
  },
  {
    id: 1,
    name: '白色 T-shirt',
    price: 10,
    image: 'https://i.imgur.com/ba3tvGm.jpg',
  },
  {
    id: 2,
    name: '黑色 T-shirt',
    price: 30,
    image: 'https://i.imgur.com/pHQ3xT3.jpg',
  },
]

const OrderList = (props) => {
  let total = 0

  const getTotal = (id, subtotal, amount) => {
    itemDetails[id].subtotal = subtotal
    itemDetails[id].amount = amount

    const reducer = (accumulator, currentValue) => accumulator + currentValue
    total = itemDetails.map((i) => i.subtotal).reduce(reducer)
    amount = itemDetails.map((i) => i.amount).reduce(reducer)
    props.getTotal(total) //get price in total
    props.getAmount(amount) //get pieces in total
  }

  return (
    <div className="col-md-8 cart">
      <div className="title">
        <div className="row">
          <div className="col">
            <h4>
              <b>訂購單</b>
            </h4>
          </div>
          <div className="col align-self-center text-right text-muted">
            {itemDetails.length}種商品項目
          </div>
        </div>
      </div>
      {itemDetails.map((item, index) => {
        return <Item key={index} item={item} getTotal={getTotal} />
      })}

      <div className="back-to-shop">
        <span>←</span>
        <span className="text-muted">回到商品頁</span>
      </div>
    </div>
  )
}

export default OrderList
