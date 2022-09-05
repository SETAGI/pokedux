import { combineReducers } from "redux";
import dataReducer from "../slices/dataSlice"; // we can import in this way (other name) due to the export was "default"
import loadingReducer from "../slices/loadingSlice";

const rootReducer = combineReducers({
    data: dataReducer,
    loading: loadingReducer
})

export default rootReducer;