CREATE DATABASE todoapp;

CREATE TABLE todos (
    id VARCHAR(255) PRIMARY KEY,
    user_email VARCHAR(255),
    user_name VARCHAR(100)
    title VARCHAR(50),
    progress INT,
    date VARCHAR(300)
);
CREATE TABLE users (
    email VARCHAR(255)PRIMARY KEY,
    hashed_password VARCHAR(255)
);