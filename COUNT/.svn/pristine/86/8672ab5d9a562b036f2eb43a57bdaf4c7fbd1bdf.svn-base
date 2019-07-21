
var curWwwPath = window.document.location.href;
var pathName = window.document.location.pathname;
var pos = curWwwPath.indexOf(pathName);
//获取主机地址，如： http://localhost:8083
var localhostPaht = curWwwPath.substring(0, pos);
var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
var path = localhostPaht+projectName

$(function(){
	webSocket();
	
});

function webSocket(){
	console.log("webSocket!!!!");
			var userId = $("#loginUserId").val();
            if (typeof(WebSocket) == "undefined") {
                console.log("您的浏览器不支持WebSocket");
                return;
            }
            //实现化WebSocket对象，指定要连接的服务器地址与端口
            //var socket = new WebSocket("ws://111.231.249.120:80/CQGaming/websocket/" + userId);
            //宝来
            //var socket = new WebSocket("ws://150.109.45.150:80/CQGaming/websocket/" + userId);
            //肥佬
            var socket = new WebSocket("ws://www.123jyl.com/cqssc/websocket/" + userId);
            //夏阳
//            var socket = new WebSocket("ws://www.1223kbkb.com/csbso/websocket/" + userId);

            
            //打开事件
            socket.onopen = function () {
                console.log("Socket已打开");
            };
            //获得消息事件
            socket.onmessage = function (message) {
            	var json = JSON.parse(message.data);
            	if(json.msgType==1){
            		console.log(json);
            		var audioEle = document.getElementById("sfaudio");
                    audioEle.play();
                    var url = path +"/jingcai/shangfenqq";
                    $.ajax({
         				  type: "POST",
         				  url: url,
         				  data: {},
         				  success: function(res){
      	   					 $("#sfqqf").html(res.result);
      		   			},
         				  dataType: "json",
         				  error:function(){
         					  alert("系统繁忙，请重试");
         				  }
         				});
            	}
            	if(json.msgType==2){
            		console.log(json);
            		var audioEle = document.getElementById("xfaudio");
                    audioEle.play();
                    var url = path +"/jingcai/xiafenqq";
                    $.ajax({
         				  type: "POST",
         				  url: url,
         				  data: {},
         				  success: function(res){
      	   					 $("#xfqqf").html(res.result);
      		   			},
         				  dataType: "json",
         				  error:function(){
         					  alert("系统繁忙，请重试");
         				  }
         				});
            	}	
            	
            };
            socket.onclose = function () {
                console.log("Socket已关闭");
                if (socket != null) {
                    console.log("Socket正在重连…");
                    setTimeout(function () {
                    that.webSocketConnect();
                    }, 5000);
                }
            };
            //发生了错误事件
            socket.onerror = function () {
                console.log("发生了错误");
                if (socket != null) {
                    console.log("Socket正在重连…");
                    setTimeout(function () {
                        that.webSocketConnect();
                    }, 5000);
                }
            };
        };
