import './App.css';
import React, {useState, useEffect} from 'react';
import Header from './Header';
import TransactionList from './TransactionList';
import NewTransaction from './NewTransaction';

function App() {
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/transactions")
    .then(res => res.json())
    .then(data => setTransactions(data))

  },[])


  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction])
  }
  const fetchDescription = (search) => {
    const fetchResults = transactions.filter(transaction => transaction.description === search)
    setTransactions(fetchResults)
    
  }


  return (
    <div className="App">
      <Header getDescription = {fetchDescription}/>
      <TransactionList transactions = {transactions}/>
      <NewTransaction transactions = {transactions} onTransactionSubmit={handleAddTransaction}/>
    </div>
  );
}

export default App;
