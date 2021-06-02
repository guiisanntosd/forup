import { Container } from './styles';
import { Link } from 'react-router-dom'

import banner from '../../assets/bg/5.png' 

const Blog: React.FC = () => {
  return (
    <Container>
      <div className="wrapper-banner">
        <img src={banner} alt="" />
      </div>

      <div className="wrapper-content fp-fancy-scrollbar">
        <div className="box-news">
          <div className="date">
            <h2>11</h2>
            <p>maio</p>
          </div>
          <div className="news-content">
            <Link to='/'><h3>O PODER DOS GATILHOS MENTAIS</h3></Link>
            <p>As grandes marcas colocam o cliente em primeiro lugar e o fazem respondendo em tempo hábil, ouvindo e sendo humano.</p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Blog;