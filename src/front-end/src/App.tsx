import React from 'react';
import './App.css';

const sendAndReceive = async (word: string) => {
  const response = await fetch('https://j26xvnuu24.execute-api.us-east-1.amazonaws.com/dev/place', { method: 'POST', body: word, mode: 'cors' });
  const result = await response.text();

  console.log(result);
}

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
      <button className="Tile green" onClick={() => sendAndReceive('Plate')}>Plate</button>
      <button className="Tile blue" onClick={() => sendAndReceive('Glass')}>Glass</button>
      <button className="Tile yellow" onClick={() => sendAndReceive('TV')}>TV</button>
      <button className="Tile blue" onClick={() => sendAndReceive('Phone')}>Phone</button>
      <button className="Tile green" onClick={() => sendAndReceive('Sock')}>Sock</button>
      <button className="Tile yellow" onClick={() => sendAndReceive('Cactus')}>Cactus</button>
      <button className="Tile blue" onClick={() => sendAndReceive('Laptop')}>Laptop</button>
      <button className="Tile green" onClick={() => sendAndReceive('Basket')}>Basket</button>
      <button className="Tile blue" onClick={() => sendAndReceive('Water')}>Water</button>
      <button className="Tile blue" onClick={() => sendAndReceive('Radio')}>Radio</button>
      <button className="Tile blue" onClick={() => sendAndReceive('Cake')}>Cake</button>
      <button className="Tile green" onClick={() => sendAndReceive('Lamp')}>Lamp</button>
      <button className="Tile green" onClick={() => sendAndReceive('Pants')}>Pants</button>
      <button className="Tile blue" onClick={() => sendAndReceive('Carpet')}>Carpet</button>
      <button className="Tile yellow" onClick={() => sendAndReceive('Chest')}>Chest</button>
      <button className="Tile blue" onClick={() => sendAndReceive('Box')}>Box</button>
      <button className="Tile green" onClick={() => sendAndReceive('Sofa')}>Sofa</button>
      <button className="Tile blue" onClick={() => sendAndReceive('Table')}>Table</button>
      <button className="Tile yellow" onClick={() => sendAndReceive('Pillowcase')}>Pillowcase</button>
      <button className="Tile blue" onClick={() => sendAndReceive('Pantry')}>Pantry</button>
      <button className="Tile yellow" onClick={() => sendAndReceive('Bookshelf')}>Bookshelf</button>
      <button className="Tile blue" onClick={() => sendAndReceive('Closet')}>Closet</button>
      <button className="Tile yellow" onClick={() => sendAndReceive('Garden')}>Garden</button>
      <button className="Tile green" onClick={() => sendAndReceive('Flower pot')}>Flower pot</button>
      <button className="Tile blue" onClick={() => sendAndReceive('Safe')}>Safe</button>
      <button className="Tile blue" onClick={() => sendAndReceive('Sweater')}>Sweater</button>
      <button className="Tile green" onClick={() => sendAndReceive('Curtains')}>Curtains</button>
      <button className="Tile yellow" onClick={() => sendAndReceive('Door')}>Door</button>
      <button className="Tile green" onClick={() => sendAndReceive('Bin')}>Bin</button>
      <button className="Tile blue" onClick={() => sendAndReceive('Bathtub')}>Bathtub</button>
      <button className="Tile blue" onClick={() => sendAndReceive('Bed')}>Bed</button>
      <button className="Tile yellow" onClick={() => sendAndReceive('Vase')}>Vase</button>
      <button className="Tile blue" onClick={() => sendAndReceive('Cabinet')}>Cabinet</button>
      <button className="Tile blue" onClick={() => sendAndReceive('Palm')}>Palm</button>
      <button className="Tile green" onClick={() => sendAndReceive('Cellar')}>Cellar</button>
      <button className="Tile blue" onClick={() => sendAndReceive('Statue')}>Statue</button>
    </div>
  );
}

export default App;
