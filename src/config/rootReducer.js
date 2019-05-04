import { combineReducers } from 'redux';
import { reducer as auth } from '../components/Authentication/Redux';

const rootReducer = combineReducers({
  auth,
});
export default rootReducer;
