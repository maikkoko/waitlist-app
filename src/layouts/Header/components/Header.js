import React from 'react'
import PropTypes from 'prop-types'
import { Header, Title, Button, Left, Right, Body, Icon } from 'native-base'
import { Actions } from 'react-native-router-flux'

const HeaderView = ({ scene }) => {
  const icon =
    scene.title !== 'Home' ? (
      <Left>
        <Button transparent onPress={Actions.pop}>
          <Icon name="menu" />
        </Button>
      </Left>
    ) : (
      <Left>
        <Button transparent disabled style={{ opacity: 0 }}>
          <Icon name="menu" />
        </Button>
      </Left>
    )

  return (
    <Header>
      {icon}
      <Body>
        <Title>{scene.title}</Title>
      </Body>
      <Right />
    </Header>
  )
}

HeaderView.propTypes = {
  scene: PropTypes.object
}

export default HeaderView
