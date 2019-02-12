import _ from 'lodash';
import './style.css';
import myimg from './jackson.jpg';
import Data from './data.xml';

function component() {
  var element = document.createElement('div');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  /*var myImg = new Image();
  myImg.src = myimg;
  element.appendChild(myImg);*/

  console.log(Data);
  
  return element;
}

document.body.appendChild(component());