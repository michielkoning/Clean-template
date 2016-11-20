require('smoothscroll');

module.exports = {
  goToTarget: function(event) {
    event.preventDefault();
    var link = event.target;
    var target = link.getAttribute('href');

    document.querySelector(target).scrollIntoView({
      behavior: 'smooth'
    });
  }
};