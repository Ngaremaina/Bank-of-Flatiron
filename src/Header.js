import React, {useState} from "react";
import Link from "./Link";

function Header({getDescription}){
    const [search, setSearch] = useState("")
    // Defining a function that will submit the description
    const handleSubmit = (e) => {
        e.preventDefault()
        //calling our search function
        getDescription(search)

    }
    return (
        //Navigation bar
        <nav className="nav-bar">
            <Link target="#Home" text="Home"/>
            <Link target="#AddTransaction" text="AddTransaction"/>
            
            <div className="nav-bar-right">
                <form onSubmit={handleSubmit}>
                    <input type="text" value={search} placeholder="Search" onChange={e => setSearch(e.target.value)}/>
                    <button className="search-button" type="submit"><i class="fa fa-search"></i></button>
                </form>
                
            </div>

        </nav>
    )

}

export default Header