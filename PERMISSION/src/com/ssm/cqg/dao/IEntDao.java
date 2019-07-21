package com.ssm.cqg.dao;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;



@Repository
public interface IEntDao {
    
	boolean insertEntTable(Map var1);
	 
	public List<Map<String, Object>> queryList(Map<String, Object> param);

	public Map<String, Object> toQueryDetail(Map<String, Object> param);

	public int toUpdateStatus(Map<String, Object> param);

	public int auditUpdateStatu(Map<String, Object> param);
}