-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Waktu pembuatan: 11 Okt 2022 pada 00.09
-- Versi server: 5.7.37-log
-- Versi PHP: 7.4.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dngnet`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `bank`
--

CREATE TABLE `bank` (
  `bank_id` int(11) NOT NULL,
  `name` varchar(128) NOT NULL,
  `no_rek` varchar(128) NOT NULL,
  `owner` varchar(128) NOT NULL,
  `create_by` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `bank`
--

INSERT INTO `bank` (`bank_id`, `name`, `no_rek`, `owner`, `create_by`) VALUES
(1, 'gingin', '982392', 'as', 0);

-- --------------------------------------------------------

--
-- Struktur dari tabel `bot_telegram`
--

CREATE TABLE `bot_telegram` (
  `id` int(11) NOT NULL,
  `token` varchar(128) NOT NULL,
  `username_bot` varchar(128) NOT NULL,
  `username_owner` varchar(128) NOT NULL,
  `id_telegram_owner` varchar(128) NOT NULL,
  `id_group_teknisi` varchar(50) NOT NULL,
  `create_by` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `bot_telegram`
--

INSERT INTO `bot_telegram` (`id`, `token`, `username_bot`, `username_owner`, `id_telegram_owner`, `id_group_teknisi`, `create_by`) VALUES
(1, '', '', '', '', '', 0);

-- --------------------------------------------------------

--
-- Struktur dari tabel `briva`
--

CREATE TABLE `briva` (
  `id` int(9) NOT NULL,
  `is_active` int(11) NOT NULL,
  `mode` int(11) NOT NULL,
  `auto_pay` int(11) NOT NULL,
  `account_number` text NOT NULL,
  `consumer_key` text NOT NULL,
  `consumer_secret` text NOT NULL,
  `institution` tinytext NOT NULL,
  `briva` tinytext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struktur dari tabel `cat_expenditure`
--

CREATE TABLE `cat_expenditure` (
  `category_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `remark` text NOT NULL,
  `create_by` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `cat_income`
--

CREATE TABLE `cat_income` (
  `category_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `remark` text NOT NULL,
  `create_by` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `cat_income`
--

INSERT INTO `cat_income` (`category_id`, `name`, `remark`, `create_by`) VALUES
(1, 'Tagihan', 'Otomatis by System', 0);

-- --------------------------------------------------------

--
-- Struktur dari tabel `company`
--

CREATE TABLE `company` (
  `id` int(11) NOT NULL,
  `company_name` varchar(100) NOT NULL,
  `sub_name` varchar(128) NOT NULL,
  `description` text NOT NULL,
  `picture` text NOT NULL,
  `logo` text NOT NULL,
  `whatsapp` varchar(100) NOT NULL,
  `facebook` varchar(100) NOT NULL,
  `twitter` varchar(100) NOT NULL,
  `instagram` varchar(100) NOT NULL,
  `phone` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `owner` varchar(128) NOT NULL,
  `video` text NOT NULL,
  `address` text NOT NULL,
  `due_date` int(11) NOT NULL,
  `ppn` int(11) NOT NULL,
  `admin_fee` int(11) NOT NULL,
  `terms` text NOT NULL,
  `policy` text NOT NULL,
  `expired` varchar(50) NOT NULL,
  `isolir` int(11) NOT NULL,
  `import` int(11) NOT NULL,
  `apps_name` varchar(20) NOT NULL,
  `cek_bill` int(11) NOT NULL,
  `cek_usage` int(11) NOT NULL,
  `latitude` text NOT NULL,
  `longitude` text NOT NULL,
  `phonecode` int(11) NOT NULL,
  `country` int(11) NOT NULL,
  `currency` varchar(50) NOT NULL,
  `timezone` varchar(50) NOT NULL,
  `tawk` text NOT NULL,
  `speedtest` text NOT NULL,
  `maintenance` int(11) NOT NULL,
  `watermark` int(11) NOT NULL,
  `version` text NOT NULL,
  `last_update` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `company`
--

INSERT INTO `company` (`id`, `company_name`, `sub_name`, `description`, `picture`, `logo`, `whatsapp`, `facebook`, `twitter`, `instagram`, `phone`, `email`, `owner`, `video`, `address`, `due_date`, `ppn`, `admin_fee`, `terms`, `policy`, `expired`, `isolir`, `import`, `apps_name`, `cek_bill`, `cek_usage`, `latitude`, `longitude`, `phonecode`, `country`, `currency`, `timezone`, `tawk`, `speedtest`, `maintenance`, `watermark`, `version`, `last_update`) VALUES
(1, '1112 Project', 'Web Developer', '<p><strong>Demikian pula</strong>, tidak adakah orang yang mencintai atau mengejar atau ingin mengalami penderitaan, bukan semata-mata karena penderitaan itu sendiri, tetapi karena sesekali terjadi keadaan di mana susah-payah dan penderitaan dapat memberikan kepadanya kesenangan yang besar. Sebagai contoh sederhana, siapakah di antara kita yang pernah melakukan pekerjaan fisik ya<strong>ng berat, selain untuk memperoleh manfaat daripadanya? Tetapi siapakah yang berhak untuk mencari kesalahan pada diri orang</strong> yang memilih untuk menikmati kesenangan yang tidak menimbulkan akibat-akibat yang mengganggu, atau orang yang menghindari penderitaan yang tidak menghasilkan kesenangan?s</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><!--?= $company[\'company_name\'] ?--><!--?=$company[\'company_name\']?\r\n--></p>\r\n', 'picture-191121-62a0af9970.jpg', 'logo1.png', '43535345', '', 'luigifauzi', '', '6282130415558', '11duabelasproject@gmail.com', 'Gingin', 'https://www.youtube.com/watch?v=SiPuvEFaC3g', 'Garut', 0, 10, 0, '<p>df</p>\r\n', '0', '', 0, 0, 'My-Wifi', 1, 1, '-7.205830295257313', '107.8256392478943', 62, 0, '', 'Asia/Bangkok', '', '', 0, 0, '', '');

-- --------------------------------------------------------

--
-- Struktur dari tabel `confirm_payment`
--

CREATE TABLE `confirm_payment` (
  `confirm_id` int(11) NOT NULL,
  `invoice_id` int(11) NOT NULL,
  `no_services` varchar(25) NOT NULL,
  `metode_payment` varchar(50) NOT NULL,
  `date_payment` varchar(50) NOT NULL,
  `status` varchar(20) NOT NULL,
  `remark` text NOT NULL,
  `date_created` int(11) NOT NULL,
  `picture` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `country`
--

CREATE TABLE `country` (
  `id` int(11) NOT NULL,
  `iso` char(2) NOT NULL,
  `name` varchar(80) NOT NULL,
  `nicename` varchar(80) NOT NULL,
  `iso3` char(3) DEFAULT NULL,
  `numcode` smallint(6) DEFAULT NULL,
  `phonecode` int(5) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `country`
--

INSERT INTO `country` (`id`, `iso`, `name`, `nicename`, `iso3`, `numcode`, `phonecode`) VALUES
(1, 'AF', 'AFGHANISTAN', 'Afghanistan', 'AFG', 4, 93),
(2, 'AL', 'ALBANIA', 'Albania', 'ALB', 8, 355),
(3, 'DZ', 'ALGERIA', 'Algeria', 'DZA', 12, 213),
(4, 'AS', 'AMERICAN SAMOA', 'American Samoa', 'ASM', 16, 1684),
(5, 'AD', 'ANDORRA', 'Andorra', 'AND', 20, 376),
(6, 'AO', 'ANGOLA', 'Angola', 'AGO', 24, 244),
(7, 'AI', 'ANGUILLA', 'Anguilla', 'AIA', 660, 1264),
(8, 'AQ', 'ANTARCTICA', 'Antarctica', 'ATA', 10, 0),
(9, 'AG', 'ANTIGUA AND BARBUDA', 'Antigua and Barbuda', 'ATG', 28, 1268),
(10, 'AR', 'ARGENTINA', 'Argentina', 'ARG', 32, 54),
(11, 'AM', 'ARMENIA', 'Armenia', 'ARM', 51, 374),
(12, 'AW', 'ARUBA', 'Aruba', 'ABW', 533, 297),
(13, 'AU', 'AUSTRALIA', 'Australia', 'AUS', 36, 61),
(14, 'AT', 'AUSTRIA', 'Austria', 'AUT', 40, 43),
(15, 'AZ', 'AZERBAIJAN', 'Azerbaijan', 'AZE', 31, 994),
(16, 'BS', 'BAHAMAS', 'Bahamas', 'BHS', 44, 1242),
(17, 'BH', 'BAHRAIN', 'Bahrain', 'BHR', 48, 973),
(18, 'BD', 'BANGLADESH', 'Bangladesh', 'BGD', 50, 880),
(19, 'BB', 'BARBADOS', 'Barbados', 'BRB', 52, 1246),
(20, 'BY', 'BELARUS', 'Belarus', 'BLR', 112, 375),
(21, 'BE', 'BELGIUM', 'Belgium', 'BEL', 56, 32),
(22, 'BZ', 'BELIZE', 'Belize', 'BLZ', 84, 501),
(23, 'BJ', 'BENIN', 'Benin', 'BEN', 204, 229),
(24, 'BM', 'BERMUDA', 'Bermuda', 'BMU', 60, 1441),
(25, 'BT', 'BHUTAN', 'Bhutan', 'BTN', 64, 975),
(26, 'BO', 'BOLIVIA', 'Bolivia', 'BOL', 68, 591),
(27, 'BA', 'BOSNIA AND HERZEGOVINA', 'Bosnia and Herzegovina', 'BIH', 70, 387),
(28, 'BW', 'BOTSWANA', 'Botswana', 'BWA', 72, 267),
(29, 'BV', 'BOUVET ISLAND', 'Bouvet Island', 'BVT', 74, 0),
(30, 'BR', 'BRAZIL', 'Brazil', 'BRA', 76, 55),
(31, 'IO', 'BRITISH INDIAN OCEAN TERRITORY', 'British Indian Ocean Territory', 'IOT', 86, 246),
(32, 'BN', 'BRUNEI DARUSSALAM', 'Brunei Darussalam', 'BRN', 96, 673),
(33, 'BG', 'BULGARIA', 'Bulgaria', 'BGR', 100, 359),
(34, 'BF', 'BURKINA FASO', 'Burkina Faso', 'BFA', 854, 226),
(35, 'BI', 'BURUNDI', 'Burundi', 'BDI', 108, 257),
(36, 'KH', 'CAMBODIA', 'Cambodia', 'KHM', 116, 855),
(37, 'CM', 'CAMEROON', 'Cameroon', 'CMR', 120, 237),
(38, 'CA', 'CANADA', 'Canada', 'CAN', 124, 1),
(39, 'CV', 'CAPE VERDE', 'Cape Verde', 'CPV', 132, 238),
(40, 'KY', 'CAYMAN ISLANDS', 'Cayman Islands', 'CYM', 136, 1345),
(41, 'CF', 'CENTRAL AFRICAN REPUBLIC', 'Central African Republic', 'CAF', 140, 236),
(42, 'TD', 'CHAD', 'Chad', 'TCD', 148, 235),
(43, 'CL', 'CHILE', 'Chile', 'CHL', 152, 56),
(44, 'CN', 'CHINA', 'China', 'CHN', 156, 86),
(45, 'CX', 'CHRISTMAS ISLAND', 'Christmas Island', 'CXR', 162, 61),
(46, 'CC', 'COCOS (KEELING) ISLANDS', 'Cocos (Keeling) Islands', NULL, NULL, 672),
(47, 'CO', 'COLOMBIA', 'Colombia', 'COL', 170, 57),
(48, 'KM', 'COMOROS', 'Comoros', 'COM', 174, 269),
(49, 'CG', 'CONGO', 'Congo', 'COG', 178, 242),
(50, 'CD', 'CONGO, THE DEMOCRATIC REPUBLIC OF THE', 'Congo, the Democratic Republic of the', 'COD', 180, 242),
(51, 'CK', 'COOK ISLANDS', 'Cook Islands', 'COK', 184, 682),
(52, 'CR', 'COSTA RICA', 'Costa Rica', 'CRI', 188, 506),
(53, 'CI', 'COTE D\'IVOIRE', 'Cote D\'Ivoire', 'CIV', 384, 225),
(54, 'HR', 'CROATIA', 'Croatia', 'HRV', 191, 385),
(55, 'CU', 'CUBA', 'Cuba', 'CUB', 192, 53),
(56, 'CY', 'CYPRUS', 'Cyprus', 'CYP', 196, 357),
(57, 'CZ', 'CZECH REPUBLIC', 'Czech Republic', 'CZE', 203, 420),
(58, 'DK', 'DENMARK', 'Denmark', 'DNK', 208, 45),
(59, 'DJ', 'DJIBOUTI', 'Djibouti', 'DJI', 262, 253),
(60, 'DM', 'DOMINICA', 'Dominica', 'DMA', 212, 1767),
(61, 'DO', 'DOMINICAN REPUBLIC', 'Dominican Republic', 'DOM', 214, 1809),
(62, 'EC', 'ECUADOR', 'Ecuador', 'ECU', 218, 593),
(63, 'EG', 'EGYPT', 'Egypt', 'EGY', 818, 20),
(64, 'SV', 'EL SALVADOR', 'El Salvador', 'SLV', 222, 503),
(65, 'GQ', 'EQUATORIAL GUINEA', 'Equatorial Guinea', 'GNQ', 226, 240),
(66, 'ER', 'ERITREA', 'Eritrea', 'ERI', 232, 291),
(67, 'EE', 'ESTONIA', 'Estonia', 'EST', 233, 372),
(68, 'ET', 'ETHIOPIA', 'Ethiopia', 'ETH', 231, 251),
(69, 'FK', 'FALKLAND ISLANDS (MALVINAS)', 'Falkland Islands (Malvinas)', 'FLK', 238, 500),
(70, 'FO', 'FAROE ISLANDS', 'Faroe Islands', 'FRO', 234, 298),
(71, 'FJ', 'FIJI', 'Fiji', 'FJI', 242, 679),
(72, 'FI', 'FINLAND', 'Finland', 'FIN', 246, 358),
(73, 'FR', 'FRANCE', 'France', 'FRA', 250, 33),
(74, 'GF', 'FRENCH GUIANA', 'French Guiana', 'GUF', 254, 594),
(75, 'PF', 'FRENCH POLYNESIA', 'French Polynesia', 'PYF', 258, 689),
(76, 'TF', 'FRENCH SOUTHERN TERRITORIES', 'French Southern Territories', 'ATF', 260, 0),
(77, 'GA', 'GABON', 'Gabon', 'GAB', 266, 241),
(78, 'GM', 'GAMBIA', 'Gambia', 'GMB', 270, 220),
(79, 'GE', 'GEORGIA', 'Georgia', 'GEO', 268, 995),
(80, 'DE', 'GERMANY', 'Germany', 'DEU', 276, 49),
(81, 'GH', 'GHANA', 'Ghana', 'GHA', 288, 233),
(82, 'GI', 'GIBRALTAR', 'Gibraltar', 'GIB', 292, 350),
(83, 'GR', 'GREECE', 'Greece', 'GRC', 300, 30),
(84, 'GL', 'GREENLAND', 'Greenland', 'GRL', 304, 299),
(85, 'GD', 'GRENADA', 'Grenada', 'GRD', 308, 1473),
(86, 'GP', 'GUADELOUPE', 'Guadeloupe', 'GLP', 312, 590),
(87, 'GU', 'GUAM', 'Guam', 'GUM', 316, 1671),
(88, 'GT', 'GUATEMALA', 'Guatemala', 'GTM', 320, 502),
(89, 'GN', 'GUINEA', 'Guinea', 'GIN', 324, 224),
(90, 'GW', 'GUINEA-BISSAU', 'Guinea-Bissau', 'GNB', 624, 245),
(91, 'GY', 'GUYANA', 'Guyana', 'GUY', 328, 592),
(92, 'HT', 'HAITI', 'Haiti', 'HTI', 332, 509),
(93, 'HM', 'HEARD ISLAND AND MCDONALD ISLANDS', 'Heard Island and Mcdonald Islands', 'HMD', 334, 0),
(94, 'VA', 'HOLY SEE (VATICAN CITY STATE)', 'Holy See (Vatican City State)', 'VAT', 336, 39),
(95, 'HN', 'HONDURAS', 'Honduras', 'HND', 340, 504),
(96, 'HK', 'HONG KONG', 'Hong Kong', 'HKG', 344, 852),
(97, 'HU', 'HUNGARY', 'Hungary', 'HUN', 348, 36),
(98, 'IS', 'ICELAND', 'Iceland', 'ISL', 352, 354),
(99, 'IN', 'INDIA', 'India', 'IND', 356, 91),
(100, 'ID', 'INDONESIA', 'Indonesia', 'IDN', 360, 62),
(101, 'IR', 'IRAN, ISLAMIC REPUBLIC OF', 'Iran, Islamic Republic of', 'IRN', 364, 98),
(102, 'IQ', 'IRAQ', 'Iraq', 'IRQ', 368, 964),
(103, 'IE', 'IRELAND', 'Ireland', 'IRL', 372, 353),
(104, 'IL', 'ISRAEL', 'Israel', 'ISR', 376, 972),
(105, 'IT', 'ITALY', 'Italy', 'ITA', 380, 39),
(106, 'JM', 'JAMAICA', 'Jamaica', 'JAM', 388, 1876),
(107, 'JP', 'JAPAN', 'Japan', 'JPN', 392, 81),
(108, 'JO', 'JORDAN', 'Jordan', 'JOR', 400, 962),
(109, 'KZ', 'KAZAKHSTAN', 'Kazakhstan', 'KAZ', 398, 7),
(110, 'KE', 'KENYA', 'Kenya', 'KEN', 404, 254),
(111, 'KI', 'KIRIBATI', 'Kiribati', 'KIR', 296, 686),
(112, 'KP', 'KOREA, DEMOCRATIC PEOPLE\'S REPUBLIC OF', 'Korea, Democratic People\'s Republic of', 'PRK', 408, 850),
(113, 'KR', 'KOREA, REPUBLIC OF', 'Korea, Republic of', 'KOR', 410, 82),
(114, 'KW', 'KUWAIT', 'Kuwait', 'KWT', 414, 965),
(115, 'KG', 'KYRGYZSTAN', 'Kyrgyzstan', 'KGZ', 417, 996),
(116, 'LA', 'LAO PEOPLE\'S DEMOCRATIC REPUBLIC', 'Lao People\'s Democratic Republic', 'LAO', 418, 856),
(117, 'LV', 'LATVIA', 'Latvia', 'LVA', 428, 371),
(118, 'LB', 'LEBANON', 'Lebanon', 'LBN', 422, 961),
(119, 'LS', 'LESOTHO', 'Lesotho', 'LSO', 426, 266),
(120, 'LR', 'LIBERIA', 'Liberia', 'LBR', 430, 231),
(121, 'LY', 'LIBYAN ARAB JAMAHIRIYA', 'Libyan Arab Jamahiriya', 'LBY', 434, 218),
(122, 'LI', 'LIECHTENSTEIN', 'Liechtenstein', 'LIE', 438, 423),
(123, 'LT', 'LITHUANIA', 'Lithuania', 'LTU', 440, 370),
(124, 'LU', 'LUXEMBOURG', 'Luxembourg', 'LUX', 442, 352),
(125, 'MO', 'MACAO', 'Macao', 'MAC', 446, 853),
(126, 'MK', 'MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF', 'Macedonia, the Former Yugoslav Republic of', 'MKD', 807, 389),
(127, 'MG', 'MADAGASCAR', 'Madagascar', 'MDG', 450, 261),
(128, 'MW', 'MALAWI', 'Malawi', 'MWI', 454, 265),
(129, 'MY', 'MALAYSIA', 'Malaysia', 'MYS', 458, 60),
(130, 'MV', 'MALDIVES', 'Maldives', 'MDV', 462, 960),
(131, 'ML', 'MALI', 'Mali', 'MLI', 466, 223),
(132, 'MT', 'MALTA', 'Malta', 'MLT', 470, 356),
(133, 'MH', 'MARSHALL ISLANDS', 'Marshall Islands', 'MHL', 584, 692),
(134, 'MQ', 'MARTINIQUE', 'Martinique', 'MTQ', 474, 596),
(135, 'MR', 'MAURITANIA', 'Mauritania', 'MRT', 478, 222),
(136, 'MU', 'MAURITIUS', 'Mauritius', 'MUS', 480, 230),
(137, 'YT', 'MAYOTTE', 'Mayotte', 'MYT', 175, 269),
(138, 'MX', 'MEXICO', 'Mexico', 'MEX', 484, 52),
(139, 'FM', 'MICRONESIA, FEDERATED STATES OF', 'Micronesia, Federated States of', 'FSM', 583, 691),
(140, 'MD', 'MOLDOVA, REPUBLIC OF', 'Moldova, Republic of', 'MDA', 498, 373),
(141, 'MC', 'MONACO', 'Monaco', 'MCO', 492, 377),
(142, 'MN', 'MONGOLIA', 'Mongolia', 'MNG', 496, 976),
(143, 'MS', 'MONTSERRAT', 'Montserrat', 'MSR', 500, 1664),
(144, 'MA', 'MOROCCO', 'Morocco', 'MAR', 504, 212),
(145, 'MZ', 'MOZAMBIQUE', 'Mozambique', 'MOZ', 508, 258),
(146, 'MM', 'MYANMAR', 'Myanmar', 'MMR', 104, 95),
(147, 'NA', 'NAMIBIA', 'Namibia', 'NAM', 516, 264),
(148, 'NR', 'NAURU', 'Nauru', 'NRU', 520, 674),
(149, 'NP', 'NEPAL', 'Nepal', 'NPL', 524, 977),
(150, 'NL', 'NETHERLANDS', 'Netherlands', 'NLD', 528, 31),
(151, 'AN', 'NETHERLANDS ANTILLES', 'Netherlands Antilles', 'ANT', 530, 599),
(152, 'NC', 'NEW CALEDONIA', 'New Caledonia', 'NCL', 540, 687),
(153, 'NZ', 'NEW ZEALAND', 'New Zealand', 'NZL', 554, 64),
(154, 'NI', 'NICARAGUA', 'Nicaragua', 'NIC', 558, 505),
(155, 'NE', 'NIGER', 'Niger', 'NER', 562, 227),
(156, 'NG', 'NIGERIA', 'Nigeria', 'NGA', 566, 234),
(157, 'NU', 'NIUE', 'Niue', 'NIU', 570, 683),
(158, 'NF', 'NORFOLK ISLAND', 'Norfolk Island', 'NFK', 574, 672),
(159, 'MP', 'NORTHERN MARIANA ISLANDS', 'Northern Mariana Islands', 'MNP', 580, 1670),
(160, 'NO', 'NORWAY', 'Norway', 'NOR', 578, 47),
(161, 'OM', 'OMAN', 'Oman', 'OMN', 512, 968),
(162, 'PK', 'PAKISTAN', 'Pakistan', 'PAK', 586, 92),
(163, 'PW', 'PALAU', 'Palau', 'PLW', 585, 680),
(164, 'PS', 'PALESTINIAN TERRITORY, OCCUPIED', 'Palestinian Territory, Occupied', NULL, NULL, 970),
(165, 'PA', 'PANAMA', 'Panama', 'PAN', 591, 507),
(166, 'PG', 'PAPUA NEW GUINEA', 'Papua New Guinea', 'PNG', 598, 675),
(167, 'PY', 'PARAGUAY', 'Paraguay', 'PRY', 600, 595),
(168, 'PE', 'PERU', 'Peru', 'PER', 604, 51),
(169, 'PH', 'PHILIPPINES', 'Philippines', 'PHL', 608, 63),
(170, 'PN', 'PITCAIRN', 'Pitcairn', 'PCN', 612, 0),
(171, 'PL', 'POLAND', 'Poland', 'POL', 616, 48),
(172, 'PT', 'PORTUGAL', 'Portugal', 'PRT', 620, 351),
(173, 'PR', 'PUERTO RICO', 'Puerto Rico', 'PRI', 630, 1787),
(174, 'QA', 'QATAR', 'Qatar', 'QAT', 634, 974),
(175, 'RE', 'REUNION', 'Reunion', 'REU', 638, 262),
(176, 'RO', 'ROMANIA', 'Romania', 'ROM', 642, 40),
(177, 'RU', 'RUSSIAN FEDERATION', 'Russian Federation', 'RUS', 643, 70),
(178, 'RW', 'RWANDA', 'Rwanda', 'RWA', 646, 250),
(179, 'SH', 'SAINT HELENA', 'Saint Helena', 'SHN', 654, 290),
(180, 'KN', 'SAINT KITTS AND NEVIS', 'Saint Kitts and Nevis', 'KNA', 659, 1869),
(181, 'LC', 'SAINT LUCIA', 'Saint Lucia', 'LCA', 662, 1758),
(182, 'PM', 'SAINT PIERRE AND MIQUELON', 'Saint Pierre and Miquelon', 'SPM', 666, 508),
(183, 'VC', 'SAINT VINCENT AND THE GRENADINES', 'Saint Vincent and the Grenadines', 'VCT', 670, 1784),
(184, 'WS', 'SAMOA', 'Samoa', 'WSM', 882, 684),
(185, 'SM', 'SAN MARINO', 'San Marino', 'SMR', 674, 378),
(186, 'ST', 'SAO TOME AND PRINCIPE', 'Sao Tome and Principe', 'STP', 678, 239),
(187, 'SA', 'SAUDI ARABIA', 'Saudi Arabia', 'SAU', 682, 966),
(188, 'SN', 'SENEGAL', 'Senegal', 'SEN', 686, 221),
(189, 'CS', 'SERBIA AND MONTENEGRO', 'Serbia and Montenegro', 'MNE', 499, 381),
(190, 'SC', 'SEYCHELLES', 'Seychelles', 'SYC', 690, 248),
(191, 'SL', 'SIERRA LEONE', 'Sierra Leone', 'SLE', 694, 232),
(192, 'SG', 'SINGAPORE', 'Singapore', 'SGP', 702, 65),
(193, 'SK', 'SLOVAKIA', 'Slovakia', 'SVK', 703, 421),
(194, 'SI', 'SLOVENIA', 'Slovenia', 'SVN', 705, 386),
(195, 'SB', 'SOLOMON ISLANDS', 'Solomon Islands', 'SLB', 90, 677),
(196, 'SO', 'SOMALIA', 'Somalia', 'SOM', 706, 252),
(197, 'ZA', 'SOUTH AFRICA', 'South Africa', 'ZAF', 710, 27),
(198, 'GS', 'SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS', 'South Georgia and the South Sandwich Islands', 'SGS', 239, 0),
(199, 'ES', 'SPAIN', 'Spain', 'ESP', 724, 34),
(200, 'LK', 'SRI LANKA', 'Sri Lanka', 'LKA', 144, 94),
(201, 'SD', 'SUDAN', 'Sudan', 'SDN', 736, 249),
(202, 'SR', 'SURINAME', 'Suriname', 'SUR', 740, 597),
(203, 'SJ', 'SVALBARD AND JAN MAYEN', 'Svalbard and Jan Mayen', 'SJM', 744, 47),
(204, 'SZ', 'SWAZILAND', 'Swaziland', 'SWZ', 748, 268),
(205, 'SE', 'SWEDEN', 'Sweden', 'SWE', 752, 46),
(206, 'CH', 'SWITZERLAND', 'Switzerland', 'CHE', 756, 41),
(207, 'SY', 'SYRIAN ARAB REPUBLIC', 'Syrian Arab Republic', 'SYR', 760, 963),
(208, 'TW', 'TAIWAN, PROVINCE OF CHINA', 'Taiwan, Province of China', 'TWN', 158, 886),
(209, 'TJ', 'TAJIKISTAN', 'Tajikistan', 'TJK', 762, 992),
(210, 'TZ', 'TANZANIA, UNITED REPUBLIC OF', 'Tanzania, United Republic of', 'TZA', 834, 255),
(211, 'TH', 'THAILAND', 'Thailand', 'THA', 764, 66),
(212, 'TL', 'TIMOR-LESTE', 'Timor-Leste', 'TLS', 626, 670),
(213, 'TG', 'TOGO', 'Togo', 'TGO', 768, 228),
(214, 'TK', 'TOKELAU', 'Tokelau', 'TKL', 772, 690),
(215, 'TO', 'TONGA', 'Tonga', 'TON', 776, 676),
(216, 'TT', 'TRINIDAD AND TOBAGO', 'Trinidad and Tobago', 'TTO', 780, 1868),
(217, 'TN', 'TUNISIA', 'Tunisia', 'TUN', 788, 216),
(218, 'TR', 'TURKEY', 'Turkey', 'TUR', 792, 90),
(219, 'TM', 'TURKMENISTAN', 'Turkmenistan', 'TKM', 795, 7370),
(220, 'TC', 'TURKS AND CAICOS ISLANDS', 'Turks and Caicos Islands', 'TCA', 796, 1649),
(221, 'TV', 'TUVALU', 'Tuvalu', 'TUV', 798, 688),
(222, 'UG', 'UGANDA', 'Uganda', 'UGA', 800, 256),
(223, 'UA', 'UKRAINE', 'Ukraine', 'UKR', 804, 380),
(224, 'AE', 'UNITED ARAB EMIRATES', 'United Arab Emirates', 'ARE', 784, 971),
(225, 'GB', 'UNITED KINGDOM', 'United Kingdom', 'GBR', 826, 44),
(226, 'US', 'UNITED STATES', 'United States', 'USA', 840, 1),
(227, 'UM', 'UNITED STATES MINOR OUTLYING ISLANDS', 'United States Minor Outlying Islands', 'UMI', 581, 1),
(228, 'UY', 'URUGUAY', 'Uruguay', 'URY', 858, 598),
(229, 'UZ', 'UZBEKISTAN', 'Uzbekistan', 'UZB', 860, 998),
(230, 'VU', 'VANUATU', 'Vanuatu', 'VUT', 548, 678),
(231, 'VE', 'VENEZUELA', 'Venezuela', 'VEN', 862, 58),
(232, 'VN', 'VIET NAM', 'Viet Nam', 'VNM', 704, 84),
(233, 'VG', 'VIRGIN ISLANDS, BRITISH', 'Virgin Islands, British', 'VGB', 92, 1284),
(234, 'VI', 'VIRGIN ISLANDS, U.S.', 'Virgin Islands, U.s.', 'VIR', 850, 1340),
(235, 'WF', 'WALLIS AND FUTUNA', 'Wallis and Futuna', 'WLF', 876, 681),
(236, 'EH', 'WESTERN SAHARA', 'Western Sahara', 'ESH', 732, 212),
(237, 'YE', 'YEMEN', 'Yemen', 'YEM', 887, 967),
(238, 'ZM', 'ZAMBIA', 'Zambia', 'ZMB', 894, 260),
(239, 'ZW', 'ZIMBABWE', 'Zimbabwe', 'ZWE', 716, 263),
(240, 'RS', 'SERBIA', 'Serbia', 'SRB', 688, 381),
(241, 'AP', 'ASIA PACIFIC REGION', 'Asia / Pacific Region', '0', 0, 0),
(242, 'ME', 'MONTENEGRO', 'Montenegro', 'MNE', 499, 382),
(243, 'AX', 'ALAND ISLANDS', 'Aland Islands', 'ALA', 248, 358),
(244, 'BQ', 'BONAIRE, SINT EUSTATIUS AND SABA', 'Bonaire, Sint Eustatius and Saba', 'BES', 535, 599),
(245, 'CW', 'CURACAO', 'Curacao', 'CUW', 531, 599),
(246, 'GG', 'GUERNSEY', 'Guernsey', 'GGY', 831, 44),
(247, 'IM', 'ISLE OF MAN', 'Isle of Man', 'IMN', 833, 44),
(248, 'JE', 'JERSEY', 'Jersey', 'JEY', 832, 44),
(249, 'XK', 'KOSOVO', 'Kosovo', '---', 0, 381),
(250, 'BL', 'SAINT BARTHELEMY', 'Saint Barthelemy', 'BLM', 652, 590),
(251, 'MF', 'SAINT MARTIN', 'Saint Martin', 'MAF', 663, 590),
(252, 'SX', 'SINT MAARTEN', 'Sint Maarten', 'SXM', 534, 1),
(253, 'SS', 'SOUTH SUDAN', 'South Sudan', 'SSD', 728, 211);

-- --------------------------------------------------------

--
-- Struktur dari tabel `coupon`
--

CREATE TABLE `coupon` (
  `coupon_id` int(11) NOT NULL,
  `code` varchar(20) NOT NULL,
  `is_active` int(11) NOT NULL,
  `percent` int(11) NOT NULL,
  `one_time` int(11) NOT NULL,
  `max_active` int(11) NOT NULL,
  `max_limit` int(11) NOT NULL,
  `created` int(11) NOT NULL,
  `expired` varchar(50) NOT NULL,
  `remark` text NOT NULL,
  `create_by` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `coverage`
--

CREATE TABLE `coverage` (
  `coverage_id` int(11) NOT NULL,
  `c_name` varchar(128) NOT NULL,
  `address` text NOT NULL,
  `id_prov` varchar(50) NOT NULL,
  `id_kab` varchar(50) NOT NULL,
  `id_kec` varchar(50) NOT NULL,
  `id_kel` varchar(50) NOT NULL,
  `comment` text NOT NULL,
  `latitude` text NOT NULL,
  `longitude` text NOT NULL,
  `radius` int(11) NOT NULL,
  `public` int(11) NOT NULL,
  `code_area` int(11) NOT NULL,
  `create_by` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `cover_operator`
--

CREATE TABLE `cover_operator` (
  `id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  `coverage_id` int(11) NOT NULL,
  `operator` int(11) NOT NULL,
  `create_by` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `cover_package`
--

CREATE TABLE `cover_package` (
  `id` int(11) NOT NULL,
  `coverage_id` int(11) NOT NULL,
  `package_id` int(11) NOT NULL,
  `created` int(11) NOT NULL,
  `create_by` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `currencies`
--

CREATE TABLE `currencies` (
  `code` varchar(15) NOT NULL,
  `name` varchar(100) NOT NULL,
  `number` char(5) NOT NULL,
  `subunits_in_unit` int(11) NOT NULL,
  `countries` longtext NOT NULL COMMENT '(DC2Type:json_array)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `currencies`
--

INSERT INTO `currencies` (`code`, `name`, `number`, `subunits_in_unit`, `countries`) VALUES
('AED', 'UAE Dirham', '784', 100, '[\"UNITED ARAB EMIRATES\"]'),
('AFN', 'Afghani', '971', 100, '[\"AFGHANISTAN\"]'),
('ALL', 'Lek', '008', 100, '[\"ALBANIA\"]'),
('AMD', 'Armenian Dram', '051', 100, '[\"ARMENIA\"]'),
('ANG', 'Netherlands Antillean Guilder', '532', 100, '[\"CURA\\u00c7AO\",\"SINT MAARTEN (DUTCH PART)\"]'),
('AOA', 'Kwanza', '973', 100, '[\"ANGOLA\"]'),
('ARS', 'Argentine Peso', '032', 100, '[\"ARGENTINA\"]'),
('AUD', 'Australian Dollar', '036', 100, '[\"AUSTRALIA\",\"CHRISTMAS ISLAND\",\"COCOS (KEELING) ISLANDS\",\"HEARD ISLAND AND McDONALD ISLANDS\",\"KIRIBATI\",\"NAURU\",\"NORFOLK ISLAND\",\"TUVALU\"]'),
('AWG', 'Aruban Florin', '533', 100, '[\"ARUBA\"]'),
('AZN', 'Azerbaijanian Manat', '944', 100, '[\"AZERBAIJAN\"]'),
('BAM', 'Convertible Mark', '977', 100, '[\"BOSNIA AND HERZEGOVINA\"]'),
('BBD', 'Barbados Dollar', '052', 100, '[\"BARBADOS\"]'),
('BDT', 'Taka', '050', 100, '[\"BANGLADESH\"]'),
('BGN', 'Bulgarian Lev', '975', 100, '[\"BULGARIA\"]'),
('BHD', 'Bahraini Dinar', '048', 1000, '[\"BAHRAIN\"]'),
('BIF', 'Burundi Franc', '108', 1, '[\"BURUNDI\"]'),
('BMD', 'Bermudian Dollar', '060', 100, '[\"BERMUDA\"]'),
('BND', 'Brunei Dollar', '096', 100, '[\"BRUNEI DARUSSALAM\"]'),
('BOB', 'Boliviano', '068', 100, '[\"BOLIVIA, PLURINATIONAL STATE OF\"]'),
('BOV', 'Mvdol', '984', 100, '[\"BOLIVIA, PLURINATIONAL STATE OF\"]'),
('BRL', 'Brazilian Real', '986', 100, '[\"BRAZIL\"]'),
('BSD', 'Bahamian Dollar', '044', 100, '[\"BAHAMAS\"]'),
('BTN', 'Ngultrum', '064', 100, '[\"BHUTAN\"]'),
('BWP', 'Pula', '072', 100, '[\"BOTSWANA\"]'),
('BYR', 'Belarussian Ruble', '974', 1, '[\"BELARUS\"]'),
('BZD', 'Belize Dollar', '084', 100, '[\"BELIZE\"]'),
('CAD', 'Canadian Dollar', '124', 100, '[\"CANADA\"]'),
('CDF', 'Congolese Franc', '976', 100, '[\"CONGO, DEMOCRATIC REPUBLIC OF THE \"]'),
('CHE', 'WIR Euro', '947', 100, '[\"SWITZERLAND\"]'),
('CHF', 'Swiss Franc', '756', 100, '[\"LIECHTENSTEIN\",\"SWITZERLAND\"]'),
('CHW', 'WIR Franc', '948', 100, '[\"SWITZERLAND\"]'),
('CLF', 'Unidad de Fomento', '990', 10000, '[\"CHILE\"]'),
('CLP', 'Chilean Peso', '152', 1, '[\"CHILE\"]'),
('CNY', 'Yuan Renminbi', '156', 100, '[\"CHINA\"]'),
('COP', 'Colombian Peso', '170', 100, '[\"COLOMBIA\"]'),
('COU', 'Unidad de Valor Real', '970', 100, '[\"COLOMBIA\"]'),
('CRC', 'Costa Rican Colon', '188', 100, '[\"COSTA RICA\"]'),
('CUC', 'Peso Convertible', '931', 100, '[\"CUBA\"]'),
('CUP', 'Cuban Peso', '192', 100, '[\"CUBA\"]'),
('CVE', 'Cape Verde Escudo', '132', 100, '[\"CAPE VERDE\"]'),
('CZK', 'Czech Koruna', '203', 100, '[\"CZECH REPUBLIC\"]'),
('DJF', 'Djibouti Franc', '262', 1, '[\"DJIBOUTI\"]'),
('DKK', 'Danish Krone', '208', 100, '[\"DENMARK\",\"FAROE ISLANDS\",\"GREENLAND\"]'),
('DOP', 'Dominican Peso', '214', 100, '[\"DOMINICAN REPUBLIC\"]'),
('DZD', 'Algerian Dinar', '012', 100, '[\"ALGERIA\"]'),
('EGP', 'Egyptian Pound', '818', 100, '[\"EGYPT\"]'),
('ERN', 'Nakfa', '232', 100, '[\"ERITREA\"]'),
('ETB', 'Ethiopian Birr', '230', 100, '[\"ETHIOPIA\"]'),
('EUR', 'Euro', '978', 100, '[\"\\u00c5LAND ISLANDS\",\"ANDORRA\",\"AUSTRIA\",\"BELGIUM\",\"CYPRUS\",\"ESTONIA\",\"EUROPEAN UNION\",\"FINLAND\",\"FRANCE\",\"FRENCH GUIANA\",\"FRENCH SOUTHERN TERRITORIES\",\"GERMANY\",\"GREECE\",\"GUADELOUPE\",\"HOLY SEE (VATICAN CITY STATE)\",\"IRELAND\",\"ITALY\",\"LATVIA\",\"LUXEMBOURG\",\"MALTA\",\"MARTINIQUE\",\"MAYOTTE\",\"MONACO\",\"MONTENEGRO\",\"NETHERLANDS\",\"PORTUGAL\",\"R\\u00c9UNION\",\"SAINT BARTH\\u00c9LEMY\",\"SAINT MARTIN (FRENCH PART)\",\"SAINT PIERRE AND MIQUELON\",\"SAN MARINO\",\"SLOVAKIA\",\"SLOVENIA\",\"SPAIN\"]'),
('FJD', 'Fiji Dollar', '242', 100, '[\"FIJI\"]'),
('FKP', 'Falkland Islands Pound', '238', 100, '[\"FALKLAND ISLANDS (MALVINAS)\"]'),
('GBP', 'Pound Sterling', '826', 100, '[\"GUERNSEY\",\"ISLE OF MAN\",\"JERSEY\",\"UNITED KINGDOM\"]'),
('GEL', 'Lari', '981', 100, '[\"GEORGIA\"]'),
('GHS', 'Ghana Cedi', '936', 100, '[\"GHANA\"]'),
('GIP', 'Gibraltar Pound', '292', 100, '[\"GIBRALTAR\"]'),
('GMD', 'Dalasi', '270', 100, '[\"GAMBIA\"]'),
('GNF', 'Guinea Franc', '324', 1, '[\"GUINEA\"]'),
('GTQ', 'Quetzal', '320', 100, '[\"GUATEMALA\"]'),
('GYD', 'Guyana Dollar', '328', 100, '[\"GUYANA\"]'),
('HKD', 'Hong Kong Dollar', '344', 100, '[\"HONG KONG\"]'),
('HNL', 'Lempira', '340', 100, '[\"HONDURAS\"]'),
('HRK', 'Croatian Kuna', '191', 100, '[\"CROATIA\"]'),
('HTG', 'Gourde', '332', 100, '[\"HAITI\"]'),
('HUF', 'Forint', '348', 100, '[\"HUNGARY\"]'),
('IDR', 'Rupiah', '360', 100, '[\"INDONESIA\"]'),
('ILS', 'New Israeli Sheqel', '376', 100, '[\"ISRAEL\"]'),
('INR', 'Indian Rupee', '356', 100, '[\"BHUTAN\",\"INDIA\"]'),
('IQD', 'Iraqi Dinar', '368', 1000, '[\"IRAQ\"]'),
('IRR', 'Iranian Rial', '364', 100, '[\"IRAN, ISLAMIC REPUBLIC OF\"]'),
('ISK', 'Iceland Krona', '352', 1, '[\"ICELAND\"]'),
('JMD', 'Jamaican Dollar', '388', 100, '[\"JAMAICA\"]'),
('JOD', 'Jordanian Dinar', '400', 1000, '[\"JORDAN\"]'),
('JPY', 'Yen', '392', 1, '[\"JAPAN\"]'),
('KES', 'Kenyan Shilling', '404', 100, '[\"KENYA\"]'),
('KGS', 'Som', '417', 100, '[\"KYRGYZSTAN\"]'),
('KHR', 'Riel', '116', 100, '[\"CAMBODIA\"]'),
('KMF', 'Comoro Franc', '174', 1, '[\"COMOROS\"]'),
('KPW', 'North Korean Won', '408', 100, '[\"KOREA, DEMOCRATIC PEOPLE\\u2019S REPUBLIC OF\"]'),
('KRW', 'Won', '410', 1, '[\"KOREA, REPUBLIC OF\"]'),
('KWD', 'Kuwaiti Dinar', '414', 1000, '[\"KUWAIT\"]'),
('KYD', 'Cayman Islands Dollar', '136', 100, '[\"CAYMAN ISLANDS\"]'),
('KZT', 'Tenge', '398', 100, '[\"KAZAKHSTAN\"]'),
('LAK', 'Kip', '418', 100, '[\"LAO PEOPLE\\u2019S DEMOCRATIC REPUBLIC\"]'),
('LBP', 'Lebanese Pound', '422', 100, '[\"LEBANON\"]'),
('LKR', 'Sri Lanka Rupee', '144', 100, '[\"SRI LANKA\"]'),
('LRD', 'Liberian Dollar', '430', 100, '[\"LIBERIA\"]'),
('LSL', 'Loti', '426', 100, '[\"LESOTHO\"]'),
('LTL', 'Lithuanian Litas', '440', 100, '[\"LITHUANIA\"]'),
('LYD', 'Libyan Dinar', '434', 1000, '[\"LIBYA\"]'),
('MAD', 'Moroccan Dirham', '504', 100, '[\"MOROCCO\",\"WESTERN SAHARA\"]'),
('MDL', 'Moldovan Leu', '498', 100, '[\"MOLDOVA, REPUBLIC OF\"]'),
('MGA', 'Malagasy Ariary', '969', 100, '[\"MADAGASCAR\"]'),
('MKD', 'Denar', '807', 100, '[\"MACEDONIA, THE FORMER \\nYUGOSLAV REPUBLIC OF\"]'),
('MMK', 'Kyat', '104', 100, '[\"MYANMAR\"]'),
('MNT', 'Tugrik', '496', 100, '[\"MONGOLIA\"]'),
('MOP', 'Pataca', '446', 100, '[\"MACAO\"]'),
('MRO', 'Ouguiya', '478', 100, '[\"MAURITANIA\"]'),
('MUR', 'Mauritius Rupee', '480', 100, '[\"MAURITIUS\"]'),
('MVR', 'Rufiyaa', '462', 100, '[\"MALDIVES\"]'),
('MWK', 'Kwacha', '454', 100, '[\"MALAWI\"]'),
('MXN', 'Mexican Peso', '484', 100, '[\"MEXICO\"]'),
('MXV', 'Mexican Unidad de Inversion (UDI)', '979', 100, '[\"MEXICO\"]'),
('MYR', 'Malaysian Ringgit', '458', 100, '[\"MALAYSIA\"]'),
('MZN', 'Mozambique Metical', '943', 100, '[\"MOZAMBIQUE\"]'),
('NAD', 'Namibia Dollar', '516', 100, '[\"NAMIBIA\"]'),
('NGN', 'Naira', '566', 100, '[\"NIGERIA\"]'),
('NIO', 'Cordoba Oro', '558', 100, '[\"NICARAGUA\"]'),
('NOK', 'Norwegian Krone', '578', 100, '[\"BOUVET ISLAND\",\"NORWAY\",\"SVALBARD AND JAN MAYEN\"]'),
('NPR', 'Nepalese Rupee', '524', 100, '[\"NEPAL\"]'),
('NZD', 'New Zealand Dollar', '554', 100, '[\"COOK ISLANDS\",\"NEW ZEALAND\",\"NIUE\",\"PITCAIRN\",\"TOKELAU\"]'),
('OMR', 'Rial Omani', '512', 1000, '[\"OMAN\"]'),
('PAB', 'Balboa', '590', 100, '[\"PANAMA\"]'),
('PEN', 'Nuevo Sol', '604', 100, '[\"PERU\"]'),
('PGK', 'Kina', '598', 100, '[\"PAPUA NEW GUINEA\"]'),
('PHP', 'Philippine Peso', '608', 100, '[\"PHILIPPINES\"]'),
('PKR', 'Pakistan Rupee', '586', 100, '[\"PAKISTAN\"]'),
('PLN', 'Zloty', '985', 100, '[\"POLAND\"]'),
('PYG', 'Guarani', '600', 1, '[\"PARAGUAY\"]'),
('QAR', 'Qatari Rial', '634', 100, '[\"QATAR\"]'),
('RON', 'New Romanian Leu', '946', 100, '[\"ROMANIA\"]'),
('RSD', 'Serbian Dinar', '941', 100, '[\"SERBIA\"]'),
('RUB', 'Russian Ruble', '643', 100, '[\"RUSSIAN FEDERATION\"]'),
('RWF', 'Rwanda Franc', '646', 1, '[\"RWANDA\"]'),
('SAR', 'Saudi Riyal', '682', 100, '[\"SAUDI ARABIA\"]'),
('SBD', 'Solomon Islands Dollar', '090', 100, '[\"SOLOMON ISLANDS\"]'),
('SCR', 'Seychelles Rupee', '690', 100, '[\"SEYCHELLES\"]'),
('SDG', 'Sudanese Pound', '938', 100, '[\"SUDAN\"]'),
('SEK', 'Swedish Krona', '752', 100, '[\"SWEDEN\"]'),
('SGD', 'Singapore Dollar', '702', 100, '[\"SINGAPORE\"]'),
('SHP', 'Saint Helena Pound', '654', 100, '[\"SAINT HELENA, ASCENSION AND \\nTRISTAN DA CUNHA\"]'),
('SLL', 'Leone', '694', 100, '[\"SIERRA LEONE\"]'),
('SOS', 'Somali Shilling', '706', 100, '[\"SOMALIA\"]'),
('SRD', 'Surinam Dollar', '968', 100, '[\"SURINAME\"]'),
('SSP', 'South Sudanese Pound', '728', 100, '[\"SOUTH SUDAN\"]'),
('STD', 'Dobra', '678', 100, '[\"SAO TOME AND PRINCIPE\"]'),
('SVC', 'El Salvador Colon', '222', 100, '[\"EL SALVADOR\"]'),
('SYP', 'Syrian Pound', '760', 100, '[\"SYRIAN ARAB REPUBLIC\"]'),
('SZL', 'Lilangeni', '748', 100, '[\"SWAZILAND\"]'),
('THB', 'Baht', '764', 100, '[\"THAILAND\"]'),
('TJS', 'Somoni', '972', 100, '[\"TAJIKISTAN\"]'),
('TMT', 'Turkmenistan New Manat', '934', 100, '[\"TURKMENISTAN\"]'),
('TND', 'Tunisian Dinar', '788', 1000, '[\"TUNISIA\"]'),
('TOP', 'Pa’anga', '776', 100, '[\"TONGA\"]'),
('TRY', 'Turkish Lira', '949', 100, '[\"TURKEY\"]'),
('TTD', 'Trinidad and Tobago Dollar', '780', 100, '[\"TRINIDAD AND TOBAGO\"]'),
('TWD', 'New Taiwan Dollar', '901', 100, '[\"TAIWAN, PROVINCE OF CHINA\"]'),
('TZS', 'Tanzanian Shilling', '834', 100, '[\"TANZANIA, UNITED REPUBLIC OF\"]'),
('UAH', 'Hryvnia', '980', 100, '[\"UKRAINE\"]'),
('UGX', 'Uganda Shilling', '800', 1, '[\"UGANDA\"]'),
('USD', 'US Dollar', '840', 100, '[\"AMERICAN SAMOA\",\"BONAIRE, SINT EUSTATIUS AND SABA\",\"BRITISH INDIAN OCEAN TERRITORY\",\"ECUADOR\",\"EL SALVADOR\",\"GUAM\",\"HAITI\",\"MARSHALL ISLANDS\",\"MICRONESIA, FEDERATED STATES OF\",\"NORTHERN MARIANA ISLANDS\",\"PALAU\",\"PANAMA\",\"PUERTO RICO\",\"TIMOR-LESTE\",\"TURKS AND CAICOS ISLANDS\",\"UNITED STATES\",\"UNITED STATES MINOR OUTLYING ISLANDS\",\"VIRGIN ISLANDS (BRITISH)\",\"VIRGIN ISLANDS (U.S.)\"]'),
('USN', 'US Dollar (Next day)', '997', 100, '[\"UNITED STATES\"]'),
('UYI', 'Uruguay Peso en Unidades Indexadas (URUIURUI)', '940', 1, '[\"URUGUAY\"]'),
('UYU', 'Peso Uruguayo', '858', 100, '[\"URUGUAY\"]'),
('UZS', 'Uzbekistan Sum', '860', 100, '[\"UZBEKISTAN\"]'),
('VEF', 'Bolivar', '937', 100, '[\"VENEZUELA, BOLIVARIAN REPUBLIC OF\"]'),
('VND', 'Dong', '704', 1, '[\"VIET NAM\"]'),
('VUV', 'Vatu', '548', 1, '[\"VANUATU\"]'),
('WST', 'Tala', '882', 100, '[\"SAMOA\"]'),
('XAF', 'CFA Franc BEAC', '950', 1, '[\"CAMEROON\",\"CENTRAL AFRICAN REPUBLIC\",\"CHAD\",\"CONGO\",\"EQUATORIAL GUINEA\",\"GABON\"]'),
('XCD', 'East Caribbean Dollar', '951', 100, '[\"ANGUILLA\",\"ANTIGUA AND BARBUDA\",\"DOMINICA\",\"GRENADA\",\"MONTSERRAT\",\"SAINT KITTS AND NEVIS\",\"SAINT LUCIA\",\"SAINT VINCENT AND THE GRENADINES\"]'),
('XDR', 'SDR (Special Drawing Right)', '960', 1, '[\"INTERNATIONAL MONETARY FUND (IMF)\\u00a0\"]'),
('XOF', 'CFA Franc BCEAO', '952', 1, '[\"BENIN\",\"BURKINA FASO\",\"C\\u00d4TE D\'IVOIRE\",\"GUINEA-BISSAU\",\"MALI\",\"NIGER\",\"SENEGAL\",\"TOGO\"]'),
('XPF', 'CFP Franc', '953', 1, '[\"FRENCH POLYNESIA\",\"NEW CALEDONIA\",\"WALLIS AND FUTUNA\"]'),
('XSU', 'Sucre', '994', 1, '[\"SISTEMA UNITARIO DE COMPENSACION REGIONAL DE PAGOS \\\"SUCRE\\\"\"]'),
('XUA', 'ADB Unit of Account', '965', 1, '[\"MEMBER COUNTRIES OF THE AFRICAN DEVELOPMENT BANK GROUP\"]'),
('YER', 'Yemeni Rial', '886', 100, '[\"YEMEN\"]'),
('ZAR', 'Rand', '710', 100, '[\"LESOTHO\",\"NAMIBIA\",\"SOUTH AFRICA\"]'),
('ZMW', 'Zambian Kwacha', '967', 100, '[\"ZAMBIA\"]'),
('ZWL', 'Zimbabwe Dollar', '932', 100, '[\"ZIMBABWE\"]');

-- --------------------------------------------------------

--
-- Struktur dari tabel `customer`
--

CREATE TABLE `customer` (
  `customer_id` int(11) NOT NULL,
  `name` varchar(128) NOT NULL,
  `no_services` varchar(128) NOT NULL,
  `email` varchar(128) NOT NULL,
  `register_date` varchar(50) NOT NULL,
  `due_date` int(11) NOT NULL,
  `address` text NOT NULL,
  `no_wa` varchar(128) NOT NULL,
  `c_status` varchar(128) NOT NULL,
  `ppn` int(11) NOT NULL,
  `no_ktp` varchar(128) NOT NULL,
  `ktp` text NOT NULL,
  `created` int(11) NOT NULL,
  `mode_user` varchar(50) NOT NULL,
  `user_mikrotik` varchar(128) NOT NULL,
  `mitra` int(11) NOT NULL,
  `coverage` int(11) NOT NULL,
  `auto_isolir` int(11) NOT NULL,
  `type_id` varchar(50) NOT NULL,
  `router` int(11) NOT NULL,
  `codeunique` int(11) NOT NULL,
  `phonecode` int(11) NOT NULL,
  `latitude` text NOT NULL,
  `longitude` text NOT NULL,
  `user_profile` varchar(50) NOT NULL,
  `action` int(11) NOT NULL,
  `type_payment` int(11) NOT NULL,
  `max_due_isolir` int(11) NOT NULL,
  `olt` int(11) NOT NULL,
  `connection` int(11) NOT NULL,
  `cust_amount` int(11) NOT NULL,
  `mac_address` varchar(50) NOT NULL,
  `level` int(11) NOT NULL,
  `cust_description` text NOT NULL,
  `type_ip` int(11) NOT NULL,
  `id_odc` int(11) NOT NULL,
  `id_odp` int(11) NOT NULL,
  `no_port_odp` int(11) NOT NULL,
  `month_due_date` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `customer_chart`
--

CREATE TABLE `customer_chart` (
  `id` int(11) NOT NULL,
  `id_chart` varchar(50) NOT NULL,
  `fromcs` varchar(50) NOT NULL,
  `tocs` varchar(128) NOT NULL,
  `type` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `customer_line`
--

CREATE TABLE `customer_line` (
  `id` int(11) NOT NULL,
  `id_line` varchar(50) NOT NULL,
  `customer_id` varchar(50) NOT NULL,
  `width` int(11) NOT NULL,
  `height` int(11) NOT NULL,
  `dir` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `customer_usage`
--

CREATE TABLE `customer_usage` (
  `id` int(11) NOT NULL,
  `no_services` varchar(50) NOT NULL,
  `count_usage` varchar(100) NOT NULL,
  `date_usage` varchar(50) NOT NULL,
  `last_update` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `email`
--

CREATE TABLE `email` (
  `id` int(11) NOT NULL,
  `protocol` varchar(50) NOT NULL,
  `host` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `port` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `send_payment` int(11) NOT NULL,
  `send_verify` int(11) NOT NULL,
  `forgot_password` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `email`
--

INSERT INTO `email` (`id`, `protocol`, `host`, `email`, `password`, `port`, `name`, `send_payment`, `send_verify`, `forgot_password`) VALUES
(1, 'smtp', 'mail.1112-project.com', 'no-reply@1112-project.com', 'email1112.project', '587', '1112-Project', 0, 0, 0);

-- --------------------------------------------------------

--
-- Struktur dari tabel `expenditure`
--

CREATE TABLE `expenditure` (
  `expenditure_id` int(11) NOT NULL,
  `date_payment` varchar(125) NOT NULL,
  `nominal` varchar(125) NOT NULL,
  `remark` text NOT NULL,
  `created` int(11) NOT NULL,
  `category` int(11) NOT NULL,
  `create_by` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `help`
--

CREATE TABLE `help` (
  `id` int(11) NOT NULL,
  `no_ticket` varchar(50) NOT NULL,
  `help_type` int(11) NOT NULL,
  `help_solution` int(11) NOT NULL,
  `no_services` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `date_created` int(11) NOT NULL,
  `status` varchar(50) NOT NULL,
  `teknisi` int(11) NOT NULL,
  `picture` text NOT NULL,
  `create_by` int(11) NOT NULL,
  `action` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `help_action`
--

CREATE TABLE `help_action` (
  `id` int(9) NOT NULL,
  `action` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struktur dari tabel `help_solution`
--

CREATE TABLE `help_solution` (
  `hs_id` int(11) NOT NULL,
  `hs_help_id` int(11) NOT NULL,
  `hs_name` varchar(110) NOT NULL,
  `solution` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `help_solution`
--

INSERT INTO `help_solution` (`hs_id`, `hs_help_id`, `hs_name`, `solution`) VALUES
(1, 1, 'Internet Lelet', '<ol>\r\n	<li>\r\n	<p>Lakukan tes kecepatan Internet Anda.</p>\r\n	</li>\r\n	<li>Cara melakukan tes kecepatan internet (speed test) :\r\n	<ul>\r\n		<li>Matikan semua koneksi dari Wi-Fi dan LAN (Komputer/Laptop).</li>\r\n		<li>Koneksikan internet di 1 gadget saja.</li>\r\n		<li>Buka website yang menyediakan speed test lalu mulai lakukan proses speed test.Apabila hasil tes kecepatan internet setidaknya lebih dari 75%&nbsp;dari kecepatan paket Anda, maka internet sudah normal.</li>\r\n	</ul>\r\n	</li>\r\n	<li>\r\n	<p>Jika hasil tes kecepatan internet kurang dari 75%&nbsp;dari kecepatan paket Anda, maka Anda lakukan restart modem ONT dengan cara menekan tombol power, matikan lalu hidupkan kembali.<img src=\"https://indihome.co.id/uploads/images/restart-modem_60199_D.gif\" style=\"width:100%\" /></p>\r\n	</li>\r\n	<li>\r\n	<p>Apabila restart ONT gagal, ikuti langkah berikutnya untuk penanganan lebih lanjut.</p>\r\n	</li>\r\n</ol>\r\n'),
(2, 1, 'Internet tidak bisa diakses', '<p>Pastikan semua kondisi lampu indikator modem ONT menyala hijau.</p>\r\n\r\n<p>Jika Lampu Indikator Power Mati :</p>\r\n\r\n<ol>\r\n	<li>Pastikan modem ONT terhubung dengan aliran listrik atau cek adaptor sudah tersambung dengan aliran listrik.</li>\r\n	<li>Bila belum menyala, lakukan cabut dan pasang adaptor modem ONT ke sambungan listrik.</li>\r\n	<li>Pastikan tombol power dalam keadaan ON dengan cara menekan tombol power pada modem ONT.\r\n	<p><img src=\"https://indihome.co.id/uploads/images/restart-modem_60199_D.gif\" style=\"width:80%\" /></p>\r\n	</li>\r\n	<li>Apabila restart modem ONT gagal, ikuti langkah berikutnya untuk penanganan lebih lanjut.</li>\r\n</ol>\r\n\r\n<p>Jika Lampu Indikator LOS/PON Menyala Merah :</p>\r\n\r\n<ol>\r\n	<li>Pastikan kabel patch cord/kabel FO dibalik modem ONT sudah terpasang sampai berbunyi klik pada port optical modem ONT.\r\n	<p><img src=\"https://indihome.co.id/uploads/images/setting-modem_14603_D.gif\" style=\"width:80%\" /></p>\r\n	</li>\r\n	<li>Apabila lampu LOS masih menyala merah, matikan modem ONT dengan cara tekan tombol power. Tunggu sekitar 30 detik lalu nyalakan kembali.\r\n	<p><img src=\"https://indihome.co.id/uploads/images/restart-modem_60199_D.gif\" style=\"width:80%\" /></p>\r\n	</li>\r\n	<li>Apabila restart ONT gagal, ikuti langkah berikutnya untuk penanganan lebih lanjut.</li>\r\n</ol>\r\n\r\n<p>Jika Hanya Lampu Indikator Internet Mati :</p>\r\n\r\n<ol>\r\n	<li>Tekan dan tahan tombol reset pada modem ONT menggunakan tusuk gigi agak lama lalu lepas.</li>\r\n	<li>Tunggu hingga lampu indikator menyala semua.</li>\r\n	<li>Apabila lampu indikator internet sudah menyala maka koneksikan Wi-Fi ke gadget menggunakan username dan password SSID yang ada dibalik stiker modem ONT.</li>\r\n	<li>Apabila restart ONT gagal, ikuti langkah berikutnya untuk penanganan lebih lanjut.</li>\r\n</ol>\r\n'),
(6, 1, 'Seluruh layanan (internet/tv) tidak berfungsi', '<ol>\r\n	<li>Pastikan semua kondisi lampu indikator modem ONT menyala hijau.</li>\r\n	<li>Pastikan modem ONT tersambung dengan aliran listrik.</li>\r\n	<li>Bila belum menyala, lakukan cabut colok adaptor modem ONT ke aliran listrik.</li>\r\n	<li>Pastikan tombol power dalam keadaan ON dengan cara menekan tombol power pada modem ONT.\r\n	<p><img src=\"https://indihome.co.id/uploads/images/restart-modem_60199_D.gif\" style=\"width:80%\" /></p>\r\n	</li>\r\n	<li>Pastikan kabel dibalik modem ONT sudah terpasang dengan baik, yaitu :\r\n	<ul>\r\n		<li>Kabel patch cord/kabel FO.</li>\r\n		<li>Kabel telepon tersambung port modem ONT pada Phone1/Pots1.</li>\r\n		<li>Kabel LAN dari STB tersambung ke port modem ONT sesuai. LAN 4 untuk STB 1 dan LAN 1 untuk STB kedua.\r\n		<p><img src=\"https://indihome.co.id/uploads/images/setting-modem_14603_D.gif\" style=\"width:80%\" /></p>\r\n		</li>\r\n	</ul>\r\n	</li>\r\n	<li>Apabila lampu LOS/PON masih menyala merah, matikan modem ONT dengan cara tekan tombol power. Tunggu sekitar 30 detik lalu nyalakan kembali.</li>\r\n	<li>Apabila cara diatas masih gagal, ikuti langkah berikutnya untuk penanganan lebih lanjut.</li>\r\n</ol>\r\n'),
(7, 1, 'Internet putus-putus', '<ol>\r\n	<li>Restart modem ONT dengan cara menekan tombol power. Matikan sekitar 30 detik lalu nyalakan kembali.<img src=\"https://indihome.co.id/uploads/images/restart-modem_38819_D.gif\" style=\"width:100%\" /></li>\r\n	<li>Apabila restart ONT gagal, ikuti langkah berikutnya untuk penanganan lebih lanjut.</li>\r\n</ol>\r\n'),
(8, 2, 'Tidak bisa bayar tagihan', '<ol>\r\n	<li>Pastikan nomor layanan Anda sudah terdaftar.</li>\r\n	<li>Pastikan langkah - langkah bayar yang dilakukan sesuai dengan mode&nbsp;bayar yang dipilih.</li>\r\n	<li>Usahakan melakukan pembayaran sebelum tanggal jatuh tempo.</li>\r\n	<li>Ganti mode&nbsp;&nbsp;bayar lain jika moda bayar yang ada pakai masih gagal.</li>\r\n	<li>Apabila cara diatas masih gagal, ikuti langkah berikutnya untuk penanganan lebih lanjut.</li>\r\n</ol>\r\n'),
(9, 2, 'Billing sudah dibayar namun paket masih terisolir', '<p>1. Pastikan anda sudah membayar sesuai nominal tagihan&nbsp;</p>\r\n\r\n<p>2. Silahkan konfirmasi ulang di data tagihan anda</p>\r\n\r\n<p>3.&nbsp;Apabila cara diatas masih gagal, ikuti langkah berikutnya untuk penanganan lebih lanjut.</p>\r\n'),
(10, 2, 'Buka Isolir', '<p>1. Pastikan anda sudah melakukan pembayaran</p>\r\n\r\n<p>2. Silahkan lampirkan bukti pembayaran</p>\r\n'),
(11, 6, 'Kabel Putus', '<p>Sambung / Ganti Baru</p>\r\n');

-- --------------------------------------------------------

--
-- Struktur dari tabel `help_timeline`
--

CREATE TABLE `help_timeline` (
  `ht_id` int(11) NOT NULL,
  `help_id` int(11) NOT NULL,
  `date_update` int(11) NOT NULL,
  `remark` text NOT NULL,
  `teknisi` int(11) NOT NULL,
  `status` varchar(50) NOT NULL,
  `date_created` varchar(40) NOT NULL,
  `action` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `help_type`
--

CREATE TABLE `help_type` (
  `help_id` int(11) NOT NULL,
  `help_type` varchar(50) NOT NULL,
  `help_remark` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `help_type`
--

INSERT INTO `help_type` (`help_id`, `help_type`, `help_remark`) VALUES
(1, 'Internet', 'yang berurusan dengan internet'),
(2, 'Tagihan', 'Berkaitan'),
(6, 'Kabel', 'Ganti'),
(7, 'Sinyal Lemah', 'Pointing Ulang / Tinggikan Antena');

-- --------------------------------------------------------

--
-- Struktur dari tabel `income`
--

CREATE TABLE `income` (
  `income_id` int(11) NOT NULL,
  `date_payment` varchar(125) NOT NULL,
  `nominal` varchar(125) NOT NULL,
  `remark` text NOT NULL,
  `created` int(11) NOT NULL,
  `category` int(11) NOT NULL,
  `create_by` int(11) NOT NULL,
  `invoice_id` int(20) NOT NULL,
  `no_services` varchar(50) NOT NULL,
  `mode_payment` varchar(50) NOT NULL,
  `picture` text NOT NULL,
  `coverage` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `invoice`
--

CREATE TABLE `invoice` (
  `invoice_id` int(11) NOT NULL,
  `invoice` varchar(128) NOT NULL,
  `code_unique` int(11) NOT NULL,
  `month` varchar(11) NOT NULL,
  `year` int(11) NOT NULL,
  `no_services` varchar(128) NOT NULL,
  `status` varchar(128) NOT NULL,
  `i_ppn` int(11) NOT NULL,
  `created` int(11) NOT NULL,
  `create_by` int(11) NOT NULL,
  `date_payment` int(11) DEFAULT NULL,
  `metode_payment` varchar(100) NOT NULL,
  `admin_fee` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `order_id` varchar(128) NOT NULL,
  `token` text NOT NULL,
  `payment_type` varchar(128) NOT NULL,
  `transaction_time` varchar(50) NOT NULL,
  `bank` varchar(50) NOT NULL,
  `va_number` varchar(50) NOT NULL,
  `pdf_url` text NOT NULL,
  `status_code` varchar(5) NOT NULL,
  `expired` text NOT NULL,
  `x_id` varchar(128) NOT NULL,
  `x_bank_code` varchar(128) NOT NULL,
  `x_method` varchar(50) NOT NULL,
  `x_account_number` varchar(50) NOT NULL,
  `x_expired` varchar(50) NOT NULL,
  `x_external_id` varchar(50) NOT NULL,
  `x_amount` varchar(50) NOT NULL,
  `x_qrcode` text NOT NULL,
  `reference` text NOT NULL,
  `payment_url` text NOT NULL,
  `code_coupon` varchar(50) NOT NULL,
  `disc_coupon` int(11) NOT NULL,
  `outlet` int(11) NOT NULL,
  `status_income` varchar(40) NOT NULL,
  `inv_due_date` varchar(40) NOT NULL,
  `date_isolir` varchar(50) NOT NULL,
  `send_before_due` varchar(50) NOT NULL,
  `send_due` varchar(50) NOT NULL,
  `picture` text NOT NULL,
  `inv_ppn` int(11) NOT NULL,
  `picture1` text NOT NULL,
  `send_bill` varchar(50) NOT NULL,
  `send_paid` varchar(50) NOT NULL,
  `date_paid` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `invoice_detail`
--

CREATE TABLE `invoice_detail` (
  `detail_id` int(11) NOT NULL,
  `invoice_id` varchar(128) NOT NULL,
  `price` varchar(125) NOT NULL,
  `qty` varchar(125) NOT NULL,
  `disc` varchar(128) NOT NULL,
  `remark` text NOT NULL,
  `total` varchar(128) NOT NULL,
  `item_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `d_month` int(11) NOT NULL,
  `d_year` int(11) NOT NULL,
  `d_no_services` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `logs`
--

CREATE TABLE `logs` (
  `log_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `datetime` int(11) NOT NULL,
  `date_log` varchar(40) NOT NULL,
  `category` varchar(128) NOT NULL,
  `role_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `remark` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `modem`
--

CREATE TABLE `modem` (
  `id` int(11) NOT NULL,
  `type` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `show_customer` int(11) NOT NULL,
  `ip_local` text NOT NULL,
  `ip_public` text NOT NULL,
  `ssid_name` varchar(50) NOT NULL,
  `ssid_password` varchar(50) NOT NULL,
  `login_user` varchar(50) NOT NULL,
  `login_password` varchar(50) NOT NULL,
  `remark` text NOT NULL,
  `created` int(11) NOT NULL,
  `createby` int(11) NOT NULL,
  `updated` int(11) NOT NULL,
  `updateby` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `m_odc`
--

CREATE TABLE `m_odc` (
  `id_odc` int(11) NOT NULL,
  `code_odc` text NOT NULL,
  `coverage_odc` int(11) NOT NULL,
  `no_port_olt` int(11) NOT NULL,
  `color_tube_fo` text NOT NULL,
  `no_pole` text NOT NULL,
  `latitude` text NOT NULL,
  `longitude` text NOT NULL,
  `total_port` int(11) NOT NULL,
  `document` text NOT NULL,
  `remark` text NOT NULL,
  `created` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  `create_by` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struktur dari tabel `m_odp`
--

CREATE TABLE `m_odp` (
  `id_odp` int(11) NOT NULL,
  `code_odp` text NOT NULL,
  `code_odc` int(11) NOT NULL,
  `coverage_odp` int(11) NOT NULL,
  `no_port_odc` int(11) NOT NULL,
  `color_tube_fo` text NOT NULL,
  `no_pole` text NOT NULL,
  `latitude` text NOT NULL,
  `longitude` text NOT NULL,
  `total_port` int(11) NOT NULL,
  `document` text NOT NULL,
  `remark` text NOT NULL,
  `created` int(11) NOT NULL,
  `create_by` int(11) NOT NULL,
  `role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struktur dari tabel `olt`
--

CREATE TABLE `olt` (
  `id` int(11) NOT NULL,
  `is_active` int(11) NOT NULL,
  `ip_address` text NOT NULL,
  `alias` varchar(40) NOT NULL,
  `vendor` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `value` varchar(40) NOT NULL,
  `token` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `olt`
--

INSERT INTO `olt` (`id`, `is_active`, `ip_address`, `alias`, `vendor`, `username`, `password`, `value`, `token`) VALUES
(1, 1, 'IP ADDRESS / DOMAIN\n', 'Master', 'HSGQ', 'USERNAME', 'baf318sdasdsada695df1c6a3cf5c4da', 'aWthcHV0cmk=', '');

-- --------------------------------------------------------

--
-- Struktur dari tabel `other`
--

CREATE TABLE `other` (
  `id` int(11) NOT NULL,
  `say_wa` text NOT NULL,
  `body_wa` text NOT NULL,
  `footer_wa` text NOT NULL,
  `thanks_wa` text NOT NULL,
  `add_customer` text NOT NULL,
  `code_unique` int(11) NOT NULL,
  `text_code_unique` text NOT NULL,
  `remark_invoice` text NOT NULL,
  `date_reset` int(11) NOT NULL,
  `date_create` int(11) NOT NULL,
  `date_reminder` int(11) NOT NULL,
  `key_apps` varchar(50) NOT NULL,
  `reset_password` text NOT NULL,
  `code_otp` text NOT NULL,
  `sch_isolir` int(11) NOT NULL,
  `sch_createbill` int(11) NOT NULL,
  `sch_usage` int(11) NOT NULL,
  `sch_reset_usage` int(11) NOT NULL,
  `sch_before_due` int(11) NOT NULL,
  `sch_due` int(11) NOT NULL,
  `sch_resend` int(11) NOT NULL,
  `inv_thermal` int(11) NOT NULL,
  `checkout` text NOT NULL,
  `create_help` text NOT NULL,
  `create_help_customer` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `other`
--

INSERT INTO `other` (`id`, `say_wa`, `body_wa`, `footer_wa`, `thanks_wa`, `add_customer`, `code_unique`, `text_code_unique`, `remark_invoice`, `date_reset`, `date_create`, `date_reminder`, `key_apps`, `reset_password`, `code_otp`, `sch_isolir`, `sch_createbill`, `sch_usage`, `sch_reset_usage`, `sch_before_due`, `sch_due`, `sch_resend`, `inv_thermal`, `checkout`, `create_help`, `create_help_customer`) VALUES
(1, 'Plg Yth, tagihan dengan no layanan {noservices} a/n _{name}_ Periode {period} sebesar *{nominal}*, Maks Tanggal {duedate}-{month}-{year}.\r\n{e}\r\n{e}Mohon untuk melakukan pembayaran langsung ke {companyname} atau transfer ke Rek dibawah ini : \r\n{e}\r\n{e}*NAMABANK* NOREK A/N NAMAPEMILIK\r\n{e}\r\n{e}Abaikan jika sudah melakukan pembayaran. Tks\r\n{e}\r\n{e}*{companyname}*\r\n{e}_{slogan}_\r\n{e}{link}', 'Plg Yth, tagihan dengan no layanan {noservices} a/n _{name}_ Periode {period} sebesar *{nominal}*, sudah memasuki jatuh tempo dan akun anda akan terisolir.\r\n{e}\r\n{e}Mohon untuk melakukan pembayaran langsung ke {companyname} atau transfer ke Rek dibawah ini : \r\n{e}\r\n{e}*NAMABANK* NOREK A/N NAMAPEMILIK\r\n{e}\r\n{e}Abaikan jika sudah melakukan pembayaran. Tks\r\n{e}\r\n{e}*{companyname}*\r\n{e}_{slogan}_\r\n{e}{link}', 'Plg Yth, tagihan dengan no layanan {noservices} a/n _{name}_ Periode {period} sebesar *{nominal}*, akan jatuh tempo pada tanggal {duedate}.\r\n{e}\r\n{e}Mohon untuk melakukan pembayaran langsung ke {companyname} atau transfer ke Rek dibawah ini : \r\n{e}\r\n{e}*NAMABANK* NOREK A/N NAMAPEMILIK\r\n{e}\r\n\r\n{e}Abaikan jika sudah melakukan pembayaran. Tks\r\n{e}\r\n{e}*{companyname}*\r\n{e}_{slogan}_\r\n{e}{link}', 'Plg Yth, Terima kasih Anda Telah membayar tagihan Internet periode {period} sebesar {nominal}.\r\n{e}\r\n{e}*{companyname}*\r\n{e}_{slogan}_\r\n{e}{link}', 'Terimaksih telah berlangganan {companyname}\r\n\r\nBerikut adalah informasi akun anda\r\n\r\nNama : {name}\r\nNo Layanan : {noservices}\r\nEmail : {email}\r\nPassword : {password}\r\n\r\nMohon segera ganti password anda, untuk menjaga keamanan. Terimakasih \r\n\r\n{e}\r\n{e}*{companyname}*\r\n{e}_{slogan}_\r\n{e}{link}', 0, 'Untuk memudahkan verifikasi pembayaran', '', 1, 1, 3, 'kz8ooEecVzBzD8v4', '*Info Reset Password*\r\n\r\nBerikut adalah informasi akun anda\r\n\r\nEmail : {email}\r\nPassword Baru : {password}\r\n\r\nMohon segera ganti password anda, untuk menjaga keamanan. Terimakasih \r\n\r\n{e}\r\n{e}*{companyname}*\r\n{e}_{slogan}_\r\n{e}{link}', '0', 0, 0, 0, 0, 0, 0, 0, 0, '', '', '');

-- --------------------------------------------------------

--
-- Struktur dari tabel `package`
--

CREATE TABLE `package` (
  `id` int(11) NOT NULL,
  `payment_gateway` int(11) NOT NULL,
  `router` int(11) NOT NULL,
  `count_router` int(11) NOT NULL,
  `count_customer` int(11) NOT NULL,
  `telegram_bot` int(11) NOT NULL,
  `wa_gateway` int(11) NOT NULL,
  `maps` int(11) NOT NULL,
  `chart` int(11) NOT NULL,
  `mitra` int(11) NOT NULL,
  `invoice_custom` int(11) NOT NULL,
  `invoice_no` int(11) NOT NULL,
  `coverage_operator` int(11) NOT NULL,
  `coverage_teknisi` int(11) NOT NULL,
  `modem` int(11) NOT NULL,
  `coverage_package` int(11) NOT NULL,
  `olt` int(11) NOT NULL,
  `count_olt` int(11) NOT NULL,
  `absensi` int(11) NOT NULL,
  `briva` int(11) NOT NULL,
  `sms_gateway` int(11) NOT NULL,
  `moota` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `package`
--

INSERT INTO `package` (`id`, `payment_gateway`, `router`, `count_router`, `count_customer`, `telegram_bot`, `wa_gateway`, `maps`, `chart`, `mitra`, `invoice_custom`, `invoice_no`, `coverage_operator`, `coverage_teknisi`, `modem`, `coverage_package`, `olt`, `count_olt`, `absensi`, `briva`, `sms_gateway`, `moota`) VALUES
(1, 1, 1, 1, 250, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Struktur dari tabel `package_category`
--

CREATE TABLE `package_category` (
  `p_category_id` int(11) NOT NULL,
  `name` varchar(125) NOT NULL,
  `description` text NOT NULL,
  `date_created` int(11) NOT NULL,
  `date_updated` int(11) NOT NULL,
  `create_by` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `package_category`
--

INSERT INTO `package_category` (`p_category_id`, `name`, `description`, `date_created`, `date_updated`, `create_by`) VALUES
(1, 'Internet', ' ', 1607703893, 0, 0);

-- --------------------------------------------------------

--
-- Struktur dari tabel `package_item`
--

CREATE TABLE `package_item` (
  `p_item_id` int(11) NOT NULL,
  `name` varchar(125) NOT NULL,
  `price` varchar(125) NOT NULL,
  `picture` text NOT NULL,
  `description` text NOT NULL,
  `category_id` int(11) NOT NULL,
  `date_created` int(11) NOT NULL,
  `date_update` int(11) NOT NULL,
  `public` int(11) NOT NULL,
  `is_active` int(11) NOT NULL,
  `create_by` int(11) NOT NULL,
  `role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `payment_gateway`
--

CREATE TABLE `payment_gateway` (
  `id` int(11) NOT NULL,
  `vendor` varchar(50) NOT NULL,
  `api_key` text NOT NULL,
  `server_key` text NOT NULL,
  `client_key` text NOT NULL,
  `is_active` int(11) NOT NULL,
  `mode` int(11) NOT NULL,
  `expired` int(11) NOT NULL,
  `bca_va` int(11) NOT NULL,
  `bri_va` int(11) NOT NULL,
  `bni_va` int(11) NOT NULL,
  `kodemerchant` text NOT NULL,
  `mandiri_va` int(11) NOT NULL,
  `cimb_va` int(11) NOT NULL,
  `mybank_va` int(11) NOT NULL,
  `ovo` int(11) NOT NULL,
  `permata_va` int(11) NOT NULL,
  `gopay` int(11) NOT NULL,
  `shopeepay` int(11) NOT NULL,
  `indomaret` int(11) NOT NULL,
  `alfamart` int(11) NOT NULL,
  `admin_fee` int(11) NOT NULL,
  `va` int(11) NOT NULL,
  `ewallet` int(11) NOT NULL,
  `retail` int(11) NOT NULL,
  `qrcode` int(11) NOT NULL,
  `alfamidi` int(11) NOT NULL,
  `muamalat_va` int(11) NOT NULL,
  `sinarmas_va` int(11) NOT NULL,
  `dana` int(11) NOT NULL,
  `linkaja` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `payment_gateway`
--

INSERT INTO `payment_gateway` (`id`, `vendor`, `api_key`, `server_key`, `client_key`, `is_active`, `mode`, `expired`, `bca_va`, `bri_va`, `bni_va`, `kodemerchant`, `mandiri_va`, `cimb_va`, `mybank_va`, `ovo`, `permata_va`, `gopay`, `shopeepay`, `indomaret`, `alfamart`, `admin_fee`, `va`, `ewallet`, `retail`, `qrcode`, `alfamidi`, `muamalat_va`, `sinarmas_va`, `dana`, `linkaja`) VALUES
(1, 'Tripay', '', 'server key', 'client key', 0, 1, 1, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 3000, 0, 0, 0, 0, 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Struktur dari tabel `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(225) NOT NULL,
  `picture` text NOT NULL,
  `remark` text NOT NULL,
  `link` text NOT NULL,
  `description` text NOT NULL,
  `date_created` int(11) NOT NULL,
  `create_by` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `report_transaction`
--

CREATE TABLE `report_transaction` (
  `report_id` int(128) NOT NULL,
  `date` varchar(128) NOT NULL,
  `income` varchar(128) NOT NULL,
  `expenditure` varchar(128) NOT NULL,
  `remark` text NOT NULL,
  `created` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `role_management`
--

CREATE TABLE `role_management` (
  `role_id` int(11) NOT NULL,
  `show_customer` int(11) NOT NULL,
  `add_customer` int(11) NOT NULL,
  `edit_customer` int(11) NOT NULL,
  `del_customer` int(11) NOT NULL,
  `show_item` int(11) NOT NULL,
  `add_item` int(11) NOT NULL,
  `edit_item` int(11) NOT NULL,
  `del_item` int(11) NOT NULL,
  `show_bill` int(11) NOT NULL,
  `add_bill` int(11) NOT NULL,
  `del_bill` int(11) NOT NULL,
  `show_coverage` int(11) NOT NULL,
  `add_coverage` int(11) NOT NULL,
  `edit_coverage` int(11) NOT NULL,
  `del_coverage` int(11) NOT NULL,
  `coverage_operator` int(11) NOT NULL,
  `show_slide` int(11) NOT NULL,
  `add_slide` int(11) NOT NULL,
  `edit_slide` int(11) NOT NULL,
  `del_slide` int(11) NOT NULL,
  `show_router` int(11) NOT NULL,
  `add_router` int(11) NOT NULL,
  `edit_router` int(11) NOT NULL,
  `del_router` int(11) NOT NULL,
  `show_saldo` int(11) NOT NULL,
  `show_income` int(11) NOT NULL,
  `add_income` int(11) NOT NULL,
  `edit_income` int(11) NOT NULL,
  `del_income` int(11) NOT NULL,
  `show_user` int(11) NOT NULL,
  `edit_user` int(11) NOT NULL,
  `del_user` int(11) NOT NULL,
  `add_user` int(11) NOT NULL,
  `show_product` int(11) NOT NULL,
  `add_product` int(11) NOT NULL,
  `edit_product` int(11) NOT NULL,
  `del_product` int(11) NOT NULL,
  `show_usage` int(11) NOT NULL,
  `show_history` int(11) NOT NULL,
  `show_speedtest` int(11) NOT NULL,
  `show_log` int(11) NOT NULL,
  `cek_bill` int(11) NOT NULL,
  `cek_usage` int(11) NOT NULL,
  `show_help` int(11) NOT NULL,
  `edit_help` int(11) NOT NULL,
  `del_help` int(11) NOT NULL,
  `add_help` int(11) NOT NULL,
  `register_coverage` int(11) NOT NULL,
  `register_maps` int(11) NOT NULL,
  `register_show` int(11) NOT NULL,
  `coverage_teknisi` int(11) NOT NULL,
  `customer_free` int(11) NOT NULL,
  `customer_isolir` int(11) NOT NULL,
  `edit_bill` int(11) NOT NULL,
  `confirm_bill` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `role_management`
--

INSERT INTO `role_management` (`role_id`, `show_customer`, `add_customer`, `edit_customer`, `del_customer`, `show_item`, `add_item`, `edit_item`, `del_item`, `show_bill`, `add_bill`, `del_bill`, `show_coverage`, `add_coverage`, `edit_coverage`, `del_coverage`, `coverage_operator`, `show_slide`, `add_slide`, `edit_slide`, `del_slide`, `show_router`, `add_router`, `edit_router`, `del_router`, `show_saldo`, `show_income`, `add_income`, `edit_income`, `del_income`, `show_user`, `edit_user`, `del_user`, `add_user`, `show_product`, `add_product`, `edit_product`, `del_product`, `show_usage`, `show_history`, `show_speedtest`, `show_log`, `cek_bill`, `cek_usage`, `show_help`, `edit_help`, `del_help`, `add_help`, `register_coverage`, `register_maps`, `register_show`, `coverage_teknisi`, `customer_free`, `customer_isolir`, `edit_bill`, `confirm_bill`) VALUES
(1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0),
(3, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0),
(4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Struktur dari tabel `role_menu`
--

CREATE TABLE `role_menu` (
  `role_id` int(11) NOT NULL,
  `customer` int(11) NOT NULL,
  `customer_menu` int(11) NOT NULL,
  `customer_add` int(11) NOT NULL,
  `customer_active` int(11) NOT NULL,
  `customer_non_active` int(11) NOT NULL,
  `customer_waiting` int(11) NOT NULL,
  `customer_whatsapp` int(11) NOT NULL,
  `customer_chart` int(11) NOT NULL,
  `customer_maps` int(11) NOT NULL,
  `services_menu` int(11) NOT NULL,
  `services_add` int(11) NOT NULL,
  `services_item` int(11) NOT NULL,
  `services_category` int(11) NOT NULL,
  `coverage` int(11) NOT NULL,
  `coverage_add` int(11) NOT NULL,
  `coverage_menu` int(11) NOT NULL,
  `coverage_maps` int(11) NOT NULL,
  `bill` int(11) NOT NULL,
  `bill_menu` int(11) NOT NULL,
  `bill_unpaid` int(11) NOT NULL,
  `bill_paid` int(11) NOT NULL,
  `bill_due_date` int(11) NOT NULL,
  `bill_draf` int(11) NOT NULL,
  `bill_debt` int(11) NOT NULL,
  `bill_confirm` int(11) NOT NULL,
  `bill_code_coupon` int(11) NOT NULL,
  `bill_history` int(11) NOT NULL,
  `bill_delete` int(11) NOT NULL,
  `bill_send` int(11) NOT NULL,
  `finance_menu` int(11) NOT NULL,
  `finance_income` int(11) NOT NULL,
  `finance_expend` int(11) NOT NULL,
  `finance_report` int(11) NOT NULL,
  `help` int(11) NOT NULL,
  `help_menu` int(11) NOT NULL,
  `help_category` int(11) NOT NULL,
  `router` int(11) NOT NULL,
  `router_menu` int(11) NOT NULL,
  `router_customer` int(11) NOT NULL,
  `router_schedule` int(11) NOT NULL,
  `website_menu` int(11) NOT NULL,
  `website_slide` int(11) NOT NULL,
  `website_product` int(11) NOT NULL,
  `user` int(11) NOT NULL,
  `user_menu` int(11) NOT NULL,
  `user_add` int(11) NOT NULL,
  `user_admin` int(11) NOT NULL,
  `user_operator` int(11) NOT NULL,
  `user_teknisi` int(11) NOT NULL,
  `user_mitra` int(11) NOT NULL,
  `user_outlet` int(11) NOT NULL,
  `user_customer` int(11) NOT NULL,
  `user_kolektor` int(11) NOT NULL,
  `user_finance` int(11) NOT NULL,
  `role_menu` int(11) NOT NULL,
  `role_access` int(11) NOT NULL,
  `role_sub_menu` int(11) NOT NULL,
  `integration_menu` int(11) NOT NULL,
  `integration_whatsapp` int(11) NOT NULL,
  `integration_email` int(11) NOT NULL,
  `integration_telegram` int(11) NOT NULL,
  `integration_sms` int(11) NOT NULL,
  `integration_payment_gateway` int(11) NOT NULL,
  `integration_olt` int(11) NOT NULL,
  `integration_radius` int(11) NOT NULL,
  `setting_menu` int(11) NOT NULL,
  `setting_company` int(11) NOT NULL,
  `setting_about_company` int(11) NOT NULL,
  `setting_bank_account` int(11) NOT NULL,
  `setting_terms_condition` int(11) NOT NULL,
  `setting_privacy_policy` int(11) NOT NULL,
  `setting_logs` int(11) NOT NULL,
  `setting_backup` int(11) NOT NULL,
  `setting_other` int(11) NOT NULL,
  `customer_free` int(11) NOT NULL,
  `customer_isolir` int(11) NOT NULL,
  `integration_briva` int(11) NOT NULL,
  `integration_moota` int(11) NOT NULL,
  `master_menu` int(11) NOT NULL,
  `master_odc` int(11) NOT NULL,
  `master_odp` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `role_menu`
--

INSERT INTO `role_menu` (`role_id`, `customer`, `customer_menu`, `customer_add`, `customer_active`, `customer_non_active`, `customer_waiting`, `customer_whatsapp`, `customer_chart`, `customer_maps`, `services_menu`, `services_add`, `services_item`, `services_category`, `coverage`, `coverage_add`, `coverage_menu`, `coverage_maps`, `bill`, `bill_menu`, `bill_unpaid`, `bill_paid`, `bill_due_date`, `bill_draf`, `bill_debt`, `bill_confirm`, `bill_code_coupon`, `bill_history`, `bill_delete`, `bill_send`, `finance_menu`, `finance_income`, `finance_expend`, `finance_report`, `help`, `help_menu`, `help_category`, `router`, `router_menu`, `router_customer`, `router_schedule`, `website_menu`, `website_slide`, `website_product`, `user`, `user_menu`, `user_add`, `user_admin`, `user_operator`, `user_teknisi`, `user_mitra`, `user_outlet`, `user_customer`, `user_kolektor`, `user_finance`, `role_menu`, `role_access`, `role_sub_menu`, `integration_menu`, `integration_whatsapp`, `integration_email`, `integration_telegram`, `integration_sms`, `integration_payment_gateway`, `integration_olt`, `integration_radius`, `setting_menu`, `setting_company`, `setting_about_company`, `setting_bank_account`, `setting_terms_condition`, `setting_privacy_policy`, `setting_logs`, `setting_backup`, `setting_other`, `customer_free`, `customer_isolir`, `integration_briva`, `integration_moota`, `master_menu`, `master_odc`, `master_odp`) VALUES
(1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(3, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(4, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(5, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Struktur dari tabel `router`
--

CREATE TABLE `router` (
  `id` int(11) NOT NULL,
  `is_active` int(11) NOT NULL,
  `alias` varchar(50) NOT NULL,
  `ip_address` text NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(100) NOT NULL,
  `port` int(11) NOT NULL,
  `date_reset` int(11) NOT NULL,
  `create_by` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `router`
--

INSERT INTO `router` (`id`, `is_active`, `alias`, `ip_address`, `username`, `password`, `port`, `date_reset`, `create_by`) VALUES
(1, 0, 'Master', 'IP PUBLIC / VPN REMOTE', 'test', 'mywifi', 8728, 0, 0);

-- --------------------------------------------------------

--
-- Struktur dari tabel `services`
--

CREATE TABLE `services` (
  `services_id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `item_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `no_services` varchar(125) NOT NULL,
  `qty` varchar(128) NOT NULL,
  `price` varchar(128) NOT NULL,
  `disc` varchar(128) DEFAULT NULL,
  `total` varchar(128) NOT NULL,
  `remark` text NOT NULL,
  `services_create` int(11) NOT NULL,
  `create_by` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `slide`
--

CREATE TABLE `slide` (
  `slide_id` int(11) NOT NULL,
  `name` varchar(225) NOT NULL,
  `picture` text NOT NULL,
  `description` text NOT NULL,
  `link` text NOT NULL,
  `create_by` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `timezone`
--

CREATE TABLE `timezone` (
  `timezid` int(11) NOT NULL,
  `tz` varchar(255) NOT NULL,
  `gmt` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `timezone`
--

INSERT INTO `timezone` (`timezid`, `tz`, `gmt`) VALUES
(1, 'Pacific/Kwajalein', '(GMT -12:00) Eniwetok, Kwajalein'),
(2, 'Pacific/Samoa', '(GMT -11:00) Midway Island, Samoa'),
(3, 'Pacific/Honolulu', '(GMT -10:00) Hawaii'),
(4, 'America/Anchorage', '(GMT -9:00) Alaska'),
(5, 'America/Los_Angeles', '(GMT -8:00) Pacific Time (US & Canada) Los Angeles, Seattle'),
(6, 'America/Denver', '(GMT -7:00) Mountain Time (US & Canada) Denver'),
(7, 'America/Chicago', '(GMT -6:00) Central Time (US & Canada), Chicago, Mexico City'),
(8, 'America/New_York', '(GMT -5:00) Eastern Time (US & Canada), New York, Bogota, Lima'),
(9, 'Atlantic/Bermuda', '(GMT -4:00) Atlantic Time (Canada), Caracas, La Paz'),
(10, 'Canada/Newfoundland', '(GMT -3:30) Newfoundland'),
(11, 'Brazil/East', '(GMT -3:00) Brazil, Buenos Aires, Georgetown'),
(12, 'Atlantic/Azores', '(GMT -2:00) Mid-Atlantic'),
(13, 'Atlantic/Cape_Verde', '(GMT -1:00 hour) Azores, Cape Verde Islands'),
(14, 'Europe/London', '(GMT) Western Europe Time, London, Lisbon, Casablanca'),
(15, 'Europe/Brussels', '(GMT +1:00 hour) Brussels, Copenhagen, Madrid, Paris'),
(16, 'Europe/Helsinki', '(GMT +2:00) Kaliningrad, South Africa'),
(17, 'Asia/Baghdad', '(GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg'),
(18, 'Asia/Tehran', '(GMT +3:30) Tehran'),
(19, 'Asia/Baku', '(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi'),
(20, 'Asia/Kabul', '(GMT +4:30) Kabul'),
(21, 'Asia/Karachi', '(GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent'),
(22, 'Asia/Calcutta', '(GMT +5:30) Bombay, Calcutta, Madras, New Delhi'),
(23, 'Asia/Dhaka', '(GMT +6:00) Almaty, Dhaka, Colombo'),
(24, 'Asia/Bangkok', '(GMT +7:00) Bangkok, Hanoi, Jakarta'),
(25, 'Asia/Hong_Kong', '(GMT +8:00) Beijing, Perth, Singapore, Hong Kong'),
(26, 'Asia/Tokyo', '(GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk'),
(27, 'Australia/Adelaide', '(GMT +9:30) Adelaide, Darwin'),
(28, 'Pacific/Guam', '(GMT +10:00) Eastern Australia, Guam, Vladivostok'),
(29, 'Asia/Magadan', '(GMT +11:00) Magadan, Solomon Islands, New Caledonia'),
(30, 'Pacific/Fiji', '(GMT +12:00) Auckland, Wellington, Fiji, Kamchatka');

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(128) NOT NULL,
  `password` varchar(100) NOT NULL,
  `name` varchar(128) NOT NULL,
  `phone` varchar(25) NOT NULL,
  `address` text NOT NULL,
  `image` varchar(225) NOT NULL,
  `role_id` text NOT NULL,
  `is_active` int(1) NOT NULL,
  `date_created` int(11) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `no_services` varchar(50) NOT NULL,
  `fee` int(11) NOT NULL,
  `ppn` varchar(40) NOT NULL,
  `pph` varchar(40) NOT NULL,
  `bhp` varchar(40) NOT NULL,
  `uso` varchar(40) NOT NULL,
  `admin` varchar(40) NOT NULL,
  `fee_active` varchar(40) NOT NULL,
  `fee_mitra` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`id`, `email`, `password`, `name`, `phone`, `address`, `image`, `role_id`, `is_active`, `date_created`, `gender`, `no_services`, `fee`, `ppn`, `pph`, `bhp`, `uso`, `admin`, `fee_active`, `fee_mitra`) VALUES
(1, 'ginginabdulgoni@gmail.com', '$2y$10$/XdV2yxyW7I/p0obVJHdieXLx2TCRCncHotQPZLZZLXnKANiw983i', 'Gingin Abdul Goni', '082337481227', 'Kp. Ciparay', 'default1.jpg', '1', 1, 1565599788, 'Male', '', 0, '', '', '', '', '', '', ''),
(25, '11duabelasproject@gmail.com', '$2y$10$VlHFVqv5zjwR3w3TDvpZneYYeO5skuXWWDncFcIQ2QmPhFEzJzxDe', 'Rosita Wulandari', '', '', 'default.jpg', '1', 1, 1640543193, '', '', 0, '', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Struktur dari tabel `user_token`
--

CREATE TABLE `user_token` (
  `id` int(11) NOT NULL,
  `type` int(11) NOT NULL,
  `email` varchar(128) NOT NULL,
  `token` varchar(128) NOT NULL,
  `date_created` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `whatsapp`
--

CREATE TABLE `whatsapp` (
  `id` int(11) NOT NULL,
  `is_active` int(11) NOT NULL,
  `api_key` text NOT NULL,
  `token` text NOT NULL,
  `domain_api` text NOT NULL,
  `username` varchar(50) NOT NULL,
  `vendor` varchar(128) NOT NULL,
  `createinvoice` int(11) NOT NULL,
  `paymentinvoice` int(11) NOT NULL,
  `duedateinvoice` int(11) NOT NULL,
  `interval_message` int(11) NOT NULL,
  `sender` varchar(128) NOT NULL,
  `reminderinvoice` int(11) NOT NULL,
  `version` int(11) NOT NULL,
  `period` int(11) NOT NULL,
  `create_help` text NOT NULL,
  `update_help` text NOT NULL,
  `get_help` text NOT NULL,
  `create_help_customer` int(11) NOT NULL,
  `create_help_admin` int(11) NOT NULL,
  `id_devices` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `whatsapp`
--

INSERT INTO `whatsapp` (`id`, `is_active`, `api_key`, `token`, `domain_api`, `username`, `vendor`, `createinvoice`, `paymentinvoice`, `duedateinvoice`, `interval_message`, `sender`, `reminderinvoice`, `version`, `period`, `create_help`, `update_help`, `get_help`, `create_help_customer`, `create_help_admin`, `id_devices`) VALUES
(1, 0, 'c8790ab82d0f3a70b1e9397003229d7e476ca7a0', '6zn1j3lD5EaQV4s5oeSqPg1bJ878T8ihJbEX299tE07CMHnVPVcMaQZl9PbcsgLr', 'https://us.wablas.com', '', 'Starsender', 0, 0, 0, 10, '', 0, 0, 0, '', '', '', 0, 0, 0);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `bank`
--
ALTER TABLE `bank`
  ADD PRIMARY KEY (`bank_id`);

--
-- Indeks untuk tabel `bot_telegram`
--
ALTER TABLE `bot_telegram`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `briva`
--
ALTER TABLE `briva`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `cat_expenditure`
--
ALTER TABLE `cat_expenditure`
  ADD PRIMARY KEY (`category_id`);

--
-- Indeks untuk tabel `cat_income`
--
ALTER TABLE `cat_income`
  ADD PRIMARY KEY (`category_id`);

--
-- Indeks untuk tabel `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `confirm_payment`
--
ALTER TABLE `confirm_payment`
  ADD PRIMARY KEY (`confirm_id`);

--
-- Indeks untuk tabel `country`
--
ALTER TABLE `country`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `coupon`
--
ALTER TABLE `coupon`
  ADD PRIMARY KEY (`coupon_id`);

--
-- Indeks untuk tabel `coverage`
--
ALTER TABLE `coverage`
  ADD PRIMARY KEY (`coverage_id`);

--
-- Indeks untuk tabel `cover_operator`
--
ALTER TABLE `cover_operator`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `cover_package`
--
ALTER TABLE `cover_package`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `currencies`
--
ALTER TABLE `currencies`
  ADD PRIMARY KEY (`code`);

--
-- Indeks untuk tabel `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`customer_id`);

--
-- Indeks untuk tabel `customer_chart`
--
ALTER TABLE `customer_chart`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `customer_line`
--
ALTER TABLE `customer_line`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `customer_usage`
--
ALTER TABLE `customer_usage`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `expenditure`
--
ALTER TABLE `expenditure`
  ADD PRIMARY KEY (`expenditure_id`);

--
-- Indeks untuk tabel `help`
--
ALTER TABLE `help`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `help_action`
--
ALTER TABLE `help_action`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `help_solution`
--
ALTER TABLE `help_solution`
  ADD PRIMARY KEY (`hs_id`);

--
-- Indeks untuk tabel `help_timeline`
--
ALTER TABLE `help_timeline`
  ADD PRIMARY KEY (`ht_id`);

--
-- Indeks untuk tabel `help_type`
--
ALTER TABLE `help_type`
  ADD PRIMARY KEY (`help_id`);

--
-- Indeks untuk tabel `income`
--
ALTER TABLE `income`
  ADD PRIMARY KEY (`income_id`);

--
-- Indeks untuk tabel `invoice`
--
ALTER TABLE `invoice`
  ADD PRIMARY KEY (`invoice_id`),
  ADD UNIQUE KEY `invoice` (`invoice`);

--
-- Indeks untuk tabel `invoice_detail`
--
ALTER TABLE `invoice_detail`
  ADD PRIMARY KEY (`detail_id`),
  ADD KEY `invoice_id` (`invoice_id`),
  ADD KEY `category_id` (`category_id`),
  ADD KEY `item_id` (`item_id`);

--
-- Indeks untuk tabel `logs`
--
ALTER TABLE `logs`
  ADD PRIMARY KEY (`log_id`);

--
-- Indeks untuk tabel `modem`
--
ALTER TABLE `modem`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `m_odc`
--
ALTER TABLE `m_odc`
  ADD PRIMARY KEY (`id_odc`);

--
-- Indeks untuk tabel `m_odp`
--
ALTER TABLE `m_odp`
  ADD PRIMARY KEY (`id_odp`);

--
-- Indeks untuk tabel `olt`
--
ALTER TABLE `olt`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `other`
--
ALTER TABLE `other`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `package`
--
ALTER TABLE `package`
  ADD PRIMARY KEY (`payment_gateway`);

--
-- Indeks untuk tabel `package_category`
--
ALTER TABLE `package_category`
  ADD PRIMARY KEY (`p_category_id`);

--
-- Indeks untuk tabel `package_item`
--
ALTER TABLE `package_item`
  ADD PRIMARY KEY (`p_item_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indeks untuk tabel `payment_gateway`
--
ALTER TABLE `payment_gateway`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `report_transaction`
--
ALTER TABLE `report_transaction`
  ADD PRIMARY KEY (`report_id`);

--
-- Indeks untuk tabel `role_management`
--
ALTER TABLE `role_management`
  ADD PRIMARY KEY (`role_id`);

--
-- Indeks untuk tabel `role_menu`
--
ALTER TABLE `role_menu`
  ADD PRIMARY KEY (`role_id`);

--
-- Indeks untuk tabel `router`
--
ALTER TABLE `router`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`services_id`),
  ADD KEY `item_id` (`item_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indeks untuk tabel `slide`
--
ALTER TABLE `slide`
  ADD PRIMARY KEY (`slide_id`);

--
-- Indeks untuk tabel `timezone`
--
ALTER TABLE `timezone`
  ADD PRIMARY KEY (`timezid`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `user_token`
--
ALTER TABLE `user_token`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `whatsapp`
--
ALTER TABLE `whatsapp`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `bank`
--
ALTER TABLE `bank`
  MODIFY `bank_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `bot_telegram`
--
ALTER TABLE `bot_telegram`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `briva`
--
ALTER TABLE `briva`
  MODIFY `id` int(9) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `cat_expenditure`
--
ALTER TABLE `cat_expenditure`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `cat_income`
--
ALTER TABLE `cat_income`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `confirm_payment`
--
ALTER TABLE `confirm_payment`
  MODIFY `confirm_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `country`
--
ALTER TABLE `country`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=254;

--
-- AUTO_INCREMENT untuk tabel `coupon`
--
ALTER TABLE `coupon`
  MODIFY `coupon_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `coverage`
--
ALTER TABLE `coverage`
  MODIFY `coverage_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `cover_operator`
--
ALTER TABLE `cover_operator`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `cover_package`
--
ALTER TABLE `cover_package`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `customer`
--
ALTER TABLE `customer`
  MODIFY `customer_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `customer_chart`
--
ALTER TABLE `customer_chart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `customer_line`
--
ALTER TABLE `customer_line`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `customer_usage`
--
ALTER TABLE `customer_usage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `expenditure`
--
ALTER TABLE `expenditure`
  MODIFY `expenditure_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `help`
--
ALTER TABLE `help`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `help_action`
--
ALTER TABLE `help_action`
  MODIFY `id` int(9) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `help_solution`
--
ALTER TABLE `help_solution`
  MODIFY `hs_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT untuk tabel `help_timeline`
--
ALTER TABLE `help_timeline`
  MODIFY `ht_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT untuk tabel `help_type`
--
ALTER TABLE `help_type`
  MODIFY `help_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT untuk tabel `income`
--
ALTER TABLE `income`
  MODIFY `income_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `invoice`
--
ALTER TABLE `invoice`
  MODIFY `invoice_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `invoice_detail`
--
ALTER TABLE `invoice_detail`
  MODIFY `detail_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `logs`
--
ALTER TABLE `logs`
  MODIFY `log_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `modem`
--
ALTER TABLE `modem`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `m_odc`
--
ALTER TABLE `m_odc`
  MODIFY `id_odc` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `m_odp`
--
ALTER TABLE `m_odp`
  MODIFY `id_odp` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `olt`
--
ALTER TABLE `olt`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `other`
--
ALTER TABLE `other`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `package_category`
--
ALTER TABLE `package_category`
  MODIFY `p_category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `package_item`
--
ALTER TABLE `package_item`
  MODIFY `p_item_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `report_transaction`
--
ALTER TABLE `report_transaction`
  MODIFY `report_id` int(128) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `role_management`
--
ALTER TABLE `role_management`
  MODIFY `role_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT untuk tabel `router`
--
ALTER TABLE `router`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `services`
--
ALTER TABLE `services`
  MODIFY `services_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `slide`
--
ALTER TABLE `slide`
  MODIFY `slide_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `timezone`
--
ALTER TABLE `timezone`
  MODIFY `timezid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT untuk tabel `user_token`
--
ALTER TABLE `user_token`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `whatsapp`
--
ALTER TABLE `whatsapp`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
