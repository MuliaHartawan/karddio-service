-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 21 Des 2021 pada 16.37
-- Versi server: 10.4.20-MariaDB
-- Versi PHP: 7.4.22

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
-- Struktur dari tabel `goals`
--

CREATE TABLE `goals` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `goals`
--

INSERT INTO `goals` (`id`, `name`, `description`) VALUES
(1, 'Maintain Current Weight', ''),
(2, 'Diet', ''),
(3, 'Shape Muscle', '');

-- --------------------------------------------------------

--
-- Struktur dari tabel `history_points`
--

CREATE TABLE `history_points` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `leaderboardId` int(11) NOT NULL,
  `point` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `leaderboards`
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
-- Dumping data untuk tabel `leaderboards`
--

INSERT INTO `leaderboards` (`id`, `goalId`, `userId`, `ruleId`, `point`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 2, 1, 12, 0, 1, '2021-12-15 06:50:25', '2021-12-21 09:28:20');

-- --------------------------------------------------------

--
-- Struktur dari tabel `rules`
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
-- Dumping data untuk tabel `rules`
--

INSERT INTO `rules` (`id`, `goalId`, `name`, `description`, `point`, `duration_stretching`, `duration_workout`, `duration_relaxing`, `need_calories`, `burn_calories`) VALUES
(1, 1, 'level 1', '', 0, 5, 5, 5, NULL, NULL),
(2, 1, 'level 2', '', 100, 5, 7, 5, NULL, NULL),
(3, 1, 'level 3', '', 200, 5, 9, 5, NULL, NULL),
(4, 1, 'level 4', '', 300, 5, 11, 5, NULL, NULL),
(5, 1, 'level 5', '', 400, 5, 13, 5, NULL, NULL),
(6, 1, 'level 6', '', 500, 5, 15, 5, NULL, NULL),
(7, 1, 'level 7', '', 600, 5, 17, 5, NULL, NULL),
(8, 1, 'level 8', '', 700, 5, 19, 5, NULL, NULL),
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
-- Struktur dari tabel `users`
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
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `name`, `password`, `email`, `status`, `avatar`, `verif_token`, `age`, `sex`, `height`, `weight`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Mulia Hartawan Negara', '$2a$10$iJM0mKciASIqtAAtkPADmOpyQv4OsXHqQm5GdbKyHifYzm5OhGcQ.', 'mulia.hartawan011@gmail.com', 1, NULL, '0fe6e6b06e66bbc6d5cc4d1b7421eb0df656085951856d7f578904967130399c', 12, 'male', 123, 34, '2021-12-14 03:58:21', '2021-12-15 06:50:25', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `workouts`
--

CREATE TABLE `workouts` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `picture` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `workouts`
--

INSERT INTO `workouts` (`id`, `name`, `description`, `picture`) VALUES
(1, 'Treadmill', '', ''),
(2, 'Gym', '', ''),
(3, 'Jogging', '', '');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `goals`
--
ALTER TABLE `goals`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `history_points`
--
ALTER TABLE `history_points`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `leaderboards`
--
ALTER TABLE `leaderboards`
  ADD PRIMARY KEY (`id`),
  ADD KEY `goal_id` (`goalId`),
  ADD KEY `user_id` (`userId`),
  ADD KEY `rule_id` (`ruleId`);

--
-- Indeks untuk tabel `rules`
--
ALTER TABLE `rules`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ruleId` (`goalId`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `workouts`
--
ALTER TABLE `workouts`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `goals`
--
ALTER TABLE `goals`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `history_points`
--
ALTER TABLE `history_points`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `leaderboards`
--
ALTER TABLE `leaderboards`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `rules`
--
ALTER TABLE `rules`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `workouts`
--
ALTER TABLE `workouts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `leaderboards`
--
ALTER TABLE `leaderboards`
  ADD CONSTRAINT `leaderboards_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `leaderboards_ibfk_2` FOREIGN KEY (`goalId`) REFERENCES `goals` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
