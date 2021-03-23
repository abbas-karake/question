import {SET_LOAD_DATA_SUCCESS, SET_LOAD_DATA_FAILED} from "../types";

const initialState = {
	'questions': []
}

const fetchData = (state = initialState, action) => {
    switch(action.type) {
		case SET_LOAD_DATA_SUCCESS:
			return {questions: action.payload}
		case SET_LOAD_DATA_FAILED:
			return {questions: []}
        default:
            return Object.assign({}, state);
	}
};
export default fetchData;