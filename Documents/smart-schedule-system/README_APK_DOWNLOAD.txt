Steps to host the APK and add a Download button

1) Copy the built APK into your website folder so the browser can serve it.
   - Source: android/app/build/outputs/apk/debug/app-debug.apk
   - Destination (recommended): www/app-debug.apk

2) Edit www/index.html and add a download link.
   Example:
   <a class="primary-button" href="./app-debug.apk" download="smart-schedule-system.apk">
     Download Android App (APK)
   </a>

Notes
- The APK link must point to a file that is actually present under www/ (or another folder served by your hosting).
