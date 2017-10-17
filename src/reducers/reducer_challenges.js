import { SET_CHALLENGES } from '../constans'; 

export default (state=[], action)=>{
    switch(action.type){
        case SET_CHALLENGES:
            const { challenges } = action;
            return challenges;

        default: 
            return state;
    }

}