-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 09, 2018 at 01:31 PM
-- Server version: 5.7.14
-- PHP Version: 7.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `erp_rnd`
--

-- --------------------------------------------------------

--
-- Table structure for table `menus`
--

CREATE TABLE `menus` (
  `id` int(10) UNSIGNED NOT NULL,
  `module_id` int(10) UNSIGNED NOT NULL,
  `menu_name` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `menu_route_name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `parent_menu` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `sequence` int(10) UNSIGNED NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `deleted_by` int(10) UNSIGNED DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `menus`
--

INSERT INTO `menus` (`id`, `module_id`, `menu_name`, `menu_route_name`, `parent_menu`, `sequence`, `status`, `created_at`, `updated_at`, `deleted_at`, `created_by`, `updated_by`, `deleted_by`) VALUES
(1, 1, 'Module Managementt', 'modules', 0, 1, 1, '2018-04-23 06:20:46', '2018-04-24 03:00:46', NULL, 1, 1, NULL),
(2, 1, 'Menu Management', 'menus', 0, 2, 1, '2018-04-24 00:29:46', '2018-05-08 05:12:50', NULL, 1, 1, NULL),
(3, 1, 'User Management', 'users', 0, 3, 0, '2018-04-24 00:35:31', '2018-04-24 03:09:18', '2018-04-24 03:09:18', 1, NULL, NULL),
(4, 5, 'Knit Garments', NULL, 0, 4, 1, '2018-05-08 03:49:53', '2018-05-08 03:49:53', NULL, 1, NULL, NULL),
(5, 5, 'Order Tracking', NULL, 4, 5, 1, '2018-05-08 04:08:28', '2018-05-08 04:08:28', NULL, 1, NULL, NULL),
(6, 5, 'Quotation Inquery', 'quotationInquery', 5, 6, 1, '2018-05-08 05:10:56', '2018-05-08 05:10:56', NULL, 1, NULL, NULL),
(7, 5, 'Price Quotation', 'priceQuotation', 5, 7, 1, '2018-05-08 05:11:49', '2018-05-08 05:11:49', NULL, 1, NULL, NULL),
(8, 5, 'Order Entry', 'orderTracking', 5, 8, 1, '2018-05-08 05:12:30', '2018-05-08 05:12:30', NULL, 1, NULL, NULL),
(9, 3, 'Purchase Order', NULL, 0, 9, 1, '2018-05-08 05:14:58', '2018-05-08 05:14:58', NULL, 1, NULL, NULL),
(10, 3, 'Quotation Evaluation', 'quotationEvaluation', 9, 10, 1, '2018-05-08 05:16:04', '2018-05-08 05:16:04', NULL, 1, NULL, NULL),
(11, 3, 'Yarn Purchase Order', 'yarnPurchaseOrder', 9, 11, 1, '2018-05-08 05:17:07', '2018-05-08 05:17:07', NULL, 1, NULL, NULL),
(12, 3, 'Export', NULL, 0, 12, 1, '2018-05-08 05:17:45', '2018-05-08 05:17:45', NULL, 1, NULL, NULL),
(13, 3, 'Sales Contract Entry', 'salesContractEntry', 12, 13, 1, '2018-05-08 05:19:41', '2018-05-08 05:19:41', NULL, 1, NULL, NULL),
(14, 3, 'Export Invoice', 'exportInvoice', 12, 14, 1, '2018-05-08 05:42:56', '2018-05-08 05:44:53', NULL, 1, 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `menu_actions`
--

CREATE TABLE `menu_actions` (
  `id` int(10) UNSIGNED NOT NULL,
  `menu_id` int(10) UNSIGNED NOT NULL,
  `type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `label` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `route_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_default` tinyint(1) NOT NULL DEFAULT '0',
  `sequence` int(10) UNSIGNED NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `deleted_by` int(10) UNSIGNED DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(16, '2014_10_12_000000_create_users_table', 1),
(17, '2014_10_12_100000_create_password_resets_table', 1),
(18, '2018_03_28_050809_create_modules_table', 1),
(19, '2018_03_28_093814_create_menus_table', 1),
(20, '2018_03_28_100558_create_roles_table', 1),
(21, '2018_03_28_101450_create_privileges_table', 1),
(22, '2018_03_28_105139_create_menu_actions_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `modules`
--

CREATE TABLE `modules` (
  `id` int(10) UNSIGNED NOT NULL,
  `module_name` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sequence` int(10) UNSIGNED NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `deleted_by` int(10) UNSIGNED DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `modules`
--

INSERT INTO `modules` (`id`, `module_name`, `sequence`, `status`, `created_at`, `updated_at`, `deleted_at`, `created_by`, `updated_by`, `deleted_by`) VALUES
(1, 'Admin', 1, 1, '2018-04-23 01:07:52', '2018-04-23 01:25:44', NULL, 1, 1, 1),
(2, 'Production', 2, 1, '2018-04-23 01:12:05', '2018-04-23 01:12:05', NULL, 1, NULL, NULL),
(3, 'Commercial', 3, 1, '2018-04-23 01:14:51', '2018-04-23 01:14:51', NULL, 1, NULL, NULL),
(4, 'Inventory', 4, 1, '2018-04-23 01:15:45', '2018-04-23 01:15:45', NULL, 1, NULL, NULL),
(5, 'Marchandising', 5, 1, '2018-04-23 01:20:44', '2018-04-23 01:20:44', NULL, 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `privileges`
--

CREATE TABLE `privileges` (
  `id` int(10) UNSIGNED NOT NULL,
  `role_id` int(10) UNSIGNED NOT NULL,
  `module_id` int(10) UNSIGNED NOT NULL,
  `menu_id` int(10) UNSIGNED NOT NULL,
  `permission_level` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `view` tinyint(1) NOT NULL DEFAULT '0',
  `insert` tinyint(1) NOT NULL DEFAULT '0',
  `update` tinyint(1) NOT NULL DEFAULT '0',
  `delete` tinyint(1) NOT NULL DEFAULT '0',
  `approve` tinyint(1) NOT NULL DEFAULT '0',
  `sequence` int(10) UNSIGNED NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `deleted_by` int(10) UNSIGNED DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(10) UNSIGNED NOT NULL,
  `role_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `parent_role` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `home_page` int(10) UNSIGNED NOT NULL DEFAULT '1',
  `sequence` int(10) UNSIGNED NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `deleted_by` int(10) UNSIGNED DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `role_name`, `parent_role`, `home_page`, `sequence`, `status`, `created_at`, `updated_at`, `deleted_at`, `created_by`, `updated_by`, `deleted_by`) VALUES
(1, 'Super Admin', 0, 1, 1, 1, '2018-04-23 00:58:38', '2018-04-23 00:58:38', NULL, 1, NULL, NULL),
(2, 'Admin', 1, 2, 2, 1, '2018-04-23 00:58:53', '2018-04-23 00:58:53', NULL, 1, NULL, NULL),
(3, 'Marketing Head', 1, 2, 3, 1, '2018-04-23 00:59:28', '2018-04-23 00:59:28', NULL, 1, NULL, NULL),
(4, 'CTO', 1, 1, 4, 1, '2018-04-23 00:59:44', '2018-04-23 00:59:44', NULL, 1, NULL, NULL),
(5, 'Developer', 4, 2, 5, 1, '2018-04-23 01:00:14', '2018-04-23 01:00:14', NULL, 1, NULL, NULL),
(6, 'Implementation', 3, 1, 6, 1, '2018-04-23 01:00:35', '2018-04-23 01:00:35', NULL, 1, NULL, NULL),
(7, 'QC', 3, 1, 7, 1, '2018-04-23 01:00:55', '2018-04-23 01:00:55', NULL, 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `role_user`
--

CREATE TABLE `role_user` (
  `id` int(10) UNSIGNED NOT NULL,
  `role_id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `role_user`
--

INSERT INTO `role_user` (`id`, `role_id`, `user_id`) VALUES
(1, 1, 1),
(2, 2, 2);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_code` varchar(6) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `first_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sequence` int(10) UNSIGNED NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `deleted_by` int(10) UNSIGNED DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `user_code`, `username`, `first_name`, `last_name`, `email`, `password`, `sequence`, `status`, `created_at`, `updated_at`, `deleted_at`, `created_by`, `updated_by`, `deleted_by`, `remember_token`) VALUES
(1, '1234', 'raja', 'Raja', 'Khan', 'raja@email.com', '$2y$10$1ClcZkZI3nmWW/qlM5SepuS2.3QbLQKh5gyAWBE/cGjy3RnHTbcOq', 1, 1, '2018-04-23 01:06:14', '2018-04-23 01:06:14', NULL, 1, NULL, NULL, NULL),
(2, '2345', 'joy', 'Joy', 'Khan', 'Joy@email.com', '$2y$10$1ClcZkZI3nmWW/qlM5SepuS2.3QbLQKh5gyAWBE/cGjy3RnHTbcOq', 2, 1, '2018-04-23 01:07:00', '2018-04-23 01:07:00', NULL, 1, NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `menus`
--
ALTER TABLE `menus`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `menus_menu_name_unique` (`menu_name`),
  ADD UNIQUE KEY `menus_sequence_unique` (`sequence`),
  ADD UNIQUE KEY `menus_menu_route_name_unique` (`menu_route_name`),
  ADD KEY `menus_module_id_parent_menu_index` (`module_id`,`parent_menu`);

--
-- Indexes for table `menu_actions`
--
ALTER TABLE `menu_actions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `menu_actions_route_name_unique` (`route_name`),
  ADD UNIQUE KEY `menu_actions_sequence_unique` (`sequence`),
  ADD KEY `menu_actions_menu_id_index` (`menu_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `modules`
--
ALTER TABLE `modules`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `modules_module_name_unique` (`module_name`),
  ADD UNIQUE KEY `modules_sequence_unique` (`sequence`),
  ADD KEY `modules_module_name_index` (`module_name`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `privileges`
--
ALTER TABLE `privileges`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `privileges_permission_level_unique` (`permission_level`),
  ADD UNIQUE KEY `privileges_sequence_unique` (`sequence`),
  ADD KEY `privileges_role_id_module_id_menu_id_index` (`role_id`,`module_id`,`menu_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roles_role_name_unique` (`role_name`),
  ADD UNIQUE KEY `roles_sequence_unique` (`sequence`),
  ADD KEY `roles_parent_role_index` (`parent_role`);

--
-- Indexes for table `role_user`
--
ALTER TABLE `role_user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `role_user_role_id_user_id_index` (`role_id`,`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_user_code_unique` (`user_code`),
  ADD UNIQUE KEY `users_username_unique` (`username`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD UNIQUE KEY `users_sequence_unique` (`sequence`),
  ADD KEY `users_user_code_index` (`user_code`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `menus`
--
ALTER TABLE `menus`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT for table `menu_actions`
--
ALTER TABLE `menu_actions`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
--
-- AUTO_INCREMENT for table `modules`
--
ALTER TABLE `modules`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `privileges`
--
ALTER TABLE `privileges`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `role_user`
--
ALTER TABLE `role_user`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
