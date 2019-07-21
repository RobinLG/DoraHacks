//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//

package com.ssm.cqg.action;

import com.ssm.cqg.service.IUserService;
import java.util.Map;
import javax.annotation.Resource;
import org.springframework.ui.Model;

public class login {
    @Resource(
        name = "userService"
    )
    private IUserService iUserService;

    public login() {
    }

    public boolean Login(String name, String password, Model model) {
        if(this.iUserService.queryUserById(name) != null) {
            Map user = this.iUserService.queryUserById(name);
            return password.equals(user.get("password"));
        } else {
            return false;
        }
    }
}
