import api from "./connect"

interface EmailProps {
  name: string,
  office?: string,
  email: string,
  phone: string,
  segment?: string,
  role?: string,
  subject: string,
  message: string,
}

class Email {
  async send({name, office, email, phone, segment, role, subject, message}: EmailProps) {
    
    const data = {
      name, office, email, phone, segment, role, subject, message
    }

    const res = await api.post('/sendMail', data)

    return res.data
  }
}

export default new Email()