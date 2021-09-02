// import external dependencies
import $ from 'jquery';

// Import everything from autoload
import './autoload/**/*'

// import local dependencies
import Router from './util/Router';
import common from './routes/common';
import home from './routes/home';
import aboutUs from './routes/about';

/** Populate Router instance with DOM routes */
const routes = new Router({
  // All pages
  common,
  // Home page
  home,
  // About Us page, note the change from about-us to aboutUs.
  aboutUs,
});
// 
// Load Events
$(document).ready(() => routes.loadEvents());

const currentLink = {
  value: document.querySelector('.active-link'),
  updateLink: (target) => {
    if (currentLink.value !== target && currentLink.value.classList.contains('active-link')) {
      target.parentNode.classList.add('active-link')
      currentLink.value.classList.remove('active-link');
      currentLink.value = target.parentNode;
      return;
    }
  },
}

const secondaryNav = document.getElementById('secondary-nav');

secondaryNav.addEventListener('click', (e) => {
  if(e.target.classList.contains('navbar-collapse') || e.target.id === 'secondary-nav') return;
  currentLink.updateLink(e.target);
});