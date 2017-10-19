import {SIGN_IN, SET_CHALLENGES, SET_COMPLETED} from '../constans';


export function actionCreatorLogUser (email){

    const action = {
        type: SIGN_IN,
        email
    }
    return action;

}

export function actionCreatorSetChallenges(challenges){
    const action = {
        type: SET_CHALLENGES,
        challenges
    }
    return action;
}

export function setCompleted (completedChallenges){
    const action = {
        type: SET_COMPLETED,
        completedChallenges
    }
    return action;
}
