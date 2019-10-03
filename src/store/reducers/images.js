export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_IMAGES':
      return action.payload;
    case 'ADD_IMAGE':
      return [...state, action.payload];
    default:
      return state;
  }
};
