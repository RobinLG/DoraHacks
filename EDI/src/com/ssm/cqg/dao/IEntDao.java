package com.ssm.cqg.dao;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.ssm.cqg.model.User;



@Repository
public interface IEntDao {
    
	 boolean insertEntTable(Map var1);
	 
	 boolean insertEntGoods(Map var1);
}