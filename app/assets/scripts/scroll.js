require('smoothscroll');

module.exports = {
  goToTarget: function(event) {
    event.preventDefault();
    var link = event.target;
    var targetId = link.getAttribute('href');
    targetId = targetId.replace('#', '');
    var target = 'a[name=' + targetId + ']';

    document.querySelector(target).scrollIntoView({
      behavior: 'smooth'
    });
  }
};