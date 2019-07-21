
<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%  
pageContext.setAttribute("path", request.getContextPath());
    String path = request.getContextPath();  
    String basePath = request.getScheme() + "://"  
            + request.getServerName() + ":" + request.getServerPort()  
            + path + "/";  
    String username = ""; //用户名    	
	   String password = ""; //密码    	
    Cookie[] cookies = request.getCookies();    	//保存有cookie对象    	
	   if(cookies != null && cookies.length > 0){    		
		   for(Cookie c: cookies){    			
			   if(c.getName().equals("cqsscUserName")){
				   username = c.getValue().split("-")[0]; 
				   password = c.getValue().split("-")[1]; 
				   }
			   if(c.getName().equals("passwird")){ 
				 //  password = c.getValue();    			
				 } 
			   }    	
		   }
%> 
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta charset="utf-8" />
		<title></title>
	<link type="text/css" rel="stylesheet" href="${path}/resource/css/bootstrap.min.css">
    <link type="text/css" rel="stylesheet" href="${path}/resource/css/customs.css">
    <script src="${path}/resource/js/jquery.min.js"></script>
    <script src="${path}/resource/js/bootstrap.min.js"></script>
    <script src="${path}/resource/js/jquery.cookie.js"></script>
	<script src="${path}/resource/js/jquery.validate.min.js"></script>
    <script src="${path}/resource/js/common.js"></script>
        <script type="text/javascript">
    	$(function(){
    			<%-- var url = "<%=basePath %>/ent/toSaveEnt"; --%>
    			var url = "http://localhost:8088/DORA/ent/toQueryList";
        		$.ajax({
        			  async : true,
     				  type: "GET",
     				  url: url,
     				  data: {},
     				 jsonp: 'callback', 
      				dataType: "jsonp",
      				jsonpCallback:"successCallback",
     				  success: function(res){
	  	   			   		var data = res.dataList;
	  	   			   		console.log(data); 
	  	   			   		var html = "";
 	  	   			   		for(var i=0;i<data.length;i++){
		 	  	   			   	if(data[i].CHECK_TYPE==1){
			   			   				html += '<tr class="info">';
			   			   			}else if(data[i].CHECK_TYPE==2){
			   			   			html += '<tr class="danger">';
			   			   			}else{
			   			   			html += '<tr class="success">';
			   			   			}
	  	   			   			html += "<td>"+data[i].FIAT_DID+"</td><td>";
	  	   			   			if(data[i].CHECK_TYPE==1){
	  	   			   				html += "待審核";
	  	   			   			}else if(data[i].CHECK_TYPE==2){
	  	   			   				html += "審核通過";
	  	   			   			}else{
	  	   			   				html += "待清關";
	  	   			   			}
	  	   			   			
	  	   			   			html += "</td><td>";
	  	   			   			if(data[i].TYPE_ID==1){
	  	   			   				html += "警察局";
	  	   			   			}else{
	  	   			   				html += "藥品局";
	  	   			   			}
	  	   			   			html += "</td><td>"+data[i].SOURCE_AREA+"</td><td>"+data[i].IMPORTER_NAME+"</td>";
	  	   			   			if(data[i].CHECK_TYPE==2){
	  	   			   				html += "<td>/</td><td><button type='button' class='btn btn-success' onclick=\"goChangeStatus('"+ data[i].FIAT_ID +"' , '"+ data[i].FIAT_DID +"')\">清關</button></td></tr>";
	  	   			   			}else{
	  	   			   				html += "<td>/</td><td><button type='button' class='btn btn-primary' onclick=\"goDetail('"+ data[i].FIAT_ID +"')\">查看詳情</button></td></tr>";
	  	   			   			}
	  	   			   			
	  	   			   			
	  	   			   		}
 	  	   			  $("#main").html(html); 
  		   			},
  		   			error: function(e){
  		   			alert("false");
  		   				console.log(e);
  		   			}
  		   			
     				}); 
    	});
    	
    	function goDetail(e) {
			var FIAT_ID = e;
			var urlD = "http://localhost:8088/DORA/ent/toQueryDetail";
			$.ajax({
				async : true,
				  type: "GET",
				  url: urlD,
				  data: {"FIAT_ID":FIAT_ID},
				  success: function(res){
					  var str = "";
					  $.each(res,function(key,values){   
						  str += "&"+key +"="+values;
						 }); 
 					 var ur = '../ent/toDetail?param=1'+str;
					 window.location.href= ur; 
					},
					jsonp: 'callback', 
      				dataType: "jsonp",
      				jsonpCallback:"successCallback",
				  error:function(){
					  alert("系统繁忙，请重试");
				  }
				});
		};  
		
		function goChangeStatus(e,f) {
			var FIAT_ID = e;
			var FIAT_DID = f;
			var urlD = "http://localhost:8088/DORA/ent/toUpdateStatus";
			$.ajax({
				async : true,
				  type: "GET",
				  url: urlD,
				  data: {"FIAT_ID":FIAT_ID},
				  success: function(res){
					  if(res==1){
						  alert("success");
						  window.location.href= '../ent/toKey?FIAT_DID=' + FIAT_DID;

						  /*  		window.location.reload();			 var ur = '../ent/toDetail?param=1'+str;
							 window.location.href= ur;  */
					  }else{
						  alert("false")
					  }

					},
					jsonp: 'callback', 
      				dataType: "jsonp",
      				jsonpCallback:"successCallback",
				  error:function(){
					  alert("系统繁忙，请重试");
				  }
				});
		}; 
		
    </script>
	</head>
	<body>
		<div class="container-fluid">
	<div class="col-sm-12">
		<div class="">
			<h3 class="text-center">
				资料列表
			</h3>
		</div>
	</div>
	<div class="col-sm-12">
		<div class="col-sm-2">
			<ul class="nav nav-list">
				<li class="h3">
					列表标题
				</li>
				<li class="active h4" style="background-color: bisque;">
					<a href="#">首页</a>
				</li>
				<li class="h4">
					<a href="../ent/toIndex">进口准照填写</a>
				</li>
				
			</ul>
		</div>
		<div class="col-sm-10 h4" style="margin-top: 80px;">
			
			<form class="form-horizontal" style="margin-bottom: 30px;">
				<div style="border: solid black;padding: 20px;border-radius: 10px;color: black;">
					<div class="form-group">
					<label class="col-md-2 control-label">准照DID：</label>
					<div class="col-md-5">
					<input  class="form-control input-small input-inline" type="text" style="width: 250px;"/>
					</div>
					</div>
					<div class="form-group" style="margin-left: 120px;">
				<div class="col-sm-2">
					<button class="btn" type="button">查詢</button>
				</div>
				<div class="col-sm-2">
					<button class="btn" type="button">重新輸入</button>
				</div>
				</div>
			</div>
			</form>
			
			
			<table class="table">
				<thead>
					<tr>
						<th>
							准照DID
						</th>
						<th>
							狀態
						</th>
						<th>
							權限部門
						</th>
						<th>
							進口地點
						</th>
						<th>
							進口商名
						</th>
						<th>
							發出日期
						</th>
						<th>
							操作
						</th>
					</tr>
				</thead>
				<tbody  id="main">
					
				</tbody>
			</table>
              
		</div>
	</div>
</div>
	</body>
</html>
