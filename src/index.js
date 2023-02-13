import _ from 'lodash';
import { chunkArray } from './another-module';

const arrOne = [1, 2, 3, 4, 5];

const objOne = {
  name: 'John',
  age: 27,
  area: 'Ukraine',
};

function getItems(obj) {
  _.each(obj, function (item) {
    console.log(item);
  });
}

getItems(objOne);
console.log(chunkArray(arrOne, 2));
