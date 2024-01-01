import {combineReducers } from 'redux'
import Idmeals from './IdMeals/reducer'
import NameRecipe from './NameMeal/reduce';


const rootReducer = combineReducers({
 Idmeals,
 NameRecipe,

})

export default rootReducer;