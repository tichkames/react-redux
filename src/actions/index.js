import axios from 'axios'

//Action -> Verb describing what you want to do to the Store
const increment = (num) => {
  return {
    type: 'INCREMENT',
    payload: num
  }
}

const decrement = (num) => {
  return {
    type: 'DECREMENT',
    payload: num
  }
}

const fetchUsersRequest = () => {
  return async (dispatch) => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(response.data);
  }
}

export {
  increment,
  decrement,
  fetchUsersRequest
}