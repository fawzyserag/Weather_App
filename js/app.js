(function ($, document, window) {
  $(document).ready(function () {
    var map = $(".map");
    var latitude = map.data("latitude");
    var longitude = map.data("longitude");
    if (map.length) {
      map.gmap3({
        map: {
          options: {
            center: [latitude, longitude],
            zoom: 15,
            scrollwheel: false,
          },
        },
        marker: {
          latLng: [latitude, longitude],
        },
      });
    }
  });
  $(window).load(function () {});
})(jQuery, document, window);
