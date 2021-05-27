import Logo from '../../assets/logo.png';
import LogoWhite from '../../assets/logo-white.png';

import {Link} from 'react-router-dom';
import './styles.css';

const Header = ({whiteVersion, hideCard}) => {
  const openDrawer = () => {
    const event = new CustomEvent('openCart');
    window.dispatchEvent(event);
  }

  return (
    <div className="col-12">
      <header className="py-4 px-4 text-center">
        <Link to={'/'}>
          <img src={whiteVersion ? LogoWhite : Logo} alt="PetFood" className="img-fluid" />
        </Link>
      </header>
      {!hideCard && (
        <button
          onClick={() => openDrawer()}
          className="btn btn-secondary cart-button"
        >
          <span className="mdi mdi-cart"></span> 2 itens
        </button>
      )}
      </div>
  );
}

export default Header;