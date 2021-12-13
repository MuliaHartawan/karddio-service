-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 13 Des 2021 pada 14.19
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
-- Struktur dari tabel `leaderboards`
--

CREATE TABLE `leaderboards` (
  `id` int(11) NOT NULL,
  `goal_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `rule_id` int(11) NOT NULL,
  `point` int(11) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `rules`
--

CREATE TABLE `rules` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `point` int(11) NOT NULL,
  `duration_stretching` int(11) NOT NULL,
  `duration_workout` int(11) NOT NULL,
  `duration_relaxing` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `rules`
--

INSERT INTO `rules` (`id`, `name`, `description`, `point`, `duration_stretching`, `duration_workout`, `duration_relaxing`) VALUES
(1, 'level 1', '', 0, 5, 5, 5),
(2, 'level 2', '', 0, 5, 7, 5),
(3, 'level 3', '', 0, 5, 9, 5),
(4, 'level 4', '', 0, 5, 11, 5),
(5, 'level 5', '', 0, 5, 13, 5),
(6, 'level 6', '', 0, 5, 15, 5),
(7, 'level 7', '', 0, 5, 17, 5),
(8, 'level 8', '', 0, 5, 19, 5),
(9, 'level 9', '', 0, 5, 21, 5),
(10, 'level 10', '', 0, 5, 23, 5);

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
(1, 'Mulia Hartawan Negara', '$2a$10$HqK9AVGaWoOA47dgWyvyKuPB2Vpvo85pPHlz59dEAGRDvzokWcVBq', 'mulia.hartawan011@gmail.com', 0, NULL, '0fe6e6b06e66bbc6d5cc4d1b7421eb0df656085951856d7f578904967130399c', 21, 'male', 280, 51, '2021-12-10 00:48:42', '2021-12-10 06:07:36', NULL),
(2, 'Mulia Hartawan Negara', '$2a$10$wboHPRHl.6DlxqKXX1gM6e2ezpLymPJRW5AxH9dazqe/wfF0GirPu', 'hartawan011@gmail.com', 0, NULL, '0fe6e6b06e66bbc6d5cc4d1b7421eb0d382006071d0908e7f77cd6304e72db9e', 21, 'male', 280, 61, '2021-12-10 07:47:12', '2021-12-10 07:50:43', NULL),
(3, 'Mulia Hartawan Negara', '$2a$10$4QM3R5MKSC7cj96iVA903uJOfTgp2F1vsaCvLZtK2sX9lokpnQYSu', 'hartawan01@gmail.com', 0, NULL, '0fe6e6b06e66bbc6d5cc4d1b7421eb0d12a84199c000e70ebe41eeb08c30d219', 21, 'male', 280, 51, '2021-12-10 11:47:03', '2021-12-10 12:23:31', NULL),
(4, 'Mulia Hartawan Negara', '$2a$10$htfoyzVBnHaByKWldXL4gu9/dmk9Kay22q0E.u/A7hC2ci3KqmIvG', 'hartawan01@gmail.com', 0, NULL, '0fe6e6b06e66bbc6d5cc4d1b7421eb0d12a84199c000e70ebe41eeb08c30d219', NULL, 'undefined', NULL, NULL, '2021-12-10 11:47:26', '2021-12-10 11:47:26', NULL),
(5, 'Mulia Hartawan Negara', '$2a$10$yxJvSdkN6J9xaRgMiAJpK.gQx8cWeSnhIpm3qc0M94ezx7Y1liPo.', 'hartawan@gmail.com', 1, NULL, '0fe6e6b06e66bbc6d5cc4d1b7421eb0d3d66d0ec7610e99cc7a0ef0ccb6f9c26', NULL, 'undefined', NULL, NULL, '2021-12-10 12:25:17', '2021-12-10 12:25:17', NULL);

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
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `goals`
--
ALTER TABLE `goals`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `leaderboards`
--
ALTER TABLE `leaderboards`
  ADD PRIMARY KEY (`id`),
  ADD KEY `goal_id` (`goal_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `rule_id` (`rule_id`);

--
-- Indeks untuk tabel `rules`
--
ALTER TABLE `rules`
  ADD PRIMARY KEY (`id`);

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
-- AUTO_INCREMENT untuk tabel `leaderboards`
--
ALTER TABLE `leaderboards`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `rules`
--
ALTER TABLE `rules`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `workouts`
--
ALTER TABLE `workouts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `leaderboards`
--
ALTER TABLE `leaderboards`
  ADD CONSTRAINT `leaderboards_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `leaderboards_ibfk_2` FOREIGN KEY (`goal_id`) REFERENCES `goals` (`id`),
  ADD CONSTRAINT `leaderboards_ibfk_3` FOREIGN KEY (`rule_id`) REFERENCES `rules` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
