import React from 'react'
import { Grid, Container } from 'semantic-ui-react'

const backgroundColor = '#eedac5';

const EndContainer = ({ children }) => (
  <Grid centered style={{ backgroundColor, paddingTop: '1rem' }}>
    <Container textAlign='center'>
      {children}
    </Container>
  </Grid>
)

export default EndContainer;
