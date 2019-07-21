//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//

package com.ssm.cqg.service.impl;

import com.ssm.cqg.dao.IUserDao;
import com.ssm.cqg.model.User;
import com.ssm.cqg.service.IUserService;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("userService")
@Transactional
public class UserService implements IUserService {
    @Autowired
    private IUserDao iUserDao;

    public UserService() {
    }

    public void saveUser(User user) {
        this.iUserDao.saveUser(user);
    }

    public boolean updateUser(User user) {
        return this.iUserDao.updateUser(user);
    }

    public boolean deleteUser(String id) {
        return this.iUserDao.deleteUser(id);
    }

    public Map queryUserById(String id) {
        return this.iUserDao.queryUserById(id);
    }

    public List<Map> queryAllUser(Map param) {
        return this.iUserDao.queryAllUser(param);
    }

    public List<Map> queryRefereeById(String referee) {
        return this.iUserDao.queryRefereeById(referee);
    }

    public List<Map> querySerialById(String userId) {
        return this.iUserDao.querySerialById(userId);
    }

    public boolean shenqingdaili(Map param) {
        return this.iUserDao.shenqingdaili(param);
    }

    public Map queryShenqingById(String userId) {
        return this.iUserDao.queryShenqingById(userId);
    }

    public boolean insertSerialById(Map param) {
        return this.iUserDao.insertSerialById(param);
    }

    public List<Map> queryShenqing(Map param) {
        return this.iUserDao.queryShenqing(param);
    }

    public boolean updateShenQing(Map param) {
        return this.iUserDao.updateShenQing(param);
    }

    public List<Map> querySerialAll(Map param) {
        return this.iUserDao.querySerialAll(param);
    }

    public boolean updateTiXian(Map param) {
        return this.iUserDao.updateTiXian(param);
    }

    public boolean updateChongzhi(Map param) {
        return this.iUserDao.updateChongzhi(param);
    }

    public boolean updateShoudongChongzhi(Map param) {
        return this.iUserDao.updateShoudongChongzhi(param);
    }
    
    public boolean updateEdit(Map param) {
        return this.iUserDao.updateEdit(param);
    }

    public boolean saveJqr(Map param) {
        return this.iUserDao.saveJqr(param);
    }

    public boolean deleteJqr(Map param) {
        return this.iUserDao.deleteJqr(param);
    }
}
