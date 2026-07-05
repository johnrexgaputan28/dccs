- [ ] Decide whether to keep Firebase Hosting or disable it (frontend served from GitHub Pages)
- [x] Investigate Firebase/hosting config (`firebase.json`, `firebase.js`, `auth.js`)
- [x] Temporarily disable Firebase client mode in `firebase.js` (`window.FirebaseConfig.enabled = false`) to isolate login issues
- [ ] Fix real Firebase login so created accounts can be used to sign in again (likely requires restoring Firebase enabled + ensuring Firestore rules + correct profile existence)
- [x] Update `firestore.rules` expiry logic (currently denies after 2026-07-03)
- [ ] Re-enable Firebase in `firebase.js` once rules are correct

- [ ] Commit and open GitHub PR
