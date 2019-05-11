/**
 * Action Types
 */
const Types = {
  REQUEST: 'REQUEST_DATA',
  SUCCESS: 'REQUEST_SUCCESS',
  FAILURE: 'REQUEST_FAILURE',
  SET_REQ: 'SET_REQUEST',
  SET_SUC: 'SET_SUCCESS',
  TOGGLE: 'TOGGLE_MODAL',
};

/**
 * Reducer
 */
const INITIAL_STATE = {
  data: [],
  selected: {},
  modal: false,
  load: {
    loading: false,
    error: false,
  },
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST:
      return {
        ...state,
        load: {
          ...state.load,
          loading: true,
        },
      };

    case Types.SUCCESS:
      return {
        ...state,
        data: action.payload.array,
        load: {
          ...state.load,
          error: false,
          loading: false,
        },
      };

    case Types.FAILURE:
      return {
        ...state,
        load: {
          ...state.load,
          error: true,
          loading: false,
        },
      };

    case Types.SET_REQ:
      return {
        ...state,
        load: {
          ...state.load,
          loading: true,
        },
      };

    case Types.SET_SUC:
      return {
        ...state,
        selected: action.payload.obj,
        load: {
          ...state.load,
          error: false,
          loading: false,
        },
      };

    case Types.TOGGLE:
      return {
        ...state,
        modal: !state.modal,
      };

    default:
      return state;
  }
}

/**
 * Actions Creators
 */
export const Creators = {
  request: text => ({
    type: Types.REQUEST,
    payload: text,
  }),

  success: array => ({
    type: Types.SUCCESS,
    payload: array,
  }),

  failure: () => ({
    type: Types.FAILURE,
    payload: {},
  }),

  setReq: text => ({
    type: Types.SET_REQ,
    payload: text,
  }),

  setSuc: obj => ({
    type: Types.SET_SUC,
    payload: obj,
  }),

  toggle: () => ({
    type: Types.TOGGLE,
    payload: {},
  }),
};
