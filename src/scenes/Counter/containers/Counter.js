import { connect } from 'react-redux'

import Counters from '../components/Counters'

import * as actionCreators from '../../../store/reducers/counter'
import { createActionDispatchers } from '../../../store'

const mapStateToProps = state => ({
  routes: state.routes,
  countersState: state.counter
})

const mapDispatchToProps = createActionDispatchers(actionCreators)

export default connect(mapStateToProps, mapDispatchToProps)(Counters)
