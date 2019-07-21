//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//

package com.ssm.cqg.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

@Repository
public interface IParamDao {
    boolean insertParam(Map var1);

    List<Map> queryParam();

    List<Map> queryParamByType(Map var1);

    Map queryParamById(Map var1);

    boolean updateParamByName(Map var1);

    boolean updateParamById(Map var1);

    boolean deleteParam(Map var1);
}
