import { Container } from './styles';

import ParticlesJS from 'react-particles-js'

const Particles: React.FC = () => {
  return (
    <Container>
      <ParticlesJS width='100vw' height="100vh" params={{
          particles: {
            color: {
              value: "#7c7c7c",
            },
            line_linked:{
              shadow: {
                enable: true,
                color: "#c0c0c0",
                blur: 1,
              }
            },
            number: {
              value: 50,
              density: {
                enable: true,
              }
            },
            size: {
              value: 4,
              random: true,
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse"
              }
            }
          }
        }}
      />
    </Container>
  )
}

export default Particles;