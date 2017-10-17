import {SIGN_IN} from '../constans';

// what does Reduser do? 
// it taks ths global store and update it

let user = {
        email: null
    }

export default (state=user, action )=>{

    switch(action.type){
        case SIGN_IN:
            const {email} = action;
            user = {
                email
            }
            return user;

        default:
        return state;
    }
   
}