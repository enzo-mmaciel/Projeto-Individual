create database ProjetoIndividual;
use ProjetoIndividual;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(45)
);

create table quiz (
idQuiz int primary key auto_increment,
acertos int,
erros int,
fkUsuario int,
foreign key (fkUsuario) references usuario(idUsuario)
);

create table forum(
id int primary key auto_increment,
titulo varchar(45),
descricao text,
fk_usuario int, 
foreign key (fk_usuario) references usuario(idUsuario)
);

select * from usuario;

select * from forum;

select * from quiz;

	