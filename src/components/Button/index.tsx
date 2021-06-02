import { Container } from './styles';

interface IButton {
  children: string
}

const Button: React.FC<IButton> = ({children}) => {
  return (
    <Container>
      <button className="button">
        <span>{children}</span>
      </button>
    </Container>
  );
}

export default Button;