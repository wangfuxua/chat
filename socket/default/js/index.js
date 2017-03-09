

window.addEventListener('load', function() {
  	FastClick.attach(document.body);
}, false);


/**
 * cajian 对象构造函数
 *
 **/
function Cajian(){

	this.$win = $(window);
	this.$doc = $(document);


	/**
	 *  regist 注册页面
	 **/

	
	// this.$regi_bind_bindBtn = $("#regi_bind_bindBtn");

	// 验证12位16进制，蓝牙mac地址
	// this.rErweimaCode = /^[0-9|a-f|A-F]{12}$/i;

	this.erweimaData = null;

 	this.$regi_bind_SearchBtn = $("#regi_bind_SearchBtn");
	this.$regi_bind_list = $("#regi_bind_list");

	this.$regi_search = $(".regi_search");
	this.$regi_bind = $(".regi_bind");
    this.$regi_info = $(".regi_info");
	this.$regi_search_btn = $("#regi_search_btn");
	
	this.$regi_regist_btn = $("#regi_regist_btn");
	this.$regist_backBtn = $("#regist_backBtn");

	this.$regi_phoneNum = $("#regi_phoneNum");
	this.$regi_password = $("#regi_password");
	this.$regi_rePassword = $("#regi_rePassword");

	this.$regi_bluetooth_macId = $("#regi_bluetooth_macId");

	this.$regi_passwordTips = $("#regi_passwordTips");
	this.$regi_phoneTips = $("#regi_phoneTips");

	this.rPhoneNum = /^1[3|4|5|8][0-9]\d{8}$/;

	this.isPhoneNum = false;
	this.isPassword = false;
	this.isSex = false;

	// 选择性别
	this.userSex = null;
	this.$regi_sex_item = $(".regi_sex_item");

	// 注册、登录
	this.$login_username = $("#login_username");
 	this.$login_password = $("#login_password");
 	this.$login_tipPhoneNum = $("#login_tipPhoneNum");

 	// 退出登录
 	this.$signOut = $("#signOut");


 	/**
 	 * cajian_setting.js
 	 **/
 	this.$personal_uid = $("#personal_uid");
 	this.$personal_headImgSubmit = $("#personal_headImgSubmit");

 	// 昵称
	this.$personal_nickName = $("#personal_nickName");
	this.$personal_nickName_edit = $("#personal_nickName_edit");
	this.$personal_nickName_input = $("#personal_nickName_input");
	this.$personal_nickName_okBtn = $("#personal_nickName_okBtn");

	// 修改性别 
    this.$personal_list_sex = $("#personal_list_sex");
	this.$personal_sex_item = $(".personal_sex_item");

	// 修改个性签名
    this.$personal_signature = $("#personal_signature");
	this.$personal_signature_cont = $("#personal_signature_cont");
	this.$personal_signature_edit = $("#personal_signature_edit");
	this.$personal_signature_input = $("#personal_signature_input");
	this.$personal_signature_okBtn = $("#personal_signature_okBtn");
	this.$personal_signature_cancelBtn = $("#personal_signature_cancelBtn");

	// 设置兴趣爱好
	this.$personalLabel_okBtn = $("#personalLabel_okBtn");

	// 个人标签
    this.$personal_label_list = $(".personalLabel_inner .personal_label");
	this.$personalLabel_add = $("#personalLabel_add");
	this.$personalLabel_addBtn = $("#personalLabel_addBtn");


	/**
	 * cajian_personalPage.js
	 **/

	// 获取好友的所有文章 和 好友的基本信息
    this.$friendPage_listBox = $("#friendPage_listBox");
 	this.$friend_header = $("#friend_header");
 	this.$friend_name = $("#friend_name");
 	this.$friend_sex = $("#friend_sex");

 	// 转发给好友
 	this.$zhuanFaToFriend_ul = $(".zhuanFaToFriend_ul");

 	// 转扔
    this.$zhuanReng_link = $("#zhuanReng_link"),
	this.$zhuanReng_title = $("#zhuanReng_title");


	/**
	 * cajian_find.js
	 **/
    this.$discover_reng = $(".discover_reng");
	this.$discover_jian = $(".discover_jian");
	this.$discover_searchTips = $(".discover_searchTips");
	this.$discover_search = $(".discover_search");

	// 发现 扔
    this.$discover_reng_title = $("#discover_reng_title");
	this.$discover_reng_link = $("#discover_reng_link");
	this.$discover_reng_okBtn = $("#discover_reng_okBtn");
	this.$discover_reng_cancelBtn = $("#discover_reng_cancelBtn");
	this.$discover_reng = $("#discover_reng");


	/**
	 * cajian_pickDetail.js
	 **/
	// 捡的详情页 
    this.$pickDetail = $("#pickDetail");
	this.rPickDetail = /^pickDetail/;
	this.$pickDetail_backBtn = $("#pickDetail_backBtn");



	/**
	 * cajian_friend.js
	 **/
	// 跳转到好友请求处理页面
    this.$request_friend_name = $("#request_friend_name");
	this.$req_friend_aid = $("#req_friend_aid");
	this.$request_friend_msg = $("#request_friend_msg");
	this.$message_ul = $(".message_ul");
	this.$message_talking_ul = (".message_talking_ul");

	// 好友请求处理----同意
	this.$req_friend_agree = $("#req_friend_agree");

	// 好友请求处理----拒绝
	this.$req_friend_refuse = $("#req_friend_refuse");

	// 点击tab的 消息 项，获取 好友请求信息 和 好友聊天信息
	this.$tabBtn_xiaoxi = $("#tabBtn_xiaoxi");

	// 好友列表 搜索框
    this.$myFriend_search_tips = $(".myFriend_search_tips");
	this.$myFriend_search_cont = $(".myFriend_search_cont");
	this.$myFriend_searchResult = $("#myFriend_searchResult");

	// 取消好友馊酸按钮
	this.$cancelSearchFriend = $("#cancelSearchFriend");



	/**
	 * cajian_talking.js
	 **/
    this.$talking = $("#talking");
	this.$talking_msgToSend = $("#talking_msgToSend");
	this.$send_btn = $("#send_btn");
	this.$add_btn = $("#add_btn");
	this.$talking_bottom = $(".talking_bottom");
	this.$face_btn = $("#face_btn");

	this.$faceAndTrue = $("#faceAndTrue");
	this.$face_panel = $("#face_panel");
	this.$true_panel = $("#true_panel");

	this.$face_panel_inner = $(".face_panel_inner");
	this.$face_label = $(".face_label");
	this.$faces = $("#face_panel").find(".face");
	this.$talking_panel = $("#talking_panel");
	this.$talking_title = $("#talking_title");
	this.$delete_face = $(".delete_face");
	this.rFace = /\[[a-zA-Z]{3,}\]/gi;

    // 真心话
    this.$random_true = $("#random_true");
	this.$my_true = $("#my_true");

	// 发送真心话
    this.$send_true_words = $("#send_true_words");
	this.$custom_true = $("#custom_true");
	this.$custom_true_addQuestion = $("#custom_true_addQuestion");
	this.$custom_true_inner = $(".custom_true_inner");
	this.$custom_true_question = $("#custom_true_question");
	this.$back_custom_true = $("#back_custom_true");

	// 切换face panel
    this.winW = this.$win.width();
	this.panelIndex = 0;
	this.translateLeft = 0;

	this.$friendPage_toTalking = $("#friendPage_toTalking");

	this.$notFriend_talkingBtn = $("#notFriend_talkingBtn");






 	/**
 	 * index.js
 	 **/
	// 本地存储 
	this.localStorage = window.localStorage;

	this.$tabBtn_wrapper = $("#tabBtn_wrapper");

	// 用户头像
	this.$cajian_user_header = $("#cajian_user_header");
	this.$personal_list_headerImgNow = $(".personal_list_headerImgNow");

	// 用户昵称
	this.$cajian_user_name = $("#cajian_user_name");
	this.$cajian_user_sex = $("#cajian_user_sex");
	
	this.$personal_nickName_cont = $("#personal_nickName_cont");

	// 用户性别
	this.$personal_popup_sex = $("#personal_popup_sex");
	this.$personal_user_sex = $("#personal_user_sex");

	// 用户签名
	this.$personal_signature_cont = $("#personal_signature_cont");

	// 用户兴趣爱好标签
	this.$personal_labelWrapper = $(".personal_labelWrapper");
	this.$personalLabel_inner = $(".personalLabel_inner");
	this.$personalLabel_labelBox = $("#personalLabel_labelBox");

	// 好友列表
	this.$myFriend_listBox = $("#myFriend_listBox");
	this.$myFriend_ul = $(".myFriend_ul");
	this.nFriendPage = 0;

	this.$friendPage_listBox = $("#friendPage_listBox");
	this.$friend_header = $("#friend_header");
	this.$friend_name = $("#friend_name");
	this.$friend_sex = $("#friend_sex");

	// 捡到的详情页
	this.$pickDetail_iframe = $("#pickDetail_iframe");
	this.$pickDetail_footer_seeTimes = $("#pickDetail_footer_seeTimes");
	this.$pickDetail_footer_zanTimes = $("#pickDetail_footer_zanTimes");
	this.$pickDetail_footer_zhuanTimes = $("#pickDetail_footer_zhuanTimes");

	this.$pickDetail_footer_zanBtn = $(".pickDetail_footer_zanBtn");
	this.$pickDetail_footer_zanIcon = $("#pickDetail_footer_zanIcon");
	this.$pickDetail_footer_zhuanfaBtn = $(".pickDetail_footer_zhuanfaBtn");

	// 发送好友请求消息
	this.$req_friendMsg = $("#req_friendMsg");
	this.$req_firendBtn = $("#req_firendBtn");


	// 转发选择
	this.$zhuanfaBtn_wrapper = $(".zhuanfaBtn_wrapper");
	this.$zhuanfa_mask = $("#zhuanfa_mask");
	this.$zhuanfa_select = $("#zhuanfa_select");
	this.$zhuanfa_select_item = $(".zhuanfa_select_item");
	this.$zhuanReng_btn = $("#zhuanReng_btn");

	this.isZhuanfa = false;

	// 聊天页面好友头像
	this.friendHeadImg = "";


	// 服务器地址
	this.httpHost = "http://apicajian.k21.me/";
	// this.httpHost = "http://103.238.226.172/";


	



 	// tabMask (导航)
    this.$tabMask = $("#tabMask");
	this.$tabBtn_menu = $(".tabBtn_menu");
	this.$tabBtn_item = $(".tabBtn_item");

	this.$tabBtn_bluetooth = $("#tabBtn_bluetooth");

	// 擦肩列表处理
	this.$notFriend_reng_wrapper = $(".notFriend_reng_wrapper");
	this.$notFriend_headerImg = $("#notFriend_headerImg");
	this.$notFriend_username = $("#notFriend_username");
	this.$notFriend_sex = $("#notFriend_sex");



	/**
	 * js、ios通信
	 **/
	this.bridge = window.WebViewJavascriptBridge;

}



Cajian.prototype = {
	/**
	 * index.js
	 **/
	// ios 调用来扫描二维码，并返回二维码中的数据
	// getErweimaData: function (data){
		
	// 	if(this.rErweimaCode.test(data)){

	// 		this.erweimaData = data;

	// 		this.$regi_bind.show();
	// 		this.$regi_search.hide();
	// 		this.$regi_bind_bindBtn.hide();
	// 	}

	// 	this.msgTip("erweima:" + data);
	// },


	// 搜索蓝牙设备
	// searchBluetooth: function (data){

	// 	// 二维码中数据跟蓝牙设备的 mac 地址相同
	// 	if(this.erweimaData == data){

	// 		this.$regi_bind_list.html("擦肩手环");

	// 		this.$regi_bind_SearchBtn.hide();
	// 		this.$regi_bind_bindBtn.show();
	// 	}else{


	// 	}

	// 	this.msgTip("search:" + data);
	// },


	// 获取用户信息和与用户擦肩的人
	getUserInfoAndPassBy: function (){

		var _this = this;

		// 获取用户信息
		$.post(_this.httpHost + "index.php?s=/uinfo/getuser",{

			uid: _this.localStorage.uid

		},function(userInfo){

			if(userInfo.code == 100200){

				// 获取用户头像
				_this.$cajian_user_header.attr("src",_this.httpHost + userInfo.data.headimg);
				_this.$personal_list_headerImgNow.attr("src",_this.httpHost + userInfo.data.headimg);


				// 用户昵称 和 性别
				$("#header_user_myself").attr({
					"data-username": userInfo.data.name,
					"data-usersex": userInfo.data.sex
				});
				// $cajian_user_name.text(userInfo.data.name);
				// $cajian_user_sex.addClass("sex" + userInfo.data.sex);

				_this.$personal_nickName_cont.text(userInfo.data.name);

				_this.$personal_user_sex.text(userInfo.data.sex == 1 ? "男" : "女");

				if(userInfo.data.sex == 1) {
					_this.$personal_popup_sex.find(".man").addClass("sex_selected");
				}else{
					_this.$personal_popup_sex.find(".woman").addClass("sex_selected");
				}


				// 获取用户签名
				_this.$personal_signature_cont.text(userInfo.data.sign);

				// 获取用户的兴趣爱好标签
				var aTags = userInfo.data.tag.split(","),
					nLen = aTags.length,
					sTags = "",
					sTagSelect = "";

				// 如果有兴趣标签
				if(userInfo.data.tag != 0 && nLen > 1){

					for(var i = 0; i < nLen; i++){

						if($.trim(aTags[i]) != ""){

							sTags += '<a class="personal_label" href="#personalLabel" data-transition="slide-right">'+ aTags[i] +'</a>';
							
							sTagSelect += '<a class="personal_label label_checked" href="javascript:;">'+
												'<span class="label_text">'+ aTags[i] +'</span>'+
												'<span class="label_checked_icon"></span>'+
											'</a>';
						}
					}

					_this.$personal_labelWrapper.html(sTags);

					_this.$personalLabel_labelBox.html(sTagSelect);

				// 如果没有兴趣标签，则默认提供一些
				}else{
					var tagArray = ["篮球","足球","唱歌","听音乐","看电影","看书","户外运动","交友","星座分析","健身","游戏","跳舞"],
						tagLength = tagArray.length;

					for(var j = 0; j < tagLength; j++){

						sTagSelect += '<a class="personal_label" href="javascript:;">'+
											'<span class="label_text">'+ tagArray[j] +'</span>'+
											'<span class="label_checked_icon"></span>'+
										'</a>'
					}

					_this.$personalLabel_labelBox.html(sTagSelect);
				}

				
				// 获取用户的登录状态信息
				_this.localStorage.userStatus = userInfo.data.status;

				// 把用户的基本信息保存到本地
				_this.localStorage.userInfo = JSON.stringify(userInfo.data);


			}else{

				_this.msgTip(userInfo.message);
			}

			console.log(userInfo);
		});
		

		// 获取用户信息成功后，获取跟用户擦肩的人
		$.post(_this.httpHost + "index.php?s=/uinfo/Getpass",{

			uid: _this.localStorage.uid,
			
			// 擦肩的mac地址 
			mac: JSON.stringify([333333333333,444444444444,555555555555])


		},function(data){


			if(data.code == 100200){

				var sCajian = "",
					aCanjian = data.data,
					len = aCanjian.length;

				for(var i = 0; i < len; i++){

					var cajian = aCanjian[i],
						sBtn = "",
						sTarget = "";

					// 如果是好友，则显示聊天icon 可直接进入聊天页面
					if(cajian.if){
						sBtn = '<a class="cajianList_msg icon_img_wrapper btnRequestFriend" href="#talking" data-transition="slide-right" data-uid="'+ cajian.id +'" data-username="'+ cajian.name +'">'+
									'<img class="icon_img" src="img/msgYellow_icon.png"/>'+
								'</a>';

						sTarget = "friendPage";

					// 如果不是好友
					}else{

						sBtn = '<a class="cajianList_add icon_img_wrapper btnRequestFriend" href="#requestFriend" data-transition="slide-right" data-uid="'+ cajian.id +'">'+
									'<img class="icon_img" src="img/add_icon.png"/>'+
								'</a>';

						sTarget = "notFriend";
					}

					sCajian += '<li class="cajianList_li relative">'+
									'<a class="cajianList_a cajianList_'+ sTarget +'" data-uid="'+ cajian.id +'" data-username="'+ cajian.name +'" data-headimg="'+ cajian.headimg +'" data-usersex="'+ cajian.sex +'">'+
										'<img class="cajianList_headerImg" src="'+ _this.httpHost + cajian.headimg +'">'+
										'<div class="cajianList_name">'+
											'<p class="cajianList_nickName">'+ cajian.name +'</p>'+
											'<p class="cajianList_times">曾经有<span class="yellow">'+ cajian.num +'</span>次我们擦肩而过</p>'+
										'</div>'+
									'</a>'+ sBtn +
								'</li>';
				}
			}

			$(".cajianList").html(sCajian);

			console.log(data);

		});


		// 获取好友列表
		$.post(_this.httpHost + "index.php?s=/uinfo/GetFriend",{

			uid: _this.localStorage.uid,
			p: _this.nFriendPage

		},function(data){

			console.log(data);
			
			if(data.code == 100200){

				// 把好友列表信息保存到本地
				_this.localStorage.friendList = JSON.stringify(data.data);

				var sFriend = "";
				for(var i = 0, len = data.data.length; i < len; i++){

					var friend = data.data[i],
						friendMsgCount = 0,
						isShow = "";



					if(friend){

						$.post(_this.httpHost + "index.php?s=/uinfo/GetMessage",{

							uid: _this.localStorage.uid

						},function(data){

							console.log(data);

							if(data.code == 100200){
								friendMsgCount = data.data;

								if(friendMsgCount > 99){
									friendMsgCount = "99+";
								}
								if(!friendMsgCount){
									isShow = "hide";
								}



							}
						});
						
						sFriend += '<li class="myFriend_list">'+
										'<a class="myFriend_list_a" href="javascript:;" data-uid="'+ friend.uid +'">'+
											'<img class="myFriend_list_headerImg" src="' + _this.httpHost + friend.headimg + '"/>'+
											'<p class="myFriend_list_name">'+ friend.name +'</p>'+
											// '<span class="myFriend_msgCount '+ isShow +'">'+ friendMsgCount +'</span>'+
										'</a>'+
									'</li>';
					}
					
				}

				_this.$myFriend_ul.html(sFriend);

				_this.nFriendPage++;
			}
		});
	},


	// 信息提示框
	msgTip: function(text,duration){

		var dur = duration || 1000,
			$tipMsg_box = $("#tipMsg_box");

		$tipMsg_box.html(text).addClass("show");

		setTimeout(function(){

			$tipMsg_box.html("").removeClass("show");
		},dur);
	},


	// 跳转到指定的面板
	goPanel: function(target,callback){
		$.afui.goPanel(target,callback);
	},


	// 获取指定用户的所有扔的东西
	getFriendArts: function(userid){

		var _this = this;

		// 获取好友扔的东西
		$.post(_this.httpHost + "index.php?s=/article/getAllart",{

			uid: userid

		},function(data){

			if(data.code == 100200){

				var sList = "",
					lists = data.data;

				for (var i = 0, len = lists.length; i < len; i++){

					var list = lists[i],
						dateStr = "",
						dateClass = "",

						dateTime = new Date(list.timeline * 1000),
						year = dateTime.getFullYear(),
						month = dateTime.getMonth() + 1,
						day = dateTime.getDate(),

						today = new Date(),
						todayMonth = today.getMonth() + 1,
						todayDay = today.getDate(),
						todayYear = today.getFullYear();

					if(year == todayYear && month == todayMonth && day == todayDay){

						dateStr = "今天";
						dateClass = "dateTime_last";

					}else{

						dateStr = '<span class="dateTime_day">'+ day +'</span><span class="dateTime_month">'+ month +'月</span>';
						
					}

					// 纯文本形式
					if($.trim(list.desc) == ""){

						sList +='<div class="friendPage_list">'+
			      					'<div class="friendPage_list_dateTime '+ dateClass +'">'+ dateStr +'</div>'+
			      					'<p class="friendPage_list_p" data-artId="'+ list.id +'">'+ list.title +'</p>'+
			      					'<div class="friendPage_list_operate clearfix" data-artId="'+ list.id +'">'+
			      						'<div class="fp_operate_btnWrapper zanBtn_wrapper">'+
			      							'<a class="fp_operate_btn fp_operate_zanBtn " href="javascript:;">'+
			      								'<img class="fp_operate_icon" src="img/zan_icon.png"/>'+
			      							'</a>'+
			      							'<span class="fp_operate_btnTimes fp_operate_zanTimes zanBtn_times yellow">'+ list.good +'</span>'+
			      						'</div>'+
			      						'<div class="fp_operate_btnWrapper">'+
			      							'<a class="fp_operate_btn" href="javascript:;">'+
			      								'<img class="fp_operate_icon" src="img/liulan_icon.png"/>'+
			      							'</a>'+
			      							'<span class="fp_operate_btnTimes yellow">'+ list.hit +'</span>'+
			      						'</div>'+
			      					'</div>'+
			      				'</div>'
					}
					// 链接形式 
					else{

						sList += '<div class="friendPage_list">'+
			      					'<div class="friendPage_list_dateTime '+ dateClass +'">'+ dateStr +'</div>'+
			      					'<a class="friendPage_list_a" href="#pickDetail" data-transition="slide-right"'+
			      					' data-artId="'+ list.id +'" data-link="'+ list.desc +'" data-artHit="'+ list.hit +'" data-artGood="'+ list.good +'" data-artTransmit="'+ list.transmit +'">'+
			      						'<div class="friendPage_list_content">'+
			      							'<div class="fp_list_imgWrapper">'+
			      								'<img class="fp_list_img" src="img/user_header.jpg"/>'+
			      							'</div>'+
			      							'<div class="fp_list_title">'+ list.title +'</div>'+
			      						'</div>'+
			      					'</a>'+
			      					'<div class="friendPage_list_operate clearfix" data-artId="'+ list.id +'">'+
			      						'<div class="fp_operate_btnWrapper zhuanfaBtn_wrapper">'+
			      							'<a class="fp_operate_btn" href="javascript:;">'+
			      								'<img class="fp_operate_icon" src="img/zhuanfa_icon.png"/>'+
			      							'</a>'+
			      							'<span class="fp_operate_btnTimes yellow fp_operate_zhuanfaTimes">'+ list.transmit +'</span>'+
			      						'</div>'+
			      						'<div class="fp_operate_btnWrapper zanBtn_wrapper">'+
			      							'<a class="fp_operate_btn fp_operate_zanBtn " href="javascript:;">'+
			      								'<img class="fp_operate_icon" src="img/zan_icon.png"/>'+
			      							'</a>'+
			      							'<span class="fp_operate_btnTimes fp_operate_zanTimes zanBtn_times yellow">'+ list.good +'</span>'+
			      						'</div>'+
			      						'<div class="fp_operate_btnWrapper">'+
			      							'<a class="fp_operate_btn" href="javascript:;">'+
			      								'<img class="fp_operate_icon" src="img/liulan_icon.png"/>'+
			      							'</a>'+
			      							'<span class="fp_operate_btnTimes yellow fp_operate_seeTimes">'+ list.hit +'</span>'+
			      						'</div>'+
			      					'</div>'+
			      				'</div>';

					}

					_this.$friendPage_listBox.html(sList);
				}

			}

			console.log(data);
			_this.goPanel("friendPage");
		});
	},


	// 展开、收缩tabBtn
	switchTabMenu: function(){

		if(this.$tabBtn_wrapper.hasClass("tabBtn_open")){
			this.fCloseTabBtn();
		}
		else{
			this.$tabMask.show();
			this.$tabBtn_wrapper.addClass("tabBtn_open");
		}
	},


	// 关闭tab menu 
	fCloseTabBtn: function(){
		this.$tabMask.hide();
		this.$tabBtn_wrapper.removeClass("tabBtn_open");
	},


	// 处理擦肩列表点击事件
	doCajianList: function($this){

		var _this = this;

		_this.friendHeadImg = _this.httpHost + $this.attr("data-headimg");

		// 如果是好友
		if($this.hasClass("cajianList_friendPage")){

			_this.$friend_header.attr("src", _this.httpHost + $this.attr("data-headimg"));
			_this.$friend_name.text($this.attr("data-username"));
			_this.$friend_sex.attr("class", "header_user_sex sex" + $this.attr("data-usersex"));

			_this.$friendPage_toTalking.attr({

				"data-friendId": $this.attr("data-uid"),
				"data-friendName": $this.attr("data-username")
			});

			_this.getFriendArts($this.attr("data-uid"));
		
		// 如果不是好友
		}else{

			_this.$notFriend_headerImg.attr("src",this.httpHost + $this.attr("data-headimg"));
			_this.$notFriend_username.text($this.attr("data-username"));
			_this.$notFriend_sex.attr("class","header_user_sex sex" + $this.attr("data-usersex"));

			$(".notFriend_tab_list").attr({
				"data-uid": $this.attr("data-uid"),
				"data-username": $this.attr("data-username") 
			});

			// 获取陌生人扔的最后一条东西
			$.post(this.httpHost + "index.php?s=/article/getAllart",{

				uid: $this.attr("data-uid")

			},function(data){

				console.log(data);

				if(data.code == 100200){

					var lastArt = data.data[0],
						sRengTagS = "",
						sRengTagE = "",
						showDate = timestapToDate("MM月dd日 h:m",lastArt.timeline);

					if(lastArt.desc != ""){

						sRengTagS = '<a class="notFriend_reng notFriend_reng_link relative" href="#pickDetail" data-transition="slide-right" data-link="'+ lastArt.desc +'">';
						sRengTagE = '</a>';

					}else{

						sRengTagS = '<div class="notFriend_reng relative">';
						sRengTagE = '</div>';
					}

					_this.$notFriend_reng_wrapper.html(sRengTagS +
													'<img class="notFriend_reng_img absolute" src="img/user_header.jpg"/>'+
								      				'<div class="notFriend_reng_cont">'+
								      					'<p class="notFriend_reng_title">'+ lastArt.title +'</p>'+
								      					'<p class="notFriend_reng_dateTime">'+ showDate +'</p>'+
								      				'</div>'+
								      			sRengTagE
	      			);
				}
			})

			this.goPanel("notFriend");
		}
	},


	// 添加擦肩到朋友
	addCajianToFriend: function($this){
		this.$req_firendBtn.attr("data-uid",$this.attr("data-uid"));
	},


	// 展示捡到的连接的详情
	showPickDetail: function($this){

		this.$pickDetail_iframe.attr("src", $this.attr("data-link"));

		this.goPanel("pickDetail");
	},



	/**
	 * cajian_loginReg.js
	 **/
	checkPhoneNumber: function(evtName){

		var phoneNum_val = this.$regi_phoneNum.val();

		console.log(phoneNum_val.length);

		switch(evtName){

			case "input":
				if(phoneNum_val.length >= 11){
					if (!this.rPhoneNum.test(phoneNum_val)) {

					    this.$regi_phoneTips.slideDown(200);
					    this.isPhoneNum = false;

					} else {

					    this.$regi_phoneTips.slideUp(200);
					    this.isPhoneNum = true;
					}
				}
				break;

			case "blur":
				if (!this.rPhoneNum.test(phoneNum_val)) {

				    this.$regi_phoneTips.slideDown(200);
				    this.isPhoneNum = false;

				} else {

				    this.$regi_phoneTips.slideUp(200);
				    this.isPhoneNum = true;
				}
				break;
		}
	},


	// 验证密码
	checkPassword: function(){

		var password = this.$regi_password.val(),
			rePassword = this.$regi_rePassword.val();


		if(rePassword != password) {

			this.$regi_passwordTips.slideDown(200);
			this.isPassword = false;
		}

		if(rePassword == password){

			this.$regi_passwordTips.slideUp(200);
			this.isPassword = true;
		}
	},


	// 返回登录页
	backToLogin: function(){

		var _this = this;

		setTimeout(function(){

			_this.$regi_search.show();
			_this.$regi_bind.hide();
			_this.$regi_info.hide();

			_this.$regi_phoneNum.val("");
			_this.$regi_password.val("");
			_this.$regi_rePassword.val("");

			_this.$regi_passwordTips.hide();
			_this.$regi_phoneTips.hide();

		},500);
	},
	

	// 绑定设备
	// bindDevice: function(){

	// 	this.$regi_search.hide();
	// 	this.$regi_bind.hide();
	// 	this.$regi_info.show();

	// 	this.$regi_bluetooth_macId.val(this.erweimaData);

	// 	// 通过把 macId 设置成我二维码中的数据来模拟绑定蓝牙
	// 	this.localStorage.macId = this.erweimaData;
	// },


	// 选择性别
	chooseSex: function($this){

		this.$regi_sex_item.removeClass("regiSexSelected");
		$this.addClass("regiSexSelected");

		if($this.hasClass("man")){

			this.userSex = 1;
		}else{
			this.userSex = 2;
		}

		this.isSex = true;
	},


	// 注册并登录
	regAndLogin: function(){

		var _username,
			_password,
			_this = this;

		if(_this.isSex) {

			_username = _this.$regi_phoneNum.val();
			_password = _this.$regi_password.val();

			_this.msgTip("二维码：" + _this.erweimaData);

			// 请求注册接口
			$.post(_this.httpHost + "index.php?s=/user/region",{

				username: _username,
				password: _password,
				sex: _this.userSex,

				// 蓝牙的 mac 地址
				hid: _this.erweimaData
				// hid: 666666666666

			},function(data){

				_this.msgTip(data.message);
				
				if(data.code == 100200){

					console.log(data);

					// 注册接口返回成功，请求登录接口
					$.post(_this.httpHost + "index.php?s=/user/login",{

						username: _username,
						password: _password

					},function(data){

						if(data.code == 100200){

							// 把uid存到本地存储
							_this.localStorage.uid = data.data.uid;

							_this.localStorage.hasLogin = 1;

							// 获取用户信息和擦肩信息
							_this.getUserInfoAndPassBy();
						}

					});

					// 跳转到擦肩页面
					_this.goPanel("home",function(){

						_this.$tabBtn_wrapper.show();
					});

					// 注册成功后，将注册用的用户名（或手机号）存到本地存储
					_this.localStorage.phoneNum = _this.$regi_phoneNum.val();

					// 把用户名和密码存到本地，自动登录
					_this.localStorage.username = _username;
					_this.localStorage.password = _password;

					// 保存 设备的mac 地址到本地存储
					// localStorage.macId = erweimaData;
				}
			});
		}else{

			_this.msgTip("请确认您的信息是否完整！",1600)
		}
	},


	// 提示用户名
	tipUserName: function(){

		if(this.localStorage.phoneNum){

			this.$login_tipPhoneNum.text(this.localStorage.phoneNum).slideDown(200);
		}
	},


	// 收起提示用户名
	hideTipUserName: function(){

		this.$login_tipPhoneNum.slideUp(200);
	},


	// 快速输入用户名（或手机号）
	fastInputUserName: function(){

		this.$login_username.val(this.localStorage.phoneNum);
		this.$login_tipPhoneNum.slideUp(200);
	},


	// 登录 获取用户信息
	loginAndGetUserInfo: function(){

		// 预存的usernam 和 password 变量
		var _this = this,
			_username,
			_password;

		// 如果用户名和密码都不为空，则可以发送登录请求
		if($.trim(_this.$login_username.val()) != "" && $.trim(_this.$login_password.val()) != ""){

			_username = _this.$login_username.val();
			_password = _this.$login_password.val();

			$.post(_this.httpHost + "index.php?s=/user/login",{

				username: _username,
				password: _password

			},function(data){

				if(data.code == 100200){

					// 注册成功后，将注册用的用户名（或手机号）存到本地存储
					_this.localStorage.phoneNum = _this.$login_username.val();

					// 把uid存到本地存储
					_this.localStorage.uid = data.data.uid;

					_this.localStorage.hasLogin = 1;
					_this.localStorage.username = _username;
					_this.localStorage.password = _password;

					// 获取用户信息和擦肩信息
					_this.getUserInfoAndPassBy();

					_this.goPanel("home",function(){

						_this.$tabBtn_wrapper.show();
					});

					// 登录之初，就把用户的uid发送给ios
					if(_this.bridge){
						_this.bridge.send('{"type": 1 ,"desc": "userId", "content":'+ _this.localStorage.uid +'}',function(responseData){});
					}

				}else{


					_this.msgTip("账户名或密码有误！");
				}

			});
		}else{

			_this.msgTip("请检查手机号或密码！")
		}
	},


	// 退出登录
	signOut: function(){

		// 跳转到登录页面，并清空历史
		this.goPanel("login");
		$.afui.clearHistory();

		// 删除本地存储的 hasLogin 属性
		this.localStorage.removeItem("hasLogin");

		// 清空 密码 的输入框 （防止是第一次刚登录就退出后，跳转到登录页面后，密码输入框中还有密码在）
		this.$login_password.val("");

		// 提示退出登录成功
		this.msgTip("您已经退出登录！");
	},


	/**
	 * cajian_setting.js
	 **/
	// 修改头像
	changeHeadImg: function(){

	 	this.$personal_uid.val(this.localStorage.uid);
	 	this.$personal_headImgSubmit.trigger("click");
	},


	 // 上传头像
	uploadHeadImg: function($this){

	 	var _this = this;

	    $this.ajaxSubmit({

	     	beforeSubmit:function(){
	     		return true;
	     	},
	     	success:function(data){

	     		if(data.code == 100200){

	     			_this.$personal_list_headerImgNow.attr("src",_this.httpHost + data.data);
	     			_this.$cajian_user_header.attr("src",_this.httpHost + data.data);

	     			_this.msgTip("头像修改成功！");
	     			
	     		}else{
	     			_this.msgTip("头像修改失败！");
	     		}
	     	}
	    });
	    return false;
	},


	// 修改昵称
	changeNickName: function(){

		var _this = this,
			nickName = _this.$personal_nickName_input.val();

		_this.$personal_nickName_edit.hide();
		
		// 修改个人信息接口 --- 修改用户昵称
		$.post(_this.httpHost + "index.php?s=/uinfo/UpUserinfo",{
			uid: _this.localStorage.uid,
			name: nickName
		},function(data){

			if(data.code == 100200){

				_this.$cajian_user_name.text(nickName);
				_this.$personal_nickName_cont.text(nickName);

				_this.msgTip("昵称修改成功！");
			}

			console.log(data);
		});
	},


	// 修改性别
	changeSex: function($this){

		var _this = this,
			sex = $this.text();
			

		var sexCode = sex == "男" ? 1 : 2;

		_this.$personal_sex_item.removeClass("sex_selected");
		$this.addClass("sex_selected");

		// 修改性别
		$.post(_this.httpHost + "index.php?s=/uinfo/UpUserinfo",{
			uid: _this.localStorage.uid,
			sex: sexCode
		},function(data){

			console.log(data);
			
			if(data.code == 100200){

				_this.$personal_user_sex.text(sex);

				_this.$cajian_user_sex.attr("class",'header_user_sex sex' + sexCode);

				_this.msgTip("性别修改成功！");
			}
		});
	},


	// 修改个性签名
	changeSignature: function(){
		
		var _this = this;

		$.post(_this.httpHost + "index.php?s=/uinfo/UpUserinfo",{

			uid: _this.localStorage.uid,
			sign: _this.$personal_signature_input.val()

		},function(data){

			console.log(data);

			if(data.code == 100200){

				_this.$personal_signature_cont.text(_this.$personal_signature_input.val());
				_this.$personal_signature_edit.hide();

				_this.msgTip("修改签名成功！");
			}
		});
	},


	// 修改当前的登录状态，是否隐身
	changeStatus: function(){

		var _this = this;

		// 如果当前是隐身状态，则改为登录状态
		if(_this.localStorage.userStatus == 0){

			$.post(_this.httpHost + "index.php?s=/uinfo/UpUserinfo",{

				uid: _this.localStorage.uid,
				status: 1

			},function(data){

				if(data.code == 100200){

					_this.localStorage.userStatus == 1;

					_this.msgTip("当前为在线状态！");
				}

				console.log(data);

			});
		}else{

			$.post(_this.httpHost + "index.php?s=/uinfo/UpUserinfo",{

				uid: _this.localStorage.uid,
				status: 0

			},function(data){

				if(data.code == 100200){

					_this.localStorage.userStatus == 0;

					_this.msgTip("当前为隐身状态！");
				}

				console.log(data);

			});
		}
	},


	// 设置兴趣爱好
	setHobby: function(){

		var $label_checked = this.$personalLabel_inner.find(".label_checked"),
			len = $label_checked.length,
			labelStr = "",
			labelArray = [],
			_this = this;

		for(var i = 0; i < len; i++){

			var $label = $label_checked.eq(i).find(".label_text");

			labelArray.push($label.text());
		}

		labelStr = labelArray.join(",");

		console.log(labelStr);
		console.log(labelArray);

		$.post(_this.httpHost + "index.php?s=/uinfo/UpUserinfo",{
			uid: _this.localStorage.uid,
			tag: labelStr
		},function(data){

			if(data.code == 100200){
				
				// 设置成功，更新个人信息页面中的相关内容
				var sLabel = "";

				for(var i = 0, len = labelArray.length; i < len; i ++){

					sLabel += '<a class="personal_label" href="#personalLabel" data-transition="slide-right">'+ labelArray[i] +'</a>'
				}
				_this.$personal_labelWrapper.html(sLabel);

				_this.msgTip("兴趣爱好修改成功！")
			}

			console.log(data);
		});
	},


	// 添加个人标签（爱好）
	addPersonalLabel: function(){

		var value = $.trim(this.$personalLabel_add.val());

		if(value != ""){
			this.$personalLabel_labelBox.append('<a class="personal_label label_checked" href="javascript:;">'+ 
													'<span class="label_text">' + value + '</span>'+
													'<span class="label_checked_icon"></span>' +
												'</a>');

			this.$personalLabel_add.val("");
		}
	},


	/**
	 * cajian_personalPage.js
	 **/

	// 获取好友的所有文章 和 好友的基本信息
	getArtsAndInfo: function($this){

		var friendId = $this.attr("data-uid"),
			_this = this;

		console.log(friendId);
		

		// 获取好友的基本信息
		$.post(_this.httpHost + "index.php?s=/uinfo/Getuser",{

			uid: friendId

		},function(data){

			console.log(data);

			if(data.code == 100200){

				_this.$friend_header.attr("src",_this.httpHost + data.data.headimg);
				_this.$friend_name.text(data.data.name);
				_this.$friend_sex.attr("class","header_user_sex sex" + data.data.sex);

				_this.$friendPage_toTalking.attr({

					"data-friendId": friendId,
					"data-friendName": data.data.name

				});

				// 聊天页面好友头像
				_this.friendHeadImg = _this.httpHost + data.data.headimg;

			}

		});

		// 获取好友扔的东西
		_this.getFriendArts(friendId);	
	},


	// 点击主页的头像，跳转到 “我的个人主页”
	toMyPage: function($this){

		this.$friend_header.attr("src", $("#cajian_user_header").attr("src"));
		this.$friend_name.text($this.attr("data-username"));
		this.$friend_sex.attr("class", "header_user_sex sex" + $this.attr("data-usersex"));

		console.log(this.localStorage.uid);

		// 获取好友扔的东西
		this.getFriendArts(this.localStorage.uid);
	},


	// 好友页面 列表 如果好友扔的是链接，点击链接，跳转到相应的详情页
	doFriendPageList: function($this){

		var _this = this,
			$parent = $this.parent(),
			$this_seeTimes = $parent.find(".fp_operate_seeTimes"),
			seeTimes = parseInt($this_seeTimes.text()),

			$this_zanTimes = $parent.find(".fp_operate_zanTimes"),
			$this_zhuanfaTimes = $parent.find(".fp_operate_zhuanfaTimes");

		
		// 浏览量
		$.post(_this.httpHost + "index.php?s=/article/IncHit",{

			uid: _this.localStorage.uid,
			id: $this.attr("data-artId")

		},function(data){

			console.log(data);

			if(data.code == 100200){

				$this_seeTimes.text(seeTimes + 1);
			}

		});

		_this.$pickDetail_iframe.attr({

			"src": $this.attr("data-link"),
			"data-artId": $this.attr("data-artId"),
			"data-artHit": seeTimes,
			"data-artTransmit": $this.attr("data-artTransmit"),
			"data-artGood": $this.attr("data-artGood")

		});


		// 如果已经赞过
		if($parent.find(".zanBtn_wrapper").hasClass("haveZan")){

			_this.$pickDetail_footer_zanIcon.addClass("haveZan");	

		// 没有赞过
		}else{

			_this.$pickDetail_footer_zanIcon.removeClass("haveZan");			
		}


		_this.$pickDetail_footer_seeTimes.text(seeTimes + 1);
		_this.$pickDetail_footer_zanTimes.text($this_zanTimes.text());
		_this.$pickDetail_footer_zhuanTimes.text($this_zhuanfaTimes.text());
	},


	// 好友主页 列表中 “点赞” 按钮点击效果
	doZanTimes: function($this){

		var _this = this,
			$zanBtn_times = $this.find(".zanBtn_times");
			nZanTimes = parseInt($zanBtn_times.text());

		if(!$this.hasClass("haveZan")){

			$this.addClass("zoomIn haveZan");

			$.post(_this.httpHost + "index.php?s=/article/AddGood",{

				uid: _this.localStorage.uid,
				id: $this.parent().attr("data-artId")

			},function(data){

				console.log(data);

				if(data.code == 100200){

					nZanTimes++;
					$zanBtn_times.text(nZanTimes);

					_this.msgTip("点赞成功！");
				}
			});
		}
		// 去掉点赞
		else{

			$this.removeClass("zoomIn haveZan");

			$.post(_this.httpHost + "index.php?s=/article/DncGood",{

				uid: _this.localStorage.uid,
				id: $this.parent().attr("data-artId")

			},function(data){

				console.log(data);

				if(data.code == 100200){

					nZanTimes--;
					$zanBtn_times.text(nZanTimes);

					_this.msgTip("已取消赞！");
				}
			});
		}
	},


	// 转发
	doZhuanFa: function($this){

		this.$zhuanfa_mask.show();
		this.$zhuanfa_select.show();

		var $friendPage_list = $this.parents(".friendPage_list");

		if($friendPage_list.find(".friendPage_list_a").length > 0){

			$(".friendPage_list_a").removeClass("friendPage_list_a_checked");

			$friendPage_list.find(".friendPage_list_a").addClass("friendPage_list_a_checked");


			this.$zhuanfa_select.attr({

				"data-link": $friendPage_list.find(".friendPage_list_a").attr("data-link"),
				"data-title": $friendPage_list.find(".fp_list_title").text(),
				"data-artId": $friendPage_list.find(".friendPage_list_a").attr("data-artId")

			});
		}else{

			var $list_p = $friendPage_list.find(".friendPage_list_p");

			this.$zhuanfa_select.attr({

				"data-link": "",
				"data-title": $list_p.text(),
				"data-artId": $list_p.attr("data-artId")

			});
		}
	},


	// 转发给好友
	zhuanFaToFriend: function(){

		var friends = JSON.parse(localStorage.friendList),
			lenth = friends.length,
			sFriendList = "";

		for(var i = 0; i < lenth; i++){

			var friend = friends[i];
			if(friend){
				sFriendList += '<li class="zhuanFaToFriend_li">'+
									'<label class="zhuanFaToFriend_label">'+
										'<span class="zhuanFaToFriend_name">'+ friend.name +'</span>'+
										'<img class="zhuanFaToFriend_headerImg" src="'+ this.httpHost + friend.headimg +'"/>'+
										'<input class="zhuanFaToFriend_checkbox" type="checkbox">'+
									'</label>'+
								'</li>';
			}
		}

		this.$zhuanFaToFriend_ul.html(sFriendList);
	},


	// 转扔
	preZhuanReng: function(){

		this.$zhuanReng_link.text(this.$zhuanfa_select.attr("data-link"));
		this.$zhuanReng_title.val(this.$zhuanfa_select.attr("data-title"));

		this.$zhuanReng_title.focus();

		var zhuanfa_artId = this.$zhuanfa_select.attr("data-artId");

		if(zhuanfa_artId == $(".friendPage_list_a_checked").attr("data-artId")){

			this.isZhuanfa = true;
		}

		if(zhuanfa_artId == $(".dj_list_share_checked").attr("data-artId")){

			this.isZhuanfa = true;
		}

		if(zhuanfa_artId == this.$pickDetail_iframe.attr("data-artId")){

			this.isZhuanfa = true;
		}
	},


	// 触发砖扔
	doZhuanReng: function(){

		var _this = this;

		// 转发别人的东西
		if(_this.isZhuanfa == true){

			var artId = _this.$zhuanfa_select.attr("data-artId");

			// 转发文章接口
			$.post(_this.httpHost + "index.php?s=/article/TransArt",{

				uid: _this.localStorage.uid,
				aid: artId,
				title: _this.$zhuanReng_title.val()

			},function(data){

				console.log(data);

				_this.$zhuanReng_link.text("");
				_this.$zhuanReng_title.val("");

				if(data.code == 100200){

					_this.msgTip("转扔成功！");

					_this.$zhuanReng_link.val("");
					_this.$zhuanReng_title.val("");

					$.afui.goBack();

				}
			});
			
		}

		_this.isZhuanfa = false;
	},


	// 隐藏转发选择
	hideZhuanfaSelect: function (){
		this.$zhuanfa_mask.hide();
		this.$zhuanfa_select.hide();
	},



	/**
	 * cajian_find.js
	 **/

	// 捡文章
	pickArt: function(){

		var _this = this;

		console.log(JSON.stringify([20]));
		console.log(_this.localStorage.uid);

		$.post(_this.httpHost + "index.php?s=/article/PickArt",{

			uid: _this.localStorage.uid,
			art: JSON.stringify([1,2,3,4,5,6,7,8,9,20,19,10,21])

		},function(data){

			console.log(data);

			if(data.code == 100200){

				var pickArts = data.data,
					len = pickArts.length,
					sPickArt = "";

				for(var i = 0; i < len; i++){

					var art = pickArts[i],
						today = new Date(),
						thatDay = new Date(art.timeline * 1000),
						today_year = today.getFullYear(),
						today_month = today.getMonth() + 1,
						today_day = today.getDate(),
						thatDay_year = thatDay.getFullYear(),
						thatDay_month = thatDay.getMonth() + 1,
						thatDay_day = thatDay.getDate(),
						showDate = "";

					if(today_year == thatDay_year && today_month == thatDay_month && today_day == thatDay_day){

						showDate = "今天";

					}else{

						thatDay_month = thatDay_month < 10 ? "0" + thatDay_month : thatDay_month;
						thatDay_day = thatDay_day < 10 ? "0" + thatDay_day : thatDay_day;

						showDate = thatDay_month + "月" + thatDay_day + "日";

					}

					// 纯文本形式的
					if($.trim(art.desc) == ""){

						sPickArt += '<div class="discover_jian_list flex_box_wrapper_h">'+
										'<a class="discover_jian_list_headerWrapper flex_box_fixed">'+
											'<img class="discover_jian_list_header" src="'+ _this.httpHost + art.headimg +'"/>'+
										'</a>'+
										'<div class="discover_jian_list_cont flex_box_auto">'+
											'<div class="dj_list_name">'+ art.name +'</div>'+
											'<p class="dj_list_share dj_list_share_text" data-link="'+ art.desc +'" data-artId="'+ art.id +'" data-artGood="'+ art.good +'" data-artHit="'+art.transmit+'" data-artHit="'+ art.hit +'">'+
												art.title +
											'</p>'+
											'<div class="dj_list_bottom clearfix yellow">'+
												'<span class="dj_list_dateTiem f_l">'+ showDate +'</span>'+
												'<div class="dj_list_operate f_r clearfix">'+
													'<div class="dj_operate_btnWrapper dj_zanBtn_wrapper">'+
														'<a class="dj_operate_btn dj_operate_zanBtn" href="javascript:;">'+
															'<img class="dj_operate_icon" src="img/zan_icon.png"/>'+
														'</a>'+
														'<span class="dj_operate_btnTimes dj_operate_zanTimes zanBtn_times yellow">'+ art.good +'</span>'+
													'</div>'+
													'<div class="dj_operate_btnWrapper">'+
														'<a class="dj_operate_btn" href="javascript:;">'+
															'<img class="dj_operate_icon" src="img/liulan_icon.png"/>'+
														'</a>'+
														'<span class="dj_operate_btnTimes dj_operate_seeTimes yellow">'+ art.hit +'</span>'+
													'</div>'+
												'</div>'+
											'</div>'+
										'</div>'+
									'</div>';
					}
					// 链接形式
					else{
						sPickArt += '<div class="discover_jian_list flex_box_wrapper_h">'+
										'<a class="discover_jian_list_headerWrapper flex_box_fixed">'+
											'<img class="discover_jian_list_header" src="'+ _this.httpHost + art.headimg +'"/>'+
										'</a>'+
										'<div class="discover_jian_list_cont flex_box_auto">'+
											'<div class="dj_list_name">'+ art.name +'</div>'+
											'<a class="dj_list_share" href="#pickDetail" data-transition="slide-right" data-link="'+ art.desc +'" data-artId="'+ art.id +'" data-artGood="'+ art.good +'" data-artTransmit="'+art.transmit+'" data-artHit="'+ art.hit +'" data-title="'+ art.title +'">'+
												'<img class="dj_list_share_img" src="img/user_header.jpg"/>'+
												'<span>'+ art.title +'</span>'+
											'</a>'+
											'<div class="dj_list_bottom clearfix yellow">'+
												'<span class="dj_list_dateTiem f_l">'+ showDate +'</span>'+
												'<div class="dj_list_operate f_r clearfix">'+
													'<div class="dj_operate_btnWrapper  dj_zhuanfaBtn_wrapper">'+
														'<a class="dj_operate_btn" href="javascript:;">'+
															'<img class="dj_operate_icon" src="img/zhuanfa_icon.png"/>'+
														'</a>'+
														'<span class="dj_operate_btnTimes dj_operate_zhuanfaTimes yellow">'+ art.transmit +'</span>'+
													'</div>'+
													'<div class="dj_operate_btnWrapper dj_zanBtn_wrapper">'+
														'<a class="dj_operate_btn dj_operate_zanBtn" href="javascript:;">'+
															'<img class="dj_operate_icon" src="img/zan_icon.png"/>'+
														'</a>'+
														'<span class="dj_operate_btnTimes dj_operate_zanTimes zanBtn_times yellow">'+ art.good +'</span>'+
													'</div>'+
													'<div class="dj_operate_btnWrapper">'+
														'<a class="dj_operate_btn" href="javascript:;">'+
															'<img class="dj_operate_icon" src="img/liulan_icon.png"/>'+
														'</a>'+
														'<span class="dj_operate_btnTimes dj_operate_seeTimes yellow">'+ art.hit +'</span>'+
													'</div>'+
												'</div>'+
											'</div>'+
										'</div>'+
									'</div>';
					}
				}

				_this.$discover_jian.html(sPickArt);
			}

		});
	},


	// 捡到的页面进入到详情页
	pickToDetail: function($this){

		var _this = this;

		// 如果是纯文本的，直接返回
		if($this.hasClass("dj_list_share_text")){
			return;
		}

		var	$parent = $this.parents(".discover_jian_list"),
			$this_seeTimes = $parent.find(".dj_operate_seeTimes"),
			seeTimes = parseInt($this_seeTimes.text()),

			$this_zanTimes = $parent.find(".dj_operate_zanTimes"),
			$this_zhuanfaTimes = $parent.find(".dj_operate_zhuanfaTimes");

		
		// 浏览量
		$.post(_this.httpHost + "index.php?s=/article/IncHit",{

			uid: _this.localStorage.uid,
			id: $this.attr("data-artId")

		},function(data){

			console.log(data);

			if(data.code == 100200){

				$this_seeTimes.text(seeTimes + 1);
			}

		});

		_this.$pickDetail_iframe.attr({

			"src": $this.attr("data-link"),
			"data-artId": $this.attr("data-artId"),
			"data-artHit": seeTimes,
			"data-artTransmit": $this.attr("data-artTransmit"),
			"data-artGood": $this.attr("data-artGood"),
			"data-title": $this.attr("data-title")

		});


		// 如果已经赞过
		if($parent.find(".dj_operate_zanTimes").hasClass("haveZan")){

			_this.$pickDetail_footer_zanIcon.addClass("haveZan");	

		// 没有赞过
		}else{

			_this.$pickDetail_footer_zanIcon.removeClass("haveZan");			
		}


		_this.$pickDetail_footer_seeTimes.text(seeTimes + 1);
		_this.$pickDetail_footer_zanTimes.text($this_zanTimes.text());
		_this.$pickDetail_footer_zhuanTimes.text($this_zhuanfaTimes.text());
	},


	// 扔东西，扔给服务器,服务器返回文章id，然后把文章id传给ios，由ios传给蓝牙设备
	sendArt: function(){

		var _this = this;

		// 发送到服务器
		$.post(_this.httpHost + "index.php?s=/article/SendArt",{

			uid: _this.localStorage.uid,
			title: $.trim(_this.$discover_reng_title.val()),
			// desc 为链接
			desc: $.trim(_this.$discover_reng_link.val())

		},function(data){

			if(data.code == 100200){

				// 服务器返回的id
				var artId = data.data;

				// 调用第三方插件方法，webViewJavascriptBridge，把返回的id传给ios
				if(_this.bridge){
					_this.bridge.send('{"type": 1,"desc":"artId", "content": '+ artId +'}', function(responseData) {
						// _this.msgTip('JS得到响应：' + JSON.stringify(responseData));
						if(responseData.status == 1){
							_this.msgTip("ok");
						}
						if(responseData.status == 0){
							_this.msgTip("failed");
						}
						// 发送成功后返回发现页面

					});
				}


				_this.$discover_reng_title.val("");
				_this.$discover_reng_link.val("");

				$.afui.goBack();
				
			}

			console.log(data);
			_this.msgTip(data.message);

		});
	},


	// 捡到的东西的点赞
	doPickZan: function($this){

		var _this = this,
			$zanBtn_times = $this.find(".zanBtn_times"),
			nZanTimes = parseInt($zanBtn_times.text()),
			$dj_list_share = $this.parents(".discover_jian_list_cont").find(".dj_list_share");

		if(!$this.hasClass("haveZan")){

			$this.addClass("zoomIn haveZan");

			$.post(_this.httpHost + "index.php?s=/article/AddGood",{

				uid: _this.localStorage.uid,
				id: $dj_list_share.attr("data-artId")

			},function(data){

				console.log(data);

				if(data.code == 100200){

					nZanTimes++;
					$zanBtn_times.text(nZanTimes);

					_this.msgTip("点赞成功！");
				}
			});
		}
		// 去掉点赞
		else{

			$this.removeClass("zoomIn haveZan");

			$.post(_this.httpHost + "index.php?s=/article/DncGood",{

				uid: _this.localStorage.uid,
				id: $dj_list_share.attr("data-artId")

			},function(data){

				console.log(data);

				if(data.code == 100200){

					nZanTimes--;
					$zanBtn_times.text(nZanTimes);

					_this.msgTip("已取消赞！");
				}
			});
		}
	},



	// 捡到的东西转发
	zhuanFaPick: function($this){

		this.$zhuanfa_mask.show();
		this.$zhuanfa_select.show();

		var $dj_list_share = $this.parents(".discover_jian_list_cont").find(".dj_list_share");

		if($dj_list_share.attr("data-link")){

			$(".dj_list_share").removeClass("dj_list_share_checked");

			$dj_list_share.addClass("dj_list_share_checked");


			this.$zhuanfa_select.attr({

				"data-link": $dj_list_share.attr("data-link"),
				"data-title": $dj_list_share.find("span").text(),
				"data-artId": $dj_list_share.attr("data-artId")

			});

		}else{

			this.$zhuanfa_select.attr({

				"data-link": "",
				"data-title": $dj_list_share.text(),
				"data-artId": $dj_list_share.attr("data-artId")

			});
		}
	},



	/**
	 * cajian_pickDetail.js
	 **/

	// 详情页底部 “点赞” 按钮效果
	pickDetailZan: function(){

		var _this = this,
			zanTimes = parseInt(_this.$pickDetail_footer_zanTimes.text()),
			artId = _this.$pickDetail_iframe.attr("data-artId");

		if(!_this.$pickDetail_footer_zanIcon.hasClass("haveZan")) {

			_this.$pickDetail_footer_zanIcon.addClass("zoomIn haveZan");

			$.post(_this.httpHost + "index.php?s=/article/AddGood",{

				uid: _this.localStorage.uid,
				id: artId

			},function(data){

				console.log(data);
				
				if(data.code == 100200){
					
					_this.$pickDetail_footer_zanTimes.text(zanTimes + 1);

					_this.msgTip("点赞成功！");

					// 更新文章列表中赞的数量
					var $parent = $('a[data-artId="'+ artId +'"]').parent();

					$parent.find(".fp_operate_zanTimes").text(zanTimes + 1);

					$parent.find(".zanBtn_wrapper").attr("class","fp_operate_btnWrapper zanBtn_wrapper haveZan");

				}
			});	
		}

		// 取消点赞 
		else{

			$.post(_this.httpHost + "index.php?s=/article/DncGood",{

				uid: _this.localStorage.uid,
				id: _this.$pickDetail_iframe.attr("data-artId")

			},function(data){

				if(data.code == 100200){

					_this.$pickDetail_footer_zanIcon.removeClass("zoomIn haveZan");
					_this.$pickDetail_footer_zanTimes.text(zanTimes - 1);

					_this.msgTip("已取消赞！");

					// 更新文章列表中赞的数量
					var $parent = $('a[data-artId="'+ artId +'"]').parent();

					$parent.find(".fp_operate_zanTimes").text(zanTimes - 1);

					$parent.find(".zanBtn_wrapper").attr("class","fp_operate_btnWrapper zanBtn_wrapper");
				}
			});	
		}

	},


	/**
	 * cajian_friend.js
	 **/
	// 发送好友请求（请求添加好友）
	requestAddFriend: function($this){

		var _this = this;

		$.post(_this.httpHost + "index.php?s=/uinfo/SendFriend",{

			uid: _this.localStorage.uid,
			// 要添加的用户的id
			tuid: $this.attr("data-uid"), 
			message: _this.$req_friendMsg.val()

		},function(data){

			console.log(data);

			if(data.code == 100200){

				_this.msgTip(data.message);
				$.afui.goBack();
			}
		});
	},


	// 好友请求处理----同意
	agreeAddFriend: function(){

		var _this = this;

		console.log(_this.$req_friend_aid.val());

		$.post(_this.httpHost + "index.php?s=/uinfo/AgreeFriend",{

			uid: _this.localStorage.uid,
			aid: _this.$req_friend_aid.val()

		},function(data){

			if(data.code == 100200){

			}

			_this.msgTip(data.message);
		});
	},


	// 好友请求处理----拒绝
	refuseAddFriend: function(){

		var _this = this;

		$.post(_this.httpHost + "index.php?s=/uinfo/DownFriend",{

			uid: _this.localStorage.uid,
			aid: _this.$req_friend_aid.val()

		},function(data){

			if(data.code == 100200){


			}

			_this.msgTip(data.message);
		});
	},


	// 点击tab的 消息 项，获取 好友请求信息 和 好友聊天信息
	getRequestAndMsg: function(){

		var sReqFriend = "",
			_this = this;
		
		// 获取好友请求消息
		$.post(_this.httpHost + "index.php?s=/uinfo/GetSfriend",{

			uid: _this.localStorage.uid

		},function(data){

			console.log(data);

			if(data.code == 100200){

				var aRequests = data.data;

				for(var i = 0, len = aRequests.length; i < len; i++){

					var request = aRequests[i];

					if(request.status != 0){
						continue;
					}

					var msg = request.message || "我是 "+request.name;

					sReqFriend += '<li class="message_list">'+
									'<a class="message_list_a message_list_requestFriend" href="javascript:;" data-aid="'+ request.id +'">'+
										'<div class="message_list_userHeader">'+
											'<img class="message_list_headerImg" src="'+ _this.httpHost + request.headimg  +'"/>'+
										'</div>'+
										'<div class="message_list_userInfo">'+
											'<span class="msg_req_name yellow">'+ request.name +'</span> 请求加为好友'+
											'<p class="msg_req_message">'+ msg +'</p>'+
										'</div>'+
										'<div class="message_list_time">'+ timestapToDate("MM-dd<br/>h:m",request.timeline) +'</div>'+
									'</a>'+
								'</li>';
				}

				_this.$message_ul.html(sReqFriend);
			}
		});

		
		// 获取好友的聊天消息

	},


	// 删除好友
	deleteFriend: function($this){

		var _this = this;

		if(confirm("确定要删除该好友吗？")){

			$.post(_this.httpHost + "index.php?s=/uinfo/DelFriedn",{

				uid: _this.localStorage.uid,
				fuid: $this.attr("data-uid")

			},function(data){

				console.log(data);

				if(data.code == 100200){

					_this.msgTip("删除好友成功！");
				}
			});
		}
	},


	// 搜索好友
	searchFriend: function(){

		var _this = this,
			keywords = $.trim(_this.$myFriend_search_cont.val());

		if(keywords == ""){
			_this.$myFriend_searchResult.html("");
			return;
		}

		$.post(_this.httpHost + "index.php?s=/uinfo/GetFriend",{

			uid: _this.localStorage.uid,
			name: keywords

		},function(data){

			console.log(data);

			if(data.code == 100200){

				var sResult = "";

				for(var i = 0, len = data.data.length; i < len; i++){

					var friend = data.data[i];

					if(friend){
						sResult += '<li class="myFriend_list clearfix">'+
										'<a class="myFriend_list_a" href="javascript:;" data-uid="'+ friend.uid +'">'+
											'<img class="myFriend_list_headerImg" src="' + _this.httpHost + friend.headimg + '"/>'+
											'<p class="myFriend_list_name">'+ friend.name +'</p>'+
										'</a>'+
									'</li>';
					}
				}

				console.log(sResult);
				_this.$myFriend_searchResult.html(sResult);
			}
		});
	},


	/**
	 * cajian_talking.js
	 **/

	/**
	 *	@param friendUid 要聊天的人的uid
	 *	@param $this 操作dom元素的 $(this)
	 *	@param friendName 好友名称
	 */
	toTalking: function(friendUid,friendName,$this){

		// var ws = new WebSocket("ws://103.238.226.172:8080");
		var ws = new WebSocket("ws://115.159.103.190:8080");

		var _this = this,
			// friendUid = $this.attr("data-friendId"),
			isConnect = false;

		// 清空聊天面板
		_this.$talking_panel.html("");


		// _this.$talking_title.text($this.attr("data-friendName"));
		_this.$talking_title.text(friendName);


		// 隐藏tab按钮
		// $("#")

		// 打开连接
		ws.onopen = function(evt){
			_this.msgTip("连接成功！");

			console.log("连接成功！");

			// 打开连接时，先传uid
			ws.send(JSON.stringify({
				uid: _this.localStorage.uid
			}));

			isConnect = true;
		};

		// 接受消息
		ws.onmessage = function(evt){

			console.log(evt);

			// 收到的消息
			if(typeof evt.data == "string" && evt.data != "0" && evt.data != "-1"){

				var messages = JSON.parse(evt.data),
					mLen = messages.length;

				console.log(messages);	

				for(var i = 0; i < mLen; i++){

					var msg = messages[i];

					// msg.message 可能是简单字符串和json字符串，如果是简单字符串调用JSON.parse()
					// 会报错，所以放在异常处理里防止报错
					try{
						var isTrueR = JSON.parse(msg.message).isTrue;
					}catch(e){

					}

					console.log(msg);

					fnAddMsg(msg.message,"Recive",isTrueR);

					ws.send(JSON.stringify({
						mid: msg.id,
						status: 1
					}));
				}
			}

			// 发送成功
			if(evt.data == 0){
				console.log("发送成功！");
			}

			// 发送失败
			if(evt.data == -1){
				console.log("发送失败！");
			}
			

		};

		// 发生错误
		ws.onerror = function(evt){
			_this.msgTip(evt.data);
            alert(evt);
			console.log(evt);
		};

		// 关闭连接
		// ws.onclose = function(evt){
		// 	_this.msgTip("连接已关闭！");
		// 	console.log(evt);
		// 	isConnect = false;
		// }

		/**
		 * @param isTrue 发送的消息是否是“真心话”
		 **/
		function fnSendMsg(msg,isTrue){

			// if(isConnect){

				ws.send(JSON.stringify({
					message: msg,
					tuid: friendUid,
					fuid: _this.localStorage.uid,
					status: 1
				}));

				console.log({
					message: msg,
					tuid: friendUid,
					fuid: _this.localStorage.uid,
					status: 1
				});

				_this.$talking_msgToSend.text("");
				_this.$send_btn.hide();
				_this.$add_btn.show();

				fnAddMsg(msg,"Send",isTrue);
			// }

			// else{
			// 	_this.msgTip("连接已关闭！请重新打开聊天窗口!");
			// 	console.log("连接已关闭！请重新打开聊天窗口!");
			// 	console.log(isConnect);
			// }
		}

		/**
		 *  @param msg 接收/发送 的消息
		 *	@param type "Recive","Send" 该消息是接收的还是发送的
		 *	@param isTrue 该消息是不是真心话
		 **/
		function fnAddMsg(msg,type,isTrue){

			var str = "",
				headimg = "";

			switch(type){
				case "Send":
					headimg = _this.httpHost + JSON.parse(_this.localStorage.userInfo).headimg;
					break;
				case "Recive":
					headimg = _this.friendHeadImg;
					break;
			}

			// 如果是真心话
			if(isTrue){

				var msgObj = JSON.parse(msg),
					answer = msgObj.answer,
					length = answer.length,
					answerStr = "";

				for(var i = 0; i < length; i++){

					var answerNow = answer[i].answer || answer[i];
					answerStr += '<a class="true_answer_btn" href="javascript:;">'+ answerNow +'</a>';
				}

				str = '<div class="talking_msgBox">'+
							'<p class="ture_question">'+ msgObj.query +'</p>'+
							'<div class="true_answer_wrapper">'+ answerStr +'</div>'+
						'</div>';

			}
			// 如果不是真心话
			else{
			 	str = msg.replace(_this.rFace,function(face){

					var len = face.length;
					return '<span class="face ' + face.substring(1,len-1) + '"></span>';
				});

				str = '<div class="talking_msgBox">'+ str +'</div>';
			}
			
			_this.$talking_panel.append('<div class="talking_msg'+ type +' clearfix">'+
											'<img class="talking_header" src="'+ headimg +'"/>'+ str +
										'</div>');

			_this.$talking_panel.stop().animate({"scrollTop": "+=600px"},10);
			_this.$talking_msgToSend.val("");
		}



		// 获取的随机真心话
		function sendRandomTrue(){

			$.post(_this.httpHost + "index.php?s=/uinfo/GetQuery",{

				uid: _this.localStorage.uid

			},function(data){

				console.log(data);

				if(data.code == 100200){

					// 给随机真心话添加一个标示符，是否是真心话
					var msgData = data.data;
					msgData.isTrue = true;

					fnSendMsg(JSON.stringify(msgData),true);
				}
			});
		}


		// 发送自定义真心话
		function sendCustomTrue(){

			var $answers = $(".custom_true_answer"),
				$custom_true_question = $("#custom_true_question"),
				length = $answers.length,
				answerStr = "",
				answerCount = 0,
				aAnswer = [],
				customTrueStr = "",
				customTrueQuery = $.trim($custom_true_question.val());

			if(customTrueQuery == ""){

				_this.msgTip("请输入问题！");
				return;
			}



			for(var i = 0; i < length; i++){

				var answer = $.trim($answers.eq(i).val());

				if(answer != ""){

					answerCount++;
					aAnswer.push(answer);
				}
				
			}

			console.log(answerCount);

			if(answerCount < 2){
				_this.msgTip("请至少输入两个答案！");
				return;
			}

			var customTrueObj = {
				query: customTrueQuery,
				answer: aAnswer,
				isTrue: true
			};

			console.log(customTrueStr);

			fnSendMsg(JSON.stringify(customTrueObj),true);




			// 把自定义的真心话传到服务器保存
			$.post(_this.httpHost + "index.php?s=/uinfo/InsQuery",{

				uid: _this.localStorage.uid,
				query: customTrueQuery,
				answer: JSON.stringify(aAnswer)

			},function(data){

				$answers.val("");
				$custom_true_question.val("");

				console.log(JSON.stringify(aAnswer));
				console.log(data);

				if(data.code == 100200){

					console.log("真心话保存成功！");
				}

			});


			$.afui.goBack();

		}



		// 回答真心话
		function answerTrue(answer){
			fnSendMsg(answer);
		}


		// 关闭连接
		$("#talking_back").on("click",function(){
			ws.close();
			_this.msgTip("链接已经关闭！");
			console.log("链接已经关闭！");
			isConnect = false;
			_this.$tabBtn_wrapper.show();
		});


		// 发送消息
		_this.$send_btn.on("click",function(){

			fnSendMsg(_this.$talking_msgToSend.val());
		});


		// 发送随机真心话
		_this.$random_true.on("click",function(){
			
			sendRandomTrue();
		});


		// 发送自定义真心话
		$("#send_true_words").on("click",function(){

			sendCustomTrue();
		});


		// 回答真心话
		_this.$talking_panel.on("click",".true_answer_btn",function(){

			var $this = $(this),
				$parent = $this.parents(".talking_msgBox");

			if(!$parent.hasClass("answered")){

				answerTrue($this.text());
				$parent.addClass("answered");
			}
		});
	},

	// 显示发送按钮
	showSend: function (){

		if($.trim(this.$talking_msgToSend.val()) != "") {

			this.$add_btn.hide();
			this.$send_btn.show();
		}
		else {
			this.$add_btn.show();
			this.$send_btn.hide();
		}
	},


	// 显示表情面板 
	showFaceAndTrue: function(){

		this.$talking_panel.css("bottom","190px");
		this.$talking_bottom.height(185);
		this.$talking_panel.stop().animate({"scrollTop": "+=400px"},10);
	},


	// 添加自定义真心话答案
	addCustomTureAnswer: function(){

		var $answerWrapper = this.$custom_true_inner.find(".custom_true_answerWrapper"),
			len = $answerWrapper.length,
			now;

		if(len < 4) {

			switch(len){
				case 2:
					now = "三";
					break;
				case 3:
					now = "四";
					break;
			}

			this.$custom_true_inner.append('<div class="custom_true_answerWrapper">'+
										'<h4 class="custom_true_subTitle">答案' + now + '</h4>'+
										'<input class="custom_true_answer" type="text"/>'+
									'</div>');

		}
		else{

			this.msgTip("最多只能提供四个答案！");
		}
	},


	// 切换表情面板
	changeFacePanel: function(e){

		e.preventDefault();

		var startX = e.touches[0].clientX,
			disX = 0,
			_this = this;


		_this.$doc.on("touchmove",function(e){

			var e = e.touches[0],
				nowX = e.clientX;

			disX = nowX - startX;

			_this.$face_panel_inner.css({
				"webkitTransition":"all 0ms ease-out",
				"transition": "all 0ms ease-out",
				"webkitTransform": "translateX(" + (_this.translateLeft + (disX * 0.7)) + "px)",
				"transform": "translateX(" + (_this.translateLeft + (disX * 0.7)) + "px)"
			});


		});


		_this.$doc.on("touchend",function(){

			_this.$face_panel_inner.css({
				"webkitTransform": "translateX(0px)",
				"transform": "translateX(0px)"
			});

			_this.$face_panel_inner.css({
				"webkitTransition":"all 200ms ease-out",
				"transition": "all 200ms ease-out"
			});

			if(disX > 70 && _this.panelIndex > 0) {

				_this.panelIndex--;
				_this.$face_panel_inner.css({
					"-webkit-transform": "translateX(" + (-_this.panelIndex * _this.winW) + "px)",
					"transform": "translateX(" + (-_this.panelIndex * _this.winW) + "px)"
				})

				_this.translateLeft+= _this.winW;
				
			}
			else if(disX < -70 && _this.panelIndex < 3){

				_this.panelIndex++;
				_this.$face_panel_inner.css({
					"-webkit-transform": "translateX(" + (-_this.panelIndex * _this.winW) + "px)",
					"transform": "translateX(" + (-_this.panelIndex * _this.winW) + "px)"
				});

				_this.translateLeft-= _this.winW;

			}
			else{

				_this.$face_panel_inner.css({
					"webkitTransform": "translateX(" + _this.translateLeft + "px)",
					"transform": "translateX(" + _this.translateLeft + "px)"
				});

			}


			_this.$face_label.removeClass("face_label_on");
			_this.$face_label.eq(_this.panelIndex).addClass("face_label_on");

			// 移除touchend事件的监听程序，防止下一次执行touchend事件时，多次执行touchend事件的监听程序
			_this.$doc.off("touchmove");
			_this.$doc.off("touchend");

		});
	}


	/**
	 * js、ios通信
	 **/
	// connectBridge: function(callback){
	// 	if (window.WebViewJavascriptBridge) {
	// 		callback(WebViewJavascriptBridge)
	// 	} else {
	// 		document.addEventListener('WebViewJavascriptBridgeReady', function() {
	// 			callback(WebViewJavascriptBridge)
	// 		}, false)
	// 	}
	// }

}



/**
 * 时间戳转换成指定格式的时间
 *
 * @param format {string} 要转换成的时间的格式
 * @param timestap {string} 待转换的时间戳
 *
 * @title timestapToDate("MM-dd<br/>h:m","1438836041");
 * 
 * 返回 08-06
 * 		12:40
 *
 **/
function timestapToDate(format,timestap) {

    var dateTime = new Date(timestap * 1000);

    var date = {
      		"M+": dateTime.getMonth() + 1,
      		"d+": dateTime.getDate(),
      		"h+": dateTime.getHours(),
      		"m+": dateTime.getMinutes(),
      		"s+": dateTime.getSeconds(),
      		"q+": Math.floor((dateTime.getMonth() + 3) / 3),
      		"S+": dateTime.getMilliseconds()
        };

   if (/(y+)/i.test(format)) {
          format = format.replace(RegExp.$1, (dateTime.getFullYear() + '').substr(4 - RegExp.$1.length));
   }


   for (var k in date) {

          if (new RegExp("(" + k + ")").test(format)) {

                 format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? 

                 	date[k] : 

                 	("00" + date[k]).substr(("" + date[k]).length));
          }
   }

   return format;
}




