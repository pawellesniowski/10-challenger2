import { combineReducers } from 'redux';
import challenges from './reducer_challenges';
import user from './reducer_user';
import completedChallenges from './reducer_completed_challenges'

export default combineReducers({
    user,
    challenges,
    completedChallenges
})