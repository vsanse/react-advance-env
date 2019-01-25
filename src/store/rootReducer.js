import { combineReducers } from 'redux';
import user from "./user/reducer";
// import common from "./common/reducer";
export const rootReducer = combineReducers({
    user,
    // common
})