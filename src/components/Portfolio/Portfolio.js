import React from 'react'
import { Grid, Image, Reveal, Button, Icon } from 'semantic-ui-react'
import { Section, LightBox } from 'components'

const { Column } = Grid;

const forceCircular = {
  objectFit: 'cover',
  width: 230,
  height: 230,
};

const textCircle = {
  borderRadius: '100%',
  backgroundColor: 'rgba(255, 255, 255, .15)',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  display: 'flex',
}

const photos = [
  {
    src: 'portfolio/01.webp',
    title: 'Curso de Doula e Educadora Perinatal - Matriusca',
    description: 'Nesta turma já sabia de minha vinda para Portugal e tentei aproveitar o máximo. Haviam mulheres com histórias e vivências maravilhosas. Foram dias intensos e incríveis!',
  },
  {
    src: 'portfolio/02.webp',
    title: 'Curso de Doula e Educadora Perinatal - Matriusca',
    description: 'Nesta turma já tive a oportunidade de fazer parte da administração do curso. Pude conhecer um pouco de cada mulher antes do curso iniciar, e facilitei algumas aulas. A relação com as mulheres da equipe foi maravilhosa, muita troca e conexão!',
  },
  {
    src: 'portfolio/03.webp',
    title: 'Curso de Doula e Educadora Perinatal - Matriusca',
    description: 'Primeira turma do Curso de Doula e Educadora Perinatal da Matriusca que tive a oportunidade de participar como monitora. Foi uma experiência ótima refazer o curso e ter acesso aos bastidores ao mesmo tempo. Houve uma conexão muito especial com essa turma. <3',
  },
  {
    src: 'portfolio/04.webp',
    title: 'Curso de Doula e Educadora Perinatal - Matriusca',
    description: 'Em uma das vivências realizadas durante o curso. A felicidade de estar entre mulheres incríveis e fortes. <3',
  },
  {
    src: 'portfolio/05.webp',
    title: 'Oficina de Preparação para o Parto',
    description: 'Em uma das oficinas que facilitei junto com a Doula Marilda de Castro na Matriusca. Aqui demonstrando como fazer o famoso "aperto de quadril" em dupla para aliviar a dor no momento da contração.',
  },
  {
    src: 'portfolio/06.webp',
    title: 'Oficina de Preparação para o Parto',
    description: 'Auxiliando uma das mulheres a experimentar a banqueta de parto. Um dos objetivos da oficina é incentivar as mulheres a experimentar diversos métodos não farmacológicos que auxiliam no momento do parto, desde posições e massagens até respirações e vocalizações.',
  },
  {
    src: 'portfolio/07.webp',
    title: 'Oficina de Preparação para o Parto',
    description: 'Demonstrando o processo das contrações uterinas (de braxton hicks e efetivas) e a influência delas no colo do útero, inspirado no vídeo viral de Liz Chalmers. Todas as mulheres e acompanhantes presentes também fizeram a experiência, foi bem divertido! :D',
  },
  {
    src: 'portfolio/08.webp',
    title: 'Oficina de Preparação para o Parto',
    description: 'E não há outra maneira de finalizar a oficina, senão com sorriso no rosto! ^^',
  },
  {
    src: 'portfolio/09.webp',
    title: 'Curso de Doula - IFB/ADDF',
    description: 'Nossa turma do Curso de Doula no IFB - Ceilândia. Compartilhar as tardes com essas mulheres e aprender tanta coisa sobre nós era incrível!',
  },
  {
    src: 'portfolio/10.webp',
    title: 'Certificação - Curso de Doula',
    description: 'Nossa certificação do Curso de Doula aconteceu junto com a Convenção Nacional de Doulas - CONADOULA, no Distrito Federal. Não havia maneira mais maravilhosa de fechar esse ciclo!',
  },
  {
    src: 'portfolio/11.webp',
    title: 'Certificação - Curso de Doula',
    description: 'Uma parte da turma logo após recebermos o certificado. Já éramos doulas. <3',
  },
  {
    src: 'portfolio/12.webp',
    title: 'Defesa da Monografia',
    description: 'Um sorriso de alegria e alívio! ^^ Depois de todo o processo de pesquisa e escrita, finalmente apresentava meu trabalho sobre Violência Obstétrica em mulheres negras.',
  },
  {
    src: 'portfolio/13.webp',
    title: 'Grupo de gestantes - Estágio',
    description: 'Uma das rodas organizadas por mim numa Unidade Básica de Saúde durante o estágio em Serviço Social.',
  },
]

class Portfolio extends React.Component {
  state = {
    isOpen: false,
    showAll: false,
    currentImage: 0,
  }

  render() {
    const { currentImage, isOpen, showAll } = this.state;
    const { numberOfItemsToDisplay = 6 } = this.props;

    const images = showAll ? photos : photos.slice(0, numberOfItemsToDisplay);

    return (
      <Section title='Portfólio' description='Um pouquinho do que foi registrado durante esse percurso:' >
        <Grid style={{ paddingTop: '1.5rem' }} centered>
          {images.map(({ src, title }, key) => (
            <Column mobile={16} tablet={8} computer={5} key={key}>
              <Reveal animated='fade' instant onClick={() => this.setState({ isOpen: true, currentImage: key })} >
                <Reveal.Content hidden>
                  <Image src={src} circular style={{ ...forceCircular }} />
                </Reveal.Content>
                <Reveal.Content visible style={{ ...forceCircular, ...textCircle, cursor: 'pointer' }}>
                  <h4 style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', width: '100%' }} >{title}</h4>
                </Reveal.Content>
              </Reveal>
            </Column>
          ))}
        </Grid>
        { !showAll && (numberOfItemsToDisplay < photos.length) &&
          <Button
            style={{ margin: '3rem' }}
            floated='right'
            primary
            onClick={() => this.setState({ showAll: true })}>
            <Icon name='plus' />
            Mostrar mais
          </Button>
        }
        <LightBox
          images={photos}
          currentImage={currentImage}
          onClickPrev={() => this.setState({ currentImage: currentImage - 1 })}
          onClickNext={() => this.setState({ currentImage: currentImage + 1 })}
          onClose={() => this.setState({ isOpen: false })}
          isOpen={isOpen} />
      </Section>
    )
  }
}
// showThumbnails
// onClickThumbnail={(currentImage) => this.setState({ currentImage })}

export default Portfolio
