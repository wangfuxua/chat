/*
Navicat MySQL Data Transfer

Source Server         : bendi
Source Server Version : 50612
Source Host           : localhost:3306
Source Database       : run

Target Server Type    : MYSQL
Target Server Version : 50612
File Encoding         : 65001

Date: 2015-08-06 18:51:12
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for auto_head
-- ----------------------------
DROP TABLE IF EXISTS `auto_head`;
CREATE TABLE `auto_head` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `img` varchar(255) NOT NULL DEFAULT '' COMMENT '自动填充的头像',
  `timeline` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of auto_head
-- ----------------------------
INSERT INTO `auto_head` VALUES ('2', 'public/headimg/001.jpeg', '2147483647');

-- ----------------------------
-- Table structure for auto_latename
-- ----------------------------
DROP TABLE IF EXISTS `auto_latename`;
CREATE TABLE `auto_latename` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  `timeline` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`,`name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of auto_latename
-- ----------------------------
INSERT INTO `auto_latename` VALUES ('1', '小猪', '2147483647');
INSERT INTO `auto_latename` VALUES ('2', '凳子', '2147483647');
INSERT INTO `auto_latename` VALUES ('3', '苹果', '2147483647');

-- ----------------------------
-- Table structure for auto_prename
-- ----------------------------
DROP TABLE IF EXISTS `auto_prename`;
CREATE TABLE `auto_prename` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '' COMMENT '自动填充的形容词',
  `timeline` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of auto_prename
-- ----------------------------
INSERT INTO `auto_prename` VALUES ('1', '勇敢的', '2147483647');
INSERT INTO `auto_prename` VALUES ('2', '善良的', '2147483647');
INSERT INTO `auto_prename` VALUES ('3', '慈悲的', '2147483647');

-- ----------------------------
-- Table structure for friend
-- ----------------------------
DROP TABLE IF EXISTS `friend`;
CREATE TABLE `friend` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL COMMENT '用户id',
  `fuid` int(11) NOT NULL COMMENT '朋友id',
  `timeline` int(11) NOT NULL COMMENT '朋友id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of friend
-- ----------------------------

-- ----------------------------
-- Table structure for hard_relation
-- ----------------------------
DROP TABLE IF EXISTS `hard_relation`;
CREATE TABLE `hard_relation` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `hid` int(11) NOT NULL COMMENT '硬件id',
  `uid` int(11) NOT NULL COMMENT '用户id',
  `status` int(11) NOT NULL DEFAULT '0' COMMENT '硬件状态    1 链接状态',
  `timeline` int(11) NOT NULL COMMENT '时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of hard_relation
-- ----------------------------
INSERT INTO `hard_relation` VALUES ('1', '0', '13', '1', '1438330279');

-- ----------------------------
-- Table structure for pass_relation
-- ----------------------------
DROP TABLE IF EXISTS `pass_relation`;
CREATE TABLE `pass_relation` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `hid` int(11) NOT NULL COMMENT '与用户擦肩的用户id',
  `num` int(11) NOT NULL COMMENT '擦肩的次数',
  `timeline` int(11) NOT NULL COMMENT '时间',
  `uptime` int(11) NOT NULL COMMENT '上次擦肩的时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pass_relation
-- ----------------------------
INSERT INTO `pass_relation` VALUES ('1', '2', '3', '3', '1438741620', '1438741637');

-- ----------------------------
-- Table structure for sendfriend
-- ----------------------------
DROP TABLE IF EXISTS `sendfriend`;
CREATE TABLE `sendfriend` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '0 默认，1同意 2拒绝',
  `fromuid` int(11) NOT NULL COMMENT '发送好友申请的id',
  `touid` int(11) NOT NULL COMMENT '接受方的',
  `status` int(11) NOT NULL DEFAULT '0' COMMENT '状态',
  `timeline` int(11) NOT NULL COMMENT '时间',
  `message` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sendfriend
-- ----------------------------
INSERT INTO `sendfriend` VALUES ('1', '2', '2', '0', '1438741172', 'hello');
INSERT INTO `sendfriend` VALUES ('2', '2', '3', '0', '1438741225', 'hello');

-- ----------------------------
-- Table structure for send_article
-- ----------------------------
DROP TABLE IF EXISTS `send_article`;
CREATE TABLE `send_article` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL DEFAULT '' COMMENT '标题',
  `desc` varchar(255) NOT NULL DEFAULT '' COMMENT '扔出去的内容',
  `uid` int(11) NOT NULL COMMENT '用户id',
  `timeline` int(11) NOT NULL COMMENT '时间',
  `hit` int(11) NOT NULL COMMENT '点击次数',
  ` transmit` int(11) NOT NULL DEFAULT '0' COMMENT '转发次数',
  `good` int(11) NOT NULL DEFAULT '0' COMMENT '点赞次数',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of send_article
-- ----------------------------

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL DEFAULT '' COMMENT '用户名',
  `password` varchar(255) NOT NULL DEFAULT '' COMMENT '密码',
  `status` int(11) NOT NULL DEFAULT '1' COMMENT '0 隐身，1在线',
  `timeline` int(11) NOT NULL COMMENT '时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '善良的小猪', 'ewqkjeqkwe', '4057485f70703f4f32e90b50b2546ea5', '1', '1438672985');
INSERT INTO `user` VALUES ('2', '善良的苹果', 'wangfuxu', '4057485f70703f4f32e90b50b2546ea5', '1', '1438677357');

-- ----------------------------
-- Table structure for userinfo
-- ----------------------------
DROP TABLE IF EXISTS `userinfo`;
CREATE TABLE `userinfo` (
  `uid` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '用户uid',
  `headimg` varchar(255) NOT NULL DEFAULT '' COMMENT '头像',
  `sex` int(11) NOT NULL DEFAULT '0' COMMENT '0 保密  1 男 2女',
  `tag` varchar(255) NOT NULL COMMENT '标签',
  `uptime` int(11) NOT NULL COMMENT '更新时间',
  `timeline` int(11) NOT NULL COMMENT '第一次创建时间',
  PRIMARY KEY (`uid`),
  CONSTRAINT `uid` FOREIGN KEY (`uid`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of userinfo
-- ----------------------------
INSERT INTO `userinfo` VALUES ('1', 'public/headimg/001.jpeg', '0', '0', '1438672985', '1438672985');
INSERT INTO `userinfo` VALUES ('2', 'public/headimg/001.jpeg', '0', '0', '1438677357', '1438677357');
