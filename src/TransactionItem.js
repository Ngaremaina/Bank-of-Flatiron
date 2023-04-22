import React from "react";

function TransactionItem({amount, category, date, description, id, onDeleteTransaction}){
    function handleDelete(){
        fetch(`http://localhost:3000/transactions/${id}`, {
            method:"DELETE", 
            headers:{"Content-Type":"application/json"}
        })

        onDeleteTransaction(id)
      }
    return (
        <tr>  
            <td>{id}</td>
            <td>{date}</td>
            <td>{category}</td>
            <td>{description}</td>
            <td>{amount}</td>
            <td><button class="deletebutton" style={{float: 'left'}} onClick={handleDelete}><i class="fa fa-trash-o"></i></button></td>  
            
            
        </tr>
    )
}

export default TransactionItem