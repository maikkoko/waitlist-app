import React from 'react'
import { Provider } from 'react-redux'

import createStore from './store'
import './config/ReactotronConfig'

import Scenes from './scenes'

import { Container } from 'native-base'
import Header from './layouts/Header'
import Footer from './layouts/Footer'

const store = createStore()

const Main = () => (
  <Provider store={store}>
    <Container>
      {/* Appbar */}
      <Header />
      {/* Content/Pages */}
      <Scenes />
      {/* Footer */}
      <Footer />
    </Container>
  </Provider>
)

export default Main
