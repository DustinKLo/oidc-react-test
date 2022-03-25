/**
 * Decodes JWT token
 * @param {String} token
 * @returns {Object}
 */
export const decodeToken = (token) => {
  const tokenSplit = token.split(".");
  try {
    return JSON.parse(window.atob(tokenSplit[1]));
  } catch (err) {
    console.error(err);
    return null;
  }
};
