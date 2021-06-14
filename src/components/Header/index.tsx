import { Container, MenuHamburger } from './styles';
import { NavLink } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'

import { ReactComponent as Logo } from '../../assets/logo.svg'
import { memo, useState } from 'react';

const theme = {
  open: {
    width: 0,
    opacity: 0,
    rotateN: ('rotate(-45deg)'),
    rotateP: ('rotate(45deg)'),
    top: {
      lt:'15px',
      lb:'15px',
    }
  },
  close: {
    width: '30px',
    opacity: 1,
    rotateN: ('rotate(0deg)'),
    rotateP: ('rotate(0deg)'),
    top: {
      lt:'5px',
      lb:'25px',
    }
  }
}

const Header: React.FC = () => {
  
  const [menu, setMenu] = useState(false)

  const toggleMenu = () => {
    setMenu(!menu)
  }

  return (
    <Container>
      <div className="wrapper-menu">
        <NavLink to='/' activeClassName="active" onClick={toggleMenu}>
          <div className="wrapper-logo">
            <Logo/>
          </div>
        </NavLink>
        <nav className="wrapper-content ">
          <ul className={ menu ? '' : 'visible'}>
            <NavLink exact to='/' activeClassName="active" onClick={toggleMenu}>
              <li>
                <span>01</span>
                <p>HOME</p>
              </li>
            </NavLink>

            <NavLink to='/abilities' activeClassName="active" onClick={toggleMenu}>
              <li>
                <span>02</span>
                <p>HABILIDADES</p>
              </li>
            </NavLink>

            <NavLink to='/ourdna?topic=criatividade' activeClassName="active" onClick={toggleMenu}>
              <li>
                <span>03</span>
                <p>NOSSO DNA</p>
              </li>
            </NavLink>

            <Link to='/#cases' onClick={toggleMenu}>
              <li>
                <span>04</span>
                <p>WEBSITES</p>
              </li>
            </Link>

            <Link to='/#brands' onClick={toggleMenu}>
              <li>
                <span>05</span>
                <p>BRANDING</p>
              </li>
            </Link>

            <Link to='/#contact' onClick={toggleMenu}>
              <li>
                <span>06</span>
                <p>CONTATO</p>
              </li>
            </Link>
          </ul>
        </nav>

        <MenuHamburger onClick={toggleMenu} theme={theme[menu ? 'open' : 'close']}  >
          <span className="lt"></span>
          <span className="lm"></span>
          <span className="lb"></span>
        </MenuHamburger>
      </div>
    </Container> 
  )
}

export default memo(Header);