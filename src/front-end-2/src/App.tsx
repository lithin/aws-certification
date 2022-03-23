import React from 'react';
import './App.css';

function App() {
  React.useEffect(() => {
    console.log(`Hello! Welcome to the Thrive Health dev treasure hunt. I'm Hippo, your trusted guide.

         >=<         
    ,.--'  ''-.  
    (  )  ',_.' 
     Xx'xX      

     I'm a healing hippo. But as much as I'm good at helping others, I'm bad at helping myself. I seem to have lost my magic wand that I use to make everyone and everything better! Will you help me find it? I remember storing it safely somewhere at my home where I would easily find it again. But here we are, my memory is like a sieve! I remember the place being... yellow. Or was it green?
    `)
  }, []);

  return (
    <div className="App">
      <form>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </form>
    </div>
  );
}

export default App;
