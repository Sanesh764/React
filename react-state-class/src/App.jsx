
import './App.css'
import Counter from './Counter'
import LikeButton from './LikeButton';
function App() {
  let styles={color:"red"};
  return (
    <>
      <h1 style={styles}>state in react</h1>
      <Counter/>
    </>
  )
}

export default App
