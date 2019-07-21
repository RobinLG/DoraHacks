//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//

package com.ssm.cqg.service.impl;

import com.ssm.cqg.dao.IEntDao;
import com.ssm.cqg.model.User;
import com.ssm.cqg.service.IEntService;

import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("entService")
@Transactional
public class EntService implements IEntService {
    @Autowired
    private IEntDao iEntDao;

	@Override
	public boolean insertEntTable(Map var1) {
		return this.iEntDao.insertEntTable(var1);
	}
	
	@Override
	public boolean insertEntGoods(Map var1) {
		return this.iEntDao.insertEntGoods(var1);
	}

}
