import React from 'react';
import './App.css';

const base: Array<{letter: string; color?: string}> = [{letter: ''}, {letter: ''}, {letter: ''}, {letter: ''}, {letter: ''}]



function App() {
  const [value, setValue] = React.useState('')
  const [answer, setAnswer] = React.useState('');

  return (
    <div className="App">
      <h1>Gertrude's Garden</h1>
      <div className="Row">
        <div className="ImageCover">
          <img className="Image" src="https://media.istockphoto.com/photos/garden-flowers-xxxl-picture-id157481806?k=20&m=157481806&s=612x612&w=0&h=8UUqVpnU4z-V6021ucO-N8Vu-NeL9etzCrObTG0EfZ4=" />
        </div>
        <div className="ImageCover">
        <img className="Image" src="https://cdn.britannica.com/42/91642-050-332E5C66/Keukenhof-Gardens-Lisse-Netherlands.jpg" />
        </div>
        <div className="ImageCover">
        <img className="Image" src="https://media.gettyimages.com/photos/beautiful-summer-garden-picture-id164963728?s=612x612" />
        </div>
        </div>
          <div className="Row">
        <div className="Secret">
          <p>As you walk through the garden, you walk up to a fountain. At first it looks just like any other fountain; but suddenly, it starts singing. You realise after a while that the song is a riddle to help you find Hippo's magic wand.</p>
            <p>Find the riddle where reason is combined with style. Give your answer here.</p>
            <form onSubmit={async (event) => {
              event.preventDefault();
              const response = await fetch('https://j26xvnuu24.execute-api.us-east-1.amazonaws.com/dev/coins', {
                method: 'post',
                mode: 'cors',
                body: value 
              })
              const result = await response.text();
              setAnswer(result);
            }}>
              <input type="text" className="Input" value={value} onChange={(e) => setValue(e.target.value)} />
              <button type="submit" className="Submit">Get the wand</button>
            </form>
            {answer ? 
            <>
              <p>{answer}</p>
              <img src="https://www.pngfind.com/pngs/m/288-2885603_png-image-with-transparent-background-cartoon-hippo-png.png" />
              </> : <p>The fountain is waiting for correct answer.</p>
            }
          </div>
        </div>
      <div className="Row">
        <div className="ImageCover">
        <img className="Image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuRKcm4H4DhYQ5vrK3Rc4Gs3pw5zgba_cQGQ&usqp=CAU" />
        </div>
        <div className="ImageCover">
        <img className="Image" src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Autumn_Colours_-_Stourhead_-_geograph.org.uk_-_1044997.jpg" />
        </div>
        <div className="ImageCover">
        <img className="Image" src="https://cdn.pixabay.com/photo/2012/08/06/00/53/bridge-53769__480.jpg" />
        </div>
        </div>
      <div className="Row">
        <div className="ImageCover">
        <img className="Image" src="https://cdn.livethegardenlife.gardenscanada.ca/wp-content/uploads/2022/02/garden-route-banner.jpg" />
        </div>
        <div className="ImageCover">
        <img className="Image" src="https://thumbs.dreamstime.com/b/sunken-garden-10630510.jpg" />
        </div>
        <div className="ImageCover">
        <img className="Image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsMUYwW8FjS8J2skKL792GuMGJFD42Aq7E4w&usqp=CAU" />
        </div>
        </div>
      <div className="Row">
        <div className="ImageCover">
        <img className="Image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgF1KAKEueyWbsbC6yapvF4ntIH9KympNhMQ&usqp=CAU" />
        </div>
        <div className="ImageCover">
        <img className="Image" src="https://thumbs.dreamstime.com/b/landscaped-flower-garden-beautiful-blooming-seasonal-flowers-33753005.jpg" />
        </div>
        <div className="ImageCover">
        <img className="Image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpo60aMEFKkn-R398aGKnTScZ5kk-Zo71IBg&usqp=CAU" />
        </div>
        </div>
    </div>
  );
}

export default App;
