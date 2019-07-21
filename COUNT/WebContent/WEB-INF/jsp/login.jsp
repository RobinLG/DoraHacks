<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%  
pageContext.setAttribute("path", request.getContextPath());
    String path = request.getContextPath();  
    String basePath = request.getScheme() + "://"  
            + request.getServerName() + ":" + request.getServerPort()  
            + path + "/";  
%> 
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    
    <title>登陆界面</title>
    <link rel="stylesheet" type="text/css" href="${path}/resource/css/MyStyle.css">
    <link rel="stylesheet" type="text/css" href="${path}/resource/css/bootstrap.min.css">
    <script type="text/javascript" src="${path}/resource/js/jquery.min.js"></script>
   	<script type="text/javascript" src="${path}/resource/js/bootstrap.min.js"></script>
</head>
<body>
<div align="center">
<h1>请登录</h1>
   <form role="form" action="" method="post">
    <label class="form-label" for="cnname">&nbsp;&nbsp;&nbsp;&nbsp;账&nbsp;&nbsp;&nbsp; 户：</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input type="text" class="form-control" name="user" id="userId" placeholder="请输入用户名" style="width: 250px;"  onKeyUp="value=value.replace(/[\W]/g,'')"><br/><br/>
     <label class="form-label" for="cnname">&nbsp;&nbsp;&nbsp;&nbsp;密&nbsp;&nbsp;&nbsp; 码：</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input type="password" class="form-control" id="pwd" name="password" placeholder="请输入密码"  style="width: 250px;"><br/><br/>
       <a href="#"><input type="button" value="提交" onclick="submitT()"/></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <a href="<%=basePath %>user/toAddUser?referee_id=${referee }"><input type="button" value="快速注册" /></a>
   </form>
   </div>
       <script type="text/javascript">
        function submitT() {
        	var userId = $("#userId").val();
        	var pwd = $("#pwd").val();
        	if(userId==""){
        		alert("请输入账号");
        		return ;
        	}
			if(pwd==""){
        		alert("请输入密码");
        		return ;
        	}
			var reg = /^[0-9a-zA-Z]+$/
				if(!reg.test(userId)){
				alert("用户名格式不对");
				return;
				}
			if(!reg.test(pwd)){
				alert("密码格式不对");
				return;
				}
        	
            var form = document.forms[0];
            form.action = "<%=basePath %>login/checkUser";
            form.method = "post";
            form.submit();
        }
    </script>
</body>
