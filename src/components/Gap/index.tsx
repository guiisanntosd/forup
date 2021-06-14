import { useEffect, useRef, useState } from 'react';
import { Container } from './styles';

const Gap: React.FC = (() => {

  const gap = useRef<HTMLDivElement>(null)
  const [moveGap, setMoveGap] = useState<any>()

  useEffect(() => {
    setMoveGap(gap.current);
  }, [])

  if(moveGap) {
    window.addEventListener('scroll', () => {
      let y = window.pageYOffset <= 1600 ? window.pageYOffset : 1600
      moveGap.style = `transform: translateX(calc(-100% + ${y/2}px))`
    })
  }

  return (
    <Container ref={gap} >
      <ul>
        <li>WEBDESIGN</li>
        <li>PLANEJAMENTO</li>
        <li>USER EXPERIENCE</li>
        <li>TECNOLOGIA</li>
        <li>CONTEÚDO</li>
        <li>FOTO, VÍDEO, ILUSTRAÇÃO</li>
        <li>DESIGN RESPONSIVO</li>
        <li>SITES GERENCIÁVEIS</li>
        <li>OTIMIZAÇÃO SEO</li>
        <li>GOOGLE ADWORDS</li>
        <li>SEGURANÇA E PERFORMANCE</li>
        <li>MANUTENÇÃO E HOSPEDAGEM</li>
        <li>SUPORTE CONTÍNUO</li>
        <li>PERSONALIZAÇÃO COMPLETA</li>
        <li>FERRAMENTAS DE VENDAS</li>
      </ul>
    </Container>
  )
})

export default Gap
