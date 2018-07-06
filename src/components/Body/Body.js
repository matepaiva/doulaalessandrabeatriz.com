import React from 'react'
import { Grid, Container } from 'semantic-ui-react'
import { About, Portfolio, Ways, Pricing, MediumPosts } from 'components'

import styles from './Body.less'

const Body = () => (
  <Container className={styles.body}>
    <Grid>
      <Grid.Row centered><About /></Grid.Row>
      <Grid.Row centered><Portfolio /></Grid.Row>
      <Grid.Row centered><Ways /></Grid.Row>
      <Grid.Row><MediumPosts /></Grid.Row>
      <Grid.Row><Pricing /></Grid.Row>
    </Grid>
  </Container>
)

Body.propTypes = {
}

export default Body
