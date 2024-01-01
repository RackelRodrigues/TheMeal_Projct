import NameActionstypes from "./action-types";

const initialState = {
    currentName: null,
}

const NameRecipe = (state = initialState, action)=>{
   switch(action.type){
     case NameActionstypes.Name:
       return{
        ...state, 
        currentName: action.payload.currentName
      };
    default: 
       return state;
   }
}

export default NameRecipe;