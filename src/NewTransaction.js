import React,{useState} from "react";

function NewTransaction({onTransactionSubmit, transactions}){
    const [description, setDescription] = useState("")
    const [amount, setAmount] = useState("")
    const [date, setDate] = useState("")
    const [category, setCategory]=useState("")

    // const displayCategories = transactions.map((item) =>{  
    //     return <option>{item.category}</option>  
    // })

    function handleSubmit(e){
        e.preventDefault()
       
        const newTransaction = {
            amount:amount,
            description:description,
            date:date,
            category:category
        }
        fetch("http://localhost:3000/transactions",{
            method:"POST", 
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(newTransaction)
        })
        .then(res => res.json())
        .then(data => onTransactionSubmit(data))
    }
    return (
        <form className="addNewTransaction" onSubmit={handleSubmit}>
            <h2>Add New Transaction</h2>
            <label>Date</label> 
            <input type="date" value={date} onChange={e => setDate(e.target.value)}/>
                
            <label>Description</label>
            <input type="text" value={description} onChange={e => setDescription(e.target.value)}/>
            
            <label>Amount</label>
            <input type="text" value={amount} onChange={e => setAmount(e.target.value)}/>
            
            <label>Categories
                <select value={category} onChange={e => setCategory(e.target.value)}>
                    {/* {displayCategories} */}
                    <option>Food</option>
                    <option>Income</option>
                    <option>Fashion</option>
                    <option>Transportation</option>
                    <option>Entertainment</option>
                    <option>Housing</option>
                </select>
            </label>
            <button>Submit</button>

        </form>
    )

}

export default NewTransaction