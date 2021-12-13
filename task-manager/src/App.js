import './App.css';

function App() {
  const userName = 'Nicolas'
  const userBool = false

  return (
    <div className="App">
      <h1>Hello to my project in React, {userBool ? userName : 'Anonimo'}!</h1>

    </div>
  );
}

export default App;
