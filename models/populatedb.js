#!/bin/env/node

const { Client } = require("pg");
require("dotenv").config();

const SQL = `CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR(255) NOT NULL,
  text TEXT NOT NULL,
  added TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (username, text, added) 
VALUES
  ('Amando', 'Hi there!', '2023-10-05T14:48:00Z'),
  ('Charles', 'Hello World!', '2023-10-05T14:49:00Z');
`;

async function seedDb() {
  const client = new Client({
    connectionString: process.env.DATABASE_URI,
    ssl: {
      rejectUnauthorized: false,
    },
  });
  try {
    console.log("seeding...");
    await client.connect();
    await client.query(SQL);
    console.log("done");
  } catch (err) {
    console.log(err);
  } finally {
    await client.end();
  }
}

seedDb();
