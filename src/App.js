import './App.css';
import React, {useState, useEffect} from 'react';
import Header from './Header';
import TransactionList from './TransactionList';
function App() {
  const [transactions, setTransactions] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/transactions")
    .then(res => res.json())
    .then(data => setTransactions(data))

  },[])
  return (
    <div className="App">
      <Header />
      <TransactionList transactions = {transactions}/>
    </div>
  );
}

export default App;
