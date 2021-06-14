import errorLottie from '../../assets/lotties/error.json'
import IconAnimated from '../../components/IconAnimated'
import { Container } from './styles'

const Error: React.FC = () => {
  return (
    <Container>
      <IconAnimated icon={errorLottie} height={400} width={700} />
    </Container>
  )
}

export default Error;