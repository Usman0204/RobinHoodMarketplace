import { combineReducers } from "redux";
import { UserReducer } from "../Reducers/Index";

const rootReducer = combineReducers({
    UserReducer:UserReducer,
 
});

export default rootReducer;