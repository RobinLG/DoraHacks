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
    
    <title>登陆界面</title>
    <link rel="stylesheet" type="text/css" href="${path}/resource/css/MyStyle.css">
    <link rel="shortcut icon" href="${path}/resource/icon/bitbug_favicon1.ico"/>
    <link rel="stylesheet" type="text/css" href="${path}/resource/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="${path}/resource/css/common.css">
    <link rel="stylesheet" type="text/css" href="${path}/resource/css/login.css">
    <script type="text/javascript" src="${path}/resource/js/jquery.min.js"></script>
   	<script type="text/javascript" src="${path}/resource/js/bootstrap.min.js"></script>
</head>
<body>

   <div class="login_bg">
    <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
        <form action="">
            <div class="userName" style="font-size: 60px;">
                <lable>用户名：</lable>
                <input type="text" name="user" placeholder="请输入用户名" onKeyUp="value=value.replace(/[\W]/g,'')" value="<%=username %>" required/>
            </div>
            <div class="passWord" style="font-size: 60px;">
                <lable>密&nbsp;&nbsp;&nbsp;码：</lable>
                <input type="password" name="password" placeholder="请输入密码" value="<%=password %>" required/>
            </div>
            <br/>
            <br/>
            <div align="center">
            	<button  onclick="submitT()" class="btn-success" type="button" style="font-size: 60px; -webkit-border-radius: 30px;width: 70%;">登&nbsp;&nbsp;录</button><nobr>
            </div>
            
        </form>
    </div>
       <script type="text/javascript">
        function submitT() {
            var form = document.forms[0];
            form.action = "<%=basePath %>login/checkAdmin";
            form.method = "post";
            form.submit();
        }
    </script>
</body>
