-- phpMyAdmin SQL Dump
-- version 5.1.1deb5ubuntu1
-- https://www.phpmyadmin.net/
--
-- Хост: localhost:3306
-- Время создания: Ноя 06 2023 г., 22:28
-- Версия сервера: 8.0.35-0ubuntu0.22.04.1
-- Версия PHP: 8.1.2-1ubuntu2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `testing`
--

-- --------------------------------------------------------

--
-- Структура таблицы `refresh`
--

CREATE TABLE `refresh` (
  `id` int NOT NULL,
  `user` int NOT NULL,
  `refreshToken` varchar(500) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `refresh`
--

INSERT INTO `refresh` (`id`, `user`, `refreshToken`) VALUES
(18, 19, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAbWFpbC5ydSIsImlkIjoxOSwiaWF0IjoxNjk5MjczNTUyLCJleHAiOjE3MDE4NjU1NTJ9.v_Azd2tDUablMoMAIKsulYk5ESmB6c51zHiFowZpSgs');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `email` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `fio` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `phoneNumber` bigint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `fio`, `phoneNumber`) VALUES
(19, 'test@mail.ru', '$2b$04$V/qSCbqyI5/yZCHD5mG42.OzIan2ZzUPXkY7k.mNgheRWSTxUiiRy', '', 0),
(20, 'test5@mail.ru', '$2b$04$WTH5RVOf7fjdzZ5/CuUQweB1AJOhCqKnrWeC5WecjynUYmAHIE4wy', 'Test Test Test', 8888888888);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `refresh`
--
ALTER TABLE `refresh`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user` (`user`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `refresh`
--
ALTER TABLE `refresh`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `refresh`
--
ALTER TABLE `refresh`
  ADD CONSTRAINT `refresh_ibfk_1` FOREIGN KEY (`user`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
