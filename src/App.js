import React from 'react'
import { Helmet } from 'react-helmet';
import { Header, Body, Footer } from 'components'
import 'styling/semantic.less'
import './App.less'
import ReactGA from 'react-ga';

ReactGA.initialize('UA-122708724-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const title = 'Doula Alessandra Beatriz <3';

const App = () => (
  <div>
    <Helmet>
      <title>{title}</title>
      <meta name="theme-color" content="#bb95ff" />
      <meta name="description" content={title} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={title} />
      <meta property="og:image" content="https://aledoula.com/ale_avatar.png" />
      <meta property="og:url" content="https://aledoula.com" />
    </Helmet>
    <Header />
    <Body />
    <Footer />
  </div>
)

export default App
