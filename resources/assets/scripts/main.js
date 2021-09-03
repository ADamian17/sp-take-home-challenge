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

// state
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

// dom varaibles
//const secondaryNav = document.getElementById('secondary-nav');

const menuLinks = $('ul#menu-secondary-nav > li > a')

console.log(menuLinks)
menuLinks.each(function(){
  $(this).on('click', (e) => {
    e.preventDefault()
    console.log(this)
    currentLink.updateLink(this);
    const str = this.getAttribute('href');
    my_repeater_show_more(str.substring(str.length - 1))
  });
});


const my_repeater_ajax_url = $('#album-ajax').data('my_repeater_ajax_url')
const post_id = $('#album-ajax').data('post-id')

function my_repeater_show_more(filter) {
  // make ajax request
  jQuery.post(
    my_repeater_ajax_url, {
      // this is the AJAX action we set up in PHP
      'action': 'my_repeater_filter',
      'postId' : post_id,
      'filter': filter,
    },
    function (json) {
      console.log(json);
      $('#cards-container').empty()
      $('#cards-container').append(json['content']);
    },
    'json'
  );
}
