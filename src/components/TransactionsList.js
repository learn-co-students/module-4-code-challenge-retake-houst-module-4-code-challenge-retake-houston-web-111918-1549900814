import React from 'react'

const TransactionsList = (props) => {
  
  // console.log(props.trans)
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              Posted At
        {props.trans.posted_at}

            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
        {props.trans.description}
            
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
        {props.trans.category}
              
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
        {props.trans.amount}
             
            </h3>
          </th>
        </tr>

        {props.trans.posted_at}

      </tbody>
    </table>
  )
}

export default TransactionsList
