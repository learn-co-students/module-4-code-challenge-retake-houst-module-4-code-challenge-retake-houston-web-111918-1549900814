import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()
    
    this.state = {
      transactions: [],
      searchTerm: ''
    }
    
    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event
    })
  }
  
  componentDidMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
        .then(res => res.json())
        .then(transactions => this.setState({transactions}))
  }
  
  

  render() {
    console.log(this.state.transactions)
    
    let {transactions, searchTerm} = this.state
    let filteredTransaction = transactions.filter(transaction => transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) || transaction.category.toLowerCase().includes(searchTerm.toLowerCase()))
    
    console.log(filteredTransaction)

    return (
      <div>
        <Search handleChange={this.handleChange}  />
        
        <TransactionsList transactions={filteredTransaction} />
      </div>
    )
  }
}

export default AccountContainer
