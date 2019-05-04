import { combineReducers } from 'redux';
import { reducer as auth } from '../components/Authentication/redux';

const rootReducer = combineReducers({
  auth,
});
export default rootReducer;
