import { ADD_RESPONSES, SET_LOADING, RESPONSES_ERROR } from "../actions/types";

const initialState = {
  responses: null,
  loading: false,
  error: null,
};

export default function variable(state = initialState, action) {
  switch (action.type) {
    case ADD_RESPONSES:
      return {
        ...state,
        responses: [...state.responses, action.payload],
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case RESPONSES_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
