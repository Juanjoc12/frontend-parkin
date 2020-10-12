import initialState from '../initial-state.json';
import { GET_ALL_USERS, SELECT_USER_TO_EDIT } from '../actions';

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALL_USERS:
            return { ...state, users: action.payload };
        case SELECT_USER_TO_EDIT:
            return { ...state, selectedUser: action.payload };
        default:
            return state;
    }
}