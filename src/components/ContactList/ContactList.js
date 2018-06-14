import PropTypes from 'prop-types'
import React from 'react'
import { List } from 'semantic-ui-react'

const content = [
  {
    icon: 'marker',
    content: 'Lisboa, Portugal',
  },
  {
    icon: 'mail',
    content: <a href='mailto:doularse@gmail.com'>doularse@gmail.com</a>,
  },
  {
    icon: 'mail',
    content: <a href='mailto:ale.beatrizs@gmail.com'>ale.beatrizs@gmail.com</a>,
  },
  {
    icon: 'phone',
    content: '(+351) 938 114 861',
  },
  {
    icon: 'instagram',
    content: '@alebeatrizs',
  },
  {
    icon: 'facebook',
    content: 'facebook.com/doularse',
  },
]

const ContactList = () => (
  <List>
    {content.map((props, key) => (<List.Item {...props} key={key} />))}
  </List>
)

export default ContactList;
