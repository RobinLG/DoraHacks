/*
Navicat MySQL Data Transfer

Source Server         : dorahacksDatabase
Source Server Version : 50633
Source Host           : 47.111.135.90:3306
Source Database       : CUSTOM

Target Server Type    : MYSQL
Target Server Version : 50633
File Encoding         : 65001

Date: 2019-07-31 12:09:59
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for customer
-- ----------------------------
DROP TABLE IF EXISTS `customer`;
CREATE TABLE `customer` (
  `customer_id` int(100) NOT NULL AUTO_INCREMENT COMMENT '客户唯一标识',
  `nickname` varchar(100) NOT NULL COMMENT '昵称',
  `username` varchar(100) NOT NULL COMMENT '登录账号',
  `password` varchar(100) NOT NULL COMMENT '密码',
  `wechat_id` varchar(100) DEFAULT NULL COMMENT '微信号',
  `integral` double(100,3) NOT NULL COMMENT '当前积分',
  `create_time` datetime NOT NULL COMMENT '账号创建时间',
  `agency_id` int(32) DEFAULT NULL,
  `charges` double(100,3) NOT NULL DEFAULT '0.000' COMMENT '佣金',
  `user_type` int(1) DEFAULT NULL COMMENT '用户类型   0：权限部门  1：海关  2:电贸   3：统计局',
  `phone` varchar(20) DEFAULT NULL,
  `sex` int(1) DEFAULT NULL COMMENT '0:男  1:女',
  `enable` int(1) DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `extension_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`customer_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of customer
-- ----------------------------
INSERT INTO `customer` VALUES ('2', '管理员1', 'AdminOTT', '123456', '', '0.000', '2018-08-05 20:43:21', null, '0.000', '0', null, null, '1', null, null);

-- ----------------------------
-- Table structure for DEMO_MAPPING
-- ----------------------------
DROP TABLE IF EXISTS `DEMO_MAPPING`;
CREATE TABLE `DEMO_MAPPING` (
  `MAPPING_ID` int(30) NOT NULL AUTO_INCREMENT,
  `DID` varchar(100) DEFAULT NULL,
  `CHECK_TYPE` varchar(30) DEFAULT NULL COMMENT '1：待審核  2：審核通過  3：待清關',
  PRIMARY KEY (`MAPPING_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of DEMO_MAPPING
-- ----------------------------
