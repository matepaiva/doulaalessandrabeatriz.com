import PropTypes from 'prop-types'
import React from 'react'
import { Segment, Divider, Header} from 'semantic-ui-react'

const backgroundColor = 'rgba(238, 218, 197, .3)';

const Section = ({ title, description, children }) => (
  <Segment padded basic style={{ backgroundColor }}>
    <Divider horizontal>{title}</Divider>
    {description && <Header as='h4' sub >{description}</Header>}
    {children}
  </Segment>
)

Section.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  children: PropTypes.any,
}

export default Section
