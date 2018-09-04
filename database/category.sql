-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2018-09-05 01:44:07
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
-- 表的结构 `category`
--

CREATE TABLE IF NOT EXISTS `category` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `defult` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=22 ;

--
-- 转存表中的数据 `category`
--

INSERT INTO `category` (`id`, `name`, `defult`) VALUES
(1, '推荐', '1'),
(2, '视频', '1'),
(3, '热点', '1'),
(4, '社会', '1'),
(5, '娱乐', '1'),
(6, '科技', '1'),
(7, '汽车', '1'),
(8, '体育', '1'),
(9, '财经', '1'),
(10, '军事', '1'),
(11, '国际', '1'),
(12, '时尚', ''),
(13, '游戏', '1'),
(14, '旅游', '0'),
(15, '历史', '0'),
(16, '探索', '0'),
(17, '美食', '0'),
(18, '育儿', '0'),
(19, '养生', '0'),
(20, '故事', '0'),
(21, '美文', '0');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
