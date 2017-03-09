
function cScroll(options){
	/**
	 * options = {
	 *	  container: "#container",
	 *	  downRefresh: function(){},
	 *    upLoadMore: function(){},
	 * }
	 */

	var $container = $("#" + options.container ),
		$scroller = $container.find(".scroller"),
		$pullDownEl,
		$pullUpEl,
		pullDownOffset,
		pullUpOffset,
		$headerTitle = $container.parents(".panel").find(".custom_header_title");

	// 插入 下拉刷新 提示语
	if(options.downRefresh) {

		$scroller.prepend('<div class="pullDown">'+
								'<span class="pullDownIcon"></span>'+
								'<span class="pullDownLabel">下拉刷新...</span>'+
						  '</div>');

		$pullDownEl = $container.find(".pullDown");
		pullDownOffset = $pullDownEl.get().offsetHeight;

	}

	//  插入 上拉加载更多 提示语
	if(options.upLoadMore) {

		$scroller.append('<div class="pullUp">'+
							'<span class="pullUpIcon"></span>'+
							'<span class="pullUpLabel">上拉刷新...</span>'+
						'</div>');

		$pullUpEl = $container.find(".pullUp");
		pullUpOffset = $pullUpEl.get().offsetHeight;

	}


	var meScroll = new iScroll(options.container,{

		onRefresh: function () {

			if(options.downRefresh){

				if ($pullDownEl.hasClass('loading')) {

					$pullDownEl.attr("class","pullDown");

					$pullDownEl.find('.pullDownLabel').html("下拉刷新...");

					$headerTitle.removeClass("loading");

				} 
			}
			if(options.upLoadMore){

				if ($pullUpEl.hasClass('loading')) {

					$pullUpEl.attr("class","pullUp");

					$pullUpEl.find('.pullUpLabel').html("上拉加载更多...");

					$headerTitle.removeClass("loading");
				}
			}
		},

		onScrollMove: function () {


			if(options.downRefresh) {

				if (this.y > 40 && !$pullDownEl.hasClass('flip')) {

					$pullDownEl.addClass("flip");

					$pullDownEl.find('.pullDownLabel').html('松手开始更新...');

				} 

				if (this.y < 40 && $pullDownEl.hasClass('flip')) {

					$pullDownEl.removeClass("flip");

					$pullDownEl.find('.pullDownLabel').html('下拉刷新...');

				} 

				this.minScrollY = 0;

			}
				
			if(options.upLoadMore) {

				if (this.y < (this.maxScrollY - 40) && !$pullUpEl.hasClass('flip')) {

					$pullUpEl.addClass("flip");

					$pullUpEl.find('.pullUpLabel').html('松手开始更新...');

					this.maxScrollY = this.maxScrollY;

				} 

				if (this.y > (this.maxScrollY + 40) && $pullUpEl.hasClass('flip')) {

					$pullUpEl.removeClass("flip");

					$pullUpEl.find('.pullUpLabel').html('上拉加载更多...');

					this.maxScrollY = pullUpOffset;
				}
			}
		},

		onScrollEnd: function () {

			if(options.downRefresh) {

				if ($pullDownEl.hasClass('flip')) {

					$pullDownEl.attr('class','pullDown loading');

					$pullDownEl.find('.pullDownLabel').html('加载中...');

					$container.parents(".panel").find(".custom_header_title").addClass("loading");

					// pullDownAction();	// Execute custom function (ajax call?)
					options.downRefresh();
				}

			}

			if(options.upLoadMore) {
				
				if ($pullUpEl.hasClass('flip')) {

					$pullUpEl.attr('class','pullUp loading');

					$pullUpEl.find('.pullUpLabel').html('加载中...');

					$headerTitle.addClass("loading");

					// pullUpAction();	// Execute custom function (ajax call?)
					options.upLoadMore();
				}

			}

		}

	});

	return meScroll;
}



