import _ from 'lodash';

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
