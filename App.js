import React, { Component } from 'react'
import { Font } from 'expo'
import { StyleSheet } from 'react-native'
import { Container, Spinner } from 'native-base'

import Main from './src'

class App extends Component {
  state = {
    isFontLoaded: false
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf') // eslint-disable-line camelcase
    })

    this.setState({ isFontLoaded: true })
  }

  render() {
    if (this.state.isFontLoaded) {
      return <Main />
    }

    return (
      <Container style={styles.splash}>
        <Spinner color="blue" />
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  }
})

export default App
