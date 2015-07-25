/*!
 * Set Featured Image v1.0.0
 * Set the correct srcset as the featured image background
 * http://mogusbi.co.uk
 *
 * Written by Mo Gusbi
 */
; (function ($, window, document, undefined) {
  'use strict';

  var pluginName = 'setFeaturedImage';

  function Plugin(element, options) {
    this.element = element;
    this._name = pluginName;
    this.init();
  }

  $.extend(Plugin.prototype, {
    init: function () {
      var _this = this,
          resizeTimer;

      $(window).on('load resize', function () {
        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(function () {
          _this.setBackground();
        }, 100);
      });
    },
    setBackground: function () {
      var image = ($(this.element)
                    .find('[data-featured-image-fill]')
                    .prop('currentSrc') !== undefined ? $(this.element)
                                                          .find('[data-featured-image-fill]')
                                                          .prop('currentSrc') : $(this.element)
                                                                                  .find('[data-featured-image-fill]')
                                                                                  .attr('src'));

      $(this.element)
        .css({
          'background-image': 'url(' + image + ')'
        })
        .find('[data-featured-image-fill]')
        .hide();
    }
  });

  $.fn[pluginName] = function () {
    this.each(function () {
      if (!$.data(this, "plugin_" + pluginName)) {
        $.data(this, "plugin_" + pluginName, new Plugin(this));
      }
    });

    return this;
  };
})(jQuery, window, document);