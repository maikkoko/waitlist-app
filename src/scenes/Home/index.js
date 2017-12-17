import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { Grid, Row, Text, Button } from 'native-base'
import { View, StyleSheet } from 'react-native'

class Home extends Component {
  static propTypes = {
    title: PropTypes.string
  }

  state = {
    isModalOpen: false
  }

  render() {
    return (
      <Grid>
        <Row style={styles.center}>
          <View>
            <Text style={{ marginTop: 40, textAlign: 'center' }}>
              Currently Serving:
            </Text>
            <Text
              style={{
                fontSize: 180,
                marginTop: 10,
                fontWeight: 'bold',
                textAlign: 'center'
              }}
            >
              10
            </Text>
          </View>
        </Row>
        <Row style={styles.center}>
          <Button
            style={{
              marginTop: 80
            }}
            large
            onPress={Actions.counter} // eslint-disable-line react/jsx-handler-names
          >
            <Text>Add Customer</Text>
          </Button>
        </Row>
      </Grid>
    )
  }
}

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center'
  }
})

export default connect(({ routes }) => ({ routes }))(Home)
