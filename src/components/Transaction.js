import React from 'react'

const Transaction = (prop) => {
  return (
    <tr>
      <td>{prop.tran.posted_at}</td>
      <td>{prop.tran.description}</td>
      <td>{prop.tran.category}</td>
      <td>{prop.tran.amount}</td>
    </tr>
  )
}

export default Transaction

