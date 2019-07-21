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
    		$("#clear").click(function(){
    			window.location.reload();
    		});
    		
    		$("#save").click(function(){
    			var d = {};
    		    var t = $('form').serializeArray();
    		    $.each(t, function() {
    		      d[this.name] = this.value;
    		    });
    		    
    			<%-- var url = "<%=basePath %>/ent/toSaveEnt"; --%>
    			var url = "http://localhost:8088/DORA/ent/toSaveEnt";
        		$.ajax({
        			  async : true,
     				  type: "GET",
     				  url: url,
     				 jsonp: 'callback', 
       		   		jsonpCallback: 'jsonpCallback',
          				dataType: "jsonp",
     				  data: d,
     				  success: function(res){
     					  console.log(res);
     					 alert("success");
  	   					 if(res.result==1){
	  	   			        alert("success");
	  	   			   		window.location.href='../admin/toIndex';
  			   			}else{
  			   				alert("系统异常,请重试");
  			   			}
  		   			},
  		   			error: function(e){
  		   				console.log(e);
  		   			}
  		   			
     				}); 
    		});
    	});
    </script>
	</head>
	<body>
		<div class="container-fluid">
	<div class="col-sm-12">
		<div class="">
			<h3 class="text-center">
				查看资料
			</h3>
		</div>
	</div>
	<div class="col-sm-12">
		<div class="col-sm-2">
			<ul class="nav nav-list">
				<li class="h3">
					列表标题
				</li>
				<li class="h4">
					<a href="../admin/toIndex">首页</a>
				</li>
				
			</ul>
		</div>
		<div class="col-sm-10 h4" style="margin-top: 80px;">

<div class="row">
	<form id="form" class="form-horizontal" style="margin-bottom: 30px;">
		<div class="row"><label class="col-md-12">進口商資料</label></div>
				<div style="border: solid black;padding: 20px;border-radius: 10px;color: black;">
					<div class="form-group">
					<label class="col-md-2 control-label">編號：</label>
					<div class="col-md-2">
					<input value=<%=request.getParameter("IMPORTER_NUM") %>  id="IMPORTER_NUM" name="IMPORTER_NUM" class="form-control input-small input-inline" type="text" style=""/>
					</div>
					<label class="col-md-2 control-label">名稱：</label>
					<div class="col-md-2">
					<input value=<%=request.getParameter("IMPORTER_NAME") %> id="IMPORTER_NAME" name="IMPORTER_NAME" class="form-control input-small input-inline" type="text" style=""/>
					</div>
					</div>
			</div>
			
			
				<div  style="padding: 20px;padding-bottom:0;border-radius: 10px;color: black;">
					<div class="form-group">
					<label class="col-md-2 control-label" >来源地：</label>
					<div class="col-md-2">
					<select value=<%=request.getParameter("SOURCE_AREA") %> class="form-control"  id="SOURCE_AREA" name="SOURCE_AREA" style="">
						<option value="A" >A</option>
						<option value="B" >B</option>
					</select>
					</div>
					<label class="col-md-2 control-label" for="title">进口地点：</label>
					<div class="col-md-2">
					<select value=<%=request.getParameter("IMPORT_AREA") %> class="form-control"  id="IMPORT_AREA" name="IMPORT_AREA" style="">
						<option value="A" >A</option>
						<option value="B" >B</option>
					</select>
					</div>
					<label class="col-md-2 control-label" for="title">运输方式：</label>
					<div class="col-md-2">
					<select value=<%=request.getParameter("TRANSPORT") %> class="form-control"  id="TRANSPORT" name="TRANSPORT" style="">
						<option value="A" >A</option>
						<option value="B" >B</option>
					</select>
					</div>
					</div>
			</div>
			
				<div  style="padding: 20px;padding-top:0;padding-bottom:0;border-radius: 10px;color: black;">
					<div class="form-group">
					<label class="col-md-2 control-label" >發貨地：</label>
					<div class="col-md-2">
					<input value=<%=request.getParameter("GOODS_AREA") %> id="GOODS_AREA" name="GOODS_AREA" class="form-control input-small input-inline" type="text" style=""/>
					</div>
					<label class="col-md-2 control-label" for="title">總毛重（KG）：</label>
					<div class="col-md-2">
					<input value=<%=request.getParameter("WEIGHT") %> id="WEIGHT" name="WEIGHT" class="form-control input-small input-inline" type="text" style=""/>
					</div>
					</div>
			</div>
			
			<div  style="padding: 20px;padding-top:0;padding-bottom:0;border-radius: 10px;color: black;">
					<div class="form-group">
					<label class="col-md-2 control-label" for="title">司機證件：</label>
					<div class="col-md-2">
					<input value=<%=request.getParameter("DRIVER_ID") %> id="DRIVER_ID" name="DRIVER_ID" class="form-control input-small input-inline" type="text" style=""/>
					</div>
					<label class="col-md-2 control-label" for="title">貨櫃編號：</label>
					<div class="col-md-2">
					<input value=<%=request.getParameter("COUNTER_ID") %> id="COUNTER_ID" name="COUNTER_ID" class="form-control input-small input-inline" type="text" style=""/>
					</div>
					<label class="col-md-2 control-label" for="title">車輛編號：</label>
					<div class="col-md-2">
					<input value=<%=request.getParameter("CAR_ID") %> id="CAR_ID" name="CAR_ID" class="form-control input-small input-inline" type="text" style=""/>
					</div>
					</div>
			</div>
			
			
						<div class="row"><label class="col-md-12">貨物資料</label></div>
				<div style="border: solid black;padding: 20px;border-radius: 10px;color: black;">
					
					<div class="form-group">
					<label class="col-md-2 control-label">貨物類型：</label>
					<div class="col-md-2">
					<input value=<%=request.getParameter("TYPE_ID") %> id="TYPE_ID" name="TYPE_ID"  class="form-control input-small input-inline" type="text" style=""/>
					</div>
					</div>
					<div class="form-group">
					<label class="col-md-2 control-label" for="title">原產地國家或地區：</label>
					<div class="col-md-2">
					<select value=<%=request.getParameter("SOURCE_AREA_GOODS") %> id="SOURCE_AREA_GOODS" name="SOURCE_AREA_GOODS" class="form-control"  style="">
						<option value="A" >A</option>
						<option value="B" >B</option>
					</select>
					</div>
					</div>
					<div class="form-group">
					<label class="col-md-2 control-label">包裝形式：</label>
					<div class="col-md-2">
					<input value=<%=request.getParameter("PACK_TYPE") %> id="PACK_TYPE" name="PACK_TYPE"  class="form-control input-small input-inline" type="text" style=""/>
					</div>
					</div>
					<div class="form-group">
					<label class="col-md-2 control-label">包裝數量：</label>
					<div class="col-md-2">
					<input value=<%=request.getParameter("PACK_NUM") %> id="PACK_NUM" name="PACK_NUM" class="form-control input-small input-inline" type="text" style=""/>
					</div>
					<label class="col-md-2 control-label">淨重（公斤）：</label>
					<div class="col-md-2">
					<input value=<%=request.getParameter("GOODS_WEIGHT") %> id="GOODS_WEIGHT" name="GOODS_WEIGHT" class="form-control input-small input-inline" type="text" style=""/>
					</div>
					</div>
					<div class="form-group">
					<label class="col-md-2 control-label">數量：</label>
					<div class="col-md-2">
					<input value=<%=request.getParameter("GOODS_NUM") %> id="GOODS_NUM" name="GOODS_NUM" class="form-control input-small input-inline" type="text" style=""/>
					</div>
					<label class="col-md-2 control-label">單位：</label>
					<div class="col-md-2">
					<select value=<%=request.getParameter("GOODS_UINT") %> id="GOODS_UINT" name="GOODS_UINT" class="form-control"  style="">
						<option value="A" >A</option>
						<option value="B" >B</option>
					</select>
					</div>
					</div>
					<div class="form-group">
					<label class="col-md-2 control-label">到岸價格：</label>
					<div class="col-md-2">
					<input value=<%=request.getParameter("GOODS_PRICE") %> id="GOODS_PRICE" name="GOODS_PRICE" class="form-control input-small input-inline" type="text" style=""/>
					</div>
					<label class="col-md-2 control-label">貨幣：</label>
					<div class="col-md-2">
					<select value=<%=request.getParameter("MONEY_TYPE") %> id="MONEY_TYPE" name="MONEY_TYPE" class="form-control"  style="">
						<option value="RMB">RMB</option>
						<option value="MOP">MOP</option>
					</select>
					</div>
					</div>
			</div>
			</div>
			<div class="form-group" style="margin-left: 250px;margin-top: 20px;">
				<div class="col-sm-2">
					<button onclick="javascript:history.back(-1);" class="btn" type="button">返回</button>
				</div>
				</div>
			</form>
	
</div>			
			
              
		</div>
	</div>
</div>
	</body>
</html>