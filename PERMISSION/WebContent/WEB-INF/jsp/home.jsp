<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ taglib uri="/WEB-INF/tlds/c.tld" prefix="c"%>
<%@ taglib uri="/WEB-INF/tlds/fn.tld" prefix="fn"%>
<%@ taglib uri="/WEB-INF/tlds/fmt.tld" prefix="fmt" %>
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
    <script type="text/javascript">
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
    </script>
	</head>
	<body>
		<div class="container-fluid">
	<div class="col-sm-12">
		<div class="">
			<h3 class="text-center">
				權限部門審批中心
			</h3>
		</div>
	</div>
	<div class="col-sm-12">
	<!-- 
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
		 -->
		<div class="col-sm-12 h4" style="margin-top: 80px;">
			
			<table class="table">
				<thead>
					<tr>
						<th>
							序號
						</th>
						<th>
							申請日期
						</th>
						<th>
							准照DID
						</th>
						<th>
							准照编号
						</th>
						<th>
							状态
						</th>
						<th>
							詳情
						</th>
						<th>
                        	操作
                        </th>
					</tr>
				</thead>
				<tbody>
					<c:forEach var="wao" varStatus="status" items="${waitAuditList }">
						<tr class="info">
							<td>${ status.index + 1}</td>
							<td>${wao.YEAR }</td>
							<td>${wao.FIAT_DID }</td>
							<td>${wao.FIAT_ID }</td>
							<td>
								<c:if test="${'1' eq wao.CHECK_TYPE }">待审核</c:if>
								<c:if test="${'2' eq wao.CHECK_TYPE }">审核通过</c:if>
								<c:if test="${'3' eq wao.CHECK_TYPE }">待清关</c:if>
								<c:if test="${'4' eq wao.CHECK_TYPE }">已清关</c:if>
								<c:if test="${empty wao.CHECK_TYPE }"></c:if>
							
							</td>
							<td><button type='button' class='btn btn-primary' onclick="goDetail('${wao.FIAT_ID}')">查看詳情</button></td>
							<td><a class='btn btn-primary' href="javascript:vodi(0);" onclick="updateStatus('${wao.FIAT_ID}')">审核</a></td>
						</tr>
					</c:forEach>
				</tbody>
			</table>
              
		</div>
	</div>
</div>
<form name="updateForm" action="${path }/ent/toAudit" method="post">
<input type="hidden" name="flatId" />
</form>
</body>
<script type="text/javascript">
function updateStatus(flatId){
	updateForm.flatId.value=flatId;
	updateForm.submit();
}
</script>
</html>
