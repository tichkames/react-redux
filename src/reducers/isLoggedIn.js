//Reducer -> Checks what Action to perform
//then Transforms Current State into next State
const isLoggedInReducer = (state = false, action) => {
  switch(action.type) {
    case 'LOGIN':
      state = true
      return state;
    case 'LOGOUT':
      state = false
      return state;
    default:
      return state;
  }
};

export default isLoggedInReducer;