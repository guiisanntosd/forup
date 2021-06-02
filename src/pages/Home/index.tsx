import { Container, AreaMain, WeDo, Brands, Cases, FormArea } from'./styles';
import Button from '../../components/Button';

import teste from '../../assets/teste.png'
import videoMain from '../../assets/videos/main.mp4'
import banner1 from '../../assets/cases/Banner_1.png'
import banner2 from '../../assets/cases/Banner_2.png'
import banner3 from '../../assets/cases/Banner_3.png'
import banner4 from '../../assets/cases/Banner_4.png'
import banner5 from '../../assets/cases/Banner_5.png'
import banner6 from '../../assets/cases/Banner_6.png'
import banner7 from '../../assets/cases/Banner_7.png'
import banner8 from '../../assets/cases/Banner_8.png'
import { FaPlay } from 'react-icons/fa';
import { useState } from 'react';
import Modal from '../../components/Modal';

const Home: React.FC = () => {

  const [toggle, setToggle] = useState(false)

  const handlerModal = () => {
    setToggle(!toggle)
  }

  return (
    <Container>
      <AreaMain id="home">
        <div className="wrapper-content">
          <div className="text-title">
            <h1>Operamos a intersecção entre tecnologia, criatividade e entretenimento</h1>
          </div>
          <p>
            Não há paixão para ser encontrada jogando pequeno, se contentando com um sonho 
            que é menos que o que você é capaz de viver.
          </p>
        </div>
        <div className="wrapper-video">
          <video width="100%" height="360" controls={false} autoPlay muted loop>
            <source src={videoMain} type="video/mp4"/>
          </video>
          <div className="play" onClick={handlerModal}>
            <FaPlay size={50}/>
          </div>
          <Modal show={toggle}>
            <iframe 
              className="main-video-frame"
              width="100%" 
              height="360"
              src="https://www.youtube.com/embed/SaDiRnBhxmY?controls=0" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="autoplay" 
              allowFullScreen
            />
          </Modal>
        </div>
      </AreaMain>

      <WeDo>
        <div className="wrapper-wedo">
          <video width="98%" height="210" controls={false} autoPlay muted loop>
            <source src="https://twist.com.br/empresa-especializada-em/wp-content/uploads/2019/08/Video1-Pequeno.mp4" type="video/mp4"/>
          </video>
          <video width="98%" height="280" controls={false} autoPlay muted loop>
            <source src="https://twist.com.br/empresa-especializada-em/wp-content/uploads/2019/08/Video2-pequeno.mp4" type="video/mp4"/>
          </video>
          <video width="98%" height="320" controls={false} autoPlay muted loop>
            <source src="https://twist.com.br/empresa-especializada-em/wp-content/uploads/2019/08/Video-pequeno.mp4" type="video/mp4"/>
          </video>
        </div>
        <div className="wrapper-content">
          <h3>Anything here</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Eum autem, commodi minima ducimus reprehenderit officia 
            placeat sequi quidem repellendus quibusdam quasi possimus 
            perferendis fugiat enim suscipit? At eum porro sunt.
          </p>
        </div>
      </WeDo>

      <Brands id="brands">
        <div className="wrapper-brands">
          <div className="area-title">
            <div className="box-title">
              <h1>CLI <br/> EN <br/> TES</h1>
            </div>
            <p>
              Marcas que confiaram na gente
            </p>
          </div>
          <div className="brand"><img src={teste} alt="" /></div>
          <div className="brand"><img src={teste} alt="" /></div>
          <div className="brand"><img src={teste} alt="" /></div>
          <div className="brand"><img src={teste} alt="" /></div>
          <div className="brand"><img src={teste} alt="" /></div>
          <div className="brand"><img src={teste} alt="" /></div>
          <div className="brand"><img src={teste} alt="" /></div>
          <div className="brand"><img src={teste} alt="" /></div>
          <div className="brand"><img src={teste} alt="" /></div>
          <div className="brand"><img src={teste} alt="" /></div>
          <div className="brand"><img src={teste} alt="" /></div>
          <div className="brand"><img src={teste} alt="" /></div>
          <div className="brand"><img src={teste} alt="" /></div>
          <div className="brand"><img src={teste} alt="" /></div>
          <div className="brand"><img src={teste} alt="" /></div>
          <div className="brand"><img src={teste} alt="" /></div>
          <div className="brand"><img src={teste} alt="" /></div>
          <div className="brand"><img src={teste} alt="" /></div>
          <div className="brand"><img src={teste} alt="" /></div>
          <div className="brand"><img src={teste} alt="" /></div>
        </div>
      </Brands>

      <Cases id="cases">
        <div className="wrapper-cases">
          <div className="area-title">
            <div className="box-title">
              <h1>CA <br/> SES</h1>
            </div>
          </div>
          <div className="case"><img src={banner1} alt="" /><h1>Central Grill</h1> </div>
          <div className="case"><img src={banner2} alt="" /><h1>GHESS</h1> </div>
          <div className="case"><img src={banner3} alt="" /><h1>Grupo SA Brasil</h1> </div>
          <div className="case"><img src={banner4} alt="" /><h1>ALF Beauty & Academy</h1> </div>
          <div className="case"><img src={banner5} alt="" /><h1>Esferagro</h1> </div>
          <div className="case"><img src={banner6} alt="" /><h1>ABVET Laboratório</h1> </div>
          <div className="case"><img src={banner7} alt="" /><h1>New Life Poltronas</h1> </div>
          <div className="case"><img src={banner8} alt="" /><h1>LF Automação</h1> </div>
        </div>
      </Cases>

      <FormArea id="contact">
        <h1> Fale conosco</h1>
        <form action="">
          <div className="input-control">
            <input type="text" id="name" required pattern=".*\S.*"/>
            <label htmlFor="name">Nome Completo</label>
          </div>
          <div className="input-control">
            <input type="text" id="office" required pattern=".*\S.*"/>
            <label htmlFor="office">Empresa</label>
          </div>
          <div className="input-control">
            <input type="text" id="email" required pattern=".*\S.*"/>
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-control">
            <input type="text" id="phone" required pattern=".*\S.*"/>
            <label htmlFor="phone">Telefone</label>
          </div>
          <div className="input-control">
            <input type="text" id="segment" required pattern=".*\S.*"/>
            <label htmlFor="segment">Segmento</label>
          </div>
          <div className="input-control">
            <input type="text" id="role" required pattern=".*\S.*"/>
            <label htmlFor="role">Cargo</label>
          </div>
          <div className="input-control">
            <textarea required id="message" />
            <label htmlFor="message">Mensagem</label>
          </div>
          <Button children="ENVIAR"/>
        </form>
      </FormArea>
    </Container>
  )
}

export default Home;