
import Message from "./components/Message/index.js"

function App() {
  const text = 'Hello, world for lesson1!'
  return (
    <div className="App">
      <Message text={text}/>
    </div>
  );
}

export default App;
