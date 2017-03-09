$.afui.ready(function(){

	var ca = new Cajian();

	window.onerror = function(err) {
		// log('window.onerror: ' + err)
		ca.msgTip('window.onerror: ' + err);
	}
	
	function connectWebViewJavascriptBridge(callback) {
		if (window.WebViewJavascriptBridge) {
			callback(WebViewJavascriptBridge)
		} else {
			document.addEventListener('WebViewJavascriptBridgeReady', function() {
				callback(WebViewJavascriptBridge)
			}, false)
		}
	}
	
	connectWebViewJavascriptBridge(function(bridge) {

		// var uniqueId = 1;

		// function log(message, data) {
		// 	var log = document.getElementById('log')
		// 	var el = document.createElement('div')
		// 	el.className = 'logLine'
		// 	el.innerHTML = uniqueId++ + '. ' + message + ':<br/>' + JSON.stringify(data)
		// 	if (log.children.length) { log.insertBefore(el, log.children[0]) }
		// 	else { log.appendChild(el) }
		// }

		bridge.init(function(message, responseCallback) {
			var msg = JSON.stringify(message);
			ca.msgTip('JS收到消息' + msg);
			var data = { 'Javascript Responds':'Wee!' };
			var sData = JSON.stringify(data);
			ca.msgTip('JS做出响应' + sData);

			// ???
			if(responseCallback){
				responseCallback(data);
			}
			
		});

		bridge.registerHandler('jsToOcHandler', function(data, responseCallback) {
			ca.msgTip('ObjC调用jsToOcHandler：' + JSON.stringify(data));
			var responseData = { 'JS响应':'马上执行！' };
			ca.msgTip('JS响应：' + JSON.stringify(data));
			// responseCallback(responseData);
			if(responseCallback){
				responseCallback(responseData);
			}
		});


		// var button = document.getElementById('buttons').appendChild(document.createElement('button'));
		// button.innerHTML = 'Send message to ObjC';

		button.onclick = function(e) {
			e.preventDefault();
			var data = '来自js的问候';
			ca.msgTip('JS发送消息：' + JSON.stringify(responseData));
			bridge.send(data, function(responseData) {
				ca.msgTip('JS得到响应：' + JSON.stringify(responseData))
			});
		};

		// document.body.appendChild(document.createElement('br'));

		// var callbackButton = document.getElementById('buttons').appendChild(document.createElement('button'));
		// callbackButton.innerHTML = 'Fire testObjcCallback';

		
		callbackButton.onclick = function(e) {
			e.preventDefault();
			ca.msgTip('JS调用"testObjcCallback"');
			bridge.callHandler('testObjcCallback', {'foo': 'bar'}, function(response) {
				ca.msgTip('JS got response' + JSON.stringify(response));
			});
		}
	})
});