import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-icons-kit';
import { circleLeft } from 'react-icons-kit/icomoon/circleLeft';
import { longArrowRight } from 'react-icons-kit/fa/longArrowRight';
import { twitter } from 'react-icons-kit/fa/twitter';
import { infoCircle } from 'react-icons-kit/fa/infoCircle';
import { fetchCoins } from '../redux/reducers';

const CurrencyFormatter = (amount) => new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
}).format(amount);

const DetailsPage = () => {
  const coinState = useSelector((state) => state.coins);
  const params = useParams();
  const dispatch = useDispatch();
  const findCurrentCoin = coinState.find((coin) => coin.id === params.coinId);
  const currentCoin = findCurrentCoin || {};

  useEffect(() => {
    if (coinState.length === 0) {
      dispatch(fetchCoins());
    }
  }, [coinState.length, dispatch]);

  return (
    <div className="details-container">
      <div className="coin-details">
        <Link to="/" className="back-icon">
          <Icon icon={circleLeft} size={20} />
          <span>BACK</span>
        </Link>
        <div className="coin-info">
          <img src={currentCoin.icon} alt={currentCoin.name} />
          <h2>{currentCoin.name}</h2>
          <h3>{currentCoin.symbol}</h3>
        </div>
        <div className="coin-data">
          <div>
            <h4>Price</h4>
            <p>{CurrencyFormatter(currentCoin.price)}</p>
          </div>
          <div>
            <h4>Market Cap</h4>
            <p>{CurrencyFormatter(currentCoin.marketCap)}</p>
          </div>
          <div>
            <h4>Volume</h4>
            <p>{CurrencyFormatter(currentCoin.volume)}</p>
          </div>
          <div>
            <h4>Available Supply</h4>
            <p>{CurrencyFormatter(currentCoin.availableSupply)}</p>
          </div>
          <div>
            <h4>Total Supply</h4>
            <p>{CurrencyFormatter(currentCoin.totalSupply)}</p>
          </div>
          <div>
            <h4>Price Change (1h)</h4>
            <p>
              {currentCoin.priceChange1h}
              %
            </p>
          </div>
          <div>
            <h4>Price Change (1d)</h4>
            <p>
              {currentCoin.priceChange1d}
              %
            </p>
          </div>
          <div>
            <h4>Price Change (1w)</h4>
            <p>
              {currentCoin.priceChange1w}
              %
            </p>
          </div>
        </div>
        <div className="coin-links">
          <a
            href={`https://twitter.com/${currentCoin.twitter}`}
            target="_blank"
            rel="noreferrer"
            data-testid="twitter-link"
          >
            <Icon icon={twitter} size={20} />
          </a>
          <a
            href={`https://www.cryptocompare.com/coins/${currentCoin.id}/overview`}
            target="_blank"
            rel="noreferrer"
            data-testid="info-link"
          >
            <Icon icon={infoCircle} size={20} />
          </a>
          <a
            href={`https://www.coingecko.com/en/coins/${currentCoin.id}`}
            target="_blank"
            rel="noreferrer"
            data-testid="coingecko-link"
          >
            <Icon icon={longArrowRight} size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
