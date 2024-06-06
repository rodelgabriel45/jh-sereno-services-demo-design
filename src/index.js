document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#burger-icon').addEventListener('click', function () {
    console.log('burger clicked');
    document.querySelector('.mobile-nav').classList.toggle('active');
  });
});
