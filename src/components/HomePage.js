import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Coin from './Coin';
import { fetchCoins } from '../redux/reducers';

const Homepage = () => {
    const coinState = useSelector((state) => state.coins);
    const dispatch = useDispatch();

    useEffect(() => {
        if (coinState.length === 0) {
            dispatch(fetchCoins());
        }
    }, [coinState.length, dispatch]);

    return (
        <div className="coin-list-container" data-testid="homepage">
            <div className="card-container">
                {coinState.map((coin) => (
                    <Link key={coin.id} to={`/${coin.id}`}>
                        <Coin
                            key={coin.id}
                            name={coin.name}
                            symbol={coin.symbol}
                            icon={coin.icon}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Homepage;