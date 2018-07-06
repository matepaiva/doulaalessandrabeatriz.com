import React from 'react'
import { Form } from 'semantic-ui-react'

const ContactForm = () => (
  <Form
    action="https://formspree.io/doularse@gmail.com"
    method="POST">
    <Form.Input label='Nome' name='name' autoComplete='name' placeholder='Seu nome' />
    <Form.Input label='E-mail' name='email' autoComplete='email' type='email' placeholder='Seu e-mail' />
    <input type="text" name="_gotcha" autoComplete='_gotcha' style={ { display: 'none' } } />
    <input type="hidden" name="_next" autoComplete='_next' value="/" />
    <Form.TextArea label='Assunto' name='content' placeholder='Sobre o que gostaria de falar?' />
    <Form.Button primary floated='right'>Enviar</Form.Button>
  </Form>
)

export default ContactForm;
