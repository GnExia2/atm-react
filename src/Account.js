import React, { Component } from 'react';

export default class Account extends Component {
    constructor(props){
      super(props)
      this.state = {
        balance: 0
      }
      this.handleDepositClick = this.handleDepositClick.bind(this)
      this.handleWithdrawalClick = this.handleWithdrawalClick.bind(this)
    }

    handleDepositClick(e) {
      e.preventDefault()
      let amount = parseInt(this.refs.amount.value, 10);
      let newBalance = this.state.balance + amount;
      this.setState({
        balance: newBalance
      })
      this.refs.amount.value = '';
    }

    handleWithdrawalClick(e) {
      e.preventDefault()
      let amount = parseInt(this.refs.amount.value, 10);
      let newBalance = this.state.balance - amount;
      if (newBalance < 0) {
        newBalance = 0
      }
      this.setState({
        balance: newBalance
      })
      this.refs.amount.value = '';
    }

  render() {
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className="balance">${this.state.balance}</div>
        <input type="text" placeholder="enter an amount" ref="amount"/>
        <input type="button" value="Deposit" onClick={this.handleDepositClick} />
        <input type="button" value="Withdraw" onClick={this.handleWithdrawalClick} />
      </div>
    )
  }
}



//why does program not work when functions are outside constructor
//what does the bind lines do?
