function inViewport(){$(".animation-element").each(function(){var i=$(this).offset().top,s=$(window).scrollTop();$(".oxidane-outer").addClass("in-view"),$(".liyaga-outer").addClass("in-view"),s+400>i?$(this).addClass("in-view"):$(this).removeClass("in-view")})}$(window).scroll(function(){inViewport()}),$(window).resize(function(){inViewport()}),$("a").each(function(){$(this).html('<span class="icon">'+$(this).html()+'</span><span class="circle"><span><em></em></span><span><em></em></span></span>')}),$(".list li a").click(function(){return $(this).closest(".subject").find(".overlay").show(),$(this).closest(".subject").find(".overlay .img-box-more").animate({left:"0"},"slow"),!1}),$(".close-overlay li a").click(function(){$(this).closest(".subject").find(".overlay ").hide()});