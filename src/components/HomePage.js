import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { arrowCircleRight } from 'react-icons-kit/fa/arrowCircleRight';
import Icon from 'react-icons-kit';
import { fetchCoins } from '../redux/reducers';
import '../App.css';

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
      {coinState.map((coin, index) => (
        <Link key={coin.id} to={`/${coin.id}`}>
          <div className={`card-container ${index % 2 === 0 ? 'even' : 'odd'}`}>
            <div className="card">
              <div className="coin-icon">
                <img src={coin.icon} alt={coin.symbol} />
              </div>
              <div className="coin-name">
                {coin.name}
                <i className="arrow-icon">
                  <Icon icon={arrowCircleRight} size={20} />
                </i>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>

  );
};

export default Homepage;
