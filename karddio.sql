-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 23, 2021 at 03:08 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.3.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `karddio`
--

-- --------------------------------------------------------

--
-- Table structure for table `goals`
--

CREATE TABLE `goals` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `goals`
--

INSERT INTO `goals` (`id`, `name`, `description`) VALUES
(1, 'Maintain Current Weight', ''),
(2, 'Diet', ''),
(3, 'Shape Muscle', '');

-- --------------------------------------------------------

--
-- Table structure for table `history_points`
--

CREATE TABLE `history_points` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `leaderboardId` int(11) NOT NULL,
  `point` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `history_points`
--

INSERT INTO `history_points` (`id`, `userId`, `leaderboardId`, `point`, `createdAt`, `updatedAt`) VALUES
(1, 2, 2, 100, '2021-12-21 16:28:56', '2021-12-21 16:28:56'),
(2, 2, 2, 200, '2021-12-21 16:29:51', '2021-12-21 16:29:51'),
(3, 2, 2, 300, '2021-12-21 16:42:01', '2021-12-21 16:42:01'),
(4, 2, 2, 400, '2021-12-22 14:09:22', '2021-12-22 14:09:22'),
(5, 2, 2, 500, '2021-12-22 14:20:04', '2021-12-22 14:20:04'),
(6, 2, 2, 600, '2021-12-22 15:04:10', '2021-12-22 15:04:10'),
(7, 2, 2, 700, '2021-12-22 15:05:44', '2021-12-22 15:05:44'),
(8, 2, 2, 800, '2021-12-22 15:30:24', '2021-12-22 15:30:24'),
(9, 2, 2, 900, '2021-12-23 13:48:07', '2021-12-23 13:48:07');

-- --------------------------------------------------------

--
-- Table structure for table `leaderboards`
--

CREATE TABLE `leaderboards` (
  `id` int(11) NOT NULL,
  `goalId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `ruleId` int(11) NOT NULL,
  `point` int(11) NOT NULL,
  `status` tinyint(2) NOT NULL,
  `createdAt` timestamp NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `leaderboards`
--

INSERT INTO `leaderboards` (`id`, `goalId`, `userId`, `ruleId`, `point`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 2, 1, 12, 0, 1, '2021-12-15 06:50:25', '2021-12-21 09:28:20'),
(2, 1, 2, 9, 900, 0, '2021-12-21 16:27:16', '2021-12-23 13:48:17'),
(3, 2, 2, 1, 0, 1, '2021-12-23 13:48:17', '2021-12-23 13:48:17');

-- --------------------------------------------------------

--
-- Table structure for table `rules`
--

CREATE TABLE `rules` (
  `id` int(11) NOT NULL,
  `goalId` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `point` int(11) NOT NULL,
  `duration_stretching` int(11) NOT NULL,
  `duration_workout` int(11) NOT NULL,
  `duration_relaxing` int(11) NOT NULL,
  `need_calories` int(11) DEFAULT NULL,
  `burn_calories` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `rules`
--

INSERT INTO `rules` (`id`, `goalId`, `name`, `description`, `point`, `duration_stretching`, `duration_workout`, `duration_relaxing`, `need_calories`, `burn_calories`) VALUES
(1, 1, 'level 1', '', 0, 5, 5, 5, 1500, 700),
(2, 1, 'level 2', '', 100, 5, 7, 5, NULL, NULL),
(3, 1, 'level 3', '', 200, 5, 9, 5, 1500, 700),
(4, 1, 'level 4', '', 300, 5, 11, 5, 2500, 900),
(5, 1, 'level 5', '', 400, 5, 13, 5, NULL, NULL),
(6, 1, 'level 6', '', 500, 5, 15, 5, NULL, NULL),
(7, 1, 'level 7', '', 600, 5, 17, 5, 1750, 900),
(8, 1, 'level 8', '', 700, 5, 19, 5, 3200, 500),
(9, 1, 'level 9', '', 800, 5, 21, 5, NULL, NULL),
(10, 1, 'level 10', '', 900, 5, 23, 5, NULL, NULL),
(11, 2, 'level 1', '', 0, 10, 6, 10, NULL, NULL),
(12, 2, 'level 2', '', 100, 10, 12, 10, NULL, NULL),
(13, 2, 'level 3', '', 200, 10, 18, 10, NULL, NULL),
(14, 2, 'level 4', '', 300, 10, 24, 10, NULL, NULL),
(15, 2, 'level 5', '', 400, 10, 30, 10, NULL, NULL),
(16, 3, 'level 1', '', 0, 7, 10, 7, NULL, NULL),
(17, 3, 'level 2', '', 100, 7, 20, 7, NULL, NULL),
(18, 3, 'level 3', '', 200, 7, 30, 7, NULL, NULL),
(19, 3, 'level 4', '', 300, 7, 40, 7, NULL, NULL),
(20, 3, 'level 5', '', 400, 7, 50, 7, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `status` tinyint(1) DEFAULT 0,
  `avatar` varchar(255) DEFAULT NULL,
  `verif_token` varchar(255) DEFAULT NULL,
  `age` int(11) DEFAULT NULL COMMENT 'satuan tahun',
  `sex` enum('undefined','male','female') NOT NULL,
  `height` int(11) DEFAULT NULL COMMENT 'satuan meter',
  `weight` int(11) DEFAULT NULL COMMENT 'satuan kilo',
  `createdAt` timestamp NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `password`, `email`, `status`, `avatar`, `verif_token`, `age`, `sex`, `height`, `weight`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Mulia Hartawan Negara', '$2a$10$iJM0mKciASIqtAAtkPADmOpyQv4OsXHqQm5GdbKyHifYzm5OhGcQ.', 'mulia.hartawan011@gmail.com', 1, NULL, '0fe6e6b06e66bbc6d5cc4d1b7421eb0df656085951856d7f578904967130399c', 12, 'male', 123, 34, '2021-12-14 03:58:21', '2021-12-15 06:50:25', NULL),
(2, 'nama orang', '$2a$10$K6TZBynlJ6Q6vWexps2dKORR.TvWP2TawYn3Oi3aaGVyJh0AjX0Hq', 'sadas@gmail.com', 1, NULL, '48f08729f99a5fce8b65ccc933ea754c48c7a89615edb7e3551319d9e6255394', 25, 'male', 175, 75, '2021-12-21 16:24:22', '2021-12-23 13:48:17', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `workouts`
--

CREATE TABLE `workouts` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `picture` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `workouts`
--

INSERT INTO `workouts` (`id`, `name`, `description`, `picture`) VALUES
(1, 'Treadmill', '', ''),
(2, 'Gym', '', ''),
(3, 'Jogging', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `goals`
--
ALTER TABLE `goals`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `history_points`
--
ALTER TABLE `history_points`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `leaderboards`
--
ALTER TABLE `leaderboards`
  ADD PRIMARY KEY (`id`),
  ADD KEY `goal_id` (`goalId`),
  ADD KEY `user_id` (`userId`),
  ADD KEY `rule_id` (`ruleId`);

--
-- Indexes for table `rules`
--
ALTER TABLE `rules`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ruleId` (`goalId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `workouts`
--
ALTER TABLE `workouts`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `goals`
--
ALTER TABLE `goals`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `history_points`
--
ALTER TABLE `history_points`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `leaderboards`
--
ALTER TABLE `leaderboards`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `rules`
--
ALTER TABLE `rules`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `workouts`
--
ALTER TABLE `workouts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `leaderboards`
--
ALTER TABLE `leaderboards`
  ADD CONSTRAINT `leaderboards_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `leaderboards_ibfk_2` FOREIGN KEY (`goalId`) REFERENCES `goals` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
