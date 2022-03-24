import React from 'react';
import './App.css';

const base: Array<{letter: string; color?: string}> = [{letter: ''}, {letter: ''}, {letter: ''}, {letter: ''}, {letter: ''}]

const Wordle = ({ onDone, done }: {onDone: (text: string) => void; done: string}) => {
  const [tries, setTries] = React.useState([[...base]]);


  const setLetter = (i1: number, i2: number, e: any) => {
    const newTries = tries.map(t => [...t]);
    newTries[i1][i2] = {letter: e.target.value};
    setTries(newTries);
  }

  const submit = async (event: any) => {
    event.preventDefault();

    const lastTry = tries[tries.length-1];

    if (lastTry.every(letter => letter)) {
      const word = lastTry.map(({letter}) => letter).join('')
      const response = await fetch('https://j26xvnuu24.execute-api.us-east-1.amazonaws.com/dev/wordle', {
        method: 'post',
        mode: 'cors',
        body: word 
      })

      const result = await response.json();

      const newTries = tries.map(t => [...t]);

      newTries[newTries.length - 1] = newTries[newTries.length - 1].map((item, index) => ({...item, color: result[index] || 'no'}) )

      if(result.every((res:string) => res === 'yes')) {
        const response2 = await fetch('https://j26xvnuu24.execute-api.us-east-1.amazonaws.com/dev/wordle-done', {
          method: 'post',
          mode: 'cors',
          body: word 
        })
        const text = await response2.text();

        onDone(text);
        setTries([...newTries]);
        return;
      }


      setTries([...newTries, [...base]]);
    }
  }

  return <>{tries.map((t, index1) => {
    return <form key={index1} onSubmit={submit}>
      {t.map((letter, index2) => {
        return <input key={index2} className={`Input ${letter.color || 'empty'}`} type="text" maxLength={1} value={letter.letter} onChange={(e) => setLetter(index1, index2, e)} />
      })}
      <button className="Submit" type="submit" disabled={index1 !== tries.length - 1 || !!done}>Done</button>
    </form>
  })}</>

}

function App() {
  const [done, setDone] = React.useState('');

  return (
    <div className="App">
      <div className="Header">
        <span className="Text">Oh hellow there! How lovely to have a visitor. One can spend all day inside without seeing a soul these days. What has the world come to, am I right? First the plague, than the war; one might feel there is something wrong with the universe itself. But not me, oh no. I'm an optimist at heart. Oh look at me rambling on here without a proper introduction. My name is Gertrude, very pleasant to meet you. You need what? A wand? Well we can chat about it over a cup of tea. But first I'd like you to play a word game with me I just invented. I call it Wordle. I bet you've never seen anything like it but you'll like it, you'll see.</span>
        <img className="Image" src="https://i.pinimg.com/originals/fa/df/8f/fadf8f5c1dbc20ae6d803d4560e1abf1.png" />
      </div>
      <Wordle onDone={setDone} done={done} />
      {done && <p className="Text2">{done}</p>}
    </div>
  );
}

export default App;
