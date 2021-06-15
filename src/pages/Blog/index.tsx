import { Container, Post } from './styles';
import { Link } from 'react-router-dom'

import banner from '../../assets/bg/5.png' 

const Blog: React.FC = () => {
  return (
    <Container>
      <Post>
        <div className="area-img">
          <img src={banner} alt="" />
        </div>
        <div className="post-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo natus exercitationem asperiores, quam sequi quos minima adipisci illo ea perspiciatis quae repudiandae nihil doloremque quas dignissimos. Autem fugit beatae asperiores.
        </div>
      </Post>
    </Container>
  )
}

export default Blog;