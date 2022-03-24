import React from 'react';
import './App.css';

const base: Array<{letter: string; color?: string}> = [{letter: ''}, {letter: ''}, {letter: ''}, {letter: ''}, {letter: ''}]



function App() {
  return (
    <div className="App">
      <div className="Header">
        <span>Oh hellow there! How lovely to have a visitor. One can spend all day inside without seeing a soul these days. What has the world come to, am I right? First the plague, than the war; one might feel there is something wrong with the universe itself. But not me, oh no. I'm an optimist at heart. Oh look at me rambling on here without a proper introduction. My name is Gertrude, very pleasant to meet you. You need what? A wand? Well we can chat about it over a cup of tea. But first I'd like you to play a word game with me I just invented. I call it Wordle. I bet you've never seen anything like it but you'll like it, you'll see.</span>
        <img className="Image" src="https://i.pinimg.com/originals/fa/df/8f/fadf8f5c1dbc20ae6d803d4560e1abf1.png" />
      </div>
    </div>
  );
}

export default App;
