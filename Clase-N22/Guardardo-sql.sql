-- comentario crear una base de datos 
create database biblioteca;

create database if not exists biblioteca;

use biblioteca;

drop database biclioteca;

create table estudiante(
id_estudiante int(2) primary key auto_increment,
nombres_estudiante varchar(50) not null,
apellido_estudiante varchar(50) not null,
direccion_estudiante varchar(50) not null);

create table libros(
 isbn int (8) primary key auto_increment,
 titulo varchar (50) not null,
 editorial varchar(50) not null,
 autor varchar (100) not null );
 
 create table prestados (
 id_prestados int(8) primary key auto_increment,
 isbn int(8) not null,
 id_estudiante int(2),
 fecha_prestamo date);
 
 
 ALTER TABLE `biblioteca`.`estudiante` 
RENAME TO  `biblioteca`.`estudiantes` ;
ALTER TABLE `biblioteca`.`estudiantes` 
ADD CONSTRAINT `id_estudiante`
  FOREIGN KEY (`id_estudiante`)
  REFERENCES `biblioteca`.`prestados` (`id_estudiante`)
  ON DELETE CASCADE
  ON UPDATE CASCADE;



insert into 'estudiante' ( id_estudiante,nombres_estudiante, apellido_estudiante,direccion_estudiante) 
value('','', ),('','','','','') , 