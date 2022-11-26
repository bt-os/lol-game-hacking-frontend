(function() {
  "use strict"; // Start of use strict

  function http_get_json_object(url)
  {
    return $.ajax({
      url: url,
      type: "GET",
      dataType: "json",
      cache: false,
      async: false
    }).responseJSON;
  }

  window.addEventListener("DOMContentLoaded", (event) => {
    // let navbar_toggler = document.querySelector(".navbar-toggler");
    // if (navbar_toggler) navbar_toggler.click();

    let strings = http_get_json_object("https://raw.githubusercontent.com/bt-os/lol-game-hacking-frontend/main/data/strings.json")
    if (strings)
    {
      $("#scrolling-text-label-text")?.first()?.html(strings.scrolling_text_label_text);

      $("#slider-slide-0-label-text-1")?.first()?.html(strings.slider[0].label_text_1);
      $("#slider-slide-0-label-text-2")?.first()?.html(strings.slider[0].label_text_2);
      $("#slider-slide-0-label-text-3")?.first()?.html(strings.slider[0].label_text_3);

      $("#streamer-1-label-text-1")?.first()?.html(strings.slider[1].label_text_1);
      $("#streamer-1-label-text-2")?.first()?.html(strings.slider[1].label_text_2);
      $("#streamer-1-label-text-3")?.first()?.html(strings.slider[1].label_text_3);

      $("#streamer-2-label-text-1")?.first()?.html(strings.slider[2].label_text_1);
      $("#streamer-2-label-text-2")?.first()?.html(strings.slider[2].label_text_2);
      $("#streamer-2-label-text-3")?.first()?.html(strings.slider[2].label_text_3);
    }
  });

  function initParallax() {

    if (!('requestAnimationFrame' in window)) return;
    if (/Mobile|Android/.test(navigator.userAgent)) return;

    var parallaxItems = document.querySelectorAll('[data-bss-parallax]');

    if (!parallaxItems.length) return;

    var defaultSpeed = 0.5;
    var visible = [];
    var scheduled;

    window.addEventListener('scroll', scroll);
    window.addEventListener('resize', scroll);

    scroll();

    function scroll() {

      visible.length = 0;

      for (var i = 0; i < parallaxItems.length; i++) {
        var rect = parallaxItems[i].getBoundingClientRect();
        var speed = parseFloat(parallaxItems[i].getAttribute('data-bss-parallax-speed'), 10) || defaultSpeed;

        if (rect.bottom > 0 && rect.top < window.innerHeight) {
          visible.push({
            speed: speed,
            node: parallaxItems[i]
          });
        }

      }

      cancelAnimationFrame(scheduled);

      if (visible.length) {
        scheduled = requestAnimationFrame(update);
      }

    }

    function update() {

      for (var i = 0; i < visible.length; i++) {
        var node = visible[i].node;
        var speed = visible[i].speed;

        node.style.transform = 'translate3d(0, ' + (-window.scrollY * speed) + 'px, 0)';
      }

    }
  }

  initParallax();
})(); // End of use strict