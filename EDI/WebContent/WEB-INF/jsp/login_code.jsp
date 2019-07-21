<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%  
pageContext.setAttribute("path", request.getContextPath());
%>
<% 
   String isLoginSucc =(String) request.getAttribute("result");
   if(isLoginSucc.equals("true"))
   {
	   System.out.print("444");
	   out.println("<script>alert('登陆成功！');window.location.href='../index/toIndex'</script>");
	   session.setAttribute("user", request.getAttribute("user"));
	   session.setMaxInactiveInterval(3600);
   }
   else
   {
	   out.println("<script>alert('登陆失败！账户不存在或密码错误');window.location.href='../login/toLogin'</script>");
   }
%>
