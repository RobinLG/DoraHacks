//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//

package com.ssm.cqg.action;

import com.github.pagehelper.PageHelper;
import com.ssm.cqg.factory.BcosAppFactory;
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

import com.ssm.cqg.app.BcosApp;
import org.fisco.bcos.web3j.abi.datatypes.Address;
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

	@Autowired
    private IEntService iEntService;
	
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
    
    
    @RequestMapping({"toSaveEnt"})
    public String toSaveEnt(HttpServletRequest request,HttpServletResponse res, Model model) {
    	  String YEAR = "2019";
    	  String FIAT_DID = "123";
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
    	  String checkType = "1";
    	  params.put("CHECK_TYPE", checkType);
    	  JSONObject jsonObject;
    	  boolean flag = false;
    	  Map result = new HashMap();
    	  try {
    	  flag = this.iEntService.insertEntTable(params);
//    	  flag = this.iEntService.insertEntGoods(params);
    	  if(flag){
    		 
    		
    		  //待審核狀態:1-待審核，2-審核通過，3-審核不通過
    		  result.put("checkType", checkType);
    		  result.put("result", "1");
    		  
    	  }else{
    		  //失敗
    		  result.put("result", "2"); 
    	  }
    	  String callback = request.getParameter("callback");
    	  System.out.println("callback:"+callback);
    	  jsonObject = JSONObject.fromObject(result);
    	  res.setCharacterEncoding("UTF-8");
          res.getWriter().println(callback+"("+ jsonObject.toString() + ")");
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        return null;
    }
    
    @RequestMapping({"toAudit"})
    public String toAudit(HttpServletRequest request,HttpServletResponse res, Model model) throws Exception {
    	
    	String flatId = request.getParameter("flatId");
    	Map<String, Object> param = new HashMap<String, Object>();
    	param.put("flatId", flatId);
    	param.put("checkType", "2");

    	//取一些数据放入区块链里
		Map<String, Object> resultFiat = this.iEntService.toQueryDetail(param);
		Map<String, Object> importBlock = new HashMap();
		// 进口商名
		importBlock.put("IMPORTER_NAME", resultFiat.get("IMPORTER_NAME"));
		// 进口地
		importBlock.put("IMPORT_AREA", resultFiat.get("IMPORT_AREA"));
		// 运输方式
		importBlock.put("TRANSPORT", resultFiat.get("TRANSPORT"));
		// 重量
		importBlock.put("WEIGHT", resultFiat.get("WEIGHT"));
		// 稅款
		importBlock.put("TAX", resultFiat.get("TAX"));
		// 到岸價格
		importBlock.put("GOODS_PRICE", resultFiat.get("GOODS_PRICE"));

		JSONObject jsonObject = JSONObject.fromObject(importBlock);
		String StrJson = jsonObject.toString();

		Address fiatDid = null;
    	//Robin - 生成DID
		BcosApp bcosApp = BcosAppFactory.getInstance();
		boolean configure = bcosApp.loadConfig();
		fiatDid = bcosApp.newEvidence("depositor.jks", "123456", "123456", "0x0f74e2529e561b2749034a3d235da8cf04ab8bea", String.valueOf(System.currentTimeMillis()), StrJson);
		System.out.println("------------newEvidence success, newEvidenceAddress: " + fiatDid.toString());
//    	Address newEvidenceAddress=null;
//    	boolean configure = false;
//    	try {
//    		configure = bcosApp.loadConfig();
//    	} catch (Exception e) {
//    		e.printStackTrace();
//    	}
//    	BcosApp bcosApp = BcosAppFactory.getInstance();
//    	newEvidenceAddress = bcosApp.newEvidence(keyStoreFileName, keyStorePassword, keyPassword, address, evidenceId, evidenceHash)
    	//......
    	
    	
    	param.put("fiatDid", fiatDid.toString());
    	int result = this.iEntService.auditUpdateStatu(param);
    	System.out.println("audit result :"+result);
		/*
		try {
			res.setCharacterEncoding("UTF-8");
			res.getWriter().println(result);
		} catch (IOException e) {
			e.printStackTrace();
		}
		*/
    	return "redirect:/admin/toAdminIndex";
    }

    @RequestMapping({"toQueryList"})
    public String toQueryList(HttpServletRequest request,HttpServletResponse res, Model model) {
    	
    	String callback = request.getParameter("callback");
  	  
    	Map<String, Object> param = new HashMap<String, Object>();
    	List<Map<String, Object>> resultList = this.iEntService.queryList(param);
    	Map<String, Object> result = new HashMap<String, Object>();
    	result.put("dataList", resultList);
    	System.out.println("result:"+result);
    	JSONObject jsonObject = JSONObject.fromObject(result);
        
		try {
			res.setCharacterEncoding("UTF-8");
			res.getWriter().println(callback+"("+ jsonObject.toString() + ")");
			
		} catch (IOException e) {
			e.printStackTrace();
		}
		System.out.println("over");
		return null;
    }
    
    
    @RequestMapping({"toQueryDetail"})
    public void toQueryDetail(HttpServletRequest request,HttpServletResponse res, Model model) {
    	
    	String callback = request.getParameter("callback");
    	System.out.println("detail:"+callback);
    	String flatId = request.getParameter("FIAT_ID");
    	Map<String, Object> param = new HashMap<String, Object>();
    	param.put("flatId", flatId);
    	try {
    		System.out.println("param - type:"+param);
    		Map<String, Object> result = this.iEntService.toQueryDetail(param);
    		JSONObject jsonObject = JSONObject.fromObject(result);
			res.setCharacterEncoding("UTF-8");
			res.getWriter().println(callback+"("+ jsonObject.toString() + ")");
		} catch (IOException e) {
			e.printStackTrace();
		}
    	System.out.println("detail - over");
    }

    @RequestMapping({"toUpdateStatus"})
    public void toUpdateStatus(HttpServletRequest request,HttpServletResponse res, Model model) {
    	
    	String callback = request.getParameter("callback");
    	System.out.println("toUpdateStatus:"+callback);
    	String flatId = request.getParameter("FIAT_ID");
    	Map<String, Object> param = new HashMap<String, Object>();
    	param.put("flatId", flatId);
    	try {
    		System.out.println("param - type:"+param);
    		int result = this.iEntService.toUpdateStatus(param);
			res.setCharacterEncoding("UTF-8");
			res.getWriter().println(callback+"("+ result + ")");
		} catch (IOException e) {
			e.printStackTrace();
		}
    	
    	System.out.println("detail - over");
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

}
