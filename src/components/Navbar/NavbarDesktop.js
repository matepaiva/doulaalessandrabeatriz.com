import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import { Image, Grid, Statistic } from 'semantic-ui-react'

// resources
import avatar from 'resources/ale_avatar.png';

const { Row } = Grid;
const backgroundColor = '#eedac5'

const NavbarDesktop = ({ leftItems, rightItems }) => (
  <Grid centered style={{ backgroundColor, marginTop: '1rem' }}>
    <Row>
      <Image src={avatar} circular />
    </Row>
    <Row>
      <Statistic color='grey' size='small'>
        <Statistic.Value>Alessandra Beatriz</Statistic.Value>
        <Statistic.Label>Doula e educadora perinatal</Statistic.Label>
      </Statistic>
    </Row>
  </Grid>
)

NavbarDesktop.propTypes = {
  leftItems: PropTypes.arrayOf(PropTypes.object),
  rightItems: PropTypes.arrayOf(PropTypes.object),
}

export default NavbarDesktop
