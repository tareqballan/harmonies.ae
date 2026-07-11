-- Run once via: npx wrangler d1 execute harmonies-sellers --file=./schema.sql
-- (or --remote to apply to the live database instead of local dev)

CREATE TABLE IF NOT EXISTS seller_applications (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  name          TEXT NOT NULL,
  whatsapp      TEXT NOT NULL,
  instagram     TEXT,
  website       TEXT,
  email         TEXT,
  how_heard     TEXT,
  submitted_at  TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS contact_submissions (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  name          TEXT NOT NULL,
  email         TEXT NOT NULL,
  whatsapp      TEXT,
  subject       TEXT,
  message       TEXT NOT NULL,
  submitted_at  TEXT NOT NULL
);
