export const initialState = {

    user:null,
    auth:false,
    playlist:[],
    token:null,

}

export const spotifyReducer = (state,action) => {

    switch(action.type){
       
        case 'SET_TOKEN':
       
            return{
                ...state,
                token:action._token,
                
            }

        case 'SET_USER':
           
            return{
                ...state,
                user:action.user
            }

        case 'SET_PLAYLIST':
            return{
                ...state,
                playlist:action.playlist
            }
        case 'SET_AUTH':
            return{
                ...state,
                auth:action.authState
            }

            default:
                return state
    }
}
