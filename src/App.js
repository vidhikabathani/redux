import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from './redux/Action';

function App() {
  let count=useSelector((Store)=>Store)
  let addnum=useDispatch((Store)=>Store)
  let removenum=useDispatch((Store)=>Store)
  useDispatch()

  const handleadd=()=>{
    addnum(add())
  }

  const handleRemove=()=>{
    removenum(remove())
  }
  return (
    <>
      <h1>
        Count : {count}
      </h1>
      <button onClick={handleadd}>Add Number</button><br/>
      <button onClick={handleRemove}>Remove Number</button>
    </>
  )
}

export default App;
