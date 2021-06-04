import { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import Typed from 'react-typed';
import banner1 from '../../assets/cases/Banner_1.png';
import banner2 from '../../assets/cases/Banner_2.png';
import banner3 from '../../assets/cases/Banner_3.png';
import banner4 from '../../assets/cases/Banner_4.png';
import banner5 from '../../assets/cases/Banner_5.png';
import banner6 from '../../assets/cases/Banner_6.png';
import banner7 from '../../assets/cases/Banner_7.png';
import banner8 from '../../assets/cases/Banner_8.png';
import videoMain from '../../assets/videos/main.mp4';
import Button from '../../components/Button';
import Modal from '../../components/Modal';

import { AreaMain, Brands, Cases, Container, FormArea, WeDo } from './styles';

const Home: React.FC = () => {

  const logos = []

  for (let i = 1; i <= 20; i++) {
    logos.push(`./assets/brands/logos/${i}.png`)
  }

  const [toggle, setToggle] = useState(false)

  const handlerModal = () => {
    setToggle(!toggle)
  }

  if (!logos.length) {
    return <p>Carregando</p>
  }

  return (
    <Container>
      <AreaMain id="home">
        <div className="wrapper-content">
          <div className="text-title">
            <h1>Operamos a intersecção <br /> entre <Typed loop typeSpeed={50} backSpeed={20} strings={[" Criatividade", " Entretenimento", " Tecnologia"]} smartBackspace shuffle={false} backDelay={900} fadeOutDelay={1000} loopCount={0} showCursor cursorChar="|" /></h1>
          </div>
          <p>
            Somos uma agência full-service que acredita na força das ideias para mobilizar
            pessoas, acelerar resultados e moldar o mundo.
          </p>
        </div>
        <div className="wrapper-video">
          <video width="100%" height="360" controls={false} autoPlay muted loop>
            <source src={videoMain} type="video/mp4" />
          </video>
          <div className="play" onClick={handlerModal}>
            <FaPlay size={50} />
          </div>
        </div>
      </AreaMain>

      <WeDo>
        <div className="wrapper-wedo">
          <video width="98%" height="210" controls={false} autoPlay muted loop>
            <source src="https://twist.com.br/empresa-especializada-em/wp-content/uploads/2019/08/Video1-Pequeno.mp4" type="video/mp4" />
          </video>
          <video width="98%" height="280" controls={false} autoPlay muted loop>
            <source src="https://twist.com.br/empresa-especializada-em/wp-content/uploads/2019/08/Video2-pequeno.mp4" type="video/mp4" />
          </video>
          <video width="98%" height="320" controls={false} autoPlay muted loop>
            <source src="https://twist.com.br/empresa-especializada-em/wp-content/uploads/2019/08/Video-pequeno.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="wrapper-content">
          <h2>EMPREENDEDORISMO NA VEIA</h2>
          <p>
            Dentro da nossa companhia, a atitude de dono cumpre o papel de fazer com que
            todo mundo trabalhe diariamente com o mesmo objetivo em
            mente:
          </p>
          <p>
            <strong>inovação + criatividade.</strong>
          </p>
        </div>
      </WeDo>

      <Brands id="brands">
        <canvas id="canvasOne" width="800" height="520"/>
        <div className="wrapper-brands">
          <div className="area-title">
            <div className="box-title">
              <h1>CLI <br /> EN <br /> TES</h1>
            </div>
            <p>
              Marcas que confiaram na gente
            </p>
          </div>
          {
            logos.map((item, index) =>
              <div className="brand" key={index}>
                <img src={item} alt="" />
              </div>
            )
          }
        </div>
      </Brands>

      <Cases id="cases">
        <div className="area-title">
          <div className="box-title">
            <h1>CA <br /> SES</h1>
          </div>
        </div>
        <div className="wrapper-cases">
          <div className="case"><img src={banner1} alt="" /><h1>Central Grill</h1> </div>
          <div className="case"><img src={banner2} alt="" /><h1>GHESS</h1> </div>
          <div className="case"><img src={banner3} alt="" /><h1>Grupo SA Brasil</h1> </div>
          <div className="case"><img src={banner4} alt="" /><h1>ALF Beauty & Academy</h1> </div>
          <div className="case"><img src={banner5} alt="" /><h1>Esferagro</h1> </div>
          <div className="case"><img src={banner6} alt="" /><h1>Laboratório ABVET</h1> </div>
          <div className="case"><img src={banner7} alt="" /><h1>New Life Poltronas</h1> </div>
          <div className="case"><img src={banner8} alt="" /><h1>LF Automação</h1> </div>
        </div>
      </Cases>
        
      <FormArea id="contact">
        <h1> Fale conosco</h1>
        <form action="">
          <div className="input-control">
            <input type="text" id="name" required pattern=".*\S.*" />
            <label htmlFor="name">Nome Completo</label>
          </div>
          <div className="input-control">
            <input type="text" id="office" required pattern=".*\S.*" />
            <label htmlFor="office">Empresa</label>
          </div>
          <div className="input-control">
            <input type="text" id="email" required pattern=".*\S.*" />
            <label htmlFor="email">E-mail</label>
          </div>
          <div className="input-control">
            <input type="text" id="phone" required pattern=".*\S.*" />
            <label htmlFor="phone">Telefone</label>
          </div>
          <div className="input-control">
            <input type="text" id="segment" required pattern=".*\S.*" />
            <label htmlFor="segment">Segmento</label>
          </div>
          <div className="input-control">
            <input type="text" id="role" required pattern=".*\S.*" />
            <label htmlFor="role">Cargo</label>
          </div>
          <div className="input-control">
            <textarea required id="message" />
            <label htmlFor="message">Mensagem</label>
          </div>
          <Button children="ENVIAR" />
        </form>
      </FormArea>

      <Modal show={toggle}>
        <iframe
          className="main-video-frame"
          src="https://www.youtube.com/embed/SaDiRnBhxmY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Modal>
    </Container>
  )
}

export default Home;