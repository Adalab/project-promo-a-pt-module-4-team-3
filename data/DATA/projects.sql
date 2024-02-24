CREATE TABLE `naturatech`.`projects` (
  `idprojects` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `slogan` TINYTEXT NOT NULL,
  `technologies` VARCHAR(45) NOT NULL,
  ` repo` TINYTEXT NOT NULL,
  ` demo` TINYTEXT NOT NULL,
  `desc` VARCHAR(1000) NOT NULL,
  `image` TINYTEXT NOT NULL,
  PRIMARY KEY (`idprojects`));
