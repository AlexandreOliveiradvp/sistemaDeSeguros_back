--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  `Phone` varchar(100) DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL,
  `Password` varchar(255) NOT NULL,
  `CPF` varchar(14) NOT NULL,
  `UserName` varchar(255) NOT NULL,
  `LastAccess` datetime DEFAULT NULL,
  `Status` varchar(255) NOT NULL,
  `Type` varchar(255) NOT NULL,
  `Department` varchar(255) NOT NULL,
  `AuthToken` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

LOCK TABLES `users` WRITE;

INSERT INTO `users` VALUES (1,'Davi Santiago','(21) 96502-4474','davibomfimsantiago@gmail.com','$2b$10$uUAVCvEZ47tYQo3pcIqQSO11ganp.nxJ3QCo6L0D8HvYeNXrcA3sa','132.653.407-67','davibs',NULL,'Ativo','Administrador','Gerência','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF9EQiI6MSwiaWF0IjoxNjQzNTc2MDg1LCJleHAiOjE2NDM1NzYzODV9.kTZMcPngRZlyiitwv1psM71jSO0Jzn074gS8PCQ3CcA'),(2,'Alexandre Oliveira','(21) 96444-8046','alexandre.oliveira@celeritech.com.br','$2b$10$uUAVCvEZ47tYQo3pcIqQSO11ganp.nxJ3QCo6L0D8HvYeNXrcA3sa','000.000.000-00','alexandre.oliveira',NULL,'Ativo','Administrador','Gerência','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF9EQiI6MiwiaWF0IjoxNjQzNTY1Mzc2LCJleHAiOjE2NDM1NjU2NzZ9.iIQ7NW6cNrqXphpVVpyBK6Tmt7kt45dmdtI3NFlBl1A');

UNLOCK TABLES;

-- Dump completed on 2022-01-30 18:31:25