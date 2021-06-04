import { Container, TopicContent } from './styles';
import { useRouteMatch, NavLink, useLocation } from 'react-router-dom'

import banner from '../../assets/bg/2.png'
import { useEffect, useState } from 'react';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
}

const Ourdna: React.FC = () => {

  let query = useQuery();
  let { url } = useRouteMatch();

  const [topic, setTopic] = useState(query.get('topic'))

  useEffect(() => {
    setTopic(query.get('topic'))
  }, [query, topic])

  return (
    <Container>
      <div className="wrapper-banner">
        <img src={banner} alt="" />
      </div>
      <div className="wrapper-content fp-fancy-scrollbar">
        <div className="tips">
          <p>
            Somos uma empresa cujo modelo entrega resultados de negócio mensuráveis através
            da criação e distribuição de conteúdo de qualidade em alto volume, integrando estratégia,
            criação, mídia e produção sob o mesmo teto.
          </p>
        </div>

        <ul>
          <li><NavLink activeClassName={topic === 'criatividade' ? 'active' : ''} exact to={`${url}?topic=criatividade`}>CRIATIVIDADE</NavLink></li>
          <li><NavLink activeClassName={topic === 'tecnologia' ? 'active' : ''} exact to={`${url}?topic=tecnologia`}>TECNOLOGIA</NavLink></li>
        </ul>

        <div>
          {
            topic === 'criatividade' && 
            <TopicContent>
              <div className="topic-box">
                <h5>PROPÓSITO</h5>
                <h4>Nada nos para, sabemos onde queremos chegar.</h4>
                <p>
                  Quando se tem propósito é impossível errar. Sabemos os objetivos que devemos
                  alcançar e nos tornamos imparáveis até conseguir, não importa como, criamos jeitos,
                  maneiras e caminhos para nossos objetivos.
                </p>
              </div>
              <div className="topic-box">
                <h5>ESTÍMULO</h5>
                <h4>Nossa energia é anormal, sonhamos grande!</h4>
                <p>
                  A energia transcende em cada olhar, as vitórias e conquistas servem de estímulos, assim como os desafios
                  impostos que são o combustível para uma a caminhada até o sucesso.
                </p>
              </div>
              <div className="topic-box">
                <h5>INCONFORMISMO</h5>
                <h4>Zona de conforto nos abomina.</h4>
                <p>
                  Para quem quer resultados não existe zona de conforto. É inaceitável paramos no tempo, por isso buscamos sempre
                  inovação com base nos resultados cada vez melhores.
                </p>
              </div>
            </TopicContent>
          }
          {
            topic === 'tecnologia' &&
            <TopicContent>
              <div className="topic-box">
                <h5>DADOS</h5>
                <h4>A única coisa que vale do que dinheiro são os dados.</h4>
                <p>
                  Hoje os dados são a moeda mais valiosa do mundo. Cada vez mais o mundo procura ser mais assertivo
                  em ‘’ o que’’ e ‘’para quem’’ e por isso pesquisas, análises e levantamento de dados são imprescindíveis.
                </p>
              </div>
              <div className="topic-box">
                <h5>INTUIÇÃO</h5>
                <h4>Nossa capacidade intuitiva vai além da razão.</h4>
                <p>
                  Um bom negócio precisa de um bom planejamento. Mas um negócio que muda o mundo precisa de planejamento e coração. Com a
                  experiência a intuição vai se lapidando cada vez mais até fazer a diferença.
                </p>
              </div>
              <div className="topic-box">
                <h5>AUSÊNCIA DE MEDO</h5>
                <h4>Testamos rápido, erramos rápido. Nos adptamos à velocidade.</h4>
                <p>
                  O mundo não pode para, tentamos e se errarmos, concertamos no tempo certo. Erros acontecem só com os
                  que são valentes o suficiente para arriscar.
                </p>
              </div>
            </TopicContent>
          }
          
        </div>
      </div>
    </Container>
  )
}

export default Ourdna;