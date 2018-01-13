export const dispatcher = types => {
  return dispatch => {
    types.forEach(type => {
      if (typeof type === 'function') {
        type(dispatch);
      } else {
        dispatch({ type });
      }
    });
  };
};

export const dispatch = (...types) => {
  return () => dispatcher(types);
};
