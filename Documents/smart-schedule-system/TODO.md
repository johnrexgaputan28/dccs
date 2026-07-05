- [ ] Fix Capacitor webDir mismatch by copying root files into `www/` (or configuring build output)
- [ ] Ensure `www/` index.html has correct script/style paths (no ../) and points to correct service worker
- [ ] Remove/replace `service-worker.js` usage in `index.html` if needed; keep only `sw.js` used by app.js
- [ ] Rebuild APK using the updated `www/` (run capacitor build/copy)
- [ ] Update `app-debug.apk` on GitHub with the newly built APK
- [ ] Validate mobile layout: check tables and card alignment in student/professor/admin pages
- [ ] If mobile alignment still broken, adjust CSS media queries (especially table-wrap and calendar board)

