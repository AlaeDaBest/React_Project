import React from "react";
import { Link, NavLink } from "react-router-dom";
const Header=(props)=>{
    return(
        <header>
            <nav>
                <div>
                    <NavLink to='/' className={({isActive})=>(isActive? 'active-link':'')} >Home</NavLink>
                    <Link to='/fragrances'>Fragrances</Link>
                    <Link to='/about'>About</Link>
                    <NavLink to='/addFragrance' className={({isActive})=>(isActive? 'active-link':'')} >Add Fragrance</NavLink>
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