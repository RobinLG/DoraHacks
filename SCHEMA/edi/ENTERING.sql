/*
Navicat MySQL Data Transfer

Source Server         : dorahacksDatabase
Source Server Version : 50633
Source Host           : 47.111.135.90:3306
Source Database       : ENTERING

Target Server Type    : MYSQL
Target Server Version : 50633
File Encoding         : 65001

Date: 2019-07-31 12:10:19
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for DEMO_MAPPING
-- ----------------------------
DROP TABLE IF EXISTS `DEMO_MAPPING`;
CREATE TABLE `DEMO_MAPPING` (
  `MAPPING_ID` varchar(30) NOT NULL,
  `DID` varchar(100) DEFAULT NULL,
  `CHECK_TYPE` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`MAPPING_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of DEMO_MAPPING
-- ----------------------------
