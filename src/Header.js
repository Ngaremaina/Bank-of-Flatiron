import React from "react";

function Header(){
    return (
        <nav className="nav-bar">
            <a href="#Home">Home</a>
            <a href="#AddTransaction">Add Transaction</a>
            <div className="nav-bar-right">
                <form>
                    <input type="text" placeholder="Search"/>
                    <button className="search-button" type="submit"><i class="fa fa-search"></i></button>
                </form>
                
            </div>

        </nav>
    )

}

export default Header