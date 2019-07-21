//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//

package com.ssm.cqg.action;


import com.ssm.cqg.service.IUserService;

import sun.security.provider.MD5;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.util.Map;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping({"/login"})
public class LoginAction {
    @Autowired
    private IUserService iUserService;

    public LoginAction() {
    }

    @RequestMapping({"toLogin"})
    public String Login(Model model, HttpServletRequest request) {
        String referee_id = request.getParameter("referee_id");
        model.addAttribute("referee", referee_id);
        return null;
    }

    @RequestMapping({"toLoginAdmin"})
    public String toLoginAdmin(Model model, HttpServletRequest request) {
        return "login_admin";
    }

    @RequestMapping({"checkAdmin"})
    public String checkAdmin(Model model, HttpServletRequest request,HttpServletResponse res) {
        String userName = request.getParameter("user");
        String pwd = request.getParameter("password");
        Map user = (Map) this.iUserService.queryUserById(userName);
        try{
        
        if(user != null) {
            if(user.get("password").equals(pwd)) {
                if(("" + user.get("user_type")).equals("0")) {
                    model.addAttribute("result", "true");
                    model.addAttribute("user", userName);
                    model.addAttribute("userId", user.get("customer_id"));
                    model.addAttribute("pwd", pwd);
                    Cookie c = new Cookie("cqsscUserName",userName+"-"+pwd);
                    c.setPath(request.getContextPath());
                    c.setMaxAge(3600*24);
                    res.addCookie(c);
                } else {
                    model.addAttribute("result", "false");
                }
            } else {
                model.addAttribute("result", "false");
            }
        } else {
            model.addAttribute("result", "false");
        }

        }catch(Exception e){
        	
        }
        return "login_code_admin";
    	
    }
    
    public String getMD5Str(String str) throws Exception {
        try {
            // ����һ��MD5���ܼ���ժҪ
            MessageDigest md = MessageDigest.getInstance("MD5");
            // ����md5����
            md.update(str.getBytes());
            // digest()���ȷ������md5 hashֵ������ֵΪ8Ϊ�ַ�������Ϊmd5 hashֵ��16λ��hexֵ��ʵ���Ͼ���8λ���ַ�
            // BigInteger������8λ���ַ���ת����16λhexֵ�����ַ�������ʾ���õ��ַ�����ʽ��hashֵ
            return new BigInteger(1, md.digest()).toString(16);
        } catch (Exception e) {
            throw new Exception("MD5���ܳ��ִ���"+e.toString());
        }
    }
}
