(function () {
  var items = document.querySelectorAll('.work-item');

  items.forEach(function (item) {
    var base = item.getAttribute('data-slider-base');
    var baseMd = item.getAttribute('data-slider-base-md');
    var img = item.querySelector('.work-item-img[data-slider="primary"]') || item.querySelector('.work-item-img');
    var btnPrev = item.querySelector('.work-arrow--prev');
    var btnNext = item.querySelector('.work-arrow--next');
    var totalDefault = parseInt(item.getAttribute('data-slider-total'), 10) || 3;  // por defecto 3 imágenes
    var totalMd = parseInt(item.getAttribute('data-slider-total-md'), 10) || totalDefault;
    var current = 0;

    if (!base || !img || !btnPrev || !btnNext) return;

    function getConfig() {
      if (window.matchMedia && baseMd && window.matchMedia('(min-width: 48rem)').matches) {
        return { base: baseMd, total: totalMd };
      }
      return { base: base, total: totalDefault };
    }

    function setImage(index, cfg) {
      current = index;
      var config = cfg || getConfig();
      img.src = config.base + current + '.png';
    }

    // inicializar con la imagen correcta según viewport actual
    setImage(0);

    btnNext.addEventListener('click', function () {
      var config = getConfig();
      setImage((current + 1) % config.total, config);
    });

    btnPrev.addEventListener('click', function () {
      var config = getConfig();
      setImage((current - 1 + config.total) % config.total, config);
    });
  });
})();
