(function () {
  var total = 3;  // imágenes 0, 1 y 2 por artículo
  var items = document.querySelectorAll('.work-item');

  items.forEach(function (item) {
    var base = item.getAttribute('data-slider-base');
    var img = item.querySelector('.work-item-img');
    var btnPrev = item.querySelector('.work-arrow--prev');
    var btnNext = item.querySelector('.work-arrow--next');
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
