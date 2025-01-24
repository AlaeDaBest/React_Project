import React from "react";
import { Link } from "react-router-dom";
const Header=(props)=>{
    return(
        <header>
            <nav>
                <div>
                    <Link to='/'>Home</Link>
                    <Link to='/fragrances'>Fragrances</Link>
                    <Link to='/about'>About</Link>
                </div>
                <div>
                    <input type="text" name="" id="" onChange={(e)=>props.setSearchedTerm(e.target.value)} />
                    <input type="button" value="Search" />
                </div>
                <div>
                    <Link to='/cart'>Cart</Link>
                    <Link to='/favorites'>Favorites</Link>
                </div>
            </nav>  
        </header>
    )
}
export default Header;