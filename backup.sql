-- MySQL dump 10.13  Distrib 8.0.33, for Linux (x86_64)
--
-- Host: localhost    Database: db_prueba_backend_2
-- ------------------------------------------------------
-- Server version	8.0.33-0ubuntu0.22.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `acudiente`
--

DROP TABLE IF EXISTS `acudiente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `acudiente` (
  `acu_codigo` int NOT NULL AUTO_INCREMENT,
  `acu_nombreCompleto` varchar(100) NOT NULL,
  `acu_telefono` varchar(100) NOT NULL,
  `acu_direccion` varchar(200) NOT NULL,
  PRIMARY KEY (`acu_codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `acudiente`
--

LOCK TABLES `acudiente` WRITE;
/*!40000 ALTER TABLE `acudiente` DISABLE KEYS */;
INSERT INTO `acudiente` VALUES (1,'Paco Alberto Escalante Prada','3155466998','Calle 21 nº 41-25'),(2,'Edgar Eduardo Mantilla Garcia','3167965248','Lebrija Santander'),(3,'Stiven Carvajal','3147854987','Palomitas Floridablanca');
/*!40000 ALTER TABLE `acudiente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cita`
--

DROP TABLE IF EXISTS `cita`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cita` (
  `cit_codigo` int NOT NULL,
  `cit_fecha` date NOT NULL,
  `cit_estadoCita` int NOT NULL,
  `cit_medico` int NOT NULL,
  `cit_datosUsuario` int NOT NULL,
  PRIMARY KEY (`cit_codigo`),
  KEY `fk_cita_estado` (`cit_datosUsuario`),
  KEY `fk_cita_medico` (`cit_medico`),
  CONSTRAINT `fk_cita_estado` FOREIGN KEY (`cit_datosUsuario`) REFERENCES `estado_cita` (`estcita_id`),
  CONSTRAINT `fk_cita_medico` FOREIGN KEY (`cit_medico`) REFERENCES `medico` (`med_nroMAtriculaProsional`),
  CONSTRAINT `fk_cita_usuario` FOREIGN KEY (`cit_datosUsuario`) REFERENCES `usuario` (`usu_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cita`
--

LOCK TABLES `cita` WRITE;
/*!40000 ALTER TABLE `cita` DISABLE KEYS */;
/*!40000 ALTER TABLE `cita` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `consultorio`
--

DROP TABLE IF EXISTS `consultorio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `consultorio` (
  `cons_codigo` int NOT NULL,
  `cons_nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`cons_codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `consultorio`
--

LOCK TABLES `consultorio` WRITE;
/*!40000 ALTER TABLE `consultorio` DISABLE KEYS */;
INSERT INTO `consultorio` VALUES (1,'consultorio de prueba 1');
/*!40000 ALTER TABLE `consultorio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `especialidad`
--

DROP TABLE IF EXISTS `especialidad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `especialidad` (
  `esp_id` int NOT NULL AUTO_INCREMENT,
  `esp_nombre` varchar(20) NOT NULL,
  PRIMARY KEY (`esp_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `especialidad`
--

LOCK TABLES `especialidad` WRITE;
/*!40000 ALTER TABLE `especialidad` DISABLE KEYS */;
INSERT INTO `especialidad` VALUES (1,'Medicina General'),(2,'Cardiología'),(3,'Neumología'),(4,'Geriatría'),(5,'Nefrología'),(6,'Neurología'),(7,'Pediatría '),(8,'Psiquiatría'),(9,'Rehabilitación'),(10,'Reumatología');
/*!40000 ALTER TABLE `especialidad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estado_cita`
--

DROP TABLE IF EXISTS `estado_cita`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estado_cita` (
  `estcita_id` int NOT NULL AUTO_INCREMENT,
  `estcita_nombre` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`estcita_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estado_cita`
--

LOCK TABLES `estado_cita` WRITE;
/*!40000 ALTER TABLE `estado_cita` DISABLE KEYS */;
INSERT INTO `estado_cita` VALUES (1,'ACTIVA'),(2,'SUPENDIDA'),(3,'CANCELADA'),(4,'PERDIDA');
/*!40000 ALTER TABLE `estado_cita` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genero`
--

DROP TABLE IF EXISTS `genero`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genero` (
  `gen_id` int NOT NULL AUTO_INCREMENT,
  `gen_nombre` varchar(20) NOT NULL,
  `gen_abreviatura` varchar(20) NOT NULL,
  PRIMARY KEY (`gen_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genero`
--

LOCK TABLES `genero` WRITE;
/*!40000 ALTER TABLE `genero` DISABLE KEYS */;
INSERT INTO `genero` VALUES (1,'Femenino','Fem'),(2,'Masculino','M'),(3,'Femenino','F'),(4,'Otro','Otro');
/*!40000 ALTER TABLE `genero` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medico`
--

DROP TABLE IF EXISTS `medico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `medico` (
  `med_nroMAtriculaProsional` int NOT NULL,
  `med_nombreCompleto` varchar(120) DEFAULT NULL,
  `med_consultorio` int NOT NULL,
  `med_especialidad` int NOT NULL,
  PRIMARY KEY (`med_nroMAtriculaProsional`),
  KEY `fk_medico_especialidad` (`med_especialidad`),
  KEY `fk_medico_consultorio` (`med_consultorio`),
  CONSTRAINT `fk_medico_consultorio` FOREIGN KEY (`med_consultorio`) REFERENCES `consultorio` (`cons_codigo`),
  CONSTRAINT `fk_medico_especialidad` FOREIGN KEY (`med_especialidad`) REFERENCES `especialidad` (`esp_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medico`
--

LOCK TABLES `medico` WRITE;
/*!40000 ALTER TABLE `medico` DISABLE KEYS */;
INSERT INTO `medico` VALUES (465899584,'David Rojas',1,1),(465899585,'David Rojas',1,2);
/*!40000 ALTER TABLE `medico` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_documento`
--

DROP TABLE IF EXISTS `tipo_documento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipo_documento` (
  `tipdoc_id` int NOT NULL,
  `tipdoc_nombre` varchar(20) DEFAULT NULL,
  `tipdoc_abreviatura` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`tipdoc_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_documento`
--

LOCK TABLES `tipo_documento` WRITE;
/*!40000 ALTER TABLE `tipo_documento` DISABLE KEYS */;
INSERT INTO `tipo_documento` VALUES (1097490746,'cedula de ciudadania','CED');
/*!40000 ALTER TABLE `tipo_documento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `usu_id` int NOT NULL AUTO_INCREMENT,
  `usu_nombre` varchar(50) NOT NULL,
  `usu_segdo_nombre` varchar(45) DEFAULT NULL,
  `usu_primer_apellido_usuar` varchar(50) NOT NULL,
  `usu_segdo_apellido_usuar` varchar(50) DEFAULT NULL,
  `usu_telefono` varchar(50) NOT NULL,
  `usu_direccion` varchar(100) NOT NULL,
  `usu_e-mail` varchar(100) NOT NULL,
  `usu_tipodoc` int NOT NULL,
  `usu_genero` int NOT NULL,
  `usu_acudiente` int NOT NULL,
  PRIMARY KEY (`usu_id`),
  KEY `fk_usuario_documento` (`usu_tipodoc`),
  KEY `fk_usuario_genero` (`usu_genero`),
  KEY `fk_usuario_acudiente` (`usu_acudiente`),
  CONSTRAINT `fk_usuario_acudiente` FOREIGN KEY (`usu_acudiente`) REFERENCES `acudiente` (`acu_codigo`),
  CONSTRAINT `fk_usuario_documento` FOREIGN KEY (`usu_tipodoc`) REFERENCES `tipo_documento` (`tipdoc_id`),
  CONSTRAINT `fk_usuario_genero` FOREIGN KEY (`usu_genero`) REFERENCES `genero` (`gen_id`)
) ENGINE=InnoDB AUTO_INCREMENT=75 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-14  9:06:34
