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
      <button className="Tile green" onClick={() => console.log('Try again')}>Plate</button>
      <button className="Tile blue" onClick={() => console.log('Nope')}>Glass</button>
      <button className="Tile yellow" onClick={() => console.log('Nay')}>TV</button>
      <button className="Tile blue" onClick={() => console.log('Not this one')}>Phone</button>
      <button className="Tile green" onClick={() => console.log('Nah')}>Sock</button>
      <button className="Tile yellow" onClick={() => console.log('Try again')}>Cactus</button>
      <button className="Tile blue" onClick={() => console.log('Nope')}>Laptop</button>
      <button className="Tile green" onClick={() => console.log('No')}>Basket</button>
      <button className="Tile blue" onClick={() => console.log('Not it')}>Water</button>
      <button className="Tile blue" onClick={() => console.log('Nahuh')}>Radio</button>
      <button className="Tile blue" onClick={() => console.log('Nope')}>Cake</button>
      <button className="Tile green" onClick={() => console.log('No')}>Lamp</button>
      <button className="Tile green" onClick={() => console.log('Try again')}>Pants</button>
      <button className="Tile blue" onClick={() => console.log('Nah')}>Carpet</button>
      <button className="Tile yellow" onClick={() => console.log('Nahuh')}>Chest</button>
      <button className="Tile blue" onClick={() => console.log('Not this one')}>Box</button>
      <button className="Tile green" onClick={() => console.log('No')}>Sofa</button>
      <button className="Tile blue" onClick={() => console.log('Not this')}>Table</button>
      <button className="Tile yellow" onClick={() => console.log('Not it')}>Pillowcase</button>
      <button className="Tile blue" onClick={() => console.log('No')}>Pantry</button>
      <button className="Tile yellow" onClick={() => console.log('Nahuh')}>Bookshelf</button>
      <button className="Tile blue" onClick={() => console.log('Try again')}>Closet</button>
      <button className="Tile yellow" onClick={() => console.log('Nah')}>Garden</button>
      <button className="Tile green" onClick={() => console.log('Nope')}>Flower pot</button>
      <button className="Tile blue" onClick={() => console.log('Nahuh')}>Safe</button>
      <button className="Tile blue" onClick={() => console.log('No')}>Sweater</button>
      <button className="Tile green" onClick={() => console.log('Nahuh')}>Curtains</button>
      <button className="Tile yellow" onClick={() => console.log('Nope')}>Door</button>
      <button className="Tile green" onClick={() => console.log('Wrong one')}>Bin</button>
      <button className="Tile blue" onClick={() => console.log('Yes! That is it. It makes perfect sense, bathtub is by far the most logical place a hippo would store something they care about. But... I can\'t see it here? Oh my! I bet that my friend Gertrude has been around and borrowed it. She really struggles to keep her hands to herself. Can you check with her? ')}>Bathtub</button>
      <button className="Tile blue" onClick={() => console.log('Nahuh')}>Bed</button>
      <button className="Tile yellow" onClick={() => console.log('Nope')}>Vase</button>
      <button className="Tile blue" onClick={() => console.log('Nahuh')}>Cabinet</button>
      <button className="Tile blue" onClick={() => console.log('Not indeed')}>Palm</button>
      <button className="Tile green" onClick={() => console.log('Noooooo')}>Cellar</button>
      <button className="Tile blue" onClick={() => console.log('Nope')}>Statue</button>
    </div>
  );
}

export default App;
