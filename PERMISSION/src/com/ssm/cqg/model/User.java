//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//

package com.ssm.cqg.model;

import java.io.Serializable;

public class User implements Serializable {
    private String id;
    private String username;
    private String weixinName;
    private String phone;
    private String money;
    private String charges;
    private String pwd;
    private String referee;
    private String usertype;
    private String status;

    public User() {
    }

    public User(String id, String username, String weixinName, String phone, String money, String charges, String pwd, String referee, String usertype, String status) {
        this.id = id;
        this.username = username;
        this.weixinName = weixinName;
        this.phone = phone;
        this.money = money;
        this.charges = charges;
        this.pwd = pwd;
        this.referee = referee;
        this.usertype = usertype;
        this.status = status;
    }

    public String getStatus() {
        return this.status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getUsertype() {
        return this.usertype;
    }

    public void setUsertype(String usertype) {
        this.usertype = usertype;
    }

    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPhone() {
        return this.phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getMoney() {
        return this.money;
    }

    public void setMoney(String money) {
        this.money = money;
    }

    public String getCharges() {
        return this.charges;
    }

    public void setCharges(String charges) {
        this.charges = charges;
    }

    public String getPwd() {
        return this.pwd;
    }

    public void setPwd(String pwd) {
        this.pwd = pwd;
    }

    public String getReferee() {
        return this.referee;
    }

    public void setReferee(String referee) {
        this.referee = referee;
    }

    public String getWeixinName() {
        return this.weixinName;
    }

    public void setWeixinName(String weixinName) {
        this.weixinName = weixinName;
    }
}
