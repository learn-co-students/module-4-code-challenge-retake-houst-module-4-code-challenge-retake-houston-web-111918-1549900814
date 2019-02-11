import React from 'react'
import Transaction from './Transaction'

const TransactionsList = (props) => {
 

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              Posted At
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Description
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Category
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Amount
            </h3>
          </th>
        </tr>

        {props.trans.map( tran => (
          <Transaction tran={tran} key={tran.id}/>
        ))}

       

      </tbody>
    </table>
  )
}

export default TransactionsList

