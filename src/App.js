
import Message from "./components/Message/index.js"

function App() {
  const text = 'Hello, world!'
  return (
    <div className="App">
      <Message text={text}/>
    </div>
  );
}

export default App;
