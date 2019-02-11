import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

    this.state = {
      transactions: transactions,
      searchTerm: ''
    }
  }

  componentDidMount () {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(res => res.json())
    .then(json => this.setState({
      transactions: json
    }))
  }

  handleChange = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  filtered = () => {

  }

  render() {
    let filtered = this.state.transactions.filter( tran => 
      tran.description.toLowerCase().includes(this.state.searchTerm.toLowerCase())
      ||
      tran.category.toLowerCase().includes(this.state.searchTerm.toLowerCase())
      )
    

    return (
      <div>
        <Search handleChange={this.handleChange} />
        {/* <TransactionsList trans={this.state.transactions} /> */}
        <TransactionsList trans={filtered} />
      </div>
    )
  }
}

export default AccountContainer
