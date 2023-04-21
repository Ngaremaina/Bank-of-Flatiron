import React from "react";

function TransactionItem({amount, category, date, description, id}){
    return (
        <tr>      
            <td>{id}</td>
            <td>{date}</td>
            <td>{category}</td>
            <td>{description}</td>
            <td>{amount}</td>

        </tr>
    )

}

export default TransactionItem