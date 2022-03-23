import React from 'react';
import './App.css';

function App() {
  React.useEffect(() => {
    console.log('Hello!')
  }, []);

  return (
    <div className="App">
      <button className="Tile" onClick={() => console.log('Try again')}></button>
    </div>
  );
}

export default App;
