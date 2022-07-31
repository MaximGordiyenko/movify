// https://github.com/marty331/react-search/blob/main/src/utils/index.js
export const arraySearch = (array, keyword) => {
  const searchTerm = keyword.toLowerCase()
  return array.filter(value => {
    return value.l.toLowerCase().match(new RegExp(searchTerm, 'g')) ||
      value.id.toLowerCase().match(new RegExp(searchTerm, 'g'));
  })
}
