import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './actions'

function App() {
  const counter = useSelector(state => state.counter);
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter { counter } </h1>
      <h2>Logged In { isLoggedIn }</h2>
      <button onClick={ () => dispatch(increment(2)) }>+</button>
      <button onClick={ () => dispatch(decrement(2)) }>-</button>
    </div>
  );
}

export default App;
