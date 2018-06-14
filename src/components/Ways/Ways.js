import PropTypes from 'prop-types'
import React from 'react'
import { Card, Segment, Header } from 'semantic-ui-react'
import { Section } from 'components'
import ReactMarkdown from 'react-markdown';

const asDoula = `
### Como Doula:

Explicar o que uma Doula faz, e como ela faz, tem sido uma das coisas mais recorrentes desde que me tornei uma. O fato é que, cada pessoa tem sua interpretação:
- Doula é mulher que acompanha "partos humanizados": em casa, na água, sem analgesia, com parteira e luzes baixas.
- Doula é uma mulher que acompanha parto normal, ajuda na hora de parir. Mas isso é coisa de mulher rica, é muito caro ter uma!
- Doula é a mesma coisa que parteira.

E há quem defina como uma "Personal Pregnant". Eu, por mais que tente explicar exatamente o que faço e como faço, digo: não há uma definição exata.

Eu acompanho mulheres que estão passando pelo ciclo gravídico-puerperal. Durante o acompanhamento ofereço suporte informacional 
(com informações baseadas em evidências científicas atuais), emocional e físico. Mas a maneira como esse acompanhamento acontece muda de 
mulher para mulher. Isso porque a chave para cada acompanhamento é a conexão. 

Conectar com a mulher que estou doulando, e com o 
universo em que ela está inserida é a essência do meu trabalho, e é isso que desenrola todo o atendimento e define como ele será de fato. 
Não há como seguir um acompanhamento se não houver uma conexão mútua, uma identificação tanto por parte da mulher em relação a mim, 
quanto o contrário. É um trabalho que não se resume em si, não há protocolos.

Posso acompanhar uma mulher e ser solicitada a enviar artigos diversos sobre o ciclo gravídico-puerperal, e trocar poucas palavras sobre 
como ela se sente estando inserida neste contexto, 
ou, posso acompanhar uma mulher e num encontro me dedicar inteiramente a ouvi-la e acolhê-la, sem ser solicitada de passar qualquer 
tipo de orientação. Posso, no momento do parto, fazer uso de massagens, exercícios e vocalizações, ou posso passar todo o processo "apenas" 
olhando para a mulher num misto de incentivo e admiração. Cada acompanhamento é, incrivelmente, único.
`

const asEducator = `
### Como Educadora Perinatal:

A Educação Perinatal é algo que anda lado a lado com a doulagem, não há como separar totalmente uma da outra. Num acompanhamento individual, por exemplo, desempenho o papel de  Educadora Perinatal ao dar suporte informacional. Buscar artigos, livros, vídeos e outros meios de informação faz parte deste papel.

Há como colocar a Educação Perinatal em prática também em atendimentos em grupo. Em 2017 fui monitora de duas turmas do Curso de Doula e Educadora Perinatal na Matriusca, uma empresa brasileira criada e formada por Doulas. Em seguida, fiz parte da coordenação das próximas duas turmas e facilitei as aulas de "Fisiologia da gestação", "Tipos e locais de Parto", "Fisiologia do parto" e "Violência no ciclo gravídico-puerperal".

Também em parceria com a Matriusca, fui moderadora de Rodas de Mulheres Grávidas, Puérperas e acompanhantes, e Oficinas de Preparação para o Parto e de Cuidados Naturais com Família-Bebê.

Ter como trabalho a função de informar pessoas, seja individual ou coletivamente, é uma responsabilidade e também uma honra muito grande, ainda mais ao trabalhar com e entre mulheres. 
Considerando o contexto misógino e cheios de tabus em relação à gravidez, parto e puerpério, e um sistema que veicula informações muitas vezes errôneas e 
desatualizadas, é uma missão informar e, por meio da informação, fortalecer e encorajar mulheres - incluindo a mim mesma.
`

const asSocialWorker = `
### Como Assistente Social:

Ter feito a graduação de serviço social é uma de minhas maiores realizações. Durante este processo desenvolvi um senso crítico social e 
aprendi sobre a importância de questionar e sair da zona de conforto. Além de todos os aprendizados e capacitações adquiridas na academia, 
foi no desenrolar deste processo que meu interesse sobre concepção e ciclo gravídico puerperal surgiu. 

Inicialmente participei de um grupo de pesquisa com mulheres grávidas e puérperas num presídio feminino, onde pude refletir 
bastante sobre a violência obstétrica e como ela atinge e se materializa em cada mulher. 

Em seguida, fiz estágio junto a um grupo de mulheres grávidas que eram acompanhadas em uma Unidade Básica de Saúde, onde efetivei um projeto 
de intervenção cujo objetivo era incentivar a participação das mulheres que realizavam o acompanhamento do pré-natal na instituição e dos 
diversos profissionais de saúde da Unidade que podiam contribuir com o grupo. 

E por fim, meu trabalho de conclusão de curso foi uma monografia sobre a violência obstétrica em mulheres negras, neste processo realizei 
entrevistas com mulheres que já haviam passado pela experiência do parto e com profissionais de saúde de uma determinada região. 

Foram vivências essenciais neste percurso. Ainda havia muita dúvida do que faria exatamente com o conhecimento adquirido e o interesse 
sobre o assunto. Me preocupava em desenvolver trabalhos que houvesse finalidade e restrição apenas acadêmica, desejava que o 
conhecimento e as evidências fossem de livre acesso para todas as mulheres, sem restrição de classe e raça. Hoje, com a doulagem e 
a educação perinatal me sinto mais próxima disso, mas ainda há um longo e infindável caminho a percorrer.
`

const content = [
  { color: 'purple', text: asDoula },
  { color: 'orange', text: asEducator },
  { color: 'yellow', text: asSocialWorker },
];

const Ways = () => (
  <Section title='Três formas de atuar no feminino' >
    <Segment.Group>
      {content.map(({ text, color }, key) => (
        <Segment color={color} textAlign='left' key={key}>
          <ReactMarkdown source={text} />
        </Segment>
      ))}
    </Segment.Group>
  </Section>
)

export default Ways
