import IdActionstypes from "./action-types";

const initialState ={
    currentID: null,
}

const Idmeals = (state = initialState, action)=>{
   switch(action.type){
     case IdActionstypes.Id:
       return{
        ...state, 
        currentID: action.payload.currentID
      };
    default: 
       return state;
   }
}

export default Idmeals;