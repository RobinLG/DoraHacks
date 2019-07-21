//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//

package com.ssm.cqg.action;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.google.zxing.BarcodeFormat;
import com.google.zxing.MultiFormatWriter;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;
import com.ssm.cqg.model.User;
import com.ssm.cqg.service.IUserService;
import java.io.File;
import java.io.IOException;
import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping({"/user"})
public class UserAction {
    @Autowired
    private IUserService iUserService;

    public UserAction() {
    }

    @RequestMapping({"toAddUser"})
    public String toAddUser(Model model, HttpServletRequest request) {
        String referee_id = request.getParameter("referee_id");
        model.addAttribute("referee", referee_id);
        return "addUser";
    }

    @RequestMapping({"addUser"})
    public String addUser(Model model, User user) {
        if(user != null) {
            this.iUserService.saveUser(user);
        }

        return "redirect:/login/toLogin";
    }

    @RequestMapping({"updateUser"})
    public String UpdateUser(Model model, User user) {
        return this.iUserService.updateUser(user)?"redirect:/user/toMe":"/error";
    }

    @RequestMapping({"getAllUser"})
    public String getAllUser(Model model, HttpServletResponse res) {
        HashMap param = new HashMap();
        List user = this.iUserService.queryAllUser(param);
        model.addAttribute("userList", user);
        HashMap result = new HashMap();
        new JSONObject();
        result.put("result", model);
        JSONObject jsonObject = JSONObject.fromObject(result);
        res.setCharacterEncoding("UTF-8");

        try {
            res.getWriter().println(jsonObject.toString());
        } catch (IOException var8) {
            var8.printStackTrace();
        }

        return null;
    }

    @RequestMapping({"/getUser"})
    public String getUser(String id, Model model) {
        model.addAttribute("user", this.iUserService.queryUserById(id));
        return "editUser";
    }

    @RequestMapping({"/delUser"})
    public String deleteUser(String id, Model model) {
        model.addAttribute("user", Boolean.valueOf(this.iUserService.deleteUser(id)));
        return "redirect:/user/userInfo";
    }

    @RequestMapping({"editPSW"})
    public String editPSW(Model model, HttpServletRequest request, HttpServletResponse res) {
        HashMap param = new HashMap();
        HashMap result = new HashMap();
        param.put("customer_id", request.getParameter("customer_id"));
        param.put("psw", request.getParameter("psw"));
        boolean flag = this.iUserService.updateEdit(param);
        new JSONObject();

        try {
            if(flag) {
                result.put("result", "1");
            } else {
                result.put("result", "0");
            }

            JSONObject jsonObject = JSONObject.fromObject(result);
            res.setCharacterEncoding("UTF-8");
            res.getWriter().println(jsonObject.toString());
        } catch (Exception var9) {
            var9.printStackTrace();
        }

        return null;
    }

    @RequestMapping({"/logout"})
    public String logout(Model model, HttpServletResponse res) {
        HashMap result = new HashMap();
        new JSONObject();
        result.put("result", "1");
        JSONObject jsonObject = JSONObject.fromObject(result);
        res.setCharacterEncoding("UTF-8");
        System.out.println("logout");
        model.addAttribute("result", "1");

        try {
            res.getWriter().println(jsonObject.toString());
        } catch (IOException var6) {
            var6.printStackTrace();
        }

        return "logout";
    }

    @RequestMapping({"userInfo"})
    public String getUsers(HttpServletRequest request, @RequestParam(
    value = "pn",
    defaultValue = "1"
) Integer pn, Model model, HttpServletResponse res) {
        HashMap param = new HashMap();
        if(request.getParameter("checkName") != null && !"".equals(request.getParameter("checkName"))) {
            param.put("userName", request.getParameter("checkName"));
        }

        PageHelper.startPage(pn.intValue(), 20);
        List users = this.iUserService.queryAllUser(param);
        PageInfo page = new PageInfo(users, 5);
        model.addAttribute("pageInfo", page);
        HashMap result = new HashMap();
        new JSONObject();
        result.put("result", model);
        JSONObject jsonObject = JSONObject.fromObject(result);
        res.setCharacterEncoding("UTF-8");

        try {
            res.getWriter().println(jsonObject.toString());
        } catch (IOException var11) {
            var11.printStackTrace();
        }

        return null;
    }

    @RequestMapping({"addChongZhi"})
    public String addChongZhi(Model model, HttpServletRequest request, HttpServletResponse res) {
        HashMap param = new HashMap();
        HashMap result = new HashMap();
        String ip = getIpAddress(request);
        String customer_id = request.getParameter("customer_id");
        String chongzhi = request.getParameter("chongzhi");
        HttpSession session = request.getSession();
        String userId = (String)session.getAttribute("user");
        System.out.println(userId);
        param.put("customer_id", customer_id);
        param.put("integral", chongzhi);
        new JSONObject();
        JSONObject jsonObject;
        if(this.iUserService.updateShoudongChongzhi(param)) {
        	Date date = new Date();
        	SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
        	String datestr = sdf.format(date);
        	System.out.println("充值ip:"+ip+" 充值时间:"+datestr+" 充值ID:"+customer_id+" 充值金额:"+chongzhi+" 操作人:"+userId);
            result.put("result", "1");
            jsonObject = JSONObject.fromObject(result);
            res.setCharacterEncoding("UTF-8");
        } else {
            result.put("result", "2");
            jsonObject = JSONObject.fromObject(result);
            res.setCharacterEncoding("UTF-8");
        }

        try {
            res.getWriter().println(jsonObject.toString());
        } catch (IOException var10) {
            var10.printStackTrace();
        }

        return null;
    }

    @RequestMapping({"editPsw"})
    public String editPsw(Model model, HttpServletRequest request, HttpServletResponse res) {
        HashMap param = new HashMap();
        HashMap result = new HashMap();
        String customer_id = request.getParameter("customer_id");
        String nickname = request.getParameter("nickname");
        param.put("customer_id", customer_id);
        param.put("nickname", nickname);
        if(request.getParameter("psw") != null && !"".equals(request.getParameter("psw"))) {
            String jsonObject = request.getParameter("psw");
            param.put("psw", jsonObject);
        }

        new JSONObject();
        JSONObject jsonObject1;
        if(this.iUserService.updateEdit(param)) {
            result.put("result", "1");
            jsonObject1 = JSONObject.fromObject(result);
            res.setCharacterEncoding("UTF-8");
        } else {
            result.put("result", "2");
            jsonObject1 = JSONObject.fromObject(result);
            res.setCharacterEncoding("UTF-8");
        }

        try {
            res.getWriter().println(jsonObject1.toString());
        } catch (IOException var10) {
            var10.printStackTrace();
        }

        return null;
    }

    @RequestMapping({"editSj"})
    public String editSj(Model model, HttpServletRequest request, HttpServletResponse res) {
        HashMap param = new HashMap();
        HashMap result = new HashMap();
        String customer_id = request.getParameter("customer_id");
        String agency_id = request.getParameter("newId");
        param.put("customer_id", customer_id);
        param.put("agency_id", agency_id);
        new JSONObject();
        JSONObject jsonObject;
        if(this.iUserService.updateEdit(param)) {
            result.put("result", "1");
            jsonObject = JSONObject.fromObject(result);
            res.setCharacterEncoding("UTF-8");
        } else {
            result.put("result", "2");
            jsonObject = JSONObject.fromObject(result);
            res.setCharacterEncoding("UTF-8");
        }

        try {
            res.getWriter().println(jsonObject.toString());
        } catch (IOException var10) {
            var10.printStackTrace();
        }

        return null;
    }

    @RequestMapping({"editUserType"})
    public String editUserType(Model model, HttpServletRequest request, HttpServletResponse res) {
        HashMap param = new HashMap();
        HashMap result = new HashMap();
        String customer_id = request.getParameter("customer_id");
        String user_type = request.getParameter("usertype");
        param.put("customer_id", customer_id);
        param.put("user_type", user_type);
        new JSONObject();
        JSONObject jsonObject;
        if(this.iUserService.updateEdit(param)) {
            result.put("result", "1");
            jsonObject = JSONObject.fromObject(result);
            res.setCharacterEncoding("UTF-8");
        } else {
            result.put("result", "2");
            jsonObject = JSONObject.fromObject(result);
            res.setCharacterEncoding("UTF-8");
        }

        try {
            res.getWriter().println(jsonObject.toString());
        } catch (IOException var10) {
            var10.printStackTrace();
        }

        return null;
    }

    @RequestMapping({"editEnable"})
    public String editEnable(Model model, HttpServletRequest request, HttpServletResponse res) {
        HashMap param = new HashMap();
        HashMap result = new HashMap();
        String customer_id = request.getParameter("customer_id");
        String enable = request.getParameter("enable");
        param.put("customer_id", customer_id);
        param.put("enable", enable);
        new JSONObject();
        JSONObject jsonObject;
        if(this.iUserService.updateEdit(param)) {
            result.put("result", "1");
            jsonObject = JSONObject.fromObject(result);
            res.setCharacterEncoding("UTF-8");
        } else {
            result.put("result", "2");
            jsonObject = JSONObject.fromObject(result);
            res.setCharacterEncoding("UTF-8");
        }

        try {
            res.getWriter().println(jsonObject.toString());
        } catch (IOException var10) {
            var10.printStackTrace();
        }

        return null;
    }

    @RequestMapping({"toMe"})
    public String toMe(Model model, HttpServletRequest request) {
        HttpSession session = request.getSession();
        String userId = (String)session.getAttribute("user");
        Map user = this.iUserService.queryUserById(userId);
        model.addAttribute("userDetail", user);
        List list = this.iUserService.queryRefereeById(userId);
        if(list != null) {
            model.addAttribute("referCount", Integer.valueOf(list.size()));
        } else {
            model.addAttribute("referCount", Integer.valueOf(0));
        }

        model.addAttribute("serial", this.iUserService.querySerialById(userId));
        return "my";
    }

    @RequestMapping({"toXiaxian"})
    public String toXiaxian(@RequestParam(
    value = "pn",
    defaultValue = "1"
) Integer pn, Model model, HttpServletRequest request) {
        HttpSession session = request.getSession();
        String userId = (String)session.getAttribute("user");
        PageHelper.startPage(pn.intValue(), 20);
        List list = this.iUserService.queryRefereeById(userId);
        PageInfo page = new PageInfo(list, 6);
        model.addAttribute("pageInfo", page);
        return "xiaxian";
    }

    @RequestMapping({"toXiaxianJiLu"})
    public String toXiaxianJiLu(@RequestParam(
    value = "pn",
    defaultValue = "1"
) Integer pn, Model model, HttpServletRequest request) {
        String userId = request.getParameter("xiaxianId");
        HashMap param = new HashMap();
        param.put("userId", userId);
        model.addAttribute("xiaxianUser", this.iUserService.queryUserById(userId));
        return "xiaxiangoumai";
    }

    @RequestMapping({"toTiXian"})
    public String toTiXian(@RequestParam(
    value = "pn",
    defaultValue = "1"
) Integer pn, Model model, HttpServletRequest request) {
        HttpSession session = request.getSession();
        String userId = (String)session.getAttribute("user");
        PageHelper.startPage(pn.intValue(), 20);
        List list = this.iUserService.querySerialById(userId);
        PageInfo page = new PageInfo(list, 6);
        model.addAttribute("pageInfo", page);
        return "tixianjilu";
    }

    @RequestMapping({"getErWeiCode"})
    public void getErWeiCode(HttpServletRequest request, HttpServletResponse response) {
        new Random();
        int i = (int)(Math.random() * 1000000.0D);
        String userId = request.getParameter("userId");
        String path = request.getParameter("path");
        String url = path + "/login/toLogin?referee_id=" + userId + "&abc=" + i;
        String url2 = "http://www.2233kktt.com?referee_id=" + userId;
        System.out.println("~~~~~" + path);
        HashMap result = new HashMap();
        result.put("result", "0");
        new JSONObject();
        if(url != null && !"".equals(url)) {
            short width = 200;
            short height = 200;

            try {
                BitMatrix e = (new MultiFormatWriter()).encode(url, BarcodeFormat.QR_CODE, height, width);
                Object stream = null;
                String reaPath = request.getSession().getServletContext().getRealPath("");
                System.out.println(reaPath);
                File qrCodeFile = new File(reaPath + "/" + userId + i + ".png");
                MatrixToImageWriter.writeToPath(e, "png", qrCodeFile.toPath());
                result.put("result", "1");
                result.put("url", path + userId + i + ".png");
                result.put("urlCode", url2);
                JSONObject jsonObject = JSONObject.fromObject(result);
                response.getWriter().println(jsonObject.toString());
            } catch (Exception var17) {
                var17.printStackTrace();
            }
        }

    }

    @RequestMapping({"toAddDaili"})
    public String toAddDaili(Model model, HttpServletRequest request) {
        return "shenqingdaili";
    }

    @RequestMapping({"addDaili"})
    public String addDaili(Model model, HttpServletRequest request) {
        HashMap param = new HashMap();
        HttpSession session = request.getSession();
        String userId = (String)session.getAttribute("user");
        String phone = request.getParameter("phone");
        String weixin = request.getParameter("weixin");
        param.put("userId", userId);
        param.put("phone", phone);
        param.put("weixin", weixin);
        new HashMap();
        Map res = this.iUserService.queryShenqingById(userId);
        if(res == null) {
            this.iUserService.shenqingdaili(param);
        }

        return "redirect:/user/toMe";
    }

    @RequestMapping({"toEditPwd"})
    public String toEditPwd(Model model, HttpServletRequest request) {
        return "editPwd";
    }

    @RequestMapping({"toEditWeiXinName"})
    public String toEditW(Model model, HttpServletRequest request) {
        return "editWeiXinName";
    }

    @RequestMapping({"toGetCash"})
    public String toGetCash(Model model, HttpServletRequest request) {
        HttpSession session = request.getSession();
        String userId = (String)session.getAttribute("user");
        Map user = this.iUserService.queryUserById(userId);
        model.addAttribute("userDetail", user);
        return "getCash";
    }

    @RequestMapping({"GetCash"})
    public String GetCash(Model model, HttpServletRequest request, User user) {
        HashMap param = new HashMap();
        HttpSession session = request.getSession();
        String userId = (String)session.getAttribute("user");
        String pay = request.getParameter("pay");
        String cash = request.getParameter("cash");
        String weixin = request.getParameter("weixin");
        String zhifu = request.getParameter("zhifu");
        param.put("userId", userId);
        param.put("cash", pay);
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
        String time = sdf.format(new Date());
        param.put("datatime", time);
        param.put("weixin", weixin);
        param.put("fangshi", zhifu);
        double ret = Double.valueOf(cash).doubleValue() - Double.valueOf(pay).doubleValue();
        BigDecimal bg = new BigDecimal(ret);
        double f1 = bg.setScale(2, 4).doubleValue();
        System.out.println(f1);
        String result = String.valueOf(f1);
        user.setMoney(result);
        if(this.iUserService.insertSerialById(param)) {
            this.iUserService.updateUser(user);
        }

        return "redirect:/user/toMe";
    }

    @RequestMapping({"/checkUser"})
    public String checkUser(Model model, HttpServletRequest req, HttpServletResponse res) {
        String id = req.getParameter("userId");
        Map user = this.iUserService.queryUserById(id);
        HashMap result = new HashMap();
        JSONObject jsonObject = new JSONObject();

        try {
            if(user == null) {
                result.put("result", "0");
                jsonObject = JSONObject.fromObject(result);
                res.getWriter().println(jsonObject.toString());
            } else {
                result.put("result", "1");
                jsonObject = JSONObject.fromObject(result);
                res.getWriter().println(jsonObject.toString());
            }
        } catch (IOException var9) {
            var9.printStackTrace();
        }

        System.out.println(jsonObject.toString());
        return null;
    }

    @RequestMapping({"addjiqr"})
    public String addjiqr(Model model, HttpServletRequest request, HttpServletResponse res) {
        String username = request.getParameter("username");
        String nickname = request.getParameter("nickname");
        HashMap param = new HashMap();
        param.put("username", username);
        param.put("nickname", nickname);
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Date date = new Date();
        String datestr = sdf.format(date);
        param.put("create_time", datestr);
        HashMap result = new HashMap();
        new JSONObject();

        try {
            JSONObject jsonObject;
            if(this.iUserService.saveJqr(param)) {
                result.put("result", "1");
                result.put("ctime", datestr);
                jsonObject = JSONObject.fromObject(result);
                res.getWriter().println(jsonObject.toString());
            } else {
                result.put("result", "2");
                jsonObject = JSONObject.fromObject(result);
                res.getWriter().println(jsonObject.toString());
            }
        } catch (IOException var13) {
            var13.printStackTrace();
        }

        return null;
    }

    @RequestMapping({"deljiqr"})
    public String deljiqr(Model model, HttpServletRequest request, HttpServletResponse res) {
        String customer_id = request.getParameter("customer_id");
        HashMap param = new HashMap();
        param.put("customer_id", customer_id);
        HashMap result = new HashMap();
        new JSONObject();

        try {
            JSONObject jsonObject;
            if(this.iUserService.deleteJqr(param)) {
                result.put("result", "1");
                jsonObject = JSONObject.fromObject(result);
                res.getWriter().println(jsonObject.toString());
            } else {
                result.put("result", "2");
                jsonObject = JSONObject.fromObject(result);
                res.getWriter().println(jsonObject.toString());
            }
        } catch (IOException var9) {
            var9.printStackTrace();
        }

        return null;
    }
    
    public static String getIpAddress(HttpServletRequest request) {  
    	         String ip = request.getHeader("x-forwarded-for");  
    	         if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {  
    	             ip = request.getHeader("Proxy-Client-IP");  
    	         }  
    	         if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {  
    	             ip = request.getHeader("WL-Proxy-Client-IP");  
    	         }  
    	         if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {  
    	             ip = request.getHeader("HTTP_CLIENT_IP");  
    	         }  
    	         if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {  
    	             ip = request.getHeader("HTTP_X_FORWARDED_FOR");  
    	         }  
    	         if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {  
    	             ip = request.getRemoteAddr();  
    	         }  
    	         return ip;  
    	     }  
}
