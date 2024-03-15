$(document).ready(function() {

	$(".order-present .btn-present").click(function(e) {
		e.preventDefault();
		$(".present-block").slideToggle(200);
	});

	$('.rent-form .item-form select').on( "change", function() {
		$(".pane-rent").fadeOut(0);
		var selectTab = $(this).val();
		$("#"+selectTab).fadeIn(200);
	}); 

	
		$(".range-main__input").ionRangeSlider({
				min: 3,
				max: 100,
				from: 3,
				postfix: "ч",
				prettify_enabled: true,
			
			});


	if ($('.plane-subscribe').length > 0) {
		var show = true;
		  var countbox = ".plane-subscribe";
		  $(window).on("scroll load resize", function () {
			  if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
			  var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
			  var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
			  var w_height = $(window).height(); // Высота окна браузера
			  var d_height = $(document).height(); // Высота всего документа
			  var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
			  if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
				  $(".plane-subscribe").addClass("active");
	  
				  show = false;
			  }
		  });
		}

});
