require('smoothscroll');

module.exports = {
  goToTarget: function(link, event) {
    event.preventDefault();
    var target = link.getAttribute('href');

    document.querySelector(target).scrollIntoView({
      behavior: 'smooth'
    });
  }
};