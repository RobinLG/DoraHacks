<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%  
pageContext.setAttribute("path", request.getContextPath());
String path = request.getContextPath(); 
String basePath = request.getScheme() + "://"  
        + request.getServerName() + ":" + request.getServerPort()  
        + path + "/";  
pageContext.setAttribute("basePath", basePath);
%>
<%
  String url = "<script>window.location.href='"+basePath+"login/toLoginAdmin'</script>";
  session.removeAttribute("user");
  session.removeAttribute("userId");
  out.println(url);
%>