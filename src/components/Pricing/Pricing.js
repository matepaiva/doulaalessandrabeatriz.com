import PropTypes from 'prop-types'
import React from 'react'
import { List, Tab } from 'semantic-ui-react'
import { Section, ListItem } from 'components'

const separatePrices = [
  {
    title: 'Encontros (período gravídico e puerperal)*',
    description: '40€ (26,70€ por hora - média de 1h30 por encontro).',
  },
  {
    title: 'Acompanhamento no parto*',
    description: '350€ (disponibilidade 24h a partir da 38a semana + toda a duração do trabalho de parto + 2h de pós parto imediato + 2 encontros pós parto).',
  },
  {
    title: 'Consultoria online',
    description: '30€ (orientação via telefone/skype + envio de materiais informativos via email).',
  },
  {
    title: 'Workshop - Preparação para o parto',
    description: '85€ (3 horas de duração + material audiovisual + explicação e prática de exercícios para o parto).',
  },
  {
    title: 'Workshop - Cuidados Naturais com Família-Bebê',
    description: '85€ (3 horas de duração + material audiovisual + exercícios práticos).',
  },
  {
    icon: 'asterisk',
    description: 'Fora de Lisboa poderá ser cobrado o valor de deslocamento.',
  },
];

const packagePrices = [
  {
    title: '5 encontros presenciais (período gravídico e puerperal)',
    description: '180€ (média de 1h30 por encontro).',
  },
  {
    title: '4 encontros presenciais (período gravídico e puerperal)',
    description: '144€ (média de 1h30 por encontro).',
  },
  {
    title: '3 encontros presenciais + 2 consultorias online',
    description: '160€ (média de 1h30 por encontro/consultoria).',
  },
  {
    title: '2 encontros presenciais + 2 consultorias online.',
    description: '124€ (média de 1h30 por encontro/consultoria).',
  },
  {
    title: 'Workshops: Preparação para o Parto + Cuidados Naturais com família-bebê',
    description: '150€ (podem ser feitos no mesmo dia ou em dias separados).',
  },
  {
    icon: 'asterisk',
    description: 'É possível também montar pacotes personalizados! Contacte-me para saber mais.',
  },
];

const PriceList = ({ list }) => (<List>{list.map((props, i) => <ListItem {...props} key={i} />)}</List>);

const panes = [
  {
    menuItem: { key: 'separatePrices', icon: 'tag', content: 'Avulsos' },
    render: () => <Tab.Pane>{<PriceList list={separatePrices} />}</Tab.Pane>
  },
  {
    menuItem: { key: 'packagePrices', icon: 'tags', content: 'Pacotes ' },
    render: () => <Tab.Pane>{<PriceList list={packagePrices} />}</Tab.Pane>
  },
];

const Pricing = () => (
  <Section title='Valores por serviço'>
    <Tab panes={panes} />
  </Section>
)

export default Pricing
