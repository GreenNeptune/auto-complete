export const getIndicesOf = (searchStr: string, str: string) => {
  let searchStrLen = searchStr.length;
  if (searchStrLen === 0) {
    return [];
  }
  let startIndex = 0,
    index,
    indices = [];

  while (
    (index = str
      .toLowerCase()
      .indexOf(searchStr.toLocaleLowerCase(), startIndex)) > -1
  ) {
    indices.push(index + searchStrLen);
    startIndex = index + searchStrLen;
  }
  return indices;
};
