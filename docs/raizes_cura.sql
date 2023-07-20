CREATE DATABASE raizes_cura;

\c raizes_cura;

CREATE TABLE usuario (
    email VARCHAR(128) NOT NULL PRIMARY KEY,
    senha VARCHAR(256) NOT NULL,
    perfil VARCHAR(50) NOT NULL,
    bio TEXT NOT NULL,
    data_cadastro TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    nome VARCHAR(128) NOT NULL,
    sobrenome VARCHAR(256) NOT NULL
);

CREATE TABLE artigo (
    titulo VARCHAR(128) NOT NULL PRIMARY KEY,
    subtitulo VARCHAR(256),
    data_publicacao TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE local (
    id SERIAL NOT NULL PRIMARY KEY,
    nome VARCHAR(256) NOT NULL,
    website VARCHAR(50),
    logradouro VARCHAR(256) NOT NULL,
    numero VARCHAR(20) NOT NULL,
    bairro VARCHAR(50) NOT NULL,
    cidade VARCHAR(50) NOT NULL,
    uf VARCHAR(50) NOT NULL      
);

CREATE TABLE profissional (
    registro VARCHAR(128) NOT NULL PRIMARY KEY,
    especialidade VARCHAR(50) NOT NULL,
    email VARCHAR(128) NOT NULL,
    nome VARCHAR(128) NOT NULL,
    sobrenome VARCHAR(256) NOT NULL
);


