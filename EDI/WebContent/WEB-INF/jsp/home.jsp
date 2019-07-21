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
    <script src="${path}/resource/s/common.js"></script>
	</head>
	<body>
		<div class="container-fluid">
	<div class="col-sm-12">
		<div class="">
			<h3 class="text-center">
				准照填写
			</h3>
		</div>
	</div>
	<div class="col-sm-12">
		<div class="col-sm-2">
			<ul class="nav nav-list">
				<li class="h3">
					列表标题
				</li>
				<li class="active h4">
					<a href="#">首页</a>
				</li>
				<li class="h4">
					<a href="#">进口准照填写</a>
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
				<div class="col-sm-2">
					<button class="btn" type="button">返回</button>
				</div>
				</div>
			</div>
			</form>
			
			
			<table class="table">
				<thead>
					<tr>
						<th>
							准照weid
						</th>
						<th>
							狀態
						</th>
						<th>
							權限部門
						</th>
						<th>
							日期時間
						</th>
						<th>
							進口地點
						</th>
						<th>
							經營人
						</th>
						<th>
							參考編號
						</th>
						<th>
							發出日期
						</th>
						<th>
							操作
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							1
						</td>
						<td>
							TB - Monthly
						</td>
						<td>
							01/04/2012
						</td>
						<td>
							Default
						</td>
						<td>
							Default
						</td>
						<td>
							Default
						</td>
						<td>
							Default
						</td>
						<td>
							Default
						</td>
						<td>
							Default
						</td>
					</tr>
					<tr class="info">
						<td>
							1
						</td>
						<td>
							TB - Monthly
						</td>
						<td>
							01/04/2012
						</td>
						<td>
							Default
						</td>
						<td>
							Default
						</td>
						<td>
							Default
						</td>
						<td>
							Default
						</td>
						<td>
							Default
						</td>
						<td>
							Default
						</td>
					</tr>
					<tr>
						<td>
							1
						</td>
						<td>
							TB - Monthly
						</td>
						<td>
							01/04/2012
						</td>
						<td>
							Default
						</td>
						<td>
							Default
						</td>
						<td>
							Default
						</td>
						<td>
							Default
						</td>
						<td>
							Default
						</td>
						<td>
							Default
						</td>
					</tr>
					<tr class="info">
						<td>
							1
						</td>
						<td>
							TB - Monthly
						</td>
						<td>
							01/04/2012
						</td>
						<td>
							Default
						</td>
						<td>
							Default
						</td>
						<td>
							Default
						</td>
						<td>
							Default
						</td>
						<td>
							Default
						</td>
						<td>
							Default
						</td>
					</tr>
					<tr>
						<td>
							1
						</td>
						<td>
							TB - Monthly
						</td>
						<td>
							01/04/2012
						</td>
						<td>
							Default
						</td>
						<td>
							Default
						</td>
						<td>
							Default
						</td>
						<td>
							Default
						</td>
						<td>
							Default
						</td>
						<td>
							Default
						</td>
					</tr>
				</tbody>
			</table>
			<div class="row">
				<div  class="col-md-5 col-sm-5">
					<div class="dataTables_info" id="sample_editable_1_info" role="status" aria-live="polite">
						Showing 1 to 5 of 5 entries
					</div>
				</div>
				<div class="col-md-7 col-sm-7">
					<div style="" class="dataTables_paginate paging_simple_numbers" id="sample_editable_1_paginate">
							<ul class="pagination">
								<li tabindex="0" class="paginate_button previous disabled" id="sample_editable_1_previous" aria-controls="sample_editable_1">
									<a href="#"><i class="fa fa-angle-left"><</i></a>
								</li>
								<li tabindex="0" class="paginate_button active" aria-controls="sample_editable_1">
									<a href="#">1</a>
								</li>
								<li tabindex="0" class="paginate_button active" aria-controls="sample_editable_1">
									<a href="#">1</a>
								</li>
								<li tabindex="0" class="paginate_button active" aria-controls="sample_editable_1">
									<a href="#">1</a>
								</li>
								<li tabindex="0" class="paginate_button active" aria-controls="sample_editable_1">
									<a href="#">1</a>
								</li>
									<li tabindex="0" class="paginate_button next disabled" id="sample_editable_1_next" aria-controls="sample_editable_1">
										<a href="#"><i class="fa fa-angle-right">>
										</i>
										</a>
									</li>
						</ul>
					</div>
					</div>
			</div>
              
		</div>
	</div>
</div>
	</body>
</html>
