import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Order = () => {
const [order, setOrder] = useState([])
const [loaded, setLoaded] = useState(false)

useEffect(() => {
    axios
        .get('http://localhost:8080/api/v1/orders')
        .then((res) => {
            setOrder(res.data)
            setLoaded(true)
            console.log(res.data)
            // console.log(order)
        })
        .catch((err) => console.error(err))
}, [loaded])


  return (
      <>
          {order.map((order) => (
              <div key={order.id} className="">
                
              </div>
          ))}
      </>
  )
}

export default Order