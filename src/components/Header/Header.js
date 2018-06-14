import PropTypes from 'prop-types'
import React from 'react'
import { Image, Grid, Statistic } from 'semantic-ui-react'

// resources
import avatar from 'resources/ale_avatar.png';

const { Row } = Grid;
const backgroundColor = '#eedac5'

const Header = () => (
  <div style={{ backgroundColor, borderTop: '.5rem solid #ddc3d8' }}>
    <Image src={avatar} circular style={{ margin: '1rem auto' }} />
    <Grid centered>
      <Row style={{ padding: '1rem' }}>
        <Statistic color='grey' size='small'>
          <Statistic.Value>Alessandra Beatriz</Statistic.Value>
          <Statistic.Label>Doula e educadora perinatal</Statistic.Label>
        </Statistic>
      </Row>
    </Grid>
  </div>
)

Header.propTypes = {}

export default Header
