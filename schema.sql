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

-- Audit trail for the cookie consent banner: one row per decision
-- (accept all / reject non-essential / save preferences). This is
-- separate from the client-side localStorage flag that controls whether
-- the banner is shown again — that's just a UI convenience and proves
-- nothing on its own. This table is what you'd point to if asked to
-- demonstrate a specific user's consent was recorded.
CREATE TABLE IF NOT EXISTS cookie_consents (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  essential     INTEGER NOT NULL DEFAULT 1,
  functional    INTEGER NOT NULL,
  analytics     INTEGER NOT NULL,
  marketing     INTEGER NOT NULL,
  decided_at    TEXT NOT NULL
);
