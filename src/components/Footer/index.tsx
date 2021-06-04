import { Container } from './styles';
import { Link } from 'react-router-dom'

import { ImFacebook } from 'react-icons/im'
import { FiInstagram } from 'react-icons/fi'
import { FaLinkedinIn, FaRegEnvelope } from 'react-icons/fa'

const Footer: React.FC = () => {
  return (
    <Container>
      <div className="wrapper-contact">
        <ul>
          <h2>Acesso rápido</h2>
          <li><Link to='/abilities'>Habilidades</Link></li>
          <li><Link to='/ourdna'>Nosso DNA</Link></li>
          <li><Link to='/cases'>WebSites</Link></li>
          <li><Link to='/brands'>Branding</Link></li>
          <li><Link to='/blog'>Blog</Link></li>
          <li><Link to='/contact'>Contato</Link></li>
        </ul>
        <ul>
          <h2>São Paulo - SP</h2>
          <li>Alameda Joaquim Eugênio</li>
          <li> de Lima, 297 - Bela Vista</li>

          <h2>Guaíra - SP</h2>
          <li>Rua 18, 611 - Centro</li>
        </ul>
        <ul>
          <h2>Contato</h2>
          <li><a href="mailto: contato@agenciaforup.com">contato@agenciaforup.com</a></li>
          <li><a href="tel: +5511996602390">+55 (11) 99660-2390</a></li>
          <p>
            <a rel="noreferrer" target="_blank" href="https://instagram.com/agenciaforup"><FiInstagram size={20}/></a>
            <a rel="noreferrer" target="_blank" href="mailto:contato@agenciaforup.com?Subject=Contato - Website"><FaRegEnvelope size={20}/></a>
            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/company/ag%C3%AAncia-for-up/"><FaLinkedinIn size={20}/></a>
            <a rel="noreferrer" target="_blank" href="https://www.facebook.com/agenciaforup"><ImFacebook size={20}/></a>
          </p>
          <li>
            <img src={'./assets/png/adventures.png'} alt="" />
          </li>
        </ul>
      </div>
      <p>{"Copyright \u00A9 2021 Agência ForUp. All Rights Reserved."}</p>
    </Container>
  )
}

export default Footer;