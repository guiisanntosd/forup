import { useState } from 'react';

import Button from '../Button';

import ReCaptcha from 'react-google-recaptcha';
import email from '../../service/email';

import { Container } from './styles'

interface FormProps {
  name: string,
  office?: string,
  email: string,
  phone: string,
  segment?: string,
  role?: string,
  subject: string,
  message: string,
}

const FormReCAPTCHA = () => {

  const [formData, setFormData] = useState<FormProps>({
    name: '',
    office: '',
    email: '',
    phone: '',
    segment: '',
    role: '',
    subject: '',
    message: '',
  })

  const [state, setState] = useState({
    isVerified: false,
    token: ''
  })

  const handleOnChange = (value: any) => {
    setState({
      isVerified: true,
      token: value
    })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (state.token) {
      console.log(await email.send(formData))
    } else {
      alert('então ne robozinho')
      console.log('não tem')
    }
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <div className="input-control">
          <input type="text" id="name" pattern=".*\S.*" onChange={ e => setFormData({...formData, name: e.target.value }) } />
          <label htmlFor="name">Nome Completo</label>
        </div>
        <div className="input-control">
          <input type="text" id="office" pattern=".*\S.*" onChange={ e => setFormData({...formData, office: e.target.value }) } />
          <label htmlFor="office">Empresa</label>
        </div>
        <div className="input-control">
          <input type="text" id="email" pattern=".*\S.*" onChange={ e => setFormData({...formData, email: e.target.value }) } />
          <label htmlFor="email">E-mail</label>
        </div>
        <div className="input-control">
          <input type="text" id="phone" pattern=".*\S.*" onChange={ e => setFormData({...formData, phone: e.target.value }) } />
          <label htmlFor="phone">Telefone</label>
        </div>
        <div className="input-control">
          <input type="text" id="segment" pattern=".*\S.*" onChange={ e => setFormData({...formData, segment: e.target.value }) } />
          <label htmlFor="segment">Segmento</label>
        </div>
        <div className="input-control">
          <input type="text" id="role" pattern=".*\S.*" onChange={ e => setFormData({...formData, role: e.target.value }) } />
          <label htmlFor="role">Cargo</label>
        </div>
        <div className="input-control">
          <select id="subject" onChange={ e => setFormData({...formData, subject: e.currentTarget.value }) } >
            <option value="" defaultValue=""></option>
            <option value="Website">Website</option>
            <option value="Tráfego pago">Tráfego Pago</option>
            <option value="Logotipo">Logotipo</option>
            <option value="Social mídia">Social Mídia</option>
            <option value="Outros">Outros</option>
          </select>
          <label htmlFor="subject">Assunto</label>
        </div>
        <div className="input-control">
          <textarea id="message" onChange={ e => setFormData({...formData, message: e.target.value }) } />
          <label htmlFor="message">Mensagem</label>
        </div>
        <div className="wrapper-button">
          <Button children="ENVIAR" disabled={!state.isVerified} />
          <ReCaptcha
            sitekey={String(process.env.REACT_APP_RECAPTCHA_SITE_KEY)}
            onChange={handleOnChange}
          />
        </div>
      </form>
    </Container>
  )
}

export default FormReCAPTCHA;