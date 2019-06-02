import axios from 'axios';
import dispatch from 'redux-thunk';

export const GETBEERS = "GETBEERS";
export const ADDFAVOURITES = "ADDFAVOURITES";
export const saveResult = (beersResponse) => { 
    return{
    type : GETBEERS,
    beers: beersResponse
};

}
export const addFavourites = (beer) => {
    return {
        type : ADDFAVOURITES,
       beer: beer
   };

};

export const getBeers = () => {
    return dispatch =>{  
            axios.get('https://api.punkapi.com/v2/beers')
            .then(response =>
            dispatch( saveResult(response)));
      
    };

};