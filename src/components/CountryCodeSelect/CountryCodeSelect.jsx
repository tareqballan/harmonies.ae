import { useState, useRef, useEffect } from 'react';
import COUNTRIES, { flagEmoji } from '../../data/countryCodes';
import styles from './CountryCodeSelect.module.css';

export default function CountryCodeSelect({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const ref = useRef(null);
  const searchRef = useRef(null);

  const selected = COUNTRIES.find((c) => c.dial === value) ?? COUNTRIES[0];

  const filtered = search.trim()
    ? COUNTRIES.filter(
        (c) =>
          c.name.toLowerCase().includes(search.toLowerCase()) ||
          c.dial.includes(search)
      )
    : COUNTRIES;

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
        setSearch('');
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => {
    if (open && searchRef.current) searchRef.current.focus();
  }, [open]);

  return (
    <div ref={ref} className={styles.wrap}>
      <button
        type="button"
        className={styles.trigger}
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className={styles.flag}>{flagEmoji(selected.code)}</span>
        <span className={styles.dial}>{selected.dial}</span>
        <svg className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div className={styles.dropdown} role="listbox">
          <div className={styles.searchWrap}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a8a5b8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
            </svg>
            <input
              ref={searchRef}
              type="text"
              placeholder="Search country or code…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={styles.search}
            />
          </div>
          <div className={styles.list}>
            {filtered.length === 0 ? (
              <div className={styles.empty}>No results</div>
            ) : (
              filtered.map((c) => (
                <button
                  key={`${c.code}-${c.dial}`}
                  type="button"
                  role="option"
                  aria-selected={c.dial === value && c.code === selected.code}
                  className={`${styles.option} ${c.code === selected.code ? styles.optionActive : ''}`}
                  onClick={() => {
                    onChange(c.dial);
                    setOpen(false);
                    setSearch('');
                  }}
                >
                  <span className={styles.optFlag}>{flagEmoji(c.code)}</span>
                  <span className={styles.optName}>{c.name}</span>
                  <span className={styles.optDial}>{c.dial}</span>
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
