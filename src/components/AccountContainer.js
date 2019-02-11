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

  }

  state = {
    trans: [],
    search: ''
  }

 componentDidMount(){
    fetch(`https://boiling-brook-94902.herokuapp.com/transactions`)
    .then(res => res.json())
    .then(trans => this.setState({trans}))
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({
      search: e.target.value
    })
  }

  render() {
    // console.log(this.state.search)
    return (
      <div>
        <Search handleChange={this.handleChange}/>
        {this.state.trans.filter(t=>t.description.includes(this.state.search) || t.category.includes(this.state.search)).map(t=>(
          <TransactionsList trans={t} />
        ))}
        
      </div>
    )
  }
}

export default AccountContainer
