import { Container } from './styles';

interface IButton {
  children: string
  disabled?: boolean
}

const Button: React.FC<IButton> = ({children, disabled}) => {
  return (
    <Container>
      <button className="button" disabled={disabled}>
        <span>{children}</span>
      </button>
    </Container>
  );
}

export default Button;