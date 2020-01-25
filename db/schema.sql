DROP DATABASE IF EXISTS vit9huq1dtat1qd2;
CREATE DATABASE vit9huq1dtat1qd2

USE vit9huq1dtat1qd2;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(100) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
