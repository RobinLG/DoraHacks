//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//

package com.ssm.cqg.service;

import java.util.List;
import java.util.Map;

public interface IEntService {
	boolean insertEntTable(Map var1);
	
	boolean insertEntMapping(Map var1);
	
	public List<Map<String, Object>> queryList(Map<String, Object> param);
	
	public Map<String, Object> toQueryDetail(Map<String, Object> param) ;

	public int toUpdateStatus(Map<String, Object> param);

	public int auditUpdateStatu(Map<String, Object> param);
}