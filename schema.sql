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
--
-- client_id is a random UUID generated in the browser and stored in
-- localStorage (see CookieConsent.jsx) so repeat decisions from the
-- same browser can be correlated without needing a login. ip_address
-- and user_agent make this a real identifying record, not an anonymous
-- one — already covered by the "Device and Usage Information" clause
-- in the Privacy Policy, but worth knowing if you're auditing what PII
-- this app stores.
-- device_type/browser/os are parsed server-side from the User-Agent
-- header (see parseUserAgent in consent.js); country/city/region come
-- free from Cloudflare's request.cf on every edge request, no
-- third-party GeoIP lookup needed.
CREATE TABLE IF NOT EXISTS cookie_consents (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  client_id     TEXT,
  essential     INTEGER NOT NULL DEFAULT 1,
  functional    INTEGER NOT NULL,
  analytics     INTEGER NOT NULL,
  marketing     INTEGER NOT NULL,
  ip_address    TEXT,
  user_agent    TEXT,
  device_type   TEXT,
  browser       TEXT,
  os            TEXT,
  country       TEXT,
  city          TEXT,
  region        TEXT,
  decided_at    TEXT NOT NULL
);

-- One row per time the cookie banner is shown (see banner-impression.js
-- and CookieConsent.jsx). Deliberately minimal — no IP, no user agent —
-- this exists purely to compute a drop-off rate:
--   SELECT
--     (SELECT COUNT(DISTINCT client_id) FROM cookie_banner_impressions) AS shown,
--     (SELECT COUNT(DISTINCT client_id) FROM cookie_consents) AS decided;
CREATE TABLE IF NOT EXISTS cookie_banner_impressions (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  client_id     TEXT,
  shown_at      TEXT NOT NULL
);

-- Already ran this file before one of these columns existed?
-- CREATE TABLE IF NOT EXISTS won't retroactively add columns to a table
-- that's already there — run whichever of these you haven't yet, once,
-- against the live DB:
--   npx wrangler d1 execute harmonies-sellers --remote --command="ALTER TABLE cookie_consents ADD COLUMN client_id TEXT"
--   npx wrangler d1 execute harmonies-sellers --remote --command="ALTER TABLE cookie_consents ADD COLUMN ip_address TEXT"
--   npx wrangler d1 execute harmonies-sellers --remote --command="ALTER TABLE cookie_consents ADD COLUMN user_agent TEXT"
--   npx wrangler d1 execute harmonies-sellers --remote --command="ALTER TABLE cookie_consents ADD COLUMN device_type TEXT"
--   npx wrangler d1 execute harmonies-sellers --remote --command="ALTER TABLE cookie_consents ADD COLUMN browser TEXT"
--   npx wrangler d1 execute harmonies-sellers --remote --command="ALTER TABLE cookie_consents ADD COLUMN os TEXT"
--   npx wrangler d1 execute harmonies-sellers --remote --command="ALTER TABLE cookie_consents ADD COLUMN country TEXT"
--   npx wrangler d1 execute harmonies-sellers --remote --command="ALTER TABLE cookie_consents ADD COLUMN city TEXT"
--   npx wrangler d1 execute harmonies-sellers --remote --command="ALTER TABLE cookie_consents ADD COLUMN region TEXT"
