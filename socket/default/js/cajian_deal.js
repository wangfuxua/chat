$.afui.ready(function(){

	var cajian = new Cajian();

	/**
	 *	接到ios传过来的数据
	 *	
	 *	@key type 发送/接受数据的类型 0：命令，1：传数据
	 *	@key desc 发送/接受数据的命令名称或数据的描述
	 *	@key content 发送/接受数据的命令参数或数据的值
	 *
	 *	JSON数据格式 {type:0, desc: erweima, content: data}
	 */
	if(cajian.bridge){
		cajian.bridge.init(function(message, responseCallback) {
			// var msg = JSON.stringify(message);
			// var msg = message;
			// cajian.msgTip('JS收到消息' + msg,5000);
			// var data = { 'Javascript Responds':'Wee!' };
			// var sData = JSON.stringify(data);
			// cajian.msgTip('JS做出响应' + sData);
			var msg = JSON.parse(message),
				msgDesc = msg.desc,
				msgCont = msg.content;

			switch(msgDesc){

				// 扫描二维码返回的数据
				case "erweima":
					// cajian.msgTip("二维码",4000);
					if(msgCont){
						cajian.erweimaData = msgCont;
						localStorage.erweimaData = msgCont;

						cajian.$regi_bind_list.text("mac地址：" + msgCont);
						cajian.$regi_search.hide();
						cajian.$regi_bind.show();
					}
					break;

				// 搜索到我的设备
				case "searchMydevice":
					if(msgCont == 1){

						cajian.msgTip("已搜索到我的设备！");

						cajian.$regi_bind.hide();
						cajian.$regi_info.show();
					}
					if(msgCont == 0){
						cajian.msgTip("未找到我的设备！请重试！");
					}
					break;

				// 收到的与我擦肩用户
				case "userId":
					cajian.msgTip("擦肩用户",4000);
					break;

				// 捡到的文章
				case "artId":
					cajian.msgTip("捡到文章",4000);
					break;

			}

			// cajian.erweimaData = msg;
			// localStorage.erweimaData = msg;

			// 如果有回调函数，就调用
			if(responseCallback){
				responseCallback(data);
			}
		});
	}
	

	
	// 蓝牙设备的macId
	localStorage.macId = null;


	cajian.$tabMask.on("click",function(){
		cajian.fCloseTabBtn();
	});
	
	cajian.$tabBtn_item.on("click",function(){
		cajian.fCloseTabBtn();
	});

	// tabBtn_menu
	cajian.$tabBtn_menu.on("click",function(){
		cajian.switchTabMenu();
	});



	// 蓝牙开关命令
	// $("#tabBtn_bluetooth").on("click",function(){

	// 	cajian.bridge.send('{"type": "bluetooth", "content": "open"}',function(responseData){

	// 	});
	// });


	// 搜索我的设备
	cajian.$regi_bind_SearchBtn.on("click",function(){

		cajian.bridge.send('{"type": 0,"desc": "searchMydevice"}',function(responseData){

		});
	});


	/*******************************
	 * 下拉刷新
	 */
	// 擦肩列表下拉刷新
	var $cajianContainer = $("#cajianContainer"),
		$cajianList = $cajianContainer.find(".cajianList");
	
	var cajian_scroll = cScroll({

		container: "cajianContainer",

		downRefresh:function(){

			$cajianContainer.parents(".panel").find(".custom_header_title").prepend('<span class=""></span>')

			setTimeout(function () {

				$cajianList.prepend('<li class="cajianList_li relative">'+
										'<a class="cajianList_a" href="#notFriend" data-transition="slide-right">'+
											'<img class="cajianList_headerImg" src="img/user_header.jpg">'+
											'<div class="cajianList_name">'+
												'<p class="cajianList_nickName">大卫·贝克汉姆</p>'+
												'<p class="cajianList_times">3次</p>'+
											'</div>'+
										'</a>'+
										'<a class="cajianList_add icon_img_wrapper btnRequestFriend" href="#requestFriend" data-transition="slide-right">'+
											'<img class="icon_img" src="img/add_icon.png"/>'+
										'</a>'+
									'</li>');
				
				cajian_scroll.refresh();		//数据加载完成后，调用界面更新方法   Remember to refresh when contents are loaded (ie: on ajax completion)
			}, 1000);	// <-- Simulate network congestion, remove setTimeout from production!
		}

	});


	// 擦肩列表处理
	$cajianList.on("click",".cajianList_a",function(){
		
		cajian.doCajianList($(this));
	});

	// 擦肩列表 msg icon 处理
	$cajianList.on("click",".cajianList_msg",function(){

		var $this = $(this);

		cajian.friendHeadImg = $this.parent().find(".cajianList_friendPage").attr("data-headimg");
		cajian.toTalking($this.attr("data-uid"),$this.attr("data-username"),$this);
		cajian.$tabBtn_wrapper.hide();

		console.log($this.attr("data-username"));
		console.log($this.attr("data-uid"));
		console.log($this.html());
	});

	cajian.$notFriend_talkingBtn.on("click",function(){

		var $this = $(this);
		cajian.toTalking($this.attr("data-uid"),$this.attr("data-username"),$this);
		cajian.$tabBtn_wrapper.hide();
	});



	// 请求擦肩列表中的人为好友
	$cajianList.on("click",".cajianList_add",function(){
		cajian.addCajianToFriend($(this));
	});

	$("#notFriend_addBtn").on("click",function(){
		cajian.addCajianToFriend($(this));
	});

	
	// 

	cajian.$notFriend_reng_wrapper.on("click",".notFriend_reng_link",function(){
		cajian.showPickDetail($(this));
	});




	/************
	 *
	 * cajian_loginReg.js
	 *
	 ***/
	// 扫描二维码
	cajian.$regi_search_btn.on("click",function(){

		cajian.bridge.send('{"type": 0,"desc": "erweima"}',function(responseData){});
	});


	// 检验是否登录过,如果登陆过，直接后台自动登录
	if(localStorage.hasLogin === "1") {

		$.post(cajian.httpHost + "index.php?s=/user/login",{

			username: cajian.localStorage.username,
			password: cajian.localStorage.password

		},function(data){

			if(data.code == 100200){

				// 获取用户信息和擦肩信息
				cajian.getUserInfoAndPassBy();

				// 登录之初，就把用户的uid发送给ios
				if(cajian.bridge){
					cajian.bridge.send('{"type": 1,"desc": "userId", "content":'+ cajian.localStorage.uid +'}',function(responseData){});
				}
			}
		});

		
		cajian.goPanel("home",function(){

			cajian.$tabBtn_wrapper.show();
		});
	}

	// 验证手机号
	cajian.$regi_phoneNum.on("input",function(){
		cajian.checkPhoneNumber("input");
	}).on("blur",function(){
		cajian.checkPhoneNumber("blur");
	});

	// 验证密码
	cajian.$regi_rePassword.on("blur",function(){
		cajian.checkPassword();
	});

	// 返回登录页
	cajian.$regist_backBtn.on("click",function(){
		cajian.backToLogin();
	});

	// 绑定设备
	// cajian.$regi_bind_bindBtn.on("click",function(){
	// 	cajian.bindDevice();
	// });

	// 选择性别
	cajian.$regi_sex_item.on("click",function(){
		cajian.chooseSex($(this));
	});

	// 注册并登录
	cajian.$regi_regist_btn.on("click",function(){
		cajian.regAndLogin();
	});

	// 提示用户名
	cajian.$login_username.on("focus",function(){
		cajian.tipUserName();
	}).on("blur",function(){
		cajian.hideTipUserName();
	});

	// 快速输入用户名（或手机号）
	cajian.$login_tipPhoneNum.on("click",function(){
		cajian.fastInputUserName();
	});

	// 登录 获取用户信息
	$("#login_btn").on("click",function(){
		cajian.loginAndGetUserInfo();
	});
	
	// 退出登录 清空本地存储，跳转到登录页面，
	cajian.$signOut.on("click",function(){
		cajian.signOut();
	});


	/**
	 * cajian_setting.js
	 **/

	// 修改头像
	$(".personal_headerImg").on("change",function(){
		cajian.changeHeadImg();
	});

	// 上传头像
	$('#personal_form').submit(function(){

		cajian.uploadHeadImg($(this));
	});

	// 修改昵称
	cajian.$personal_nickName_okBtn.on("click",function(){

		cajian.changeNickName();
	});
	cajian.$personal_nickName.on("click",function(){

		cajian.$personal_nickName_edit.show();
		cajian.$personal_nickName_input.val(cajian.$personal_nickName_cont.text()).focus();
	});

	// 修改性别
	cajian.$personal_list_sex.click(function(){

		cajian.$personal_popup_sex.show();
	});

	cajian.$personal_sex_item.on("click",function(){

		cajian.$personal_popup_sex.hide();

	}).on("touchstart",function(){

		cajian.changeSex($(this));
	});

	// 确定编辑签名
	cajian.$personal_signature_okBtn.on("click",function(){

		cajian.changeSignature();
	});

	cajian.$personal_signature.on("click",function(){

		cajian.$personal_signature_edit.show();
		cajian.$personal_signature_input.text(cajian.$personal_signature_cont.text()).focus();
	});

	// 取消编辑签名
	cajian.$personal_signature_cancelBtn.on("click",function(){

		cajian.$personal_signature_edit.hide();
	});

	// 修改当前的登录状态，是否隐身
	$("#personal_hide_toggle").on("change",function(){

		cajian.changeStatus();
	});

	// 设置兴趣爱好
	cajian.$personalLabel_okBtn.on("click",function(){

		cajian.setHobby();
	});

	// 添加个人标签（爱好）
	cajian.$personalLabel_addBtn.on("click",function(){

		cajian.addPersonalLabel();
	});

	cajian.$personalLabel_labelBox.on("click",".personal_label",function(){

		$(this).toggleClass("label_checked");
	});


	/**
	 * cajian_personalPage.js
	 **/

	// 获取好友的所有文章 和 好友的基本信息
	cajian.$myFriend_listBox.on("click",".myFriend_list_a",function(){

		cajian.getArtsAndInfo($(this));
	});

	// 点击主页的头像，跳转到 “我的个人主页”
	$("#header_user_myself").on("click",function(){

		cajian.toMyPage($(this));
	});

	// 好友页面 列表 如果好友扔的是链接，点击链接，跳转到相应的详情页
	cajian.$friendPage_listBox.on("click",".friendPage_list_a",function(){

		cajian.doFriendPageList($(this));
	});

	// 好友主页 列表中 “点赞” 按钮点击效果
	cajian.$doc.on("click", ".zanBtn_wrapper",function(){

		cajian.doZanTimes($(this));
	});

	// 转发
	cajian.$friendPage_listBox.on("click",".zhuanfaBtn_wrapper",function(){

		cajian.doZhuanFa($(this));
	});

	// 转发给好友
	$("#zhuanfaToFriend_btn").on("click",function(){

		cajian.zhuanFaToFriend();
	});

	// 转扔
	cajian.$zhuanReng_btn.on("click",function(){

		cajian.preZhuanReng();
	});

	// 触发转扔
	$("#zhuanReng_okBtn").on("click",function(){

		cajian.doZhuanReng();
	});

	// 取消转扔
	$("#zhuanReng_cancelBtn").on("click",function(){

		cajian.$zhuanReng_link.val("");
		cajian.$zhuanReng_title.val("");

		$.afui.goBack();

		cajian.isZhuanfa = false;
	});

	// 转扔返回
	$("#zhuanReng_goBack").on("click",function(){

		cajian.isZhuanfa = false;
	});

	// 隐藏转发选择
	cajian.$zhuanfa_mask.on("click",function(){

		cajian.hideZhuanfaSelect();
	});

	cajian.$zhuanfa_select_item.on("click",function(){

		cajian.hideZhuanfaSelect();
	});



	/**
	 * cajian_find.js
	 **/

	// 捡文章
	$("#tabBtn_faxian").on("click",function(){

		cajian.pickArt();
	});

	// 捡到的页面进入到详情页
	cajian.$discover_jian.on("click",".dj_list_share",function(){

		cajian.pickToDetail($(this));
	});

	// 扔东西
	cajian.$discover_reng_okBtn.on("click",function(){

		cajian.sendArt();
	});

	cajian.$discover_reng_cancelBtn.on("click",function(){

		$.afui.goBack();
	});

	// 捡到的东西的点赞
	cajian.$discover_jian.on("click",".dj_zanBtn_wrapper",function(){

		cajian.doPickZan($(this));
	});

	// 捡到的东西转发
	cajian.$discover_jian.on("click",".dj_zhuanfaBtn_wrapper",function(){

		cajian.zhuanFaPick($(this));
	});


	/**
	 * cajian_pickDetail.js
	 **/
	// 组织默认的 touchmove 事件效果
	cajian.$pickDetail.on("touchstart",function(){

		cajian.$pickDetail.on("touchmove",function(e){

			e.preventDefault();
		});

	}).on("touchend",function(){

		cajian.$pickDetail.off("touchmove");

	});

	// 点击返回按钮，页面返回，清空 iframe 的 src 属性
	cajian.$pickDetail_backBtn.on("click",function(){

		$.afui.goBack();

		cajian.$pickDetail_iframe.attr({

			"src": "",
			"data-artId": "",
			"data-artHit": "",
			"data-artTransmit": "",
			"data-artGood": ""
		});
	});



	/**
	 * cajian_pickDetail.js
	 **/

	// 详情页底部 “点赞” 按钮效果 
	cajian.$pickDetail_footer_zanBtn.on("click",function(){

		cajian.pickDetailZan();
	});

	// 详情页 转发
	cajian.$pickDetail_footer_zhuanfaBtn.on("click",function(){

		cajian.$zhuanfa_mask.show();
		cajian.$zhuanfa_select.show();


		cajian.$zhuanfa_select.attr({

			"data-link": cajian.$pickDetail_iframe.attr("src"),
			"data-title": cajian.$pickDetail_iframe.attr("data-title"),
			"data-artId": cajian.$pickDetail_iframe.attr("data-artId")

		});
	});



	/**
	 * cajian_friend.js
	 **/

	// 发送好友请求（请求添加好友）
	cajian.$req_firendBtn.on("click",function(){

		cajian.requestAddFriend($(this));
	});

	cajian.$message_ul.on("click",".message_list_requestFriend",function(){

		var $this = $(this),
			$msg_req_name = $this.find(".msg_req_name"),
			msg = $this.find(".msg_req_message").text();

		cajian.$request_friend_name.text($msg_req_name.text());

		cajian.$request_friend_msg.text(msg);

		cajian.$req_friend_aid.val($this.attr("data-aid"));

		cajian.goPanel("request_friend");
	});

	// 好友请求处理----同意
	cajian.$req_friend_agree.on("click",function(){

		cajian.agreeAddFriend();
	});

	// 好友请求处理----拒绝
	cajian.$req_friend_refuse.on("click",function(){

		cajian.refuseAddFriend();
	});

	// 点击tab的 消息 项，获取 好友请求信息 和 好友聊天信息
	cajian.$tabBtn_xiaoxi.on("click",function(){

		cajian.getRequestAndMsg();
	});

	// 删除好友
	cajian.$myFriend_listBox.on("longTap",".myFriend_list_a",function(){

		cajian.deleteFriend($(this));
	});

	// 好友列表 搜索框
	cajian.$myFriend_search_tips.on("click",function(){

		cajian.$myFriend_search_tips.fadeOut(200);
		cajian.$myFriend_search_cont.focus();
		cajian.$myFriend_ul.fadeOut(200);
		cajian.$myFriend_searchResult.fadeIn(200);

		cajian.$cancelSearchFriend.fadeIn(200);
	});

	cajian.$myFriend_search_cont.on("blur",function(){

		if($.trim(cajian.$myFriend_search_cont.val()) == ""){

			cajian.$myFriend_search_tips.fadeIn(200);
			cajian.$myFriend_ul.fadeIn(200);
			cajian.$myFriend_searchResult.fadeOut(200);
			cajian.$cancelSearchFriend.fadeOut(200);
		}

	}).on("input",function(){

		cajian.searchFriend();
	});

	// 取消搜索好友
	cajian.$cancelSearchFriend.on("click",function(){

		cajian.$myFriend_search_cont.val("");
		cajian.$myFriend_search_tips.fadeIn(200);
		cajian.$myFriend_ul.fadeIn(200);
		cajian.$myFriend_searchResult.fadeOut(200).html("");
		cajian.$cancelSearchFriend.fadeOut(200);


	});


	/**
	 * cajian_talking.js
	 **/

	$("#friendPage_toTalking").on("click",function(){

		var $this = $(this);
		cajian.toTalking($this.attr("data-friendId"),$this.attr("data-friendName"),$this);

		cajian.$tabBtn_wrapper.hide();
	});

	// 获取好友的爱好
	$("#talkingToHobby").on("click",function(){

		var hobby = JSON.parse(cajian.localStorage.userInfo).tag,
			sHobby = "",
			aHobby = hobby.split(",");

		for(var i = 0, len = aHobby.length; i < len; i++){

			sHobby += '<div class="personal_label label_checked" href="javascript:;">'+
							'<span class="label_text">'+ aHobby[i] +'</span>'+
						'</div>';		
		}

		$(".friendHobby_cont").html(sHobby);
	});

	// 显示或隐藏tab
	// cajian.$talking.on("animationEnd webkitAnimationEnd",function(){

	// 	var rTalking = /^talking/;
	// 		currentPanelId = $.afui.getPanelId(document.location.hash).substring(1);

	// 	console.log(currentPanelId);

	// 	// 如果当前页面是聊天页面就隐藏tab
	// 	if(cajian.rTalking.test(currentPanelId)){

	// 		cajian.$tabBtn_wrapper.hide();
	// 	}
	// 	// 如果不是，则显示tab
	// 	else{
	// 		cajian.$tabBtn_wrapper.show();
	// 	}
	// });


	cajian.$talking_msgToSend.on("input",function(){

		cajian.showSend();
	});

	cajian.$face_btn.on("click",function(){

		cajian.$faceAndTrue.show();
		cajian.$face_panel.show();
		cajian.$true_panel.hide();

		cajian.showFaceAndTrue();
	});

	cajian.$add_btn.on("click",function(){

		cajian.$faceAndTrue.show();
		cajian.$face_panel.hide();
		cajian.$true_panel.show();

		cajian.showFaceAndTrue();
	});

	cajian.$talking_msgToSend.on("focus",function(){

		cajian.$faceAndTrue.hide();
		cajian.$talking_panel.css("bottom","44px");
		cajian.$talking_bottom.height(39);
	});

	cajian.$faces.on("click",function(){

		var str1 = cajian.$talking_msgToSend.val(),
			str2 = "[" + $(this).attr("class").split(" ")[1] + "]";

		str1 += str2;

		cajian.$talking_msgToSend.val(str1);

		cajian.showSend();
	});

	cajian.$delete_face.on("click",function(){

		var str1 = cajian.$talking_msgToSend.val(),
			len = str1.length,
			lastIdx = str1.lastIndexOf("[");

		if(str1.substring(lastIdx,len).match(cajian.rFace)){

			var str2 = str1.substring(0,lastIdx);
			cajian.$talking_msgToSend.val(str2);

		}

		cajian.showSend();
	});

	// 添加真心话的答案
	cajian.$custom_true_addQuestion.on("click",function(){

		cajian.addCustomTureAnswer();
	});


	/**
	 * 切换face panel
	 **/

	cajian.$face_panel_inner.width(cajian.winW * 4);

	cajian.$face_panel_inner.on("touchstart",function(e){

		cajian.changeFacePanel(e);
	});
	


	/**
	 *	js与ios通信
	 *
	 *	webViewJavascriptBridge
	 **/
	window.onerror = function(err) {
		cajian.msgTip('window.onerror: ' + err);
	}
	
	// function connectWebViewJavascriptBridge(callback) {
	// 	if (window.WebViewJavascriptBridge) {
	// 		callback(WebViewJavascriptBridge)
	// 	} else {
	// 		document.addEventListener('WebViewJavascriptBridgeReady', function() {
	// 			callback(WebViewJavascriptBridge)
	// 		}, false)
	// 	}
	// }
	
	// connectWebViewJavascriptBridge(function(bridge) {

	// 	bridge.init(function(message, responseCallback) {
	// 		var msg = JSON.stringify(message);
	// 		cajian.msgTip('JS收到消息' + msg);
	// 		var data = { 'Javascript Responds':'Wee!' };
	// 		var sData = JSON.stringify(data);
	// 		cajian.msgTip('JS做出响应' + sData);

	// 		// ???
	// 		if(responseCallback){
	// 			responseCallback(data);
	// 		}
	// 	});

	// 	bridge.registerHandler('JSHandler', function(data, responseCallback) {
	// 		cajian.msgTip('ObjC调用JSHandler：' + JSON.stringify(data));
	// 		var responseData = { 'JS响应':'马上执行！' };
	// 		cajian.msgTip('JS响应：' + JSON.stringify(responseData));
	// 		// responseCallback(responseData);
	// 		if(responseCallback){
	// 			responseCallback(responseData);
	// 		}
	// 	});


	// 	cajian.$tabBtn_bluetooth.on("click",function(e) {
	// 		e.preventDefault();
	// 		var data = '来自js的问候';
	// 		cajian.msgTip('JS发送消息：' + JSON.stringify(data));
	// 		bridge.send(data, function(responseData) {
	// 			cajian.msgTip('JS得到响应：' + JSON.stringify(responseData));
	// 		});
	// 	});

		// callbackButton.onclick = function(e) {
		// 	e.preventDefault();
		// 	cajian.msgTip('JS调用"testObjcCallback"');
		// 	bridge.callHandler('testObjcCallback', {'foo': 'bar'}, function(response) {
		// 		cajian.msgTip('JS got response' + JSON.stringify(response));
		// 	});
		// }

		// bridge.callHandler('ObjcCallback', {'foo': 'bar'}, function(response) {
		// 	cajian.msgTip('JS得到响应：' + JSON.stringify(response));
		// });
	// });



});