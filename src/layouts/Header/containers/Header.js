import { connect } from 'react-redux'

import Header from '../components/Header'

const mapStateToProps = state => ({
  scene: state.routes.scene
})

export default connect(mapStateToProps, null)(Header)
