//Action -> Verb describing what you want to do to the Store
export const increment = (num) => {
  return {
    type: 'INCREMENT',
    payload: num
  }
}

export const decrement = (num) => {
  return {
    type: 'DECREMENT',
    payload: num
  }
}

const allActions = {
  increment,
  decrement
}

// export default allActions;