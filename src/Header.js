import React, {useState} from "react";

function Header({getDescription}){
    const [search, setSearch] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        getDescription(search)

    }
    return (
        <nav className="nav-bar">
            <a href="#Home">Home</a>
            <a href="#AddTransaction">Add Transaction</a>
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