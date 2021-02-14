-- Adminer 4.7.7 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP TABLE IF EXISTS `bike_parts`;
CREATE TABLE `bike_parts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `price` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `bike_parts` (`id`, `price`, `name`) VALUES
(1,	35000,	'tyres'),
(2,	80000,	'body'),
(3,	13000,	'lights'),
(4,	12000,	'wheel');

DROP TABLE IF EXISTS `payment`;
CREATE TABLE `payment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `cost` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `payment` (`id`, `name`, `cost`) VALUES
(1,	'vacation',	500000),
(2,	'new bike',	230000),
(3,	'foods',	50000),
(4,	'fuel',	20000);

