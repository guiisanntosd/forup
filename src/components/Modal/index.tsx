import { Container } from './styles';
import { RiCloseLine } from 'react-icons/ri'
import { useState } from 'react';

interface IModal {
  show: Boolean
}

const Modal: React.FC<IModal> = (props) => {

  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <Container theme={toggle !== props.show ? 'block' : 'none'} onClick={handleToggle}>
      <div className="modal-body">
        <div className="modal-header">
          <div className="close" onClick={handleToggle}>
            <RiCloseLine size={30}/>
          </div>
        </div>
        <div className="modal-content">
          {props.children}
        </div>
      </div>
    </Container>
  )
}

export default Modal;