/*
Navicat MySQL Data Transfer

Source Server         : dorahacksDatabase
Source Server Version : 50633
Source Host           : 47.111.135.90:3306
Source Database       : PERMISSION

Target Server Type    : MYSQL
Target Server Version : 50633
File Encoding         : 65001

Date: 2019-07-31 12:10:34
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
  `agency_id` int(32) DEFAULT NULL COMMENT '推荐人id',
  `charges` double(100,3) NOT NULL DEFAULT '0.000',
  `user_type` int(1) DEFAULT NULL COMMENT '用户类型   ',
  `phone` varchar(20) DEFAULT NULL COMMENT '用户电话',
  `sex` int(1) DEFAULT NULL COMMENT '0:男  1:女',
  `enable` int(1) DEFAULT NULL COMMENT '0:禁用  1:使用中 2:已删除',
  `remark` varchar(255) DEFAULT NULL,
  `extension_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`customer_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of customer
-- ----------------------------
INSERT INTO `customer` VALUES ('2', 'AdminPER', 'AdminPER', '123456', '', '0.000', '2018-08-05 20:43:21', null, '0.000', '0', null, null, '1', null, null);

-- ----------------------------
-- Table structure for DEMO_FIAT
-- ----------------------------
DROP TABLE IF EXISTS `DEMO_FIAT`;
CREATE TABLE `DEMO_FIAT` (
  `FIAT_ID` int(11) NOT NULL AUTO_INCREMENT,
  `YEAR` varchar(255) NOT NULL,
  `FIAT_DID` varchar(100) DEFAULT NULL,
  `IMPORTER_NUM` varchar(30) DEFAULT NULL,
  `IMPORTER_NAME` varchar(30) DEFAULT NULL,
  `IMPORT_AREA` varchar(30) DEFAULT NULL,
  `TRANSPORT` varchar(30) DEFAULT NULL,
  `GOODS_AREA` varchar(30) DEFAULT NULL,
  `WEIGHT` varchar(30) DEFAULT NULL,
  `DRIVER_ID` varchar(30) DEFAULT NULL,
  `COUNTER_ID` varchar(30) DEFAULT NULL,
  `CAR_ID` varchar(30) DEFAULT NULL,
  `TYPE_ID` varchar(30) NOT NULL,
  `SOURCE_AREA` varchar(30) DEFAULT NULL,
  `PACK_TYPE` varchar(30) DEFAULT NULL,
  `PACK_NUM` varchar(30) DEFAULT NULL,
  `GOODS_NUM` varchar(30) DEFAULT NULL,
  `GOODS_WEIGHT` varchar(30) DEFAULT NULL,
  `GOODS_UINT` varchar(30) DEFAULT NULL,
  `GOODS_PRICE` varchar(30) DEFAULT NULL,
  `MONEY_TYPE` varchar(30) DEFAULT NULL,
  `CHECK_TYPE` varchar(30) DEFAULT NULL,
  `TAX` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`FIAT_ID`,`YEAR`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of DEMO_FIAT
-- ----------------------------
INSERT INTO `DEMO_FIAT` VALUES ('21', '2019', '0x5e84195d19040bab2eb1d158c3109186d3c17123', '20190720110', '陳記', 'A', 'A', '毛里求斯', '1080', 'CA8738', '8976-2342-765ct', 'VS983-90', '藥品', 'A', '盒裝', '600', '6000', '1080', 'A', '103848', 'RMB', '4', null);
INSERT INTO `DEMO_FIAT` VALUES ('22', '2019', '0xd4eb383ed4284d6f7e673fb9bb0c8faa50b47080', '20190720110', '陳記', 'A', 'A', '毛里求斯', '1080', 'CA8738', '8976-2342-765ct', 'VS983-90', '藥品', 'A', '盒裝', '600', '6000', '1080', 'A', '103848', 'RMB', '4', null);
INSERT INTO `DEMO_FIAT` VALUES ('23', '2019', '0xdcf4aa1195e636ee2197d7ecd09ba068bec2d4dd', '20190720110', '陳記', 'A', 'A', '毛里求斯', '1080', 'CA8738', '8976-2342-765ct', 'VS983-90', '藥品', 'A', '盒裝', '600', '6000', '1080', 'A', '103848', 'RMB', '4', null);
INSERT INTO `DEMO_FIAT` VALUES ('24', '2019', '123', '20190720110', '陳記', 'A', 'A', '毛里求斯', '1080', 'CA8738', '8976-2342-765ct', 'VS983-90', '藥品', 'A', '盒裝', '600', '6000', '1080', 'A', '103848', 'RMB', '4', null);
INSERT INTO `DEMO_FIAT` VALUES ('25', '2019', '123', '20190720110', '陳記', 'A', 'A', '毛里求斯', '1080', 'CA8738', '8976-2342-765ct', 'VS983-90', '藥品', 'A', '盒裝', '600', '6000', '1080', 'A', '103848', 'RMB', '4', null);
INSERT INTO `DEMO_FIAT` VALUES ('26', '2019', '123', '20190720110', '陳記', 'A', 'A', '毛里求斯', '1080', 'CA8738', '8976-2342-765ct', 'VS983-90', '藥品', 'A', '盒裝', '600', '6000', '1080', 'A', '103848', 'RMB', '4', null);

-- ----------------------------
-- Table structure for DEMO_GOODS
-- ----------------------------
DROP TABLE IF EXISTS `DEMO_GOODS`;
CREATE TABLE `DEMO_GOODS` (
  `GOODS_ID` int(20) NOT NULL AUTO_INCREMENT,
  `TYPE_ID` varchar(30) NOT NULL,
  `SOURCE_AREA` varchar(30) DEFAULT NULL,
  `PACK_TYPE` varchar(30) DEFAULT NULL,
  `PACK_NUM` varchar(30) DEFAULT NULL,
  `GOODS_NUM` varchar(30) DEFAULT NULL,
  `GOODS_WEIGHT` varchar(30) DEFAULT NULL,
  `GOODS_UINT` varchar(30) DEFAULT NULL,
  `GOODS_PRICE` varchar(30) DEFAULT '',
  `MONEY_TYPE` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`GOODS_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of DEMO_GOODS
-- ----------------------------

-- ----------------------------
-- Table structure for DEMO_MAPPING
-- ----------------------------
DROP TABLE IF EXISTS `DEMO_MAPPING`;
CREATE TABLE `DEMO_MAPPING` (
  `DID` varchar(100) NOT NULL,
  `CHECK_TYPE` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`DID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of DEMO_MAPPING
-- ----------------------------

-- ----------------------------
-- Table structure for DEMO_TYPE
-- ----------------------------
DROP TABLE IF EXISTS `DEMO_TYPE`;
CREATE TABLE `DEMO_TYPE` (
  `TYPE_ID` varchar(30) NOT NULL,
  `CUSTOMS_ID` varchar(30) DEFAULT NULL,
  `CHECK_ID` varchar(30) DEFAULT NULL,
  `CHECK_REMARK` varchar(100) DEFAULT NULL,
  `FAIT_TYPE` varchar(30) DEFAULT NULL,
  `FAIT_DATE` varchar(30) DEFAULT NULL,
  `FAIT_PERSON` varchar(30) DEFAULT NULL,
  `DISAGREE_REASON` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`TYPE_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of DEMO_TYPE
-- ----------------------------
