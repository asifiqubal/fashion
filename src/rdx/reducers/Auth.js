/**
 * @copyright   Asif Iqubal
 */
export default (
  state = {
    userInfo: {},
    isUserAuthenticate: false,
  },
  action,
) => {
  switch (action.type) {
    case 'auth:user-info':
      return {...state, userInfo: action.payload};
    case 'auth:set-authentication':
      return {...state, isUserAuthenticate: action.payload};
    default:
      return state;
  }
};
