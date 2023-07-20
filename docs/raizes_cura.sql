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

CREATE TABLE especialidade (
    id SERIAL NOT NULL PRIMARY KEY,
    nome VARCHAR(50) NOT NULL
);

CREATE TABLE profissional (
    registro VARCHAR(128) NOT NULL PRIMARY KEY,
    id_especialidade INT NOT NULL,
    email VARCHAR(128) NOT NULL,
    nome VARCHAR(128) NOT NULL,
    sobrenome VARCHAR(256) NOT NULL,
    email_usuario VARCHAR(128) UNIQUE,
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

INSERT INTO usuario (email, senha, perfil, bio, nome, sobrenome) 
VALUES ('maria-do-bairro@teste.com', '123456', 'Preciso de ajuda', 'Sou uma pessoa muito extrovertida, tenho um cachorro...', 'Maria', 'do Bairro'),
('paulina-martins@teste.com', '987654', 'Preciso de ajuda', 'Nasci no litoral e fui criada numa comunidade de pescadores...', 'Paulina', 'Martins'),
('carlos_daniel@teste.com', '111111', 'Quero ajudar pessoas', 'Sou formado em Direito, viúvo, com dois filhos, ...', 'Carlos', 'Daniel'),
('paola-bracho@teste.com', '333333', 'Sou um profissional da área', 'Gosto de viagens e baladas, estudei psicologia e fiz intercâmbio na ...', 'Paola', 'Bracho');


INSERT INTO usuario_telefone (email_usuario, telefone)
VALUES ('maria-do-bairro@teste.com', '(00) 11111-1111'),
('paulina-martins@teste.com', '(00) 22222-2222'),
('carlos_daniel@teste.com', '(00) 33333-3333'),
('paola-bracho@teste.com', '(00) 44444-4444');

INSERT INTO artigo (titulo, subtitulo, email_usuario)
VALUES ('Depressão?', 'Entenda porquê', 'paola-bracho@teste.com'),
('Técnicas de Meditação', 'Meditando com música', 'paola-bracho@teste.com'),
('Outras Técnicas', 'Artes manuais como terapia', 'paola-bracho@teste.com');

INSERT INTO artigo_conteudo (titulo_artigo, conteudo)
VALUES ('Depressão?', 'A depressão é uma...'),
('Técnicas de Meditação', 'Respirar muitas vezes ajuda...'),
('Outras Técnicas', 'Você pode criar máscaras de papel...');

INSERT INTO local (nome, website, logradouro, numero, bairro, cidade, uf)
VALUES ('caps I', 'www.caps1.com.br', 'Rua do Caps', '1', 'Bairro dos CAPs', 'Exemplo', 'EX'),
('caps II', 'www.caps2.com.br', 'Rua do Caps', '2', 'Bairro dos CAPs', 'Exemplo', 'EX'),
('caps III', 'www.caps3.com.br', 'Rua do Caps', '3', 'Bairro dos CAPs', 'Exemplo', 'EX');

INSERT INTO local_telefone (id_local, telefone)
VALUES (1, '(99) 00000-0000'),
(2, '(88) 00000-0000'),
(3, '(77) 00000-0000');

INSERT INTO especialidade (nome)
VALUES ('Terapia Cognitiva'),
('Terapia Comportamental'),
('Terapia Infantil');

INSERT INTO profissional (registro, id_especialidade, email, nome, sobrenome, email_usuario, id_local)
VALUES ('CIP-00000', 1, 'paola-bracho@teste.com', 'Paola', 'Bracho', 'paola-bracho@teste.com', 1),
('CIP-99999', 2, 'carlos_daniel@teste.com','Carlos', 'Daniel', null, 3);

INSERT INTO profissional_telefone (registro_profissional, telefone)
VALUES ('CIP-00000', '(00) 88888-8888'),
('CIP-99999', '(00) 88889-8889');


-- Esta consulta retorna somente os profissionais que têm associação com usuário
SELECT u.bio, p.nome
FROM usuario AS u
  JOIN profissional AS p ON (u.email = p.email_usuario)
;

-- Esta consulta lista todos os títulos dos artigos e os usuários que os criou
SELECT u.nome, a.titulo
FROM usuario AS u
  JOIN artigo AS a ON (u.email = a.email_usuario);

-- Esta consulta lista os profissionais e seus locais de atendimento 
SELECT p.nome, l.nome, l.uf
FROM profissional AS p
  JOIN local AS l ON (p.id_local = l.id);