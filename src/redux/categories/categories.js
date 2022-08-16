const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

export const checkStatusAction = () => ({
  type: CHECK_STATUS,
});

const checkStatusReducer = (state = '', action) => {
  const information = 'UNDER-CONSTRUCTION';
  switch (action.type) {
    case CHECK_STATUS:
      return information;
    default:
      return state;
  }
};

export default checkStatusReducer;
