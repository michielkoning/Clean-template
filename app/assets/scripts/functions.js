var scroll        = require('./scroll');
var gumshoe       = require('gumshoe');
var contact       = require('./contact');
var ga            = require('./ga');
var serviceWorker = require('./service-worker');

document.addEventListener('DOMContentLoaded', function() {

  [].forEach.call( document.querySelectorAll('.js-scroll'), function (link) {
    link.addEventListener( 'click', function (event) {
      scroll.goToTarget(this, event);
    }, false );
  });

  document.querySelector('.js-contact').addEventListener( 'submit', function (event) {
    contact.submitForm(event);
  });

});

gumshoe.init({
  selector: '.js-scroll',
  selectorHeader: 'js-menu',
  activeClass: 'is-active'
});

