import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    console.log(Link)
    return (
        <>
            <header>
                <div className="head">
                    <div className="logo">
                        <img src="https://i.pinimg.com/564x/71/fd/c6/71fdc6bea072b24edca4bdb6b52eba22.jpg" width="80" alt=""/>
                    </div>
                    <div className="menu">
                        <ul>
                            <li><Link to="/" style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>Listagem</Link></li>    
                            <li><Link to="/cadastro" style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>Cadastro</Link></li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;