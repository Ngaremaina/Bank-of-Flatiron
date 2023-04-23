import './App.css';
import React, {useState, useEffect} from 'react';
import Header from './Header';
import TransactionList from './TransactionList';
import NewTransaction from './NewTransaction';


function App() {
  const [transactions, setTransactions] = useState([])

  //defining the useEffect function that will fetch data from json server
  useEffect(() => {
    fetch("http://localhost:3000/transactions")
    .then(res => res.json())
    .then(data => setTransactions(data))

  },[])

  //Adding the new transaction to our json data
  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction])
  }

  //Fetching the data that is searched using the description
  const fetchDescription = (search) => {
    const fetchResults = transactions.filter(transaction => transaction.description === search)
    setTransactions(fetchResults)   
  }

  //Deleting out transaction
  const handleDeleteTransaction = (deletedTransaction) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== deletedTransaction));
  }
  //Sorting the transactions by category
  function sortByCategory() {
    const sortedTransactions = [...transactions].sort((a, b) => a.category.localeCompare(b.category));
    setTransactions(sortedTransactions);
  }
  //Sorting the transactions by description
  function sortByDescription() {
    const sortedTransactions = [...transactions].sort((a, b) => a.description.localeCompare(b.description));
    setTransactions(sortedTransactions);
  }
  

  //Calling our components
  return (
    <div className="App">
      <Header getDescription = {fetchDescription}/>
      <TransactionList transactions = {transactions} onDeleteTransaction={handleDeleteTransaction} sortByCategory = {sortByCategory} sortByDescription={sortByDescription}/>
      <NewTransaction onTransactionSubmit={handleAddTransaction}/>
    </div>
  );
}

export default App;
