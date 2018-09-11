-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2018-09-05 01:44:13
-- 服务器版本： 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `headline`
--

-- --------------------------------------------------------

--
-- 表的结构 `feed`
--

CREATE TABLE IF NOT EXISTS `feed` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(10) NOT NULL,
  `avatar` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `time` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `images` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

--
-- 转存表中的数据 `feed`
--

INSERT INTO `feed` ( `name`, `avatar`, `content`, `time`, `address`, `images`) VALUES
('皮卡丘','https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=fd307e4fdd54564ee565e33f8be5fbbf/10dfa9ec8a136327d6b4806f918fa0ec08fac715.jpg','今天天气不错，十万伏特！！！','2018年9月11日10:00','太原市','https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2377312322,160404626&fm=27&gp=0.jpg;https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1684640938,2764064971&fm=27&gp=0.jpg');
INSERT INTO `feed` ( `name`, `avatar`, `content`, `time`, `address`, `images`) VALUES
('皮卡丘','https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=fd307e4fdd54564ee565e33f8be5fbbf/10dfa9ec8a136327d6b4806f918fa0ec08fac715.jpg','我想换个大点的精灵球！','2018年9月12日10:00','太原市','https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2377312322,160404626&fm=27&gp=0.jpg;https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1684640938,2764064971&fm=27&gp=0.jpg');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
