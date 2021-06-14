import { useEffect, useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import Typed from 'react-typed';

import brand1 from '../../assets/brands/1.png';
import brand10 from '../../assets/brands/10.png';
import brand11 from '../../assets/brands/11.png';
import brand12 from '../../assets/brands/12.png';
import brand13 from '../../assets/brands/13.png';
import brand14 from '../../assets/brands/14.png';
import brand15 from '../../assets/brands/15.png';
import brand16 from '../../assets/brands/16.png';
import brand17 from '../../assets/brands/17.png';
import brand18 from '../../assets/brands/18.png';
import brand19 from '../../assets/brands/19.png';
import brand2 from '../../assets/brands/2.png';
import brand20 from '../../assets/brands/20.png';
import brand3 from '../../assets/brands/3.png';
import brand4 from '../../assets/brands/4.png';
import brand5 from '../../assets/brands/5.png';
import brand6 from '../../assets/brands/6.png';
import brand7 from '../../assets/brands/7.png';
import brand8 from '../../assets/brands/8.png';
import brand9 from '../../assets/brands/9.png';
import banner1 from '../../assets/cases/Banner_1.png';
import banner2 from '../../assets/cases/Banner_2.png';
import banner3 from '../../assets/cases/Banner_3.png';
import banner4 from '../../assets/cases/Banner_4.png';
import banner5 from '../../assets/cases/Banner_5.png';
import banner6 from '../../assets/cases/Banner_6.png';
import banner7 from '../../assets/cases/Banner_7.png';
import banner8 from '../../assets/cases/Banner_8.png';
import astronautLottie from '../../assets/lotties/astronaut.json';
import elipseLottie from '../../assets/lotties/elipse.json';
import rocketLottie from '../../assets/lotties/rocket.json';
import videoMain from '../../assets/videos/main.mp4';
import FormReCAPTCHA from '../../components/FormReCAPTCHA';
import Gap from '../../components/Gap';
import IconAnimated from '../../components/IconAnimated';
import Modal from '../../components/Modal';
import { AreaMain, Brands, Cases, Container, FormArea, WeDo } from './styles';

const Home: React.FC = () => {

  const [media, setMedia] = useState(false)

  useEffect(() => {
    if(window.matchMedia("(max-width: 567px)").matches) {
      setMedia(true)
    }
  }, [])

  const [toggle, setToggle] = useState(false)

  const handlerModal = () => {
    setToggle(!toggle)
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
          <video width="auto" height="400" controls={false} autoPlay muted loop>
            <source src={videoMain} type="video/mp4" />
          </video>
          <div className="play" onClick={handlerModal}>
            <FaPlay size={50} />
          </div>
        </div>
      </AreaMain>

      <WeDo>
        <Gap />
        <div className="wrapper-wedo">
          <video width="auto" height="230" controls={false} autoPlay muted loop>
            <source src={`${process.env.REACT_APP_URI_API}/uploads/IMG_2374.mp4`} type="video/mp4" />
          </video>
          <video width="auto" height="340" controls={false} autoPlay muted loop>
            <source src={`${process.env.REACT_APP_URI_API}/uploads/IMG_2372.mp4`} type="video/mp4" />
          </video>
          <video width="auto" height="240" controls={false} autoPlay muted loop>
            <source src={`${process.env.REACT_APP_URI_API}/uploads/IMG_2371.mp4`} type="video/mp4" />
          </video>
          <div className="wrapper-content">
          </div>
        </div>
      </WeDo>

      <Brands id="brands">
        {
          !media &&
          <div className="lottie-class">
            <IconAnimated icon={elipseLottie} width={450} height={450} />
          </div>
        }
        <div className="wrapper-brands">
          <div className="area-title">
            <div className="box-title">
              <h1>CLIENTES</h1>
            </div>
            <p>
              Marcas que confiaram na gente
            </p>
          </div>
          <div className="brand"><img src={brand1} alt="" loading="lazy" /></div>
          <div className="brand"><img src={brand2} alt="" loading="lazy" /></div>
          <div className="brand"><img src={brand3} alt="" loading="lazy" /></div>
          <div className="brand"><img src={brand4} alt="" loading="lazy" /></div>
          <div className="brand"><img src={brand5} alt="" loading="lazy" /></div>
          <div className="brand"><img src={brand6} alt="" loading="lazy" /></div>
          <div className="brand"><img src={brand7} alt="" loading="lazy" /></div>
          <div className="brand"><img src={brand8} alt="" loading="lazy" /></div>
          <div className="brand"><img src={brand9} alt="" loading="lazy" /></div>
          <div className="brand"><img src={brand10} alt="" loading="lazy" /></div>
          <div className="brand"><img src={brand11} alt="" loading="lazy" /></div>
          <div className="brand"><img src={brand12} alt="" loading="lazy" /></div>
          <div className="brand"><img src={brand13} alt="" loading="lazy" /></div>
          <div className="brand"><img src={brand14} alt="" loading="lazy" /></div>
          <div className="brand"><img src={brand15} alt="" loading="lazy" /></div>
          <div className="brand"><img src={brand16} alt="" loading="lazy" /></div>
          <div className="brand"><img src={brand17} alt="" loading="lazy" /></div>
          <div className="brand"><img src={brand18} alt="" loading="lazy" /></div>
          <div className="brand"><img src={brand19} alt="" loading="lazy" /></div>
          <div className="brand"><img src={brand20} alt="" loading="lazy" /></div>
        </div>
      </Brands>

      <Cases id="cases">
        {
          !media &&
          <div className="lottie-class">
            <IconAnimated icon={astronautLottie} width={200} height={200} />
          </div>
        }
        <div className="area-title">
          <h1>CONHEÇA NOSSOS</h1>
          <div className="box-title">
            <h1>CASES</h1>
          </div>
        </div>
        <div className="wrapper-cases">
          <div className="case"><img src={banner1} alt="" loading="lazy" /><h1>Central Grill</h1> </div>
          <div className="case"><img src={banner2} alt="" loading="lazy" /><h1>GHESS</h1> </div>
          <div className="case"><img src={banner3} alt="" loading="lazy" /><h1>Grupo SA Brasil</h1> </div>
          <div className="case"><img src={banner4} alt="" loading="lazy" /><h1>ALF Beauty & Academy</h1> </div>
          <div className="case"><img src={banner5} alt="" loading="lazy" /><h1>Esferagro</h1> </div>
          <div className="case"><img src={banner6} alt="" loading="lazy" /><h1>Laboratório ABVET</h1> </div>
          <div className="case"><img src={banner7} alt="" loading="lazy" /><h1>New Life Poltronas</h1> </div>
          <div className="case"><img src={banner8} alt="" loading="lazy" /><h1>LF Automação</h1> </div>
        </div>
      </Cases>

      <FormArea id="contact">
        {
          !media && 
          <div className="wrapper-icon-animated">
            <IconAnimated icon={rocketLottie} height={400} width={400} />
          </div>
        }
        <div className="wrapper-title">
          <h1>Faça sua</h1>
          <h1>Cotação</h1>
        </div>

        <FormReCAPTCHA />
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