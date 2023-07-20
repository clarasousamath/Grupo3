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

CREATE TABLE usuario_telefone (
    email_usuario VARCHAR(128) NOT NULL,
    telefone VARCHAR(30) NOT NULL,
    PRIMARY KEY (email_usuario, telefone),
    CONSTRAINT fk_email_usuario
        FOREIGN KEY (email_usuario)
        REFERENCES usuario(email)
);

CREATE TABLE artigo (
    titulo VARCHAR(128) NOT NULL PRIMARY KEY,
    subtitulo VARCHAR(256),
    data_publicacao TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    email_usuario VARCHAR(128) NOT NULL,
    CONSTRAINT fk_email_usuario
        FOREIGN KEY (email_usuario)
        REFERENCES usuario(email)
);

CREATE TABLE artigo_conteudo (
    titulo_artigo VARCHAR(128) NOT NULL,
    conteudo TEXT,
    PRIMARY KEY (titulo_artigo, conteudo),
    CONSTRAINT fk_titulo_artigo
        FOREIGN KEY (titulo_artigo)
        REFERENCES artigo(titulo)
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

CREATE TABLE local_telefone (
    id_local INT NOT NULL,
    telefone VARCHAR(30) NOT NULL,
    PRIMARY KEY (id_local, telefone),
    CONSTRAINT fk_id_local
        FOREIGN KEY (id_local)
        REFERENCES local(id)
);

CREATE TABLE profissional (
    registro VARCHAR(128) NOT NULL PRIMARY KEY,
    id_especialidade INT NOT NULL,
    email VARCHAR(128) NOT NULL,
    nome VARCHAR(128) NOT NULL,
    sobrenome VARCHAR(256) NOT NULL,
    email_usuario VARCHAR(128) NOT NULL UNIQUE,
    id_local INT NOT NULL,
    CONSTRAINT fk_email_usuario
        FOREIGN KEY (email_usuario)
        REFERENCES usuario(email),
    CONSTRAINT fk_id_local
        FOREIGN KEY (id_local)
        REFERENCES local(id),
    CONSTRAINT fk_id_especialidade
        FOREIGN KEY (id_especialidade)
        REFERENCES especialidade(id)
);

CREATE TABLE profissional_telefone (
    registro_profissional VARCHAR(128) NOT NULL,
    telefone VARCHAR(30) NOT NULL,
    PRIMARY KEY (registro_profissional, telefone),
    CONSTRAINT fk_registro_profissional
        FOREIGN KEY (registro_profissional)
        REFERENCES profissional(registro)
);

CREATE TABLE especialidade (
    id SERIAL NOT NULL PRIMARY KEY,
    nome VARCHAR(50) NOT NULL
);
