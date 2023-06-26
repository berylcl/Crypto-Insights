import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
    const [searchName, setSearchName] = useState('');
    useLocation();
    const navigate = useNavigate();

    const handleSearch = (event) => {
        event.preventDefault();
        if (searchName) {
            const encodedSearchName = encodeURIComponent(searchName);
            navigate(`/?coinName=${encodedSearchName}`);
        } else {
            navigate('/');
        }
    };

    return (
        <header>
            <Link to="/">
                <div className="logo">
                    <span>CRYPTO CURRENCIES</span>
                </div>
            </Link>
            <form role="form" onSubmit={handleSearch}>
                <input
                    type="text"
                    value={searchName}
                    onChange={(event) => setSearchName(event.target.value)}
                    placeholder="Search..."
                />
                <button type="submit">Search</button>
            </form>
        </header>
    );
};

export default Header;
