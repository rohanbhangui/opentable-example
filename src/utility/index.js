export const searchOpenTable = (params) => {
  const concat = Object.keys(params).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(params[key])).join('&');

  console.log("DEBUG", concat);

  return concat;
};
