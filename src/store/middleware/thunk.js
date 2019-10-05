/**
 * FOR REFERENCE ONLY
 * USE `redux-thunk` IN THE PROJECT
 *
 * @param store
 * @returns {function(*): Function}
 */
export default (store) => (next) => (action) => {
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState);
  }
  return next(action);
};
