import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {

    return (
        <header>
            <Link to="/">
                <div className="logo">
                    <span>CRYPTO CURRENCIES</span>
                </div>
            </Link>
        </header>
    );
};

export default Header;