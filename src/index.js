import './style.css';
import './waves.jpg';
import {displayHome} from './home';
import {displayMenu} from './menu';

function navigate(tabName) {
  const contentDiv = document.getElementById('content');
  contentDiv.innerHTML = '';
  
  if(tabName === 'Home') {
    displayHome();
  }
  else if(tabName === 'Menu') {
    displayMenu();
  }
}

const tabs = document.querySelectorAll('ul.nav-tabs > li');
tabs.forEach((tab) => {
  tab.addEventListener('click', (e) => {navigate(e.target.textContent);})
})