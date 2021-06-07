import {
    ADD_RESULT_HYPER,
    ADD_DATA_HYPER
} from '../types'

const initialState = {
    result: null,
    data: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state=initialState, action) {
    switch(action.type) {
        case ADD_RESULT_HYPER:
            return {
                ...state,
                result: action.payload,
            }
        case ADD_DATA_HYPER: 
            return{
                ...state, 
                data: [...state.data, action.payload]
            }
        default: 
            return state;

    }
}