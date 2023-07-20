CREATE DATABASE raizes_cura;

\c raizes_cura;

CREATE TABLE usuario (
    email VARCHAR(128) NOT NULL PRIMARY KEY,
    senha VARCHAR(256) NOT NULL,
    perfil VARCHAR(50) NOT NULL,
    bio TEXT NOT NULL,
    data_cadastro TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE artigo (
    titulo VARCHAR(128) NOT NULL PRIMARY KEY,
    subtitulo VARCHAR(256),
    data_publicacao TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE local (
    id SERIAL NOT NULL PRIMARY KEY,
    nome VARCHAR(256) NOT NULL,
    website VARCHAR(50)
);

CREATE TABLE profissional (
    registro VARCHAR(128) NOT NULL PRIMARY KEY,
    especialidade VARCHAR(50) NOT NULL,
    email VARCHAR(128) NOT NULL
);


