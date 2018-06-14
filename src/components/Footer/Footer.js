import PropTypes from 'prop-types'
import React from 'react'
import { Grid, Container } from 'semantic-ui-react'
import { Section, ContactForm, ContactList, EndContainer } from 'components'

const { Row } = Grid;
const backgroundColor = '#eedac5';

const Footer = () => (
  <EndContainer>
      <Section title={'Contato'}>
        <Grid centered>
          <Grid.Column mobile={16} computer={4}>
            <ContactList />
          </Grid.Column>
          <Grid.Column mobile={16} computer={8}>
            <ContactForm />
          </Grid.Column>
        </Grid>
      </Section>
  </EndContainer>
)

Footer.propTypes = {}

export default Footer
