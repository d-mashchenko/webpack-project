import _ from 'lodash';
import moment from 'moment';
import './styles/another.scss';

const container = document.querySelector('.another-page__container');
const arrOne = [1, 2, 3, 4, 5];

function chunkArray(array, groupCount) {
  const newArray = _.chunk(array, groupCount);
  return newArray;
}
console.log(chunkArray(arrOne, 2));

function showDateHTML(element) {
  element.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
  setInterval(
    () => (element.textContent = moment().format('MMMM Do YYYY, h:mm:ss a')),
    1000
  );
}

showDateHTML(container);
