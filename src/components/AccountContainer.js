import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'

class AccountContainer extends Component {

  constructor() {
    super()

    this.state = {
      transactions: [],
      userSearch: ''
    }

  }

  componentDidMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(res => res.json())
    .then(transactions => this.setState({transactions}))
  }

  handleChange = (e) => {
    this.setState({
      userSearch: e.target.value
    })
  }

  render() {
    let transactions = this.state.transactions.filter(transaction => transaction.description.toLowerCase().includes(this.state.userSearch.toLowerCase()) || transaction.category.toLowerCase().includes(this.state.userSearch.toLowerCase()))
    return (
      <div>
        <Search handleChange={this.handleChange}/>
        <TransactionsList transactions={transactions}/>
      </div>
    )
  }
}

export default AccountContainer
