import PropTypes from 'prop-types'
import React from 'react'
import { Card } from 'semantic-ui-react'
import { Section } from 'components'

const items = [
  {
    header: 'DOULA',
    description:
      'Sou Doula formada em 2017 pelo Instituto Federal de Brasília (IFB) e Associação de Doulas do Distrito Federal (ADDF) -- na primeira turma do Brasil pública e gratuita. Descobri o papel da Doula ainda na graduação, num processo de muita leitura e estudo. Logo me identifiquei e busquei formação na área. Como Doula, eu acompanho mulheres que estão no ciclo gravídico-puerperal, a fim de oferecer suporte emocional, físico e informacional.',
    meta: 'Instituto Federal de Brasília - 2017',
  },
  {
    header: 'EDUCADORA PERINATAL',
    description:
      'Como Educadora Perinatal organizo e facilito Rodas de mulheres grávidas, a fim de proporcionar um espaço de troca, desabafos e aprendizados. Ofereço consultorias onlines e/ou presenciais, facilito workshops de preparação para o parto, cuidados naturais com família-bebê e outros temas que envolvem o ciclo gravídico-puerperal, e facilito aulas para curso de  formação de Doula e Educadora Perinatal. Tudo sempre baseado em evidências científicas atuais.',
    meta: 'Matriusca - 2017',
  },
  {
    header: 'SERVIÇO SOCIAL',
    description:
      'Iniciei a graduação em Serviço Social pela Universidade de Brasília - UnB em 2013 e concluí em 2017. Foi neste percurso, entre pesquisas, estágio e escrita da monografia que se acentuou meu desejo de me envolver no universo da concepção. A formação me auxiliou muito no desenvolvimento do pensamento crítico, na busca por evidências científicas e pelo olhar da totalidade do ser. Algo que é não só complementar, como imprescindível na doulagem.',
    meta: 'Universidade Nacional de Brasília, 2013',
  },
];

const About = () => (
  <Section title='Sobre mim'>
    <Card.Group items={items} centered />
  </Section>
)

export default About
