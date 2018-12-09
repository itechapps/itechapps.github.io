(function ($) {
    'use strict';


    $.fn.LineProgressbar = function (options) {

         options = $.extend({
            percentage: null,
            ShowProgressCount: true,
            // duration: 2000,

            // Styling Options
            fillBackgroundColor: '#3498db',
            backgroundColor: '#EEEEEE',
            radius: '0px',
            height: '10px',
            width: '100%'
        }, options);

        $.options = options;
        return this.each(function (index, el) {
            // Markup
            $(el).html('<div class="progressbar"><div class="proggress"></div><div class="percentCount"></div></div>');



            var progressFill = $(el).find('.proggress');
            var progressBar = $(el).find('.progressbar');


            progressFill.css({
                backgroundColor: options.fillBackgroundColor,
                height: options.height,
                borderRadius: options.radius
            });
            progressBar.css({
                width: options.width,
                backgroundColor: options.backgroundColor,
                borderRadius: options.radius
            });

            // Progressing
            progressFill.animate(
                {
                    width: options.percentage + "%"
                },
                {
                    step: function (x) {
                        if (options.ShowProgressCount) {
                            $(el).find(".percentCount").text(Math.round(x) + "%");
                        }
                    },
                    duration: options.duration
                }
            );
            ////////////////////////////////////////////////////////////////////
        });
    }
    $.fn.progressTo = function (next) {

        let options = $.options;

        return this.each(function (index, el) {

            var progressFill = $(el).find('.proggress');
            var progressBar = $(el).find('.progressbar');

            progressFill.animate(
                {
                    width: next + "%"
                },
                {
                    step: function (x) {
                        if (options.ShowProgressCount) {
                            $(el).find(".percentCount").text(Math.round(x) + "%");
                        }
                    },
                    duration: options.duration
                }
            );
            ////////////////////////////////////////////////////////////////////
        });
    }

})(jQuery);


$("document").ready(function($){

    var flag = true;

    $(window).scroll(function () {
        console.log($(this).scrollTop());

      if ( ($(this).scrollTop() > 400)  && flag) {
        flag = false;
        
        $('#design').LineProgressbar({
          percentage: 91,
          // fillBackgroundColor: '#1abc9c',
        });
        $('#ios').LineProgressbar({
          percentage: 80,
        });
        $('#android').LineProgressbar({
          percentage: 85,
        });
        $('#planning').LineProgressbar({
          percentage: 98,
        });

      }

    }); 


  });




