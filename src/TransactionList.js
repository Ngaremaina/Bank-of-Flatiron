import React from "react";
import TransactionItem from "./TransactionItem";

function TransactionList({transactions, onDeleteTransaction, onUpdateTransaction}){
   
    // Displaying the transactions from the json server
    const displayTransactions = transactions.map(transaction => {
        //returning each entry of the transactions to the TransactionItem Component
       return <TransactionItem key={transaction.id} id = {transaction.id} amount = {transaction.amount} category = {transaction.category} date = {transaction.date} description = {transaction.description} onDeleteTransaction = {onDeleteTransaction} onUpdateTransaction = {onUpdateTransaction}/>
    })

    return (
        //displaying the table
        <div>
            <table id="home">
                <tr>
                    <th>ID</th>
                    <th>Date</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Delete</th>
                   
                </tr>
                {/*Calling the function that wil display the data*/}
                {displayTransactions}      
            </table>    
        </div>
    )
}

export default TransactionList