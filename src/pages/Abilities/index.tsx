import { Container } from './styles';

import { FaCogs, FaLightbulb } from 'react-icons/fa'
import { TiFlowMerge } from 'react-icons/ti'

import banner from '../../assets/bg/1.png' 

const Abilities: React.FC = () => {
  return (
    <Container>
      <div className="wrapper-banner">
        <img src={banner} alt="" />
      </div>

      <div className="wrapper-content fp-fancy-scrollbar">
        <div className="box-ability">
          <div className="overlay">
            <FaLightbulb size={180}/>
          </div>
          <FaLightbulb size={40}/>
          <h3>Design Conceitual</h3>
          <p>As grandes marcas colocam o cliente em primeiro lugar e o fazem respondendo em tempo hábil, ouvindo e sendo humano.</p>
        </div>
        <div className="box-ability">
          <div className="overlay">
            <TiFlowMerge size={180}/>
          </div>
          <TiFlowMerge size={40}/>
          <h3>Inteligência de Negócio | BI</h3>
          <p>Campanhas publicitárias de entretenimento conectando a atenção com anúncios totalmente fora da caixa.</p>
        </div>
        <div className="box-ability">
          <div className="overlay">
            <FaCogs size={180}/>
          </div>
          <FaCogs size={40}/>
          <h3>Engenharia de Dados</h3>
          <p>Tomamos decisões baseadas primeiramente em dados, segundo pela intuição. Nossos engenheiros caminham lado a lado dos designers.</p>
        </div>
      </div>
    </Container>
  )
}

export default Abilities;