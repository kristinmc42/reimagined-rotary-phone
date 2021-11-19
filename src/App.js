import './App.css';
import axios from "axios";
import { useEffect , useState } from "react";
import PieceOfArt from './PieceOfArt';

// on page load make a call to the Rijks museum API
// store that data in state
// display the results to the page
// -> image and art piece information

// when the component mounts, call our API
function App() {
  // create a piece of state to hold our art pieces
  const [art, setArt] = useState([]);

  useEffect(() => {
    // in here we will call our API using axios
    const apiKey = "WNkTq3XR";

    axios({
      url: "https://www.rijksmuseum.nl/api/en/collection",
      method: "GET",
      responseType: "json",
      params: {
        key: apiKey,
        imgonly: true
      }
    })
    .then(response => {
      console.log(response.data.artObjects)
      setArt(response.data.artObjects);
    })
  }, [])

  return (
    <div className="App">
      <h1>Look at our art!</h1>
      {
        art.map(artwork => {
          return(
            <PieceOfArt 
              key={artwork.id}
              alt={artwork.title}
              title={artwork.longTitle}
              imagePath={artwork.webImage.url}
            />
          )
        })
      }
    </div>
  );
}

export default App;
