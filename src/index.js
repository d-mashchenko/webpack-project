import _ from 'lodash';
import './styles/style.scss';

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
