import { combineReducers } from "redux";
import { reducer as recommendReducer } from '../application/Recommend/store/index';
import { reducer as singersReducer } from '../application/Singer/store/index';

export default combineReducers({
  recommend: recommendReducer,
  singers: singersReducer
})
