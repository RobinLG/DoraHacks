//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//

package com.ssm.cqg.action;

import com.github.pagehelper.PageHelper;
import com.ssm.cqg.app.BcosApp;
import com.ssm.cqg.sample.EvidenceData;
import com.ssm.cqg.service.IEntService;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Iterator;
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
@RequestMapping({"/ent"})
public class SubmitAction {

//	@Autowired
//    private IEntService iEntService;
	
    public SubmitAction() {
    }

    
    @RequestMapping({"toIndex"})
    public String toIndex(HttpServletRequest request, Model model, @RequestParam(
    value = "pn",
    defaultValue = "1"
) Integer pn) {
        PageHelper.startPage(pn.intValue(), 20);
//        model.addAttribute("sf", map.get("cusf"));
//        model.addAttribute("xf", map1.get("cuxf"));
        return "homeZZ";
    }
    
    
    @RequestMapping({"toDetail"})
    public String toDetail(HttpServletRequest request, Model model, @RequestParam(
    value = "pn",
    defaultValue = "1"
) Integer pn) {
        String param = request.getParameter("param");
        System.out.println(param);
//        model.addAttribute("sf", map.get("cusf"));
//        model.addAttribute("xf", map1.get("cuxf"));

        return "homeDetail";
    }

	@RequestMapping({"toKey"})
	public String toKey(HttpServletRequest request, Model model) throws Exception {

//        model.addAttribute("xf", map1.get("cuxf"));
		// 签名
		String FIAT_DID = request.getParameter("FIAT_DID");
		System.out.println("------------FIAT_DID: " + FIAT_DID);
		BcosApp bcosApp = new BcosApp();
		boolean configure = bcosApp.loadConfig();
		String[] args = new String[5];
		args[0] = "send";
		args[1] = "user.jks";
		args[2] = "123456";
		args[3] = "123456";
		args[4] = FIAT_DID;
		EvidenceData evidenceData = bcosApp.getEvidence(args[1], args[2], args[3], args[4]);
		boolean falg = bcosApp.sendSignatureToBlockChain(args,evidenceData.getEvidenceHash());
		if(falg){
			System.out.println("-----------sendSignatureToBlockChain success！"+falg);
		}else{
			System.out.println("------------sendSignatureToBlockChain failed！"+falg);
		}
		return "homeIndex";
	}
    
    
    @RequestMapping({"toSaveEnt"})
    public String toSaveEnt(HttpServletRequest request,HttpServletResponse res, Model model) {
    	  String YEAR = "2019";
    	  String FIAT_DID = "";
    	  String IMPORTER_NUM = request.getParameter("IMPORTER_NUM");
    	  String IMPORTER_NAME = request.getParameter("IMPORTER_NAME");
    	  String SOURCE_AREA = request.getParameter("SOURCE_AREA");
    	  String IMPORT_AREA = request.getParameter("IMPORT_AREA");
    	  String TRANSPORT = request.getParameter("TRANSPORT");
    	  String GOODS_AREA = request.getParameter("GOODS_AREA");
    	  String WEIGHT = request.getParameter("WEIGHT");
    	  String DRIVER_ID = request.getParameter("DRIVER_ID");
    	  String COUNTER_ID = request.getParameter("COUNTER_ID");
    	  String CAR_ID = request.getParameter("CAR_ID");
    	  
    	  String TYPE_ID = request.getParameter("TYPE_ID");
    	  String SOURCE_AREA_GOODS = request.getParameter("SOURCE_AREA_GOODS");
    	  String PACK_TYPE = request.getParameter("PACK_TYPE");
    	  String PACK_NUM = request.getParameter("PACK_NUM");
    	  String GOODS_NUM = request.getParameter("GOODS_NUM");
    	  String GOODS_WEIGHT = request.getParameter("GOODS_WEIGHT");
    	  String GOODS_UINT = request.getParameter("GOODS_UINT");
    	  String GOODS_PRICE = request.getParameter("GOODS_PRICE");
    	  String MONEY_TYPE = request.getParameter("MONEY_TYPE");
    	  
    	  Map params = new HashMap();
    	  params.put("YEAR", YEAR);
    	  params.put("FIAT_DID", FIAT_DID);
    	  params.put("IMPORTER_NUM", IMPORTER_NUM);
    	  params.put("IMPORTER_NAME", IMPORTER_NAME);
    	  params.put("SOURCE_AREA", SOURCE_AREA);
    	  params.put("IMPORT_AREA", IMPORT_AREA);
    	  params.put("TRANSPORT", TRANSPORT);
    	  params.put("GOODS_AREA", GOODS_AREA);
    	  params.put("WEIGHT", WEIGHT);
    	  params.put("DRIVER_ID", DRIVER_ID);
    	  params.put("COUNTER_ID", COUNTER_ID);
    	  params.put("CAR_ID", CAR_ID);
    	  params.put("TYPE_ID", TYPE_ID);
    	  params.put("SOURCE_AREA_GOODS", SOURCE_AREA_GOODS);
    	  params.put("PACK_TYPE", PACK_TYPE);
    	  params.put("PACK_NUM", PACK_NUM);
    	  params.put("GOODS_NUM", GOODS_NUM);
    	  params.put("GOODS_WEIGHT", GOODS_WEIGHT);
    	  params.put("GOODS_UINT", GOODS_UINT);
    	  params.put("GOODS_PRICE", GOODS_PRICE);
    	  params.put("MONEY_TYPE", MONEY_TYPE);
    	  JSONObject jsonObject;
    	  boolean flag = false;
    	  HashMap result = new HashMap();
    	  try {
//    	  flag = this.iEntService.insertEntTable(params);
//    	  flag = this.iEntService.insertEntGoods(params);
    	  if(flag){
    		  result.put("result", "1");
    	  }else{
    		  result.put("result", "2"); 
    	  }
    	  jsonObject = JSONObject.fromObject(result);
    	  res.setCharacterEncoding("UTF-8");
         
			res.getWriter().println(jsonObject.toString());
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        return null;
    }

 

  
}
