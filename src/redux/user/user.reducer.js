import { ADD_USER } from './user.types';

const INITIAL_STATE = {
    users: []
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ADD_USER : 
          return {
              ...state,
              users: [...state.users, action.payload]
          }
        default: 
            return state;
    }
};

export default userReducer;