import {
    ADD_RESULT,
    ADD_DATA
} from '../types'

const initialState = {
    result: null,
    data : []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state=initialState, action) {
    switch(action.type) {
        case ADD_RESULT:
            return {
                ...state,
                result: action.payload,
            }
        case ADD_DATA: 
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        default: 
            return state;
    }
}