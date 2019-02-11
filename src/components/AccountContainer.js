import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import { transactions } from "../transactionsData";

class AccountContainer extends Component {
  state = {
    transactions: [],
    transactionSearch: ""
  };

  componentDidMount = () => {
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
      .then(res => res.json())
      .then(json =>
        this.setState({
          transactions: json
        })
      );
  };

  // get a default state working with the data imported from TransactionsData
  // use this to get the functionality working
  // then replace the default transactions with a call to the API

  handleChange = transactionSearch => {
    this.setState({
      transactionSearch
    });
  };

  render() {
    return (
      <div>
        <Search handleChange={this.handleChange} />
        <TransactionsList
          allTransactions={this.state.transactions.filter(
            transaction =>
              transaction &&
              transaction.category
                .toLowerCase()
                .includes(this.state.transactionSearch.toLowerCase())
          )}
        />
      </div>
    );
  }
}

export default AccountContainer;
