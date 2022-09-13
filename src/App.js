import { useEffect,useReducer } from 'react'
import SpotifyWebApi from 'spotify-web-api-js';

// import Header from "./components/Header/Header";
import Login from "./pages/Login/Login";
import Player from './pages/Player/Player';
import { initialState, spotifyReducer } from './reducers/spotifyReducer';
import { getAccessTokenFromUrl } from './spotify';

function App() {
const spotify = new SpotifyWebApi()
  
  const [state,dispatch] = useReducer(spotifyReducer,initialState);
 
  useEffect(() =>{

    const _token = getAccessTokenFromUrl();
    

    if(_token){
      
      window.location.hash =' '
    
      spotify.setAccessToken(_token)
     dispatch({
      type:'SET_TOKEN',
      _token
     })
    }

    // set up reducers

// set up user
      spotify.getMe().then(user => {
        dispatch({
          type:'SET_USER',
          user
        })
      })
    
      
    // set up playlist

    spotify.getUserPlaylists().then(playlist => {
      dispatch({
        type:'SET_PLAYLIST',
        playlist
      })
    })
    console.log(state.playlist)

  },[state.token])

  return (
    <div className="App">
   {

          // state.token ? <Player /> : <Login />

          <Player />

   }
    </div>
  );
}

export default App;
