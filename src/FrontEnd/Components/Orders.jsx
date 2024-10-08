import React from 'react'

const Orders = ({orders}) => {
  return (
   <>
   <h1>Your items are</h1>
  <div className="output">
            {orders.map((i, index) => (
                <div key={index}>
                    {i}
                </div>
            ))}
        </div>
        
   </>
  )
}

export default Orders
