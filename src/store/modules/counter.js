import { dispatch } from '../helpers';

export const INCREMENT_REQUESTED = 'counter/INCREMENT_REQUESTED';
export const INCREMENT = 'counter/INCREMENT';
export const DECREMENT_REQUESTED = 'counter/DECREMENT_REQUESTED';
export const DECREMENT = 'counter/DECREMENT';

const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_REQUESTED:
      return {
        ...state,
        isIncrementing: true
      };

    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        isIncrementing: !state.isIncrementing
      };

    case DECREMENT_REQUESTED:
      return {
        ...state,
        isDecrementing: true
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
        isDecrementing: !state.isDecrementing
      };

    default:
      return state;
  }
};

export const increment = dispatch(INCREMENT_REQUESTED, INCREMENT);

export const incrementAsync = dispatch(INCREMENT_REQUESTED, d =>
  setTimeout(() => d({ type: INCREMENT }), 2000)
);

export const decrement = dispatch(DECREMENT_REQUESTED, DECREMENT);

export const decrementAsync = dispatch(DECREMENT_REQUESTED, d =>
  setTimeout(() => d({ type: DECREMENT }), 2000)
);
