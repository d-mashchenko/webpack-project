import _ from 'lodash';

export function chunkArray(array, groupCount) {
  const newArray = _.chunk(array, groupCount);

  return newArray;
}
