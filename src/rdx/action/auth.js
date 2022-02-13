/**
 * @copyright Asif Iqubal
 */

export const RdxSetUserAuthenticationStatus = data => {
  return {
    type: 'auth:set-authentication',
    payload: data,
  };
};
