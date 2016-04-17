CREATE DATABASE LinkStorage
GO

USE LinkStorage
GO

CREATE TABLE tblLinks
(
	Id int NOT NULL IDENTITY,
	Name nvarchar(50) NOT NULL,
	URL nvarchar(300) NOT NULL,
	CONSTRAINT PK_LinksId PRIMARY KEY(Id)
);

SET IDENTITY_INSERT tblLinks ON
INSERT INTO tblLinks(Id, Name, URL) VALUES
 (1, 'Google', 'https://www.google.com.ua/'),
 (2, 'StackOverflow', 'http://stackoverflow.com/'),
 (3, 'MSDN', 'https://msdn.microsoft.com'),
 (4, 'Facebook', 'https://www.facebook.com/' )
SET IDENTITY_INSERT tblLinks OFF


SELECT * FROM tblLinks