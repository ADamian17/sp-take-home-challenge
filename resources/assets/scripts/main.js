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
/** 
 * I'm using the currentLink to keep track of my current category link.
 * @property {HTMLElement} value - current active link. 
 * @property {function} updateLink - method to update the active link
*/

const currentLink = {
  value: document.querySelector('.active-link'),
  /** 
  * method to update the active link.
  * @param {HTMLElement} target - dom element to update.
  */
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
const menuLinks = $('ul#menu-secondary-nav > li > a')
const myRepeaterAjaxUrl = $('#album-ajax').data('my_repeater_ajax_url')
const post_id = $('#album-ajax').data('post-id')

menuLinks.each(function() {
  $(this).on('click', (e) => {
    e.preventDefault()

    currentLink.updateLink(this);
    const str = this.getAttribute('href');
    let categoryId = 'all'
    if (str !== '/') {
      const urlStr = new URL(`http:${str}`);
      categoryId = urlStr.searchParams.get('cat');
    }
    
    myRepeaterShowMore(categoryId)
  });
});

// LINK https://github.com/Hube2/acf-dynamic-ajax-select-example/blob/master/repeater-ajax-load-more/repeater-ajax-load-more.php
/** 
* makes an ajax request to my wordpress intance to get back a json representation of my already filtered cards.
* @param {string} filter - an string that represent the category that we want to filter
*/
function myRepeaterShowMore(filter) {
  // make ajax request
  $.post(
    myRepeaterAjaxUrl, {
      // this is the AJAX action we set up in PHP
      'action': 'my_repeater_filter',
      'postId' : post_id,
      'filter': filter,
    },
    function (json) {
      $('#cards-container').empty()
      $('#cards-container').append(json['content']);
    },
    'json'
  );
}
