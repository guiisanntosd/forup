import { Midia, Phone } from './styles'

import { ImFacebook } from 'react-icons/im'
import { FiInstagram } from 'react-icons/fi'
import { FaLinkedinIn, FaRegEnvelope } from 'react-icons/fa'

const Social: React.FC = () => {

  return (
    <>
      <Midia>
        <ul>
          <li><a rel="noreferrer" target="_blank" href="https://instagram.com/agenciaforup"><FiInstagram/></a></li>
          <li><a rel="noreferrer" target="_blank" href="mailto:contato@agenciaforup.com?Subject=Contato - Website"><FaRegEnvelope/></a></li>
          <li><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/company/ag%C3%AAncia-for-up/"><FaLinkedinIn/></a></li>
          <li><a rel="noreferrer" target="_blank" href="https://www.facebook.com/agenciaforup"><ImFacebook/></a></li>
        </ul>
      </Midia>
      <Phone>
        <a href="tel: 5511996602390">+55 11 99660-2390</a>
      </Phone>
    </>
  )
}

export default Social;