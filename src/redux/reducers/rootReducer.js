import { combineReducers } from "redux";
import { loadingReducer } from "./loadings";
import { pokemonsDataReducer } from "./pokemonsData";

const rootReducer = combineReducers({
    data: pokemonsDataReducer,
    loading: loadingReducer
})

export default rootReducer;