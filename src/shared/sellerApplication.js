// Validation for the "Become a Seller" application. Imported by both the
// modal (src/components/BecomeSellerModal) and the API handler
// (functions/api/apply.js) so the browser and the server enforce the same
// rules — the client check is for UX, the server check is the real gate.

export const HOW_HEARD_OPTIONS = [
  'Instagram',
  'TikTok',
  'Google search',
  'Friend or family',
  'Another seller',
  'Event or market',
  'Other',
];

// Instagram: letters, numbers, periods and underscores, max 30 chars, no
// leading/trailing or consecutive periods. Accepts "@handle", "handle" or a
// profile URL and returns the bare handle.
export function normalizeInstagram(value) {
  return String(value || '').trim()
    .replace(/^(https?:\/\/)?(www\.)?instagram\.com\//i, '')
    .replace(/[/?#].*$/, '')
    .replace(/^@/, '');
}
const INSTAGRAM_RE = /^(?!.*\.\.)(?!\.)(?!.*\.$)[A-Za-z0-9._]{1,30}$/;

// TikTok: letters, numbers, periods and underscores, 2–24 chars, can't end
// with a period.
export function normalizeTiktok(value) {
  return String(value || '').trim()
    .replace(/^(https?:\/\/)?(www\.)?tiktok\.com\//i, '')
    .replace(/[/?#].*$/, '')
    .replace(/^@/, '');
}
const TIKTOK_RE = /^(?!.*\.$)[A-Za-z0-9._]{2,24}$/;

// UAE mobile numbers (the form fixes the +971 prefix): 9 digits starting
// with 5, e.g. 50 123 4567. Tolerates spaces/dashes, a leading 0 (050…) or
// a pasted +971/00971 prefix, and returns the 9 bare digits.
export function normalizeWhatsapp(value) {
  let digits = String(value || '').replace(/[\s\-().]/g, '');
  digits = digits.replace(/^(\+971|00971|971)/, '').replace(/^0/, '');
  return digits;
}
const UAE_MOBILE_RE = /^5\d{8}$/;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/;
const WEBSITE_RE = /^(https?:\/\/)?([A-Za-z0-9-]+\.)+[A-Za-z]{2,}(\/\S*)?$/;

// Returns { values, errors }. `values` are trimmed/normalized; `errors` maps
// field name -> message and is empty when the application is valid.
export function validateSellerApplication(input) {
  const values = {
    name: String(input.name || '').trim(),
    whatsapp: normalizeWhatsapp(input.whatsapp),
    instagram: normalizeInstagram(input.instagram),
    tiktok: normalizeTiktok(input.tiktok),
    website: String(input.website || '').trim(),
    email: String(input.email || '').trim(),
    howHeard: String(input.howHeard || '').trim(),
    message: String(input.message || '').trim(),
  };
  const errors = {};

  if (!values.name) errors.name = 'Please enter your name.';
  else if (values.name.length < 2 || !/\p{L}/u.test(values.name)) errors.name = 'Please enter your real name.';
  else if (values.name.length > 100) errors.name = 'Name is too long.';

  if (!values.whatsapp) errors.whatsapp = 'Please enter your WhatsApp number.';
  else if (!UAE_MOBILE_RE.test(values.whatsapp)) errors.whatsapp = 'Please enter a valid UAE mobile number, e.g. 50 123 4567.';

  if (!values.instagram) errors.instagram = 'Please enter your Instagram account.';
  else if (!INSTAGRAM_RE.test(values.instagram)) errors.instagram = 'Please enter a valid Instagram username, e.g. @yourstore.';

  if (values.tiktok && !TIKTOK_RE.test(values.tiktok)) errors.tiktok = 'Please enter a valid TikTok username, e.g. @yourstore.';

  if (values.website && !WEBSITE_RE.test(values.website)) errors.website = 'Please enter a valid website, e.g. yourstore.com.';

  if (!values.email) errors.email = 'Please enter your email.';
  else if (!EMAIL_RE.test(values.email) || values.email.length > 254) errors.email = 'Please enter a valid email address.';

  if (!values.howHeard) errors.howHeard = 'Please tell us how you heard about us.';
  else if (!HOW_HEARD_OPTIONS.includes(values.howHeard)) errors.howHeard = 'Please choose an option from the list.';

  if (values.message.length > 2000) errors.message = 'Message is too long (2000 characters max).';

  return { values, errors };
}

// Which fields live on which step of the modal, for per-step validation.
export const STEP_FIELDS = [
  ['name', 'whatsapp'],
  ['instagram', 'tiktok', 'website', 'email'],
  ['howHeard', 'message'],
];
