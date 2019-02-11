import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import { transactions } from "../transactionsData";

class AccountContainer extends Component {
  state = {
    transactions: [
      {
        id: 1,
        posted_at: "2017-02-28 11:00:00",
        description: "Leather Pants, Gap co.",
        category: "Fashion",
        amount: -20000
      },
      {
        id: 2,
        posted_at: "2017-02-29 10:30:00",
        description: "Paycheck from Bob's Burgers",
        category: "Income",
        amount: 100000
      },
      {
        id: 3,
        posted_at: "2017-05-24 10:53:00",
        description:
          "'Pair Programming Illuminated' by Laurie Williams and Robert Kessler",
        category: "Book",
        amount: 1498
      },
      {
        id: 4,
        posted_at: "2017-05-24 08:52:00",
        description: "Medium Iced Cold Brew, Gregory's Coffee",
        category: "Coffee",
        amount: 365
      }
    ],

    transactionSearch: {}
  };

  // get a default state working with the data imported from TransactionsData
  // use this to get the functionality working
  // then replace the default transactions with a call to the API

  handleChange = e => {
    this.setState({
      transactionSearch: e.target.value
    });
    console.log(e.target.value);
  };

  render() {
    console.log(this.state.transactions);
    return (
      <div>
        <Search handleChange={this.handleChange} />
        <TransactionsList
          allTransactions={this.state.transactions.filter(transaction => {
            transaction.category;
          })}
        />
      </div>
    );
  }
}

export default AccountContainer;
