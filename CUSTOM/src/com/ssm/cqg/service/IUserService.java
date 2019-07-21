//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//

package com.ssm.cqg.service;

import com.ssm.cqg.model.User;
import java.util.List;
import java.util.Map;

public interface IUserService {
    void saveUser(User var1);

    boolean updateUser(User var1);

    boolean deleteUser(String var1);

    Map queryUserById(String var1);

    List<Map> queryAllUser(Map var1);

    List<Map> queryRefereeById(String var1);

    List<Map> querySerialById(String var1);

    boolean shenqingdaili(Map var1);

    Map queryShenqingById(String var1);

    boolean insertSerialById(Map var1);

    List<Map> queryShenqing(Map var1);

    boolean updateShenQing(Map var1);

    List<Map> querySerialAll(Map var1);

    boolean updateTiXian(Map var1);

    boolean updateChongzhi(Map var1);
    
    boolean updateShoudongChongzhi(Map param);

    boolean updateEdit(Map var1);

    boolean saveJqr(Map var1);

    boolean deleteJqr(Map var1);
}
