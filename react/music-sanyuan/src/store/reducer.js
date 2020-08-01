import { combineReducers } from "redux-immutable";
import { reducer as recommendReducer } from "../application/Recommend/store/index";
// import { reducer as albumReducer } from "../application/Album/store/index";

export default combineReducers({
    recommend: recommendReducer,
    // album: albumReducer,
  });