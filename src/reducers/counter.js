//Reducer -> Checks what Action to perform
//then Transforms Current State into next State
const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + action.payload;
    case 'DECREMENT':
      return state - action.payload;
    default:
      return state;
  }
}

export default counterReducer;