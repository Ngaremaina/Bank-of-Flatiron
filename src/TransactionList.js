import React from "react";
import TransactionItem from "./TransactionItem";

function TransactionList({transactions, onDeleteTransaction}){
    // console.log(transactions)
    const displayTransactions = transactions.map(transaction => {
       return <TransactionItem key={transaction.id} id = {transaction.id} amount = {transaction.amount} category = {transaction.category} date = {transaction.date} description = {transaction.description} onDeleteTransaction = {onDeleteTransaction}/>
    })

    return (
        <div>
            <table id="customers">
                <tr>
                    <th>ID</th>
                    <th>Date</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Delete</th>
                   
                </tr>
                {displayTransactions}      
            </table>    
        </div>
    )
}

export default TransactionList