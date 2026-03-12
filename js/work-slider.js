(function () {
  var items = document.querySelectorAll('.work-item');

  items.forEach(function (item) {
    var base = item.getAttribute('data-slider-base');
    var img = item.querySelector('.work-item-img[data-slider="primary"]') || item.querySelector('.work-item-img');
    var btnPrev = item.querySelector('.work-arrow--prev');
    var btnNext = item.querySelector('.work-arrow--next');
    var total = parseInt(item.getAttribute('data-slider-total'), 10) || 3;  // por defecto 3 imágenes
    var current = 0;

    if (!base || !img || !btnPrev || !btnNext) return;

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
  });
})();
