create database Telefonia;
use Telefonia;

create table persona (
	perId int not null,
    perNombre varchar(50) not null,
    perApellido varchar(50) not null,
    perTelefonoFijo varchar(20) not null,
    perFechaDeNacimiento varchar(20) not null,
    perCedula varchar(20) not null primary key
);
create table linea (
	linumerolinea varchar(30) not null primary key,
    perCedula varchar(20) not null,
    linestado varchar(20) not null,
    foreign key (perCedula) references persona (perCedula)
);
create table equipo (
	equSerial integer not null primary key,
    liNumeroLinea varchar (30) not null,
    equMarca varchar (50) not null,
    equDescripcion varchar (50) not null,
    equEstado varchar (50) not null,
    foreign key (liNumeroLinea) references linea (LiNumeroLinea)
);
create table factura (
	facNumero integer not null primary key,
    liNumeroLinea varchar (30),
    facFechaEmision date not null,
    facValor decimal not null,
    foreign key (liNumeroLinea) references linea (LiNumeroLinea)
);
