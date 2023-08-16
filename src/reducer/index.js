import { combineReducers } from "redux";
import stableReducer from "./stable.reducer";
import listReducer from "./list.reducer";

//? Permet de combiner les reducers
export default combineReducers({
    //! Reducers que l'on importe
    stableReducer,
    listReducer,
});