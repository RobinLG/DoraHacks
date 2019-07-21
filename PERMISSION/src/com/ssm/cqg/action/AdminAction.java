//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//

package com.ssm.cqg.action;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.ssm.cqg.model.User;
import com.ssm.cqg.service.IEntService;
import com.ssm.cqg.service.IUserService;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

@Controller
@RequestMapping({ "/admin" })
public class AdminAction {
	@Autowired
	private IUserService iUserService;
	
	@Autowired
    private IEntService iEntService;

	public AdminAction() {
	}

	@RequestMapping({ "toAdminIndex" })
	public String toAdminIndex(HttpServletRequest request, Model model,
			@RequestParam(value = "pn", defaultValue = "1") Integer pn) {

		Map<String, Object> param = new HashMap<String, Object>();
		param.put("checkType", "1");
		List<Map<String, Object>> waitAudiList = this.iEntService.queryList(param);
    	System.out.println("waitAuditList:"+ waitAudiList);
    	request.setAttribute("waitAuditList", waitAudiList);
    	
		return "home";
	}

	@RequestMapping({ "toIndex" })
	public String toIndex(HttpServletRequest request, Model model,
			@RequestParam(value = "pn", defaultValue = "1") Integer pn) {
		PageHelper.startPage(pn.intValue(), 20);
		return "homeIndex";
	}

}
