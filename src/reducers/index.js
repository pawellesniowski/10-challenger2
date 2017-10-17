import { combineReducers } from 'redux';
import challenges from './reducer_challenges';
import user from './reducer_user';

export default combineReducers({
    user,
    challenges
})