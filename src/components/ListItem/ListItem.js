import PropTypes from 'prop-types'
import React from 'react'
import { List } from 'semantic-ui-react'

const ListItem = ({ title, description, icon = 'angle right' }) => (
  <List.Item>
    <List.Icon name={icon} />
    <List.Content>
      {title && <List.Header>{title}</List.Header>}
      <List.Description>{description}</List.Description>
    </List.Content>
  </List.Item>
)

ListItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

export default ListItem
