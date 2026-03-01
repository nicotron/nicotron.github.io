(function () {
  var img = document.getElementById('work-dominga-img');
  var btnPrev = document.getElementById('work-arrow-prev');
  var btnNext = document.getElementById('work-arrow-next');
  var base = 'img/trabajo/dominga_trabajo_';
  var total = 3;  // imágenes 0, 1 y 2
  var current = 0;

  if (!img || !btnPrev || !btnNext) return;

  function setImage(index) {
    current = index;
    img.src = base + current + '.png';
  }

  btnNext.addEventListener('click', function () {
    setImage((current + 1) % total);
  });

  btnPrev.addEventListener('click', function () {
    setImage((current - 1 + total) % total);
  });
})();
