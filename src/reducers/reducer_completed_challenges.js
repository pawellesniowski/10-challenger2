import {SET_COMPLETED} from '../constans';

export default (state=[], action)=>{
    switch(action.type){
        case SET_COMPLETED:
            const {completedChallenges} = action;
            console.log('completedChallenges from reducer: ', completedChallenges);
            return completedChallenges;

        default:
            return state;
    }
}
