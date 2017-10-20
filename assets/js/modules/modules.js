(function ($) {
	'use strict';
	
	$(document).ready(function () {
		evcButton().init();
	});
	
	/*
	 **	Init button shortcode functionality for hover colors
	 */
	var evcButton = function () {
		var buttons = $('.evc-button');
		
		var buttonHoverColor = function (button) {
			if (typeof button.data('hover-color') !== 'undefined') {
				var changeButtonColor = function (event) {
					event.data.button.css('color', event.data.color);
				};
				
				var originalColor = button.css('color'),
					hoverColor = button.data('hover-color');
				
				button.on('mouseenter', {button: button, color: hoverColor}, changeButtonColor);
				button.on('mouseleave', {button: button, color: originalColor}, changeButtonColor);
			}
		};
		
		var buttonHoverBackgroundColor = function (button) {
			if (typeof button.data('hover-background-color') !== 'undefined') {
				var changeButtonBg = function (event) {
					event.data.button.css('background-color', event.data.color);
				};
				
				var originalBackgroundColor = button.css('background-color'),
					hoverBackgroundColor = button.data('hover-background-color');
				
				button.on('mouseenter', {button: button, color: hoverBackgroundColor}, changeButtonBg);
				button.on('mouseleave', {button: button, color: originalBackgroundColor}, changeButtonBg);
			}
		};
		
		var buttonHoverBorderColor = function (button) {
			if (typeof button.data('hover-border-color') !== 'undefined') {
				var changeBorderColor = function (event) {
					event.data.button.css('border-color', event.data.color);
				};
				
				// take one color of the four sides because in otherwise script will messed up
				var originalBorderColor = button.css('borderTopColor'),
					hoverBorderColor = button.data('hover-border-color');
				
				button.on('mouseenter', {button: button, color: hoverBorderColor}, changeBorderColor);
				button.on('mouseleave', {button: button, color: originalBorderColor}, changeBorderColor);
			}
		};
		
		return {
			init: function () {
				if (buttons.length) {
					buttons.each(function () {
						var thisButton = $(this);
						
						buttonHoverColor(thisButton);
						buttonHoverBackgroundColor(thisButton);
						buttonHoverBorderColor(thisButton);
					});
				}
			}
		};
	};
	
})(jQuery);
(function ($) {
	'use strict';

	$(document).ready(function () {
		evcInitCounter();
	});

	/*
	 **	Init counter shortcode functionality
	 */
	function evcInitCounter() {
		var counter = $('.evc-counter');

		if (counter.length) {
			counter.each(function () {
				var thisCounter = $(this),
					digit = thisCounter.find('.evc-c-digit');

				thisCounter.appear(function () {
					thisCounter.css('opacity', '1');

					digit.countTo({
						from: 0,
						to: parseFloat(digit.text()),
						speed: 1500,
						refreshInterval: 100
					});
				}, 100);
			});
		}
	}

})(jQuery);
(function ($) {
	'use strict';
	
	$(document).ready(function () {
		evcCustomFontResizeStyle();
	});
	
	/*
	 **	Init Custom Font shortcode resizing style for text
	 */
	function evcCustomFontResizeStyle() {
		var holder = $('.evc-custom-font');
		
		if (holder.length) {
			holder.each(function () {
				var thisItem = $(this),
					itemClass = '',
					itemClassData = thisItem.data('item-class'),
					laptopFSData = thisItem.data('font-size-1440'),
					smallLaptopFSData = thisItem.data('font-size-1280'),
					ipadLandscapeFSData = thisItem.data('font-size-1024'),
					ipadPortraitFSData = thisItem.data('font-size-768'),
					mobileFSData = thisItem.data('font-size-680'),
					laptopLHData = thisItem.data('line-height-1440'),
					smallLaptopLHData = thisItem.data('line-height-1280'),
					ipadLandscapeLHData = thisItem.data('line-height-1024'),
					ipadPortraitLHData = thisItem.data('line-height-768'),
					mobileLHData = thisItem.data('line-height-680'),
					laptopStyle = '',
					smallLaptopStyle = '',
					ipadLandscapeStyle = '',
					ipadPortraitStyle = '',
					mobileLandscapeStyle = '',
					style = '',
					responsiveStyle = '';
				
				if (typeof itemClassData !== 'undefined' && itemClassData !== false) {
					itemClass = itemClassData;
				}
				
				if (typeof laptopFSData !== 'undefined' && laptopFSData !== false) {
					laptopStyle += 'font-size: ' + laptopFSData + ' !important;';
				}
				if (typeof smallLaptopFSData !== 'undefined' && smallLaptopFSData !== false) {
					smallLaptopStyle += 'font-size: ' + smallLaptopFSData + ' !important;';
				}
				if (typeof ipadLandscapeFSData !== 'undefined' && ipadLandscapeFSData !== false) {
					ipadLandscapeStyle += 'font-size: ' + ipadLandscapeFSData + ' !important;';
				}
				if (typeof ipadPortraitFSData !== 'undefined' && ipadPortraitFSData !== false) {
					ipadPortraitStyle += 'font-size: ' + ipadPortraitFSData + ' !important;';
				}
				if (typeof mobileFSData !== 'undefined' && mobileFSData !== false) {
					mobileLandscapeStyle += 'font-size: ' + mobileFSData + ' !important;';
				}
				
				if (typeof laptopLHData !== 'undefined' && laptopLHData !== false) {
					laptopStyle += 'line-height: ' + laptopLHData + ' !important;';
				}
				if (typeof smallLaptopLHData !== 'undefined' && smallLaptopLHData !== false) {
					smallLaptopStyle += 'line-height: ' + smallLaptopLHData + ' !important;';
				}
				if (typeof ipadLandscapeLHData !== 'undefined' && ipadLandscapeLHData !== false) {
					ipadLandscapeStyle += 'line-height: ' + ipadLandscapeLHData + ' !important;';
				}
				if (typeof ipadPortraitLHData !== 'undefined' && ipadPortraitLHData !== false) {
					ipadPortraitStyle += 'line-height: ' + ipadPortraitLHData + ' !important;';
				}
				if (typeof mobileLHData !== 'undefined' && mobileLHData !== false) {
					mobileLandscapeStyle += 'line-height: ' + mobileLHData + ' !important;';
				}
				
				if (laptopStyle.length || smallLaptopStyle.length || ipadLandscapeStyle.length || ipadPortraitStyle.length || mobileLandscapeStyle.length) {
					
					if (laptopStyle.length) {
						responsiveStyle += "@media only screen and (max-width: 1440px) {.evc-custom-font." + itemClass + " { " + laptopStyle + " } }";
					}
					if (smallLaptopStyle.length) {
						responsiveStyle += "@media only screen and (max-width: 1280px) {.evc-custom-font." + itemClass + " { " + smallLaptopStyle + " } }";
					}
					if (ipadLandscapeStyle.length) {
						responsiveStyle += "@media only screen and (max-width: 1024px) {.evc-custom-font." + itemClass + " { " + ipadLandscapeStyle + " } }";
					}
					if (ipadPortraitStyle.length) {
						responsiveStyle += "@media only screen and (max-width: 768px) {.evc-custom-font." + itemClass + " { " + ipadPortraitStyle + " } }";
					}
					if (mobileLandscapeStyle.length) {
						responsiveStyle += "@media only screen and (max-width: 680px) {.evc-custom-font." + itemClass + " { " + mobileLandscapeStyle + " } }";
					}
				}
				
				if (responsiveStyle.length) {
					style = '<style type="text/css">' + responsiveStyle + '</style>';
				}
				
				if (style.length) {
					$('head').append(style);
				}
			});
		}
	}
	
})(jQuery);
(function ($) {
	'use strict';
	
	$(document).ready(function () {
		evcInitProcess();
	});
	
	/**
	 * Inti process shortcode functionality on appear
	 */
	function evcInitProcess() {
		var holder = $('.evc-process');
		
		if (holder.length) {
			holder.each(function () {
				var thisHolder = $(this);
				
				thisHolder.appear(function () {
					thisHolder.addClass('evc-process-appeared');
				}, 100);
			});
		}
	}
	
})(jQuery);
(function ($) {
	'use strict';
	
	$(document).ready(function () {
		evcInitProcess2();
	});
	
	/**
	 * Inti process 2 shortcode functionality on appear
	 */
	function evcInitProcess2() {
		var holder = $('.evc-process-2');
		
		if (holder.length) {
			holder.each(function () {
				var thisHolder = $(this);
				
				thisHolder.appear(function () {
					thisHolder.addClass('evc-process-appeared');
				}, 100);
			});
		}
	}
	
})(jQuery);
(function ($) {
	'use strict';
	
	$(document).ready(function () {
		evcInitProgressBar();
	});
	
	/*
	 **	Init progress bar shortcode functionality
	 */
	function evcInitProgressBar() {
		var progressBar = $('.evc-progress-bar');
		
		if (progressBar.length) {
			progressBar.each(function () {
				var thisBar = $(this),
					isVerticalType = thisBar.hasClass('evc-pb-vertical'),
					percent = thisBar.find('.evc-pb-percent'),
					barContent = thisBar.find('.evc-pb-active-bar'),
					percentValue = parseFloat(barContent.data('percentage'));
				
				if (typeof percentValue !== 'undefined' && percentValue !== false) {
					thisBar.appear(function () {
						evcInitProgressBarCounter(percent, percentValue);
						
						if(isVerticalType) {
							barContent.stop().animate({'height': percentValue + '%'}, 1500);
						} else {
							barContent.stop().animate({'width': percentValue + '%'}, 1500);
						}
					});
				}
			});
		}
	}
	
	/*
	 **	Init progress bar shortcode counter to count percent from zero to defined percent value
	 */
	function evcInitProgressBarCounter(percent, percentValue) {
		
		if (percent.length) {
			percent.each(function () {
				var thisPercent = $(this);
				
				thisPercent.css({'opacity': '1'}).countTo({
					from: 0,
					to: percentValue,
					speed: 1500,
					refreshInterval: 50
				});
			});
		}
	}
	
})(jQuery);