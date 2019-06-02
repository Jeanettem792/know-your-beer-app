import * as actions from './actions/actions';

const initialState={
    beersSelected:[],
    beers: []
}

const reducer =(state =initialState,action)=>{
    
switch(action.type){
    
    case actions.ADDFAVOURITES:
            const beersSelected = state.beersSelected.slice();
            if(action.beer){
            if(action.beer.favourited){
                beersSelected.splice(beersSelected.findIndex(bee => bee.id === action.beer.id),1);
              action.beer.buttonDes = "add";
            }
            else{
                beersSelected.push(action.beer);
                action.beer.buttonDes = "remove";
            } 
              action.beer.favourited = !action.beer.favourited;
        }
        return{
            ...state,
            beersSelected: beersSelected
        }
    case actions.GETBEERS:
        const beers = action.beers.data.slice();
        const updatedBeer = beers.map( beer =>{
        return{
           ...beer,
           favourited:false,
           buttonDes: "add"
          }
          
        });
        return {
        ...state,
        counter:30,
        beers: updatedBeer,
        
        };
}

return state;
};

export default reducer;