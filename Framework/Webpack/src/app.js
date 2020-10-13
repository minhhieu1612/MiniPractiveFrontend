import './assets/styles/app.css';
import Icon from './assets/images/icon.png';
import xmlData from './assets/data/note.xml';
import { join } from 'lodash';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  // Lodash, now imported by this script
  element.innerHTML = 'Hello webpack';
  element.classList.add('hello');

  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);
  console.log(xmlData);
  // cosole.log('aaa');
  return element;
}

document.body.appendChild(component());