/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50612
Source Host           : localhost:3306
Source Database       : database

Target Server Type    : MYSQL
Target Server Version : 50612
File Encoding         : 65001

Date: 2018-10-18 11:13:17
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `username` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(20) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `id` int(10) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('ww', '1234567', null, '1');
INSERT INTO `user` VALUES ('ww', '1234567', null, '2');
INSERT INTO `user` VALUES ('qq', '123', null, '3');
INSERT INTO `user` VALUES ('vv', '467', null, '4');
INSERT INTO `user` VALUES ('gg', '9879', null, '5');
INSERT INTO `user` VALUES ('ww', '1234567', null, '6');
INSERT INTO `user` VALUES ('qq', '123', null, '7');
INSERT INTO `user` VALUES ('vv', '467', null, '8');
INSERT INTO `user` VALUES ('gg', '9879', null, '9');
INSERT INTO `user` VALUES ('', '', null, '10');
INSERT INTO `user` VALUES ('123456', '', null, '11');
INSERT INTO `user` VALUES ('124314', '', null, '12');
INSERT INTO `user` VALUES ('1111', '', null, '13');
INSERT INTO `user` VALUES ('1234', '', null, '14');
INSERT INTO `user` VALUES ('15291692108', '', null, '15');
