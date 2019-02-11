import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()
    this.state = {
      transactions: []
    }
  }

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  componentDidMount(){
    this.setState({
      transactions: transactions,
      query: ""
    })
    }


  handleChange(event) {
    this.state.query.filter(query => {
      
    })
  }

  render() {
    

    return (
      <div>
        <Search handleChange = {this.handleChange}/>
        <TransactionsList transactions={this.state.transactions}/>
      </div>
    )
  }
}

export default AccountContainer
