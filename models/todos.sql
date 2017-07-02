DROP DATABASE IF EXISTS todos;
CREATE DATABASE todos;

\c todos;

CREATE TABLE items (
  ID SERIAL PRIMARY KEY,
  text VARCHAR,
  complete BOOLEAN
);

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  username VARCHAR,
  password VARCHAR
);

-- INSERT INTO items (text, complete)
--   VALUES ('Wash Car', false);

\copy items(id, text, complete) FROM './todos.csv' DELIMITER ',' CSV HEADER;
