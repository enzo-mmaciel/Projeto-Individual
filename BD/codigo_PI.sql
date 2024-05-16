create database ProjetoIndividual;
use ProjetoIndividual;

create table Usuario (
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(45)
);

create table Quiz (
idQuiz int primary key auto_increment,
jogo_preferido varchar(45),
idolo varchar(45),
titulo_marcante varchar(45),
camisa_preferida varchar(45),
fkUsuario int,
foreign key (fkUsuario) references Usuario(idUsuario)
);

create table Forum(
idForum int primary key auto_increment,
comentario text,
dtComentario timestamp,
tag varchar(45),
fkUsuario int,
foreign key (fkUsuario) references Usuario(idUsuario)

);