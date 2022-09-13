export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUrl = "http://localhost:3000/"

const clientId = "d0d8103eb40840bdab1e03802890ca19"

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
  ];

  export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;

    export const getAccessTokenFromUrl = () => {
      return window.location.hash
              .substring(1)
              .split('&')[0]
              .split('=')[1]

    }

    



//  http://localhost:3000/#access_token=BQBHrZU9BUEPYkVvZibyxavesdg6ovFkLtDP1C4k51W4s4rNr5zVjr0m7BqDBvGwh6HaQdARTt7ztcYKQtW5asFaPnF_ovNju4NNGNgxJww-ENSCLYNUpjnaHSKI3hUZEOZBVj2ZU6fruhT6UalshDEkIC9dcx_iUddM9-facPvHOXryBPdZP_bvDUocR7ERYjqz_hb8k9byqpC1&token_type=Bearer&expires_in=3600