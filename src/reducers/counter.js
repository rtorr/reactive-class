import {
  ADD_ACTION_TYPE,
  SUBTRACT_ACTION_TYPE
} from './../actions/index'

export default (state = {value: 0}, action) => {
  console.log(state, action)
  switch (action.type) {
    case ADD_ACTION_TYPE:
      return { value: state.value + 1 }
    case SUBTRACT_ACTION_TYPE:
       return { value: state.value - 1 }
    default:
      return state
  }
}
