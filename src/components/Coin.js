import PropTypes from 'prop-types';
import Icon from 'react-icons-kit';
import { arrowCircleRight } from 'react-icons-kit/fa/arrowCircleRight';

const Coin = ({ name, symbol, icon }) => (
  <div className="coin" data-testid="coin">
    <i>
      <Icon icon={arrowCircleRight} size={20} />
    </i>
    <img src={icon} alt={name} />
    <span>{name.substring(0, 15)}</span>
    <span>{symbol.substring(0, 15)}</span>
  </div>
);

Coin.propTypes = {
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Coin;
