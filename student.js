window.addEventListener("DOMContentLoaded", () => {
  const app = window.SmartSchedule;
  const user = app.requireAuth(["student"]);
  if (!user) return;
  window.__rolePageRendered = true;
  app.renderShell("student");

  const mount = document.getElementById("pageMount");
  const schedules = app.getVisibleSchedules(user);
  const announcements = app.getVisibleAnnouncements(user);
  mount.innerHTML = `
    <div class="section-banner">
      <div>
        <p class="eyebrow">Assigned section</p>
        <h2>${user.section}</h2>
      </div>
      <a class="primary-link" href="calendar.html">Open calendar</a>
    </div>
    <div class="content-grid">
      <section>
        <div class="section-heading"><h2>My Schedule</h2></div>
        <div class="item-list">${schedules.map(app.scheduleCard).join("") || app.emptyState("No schedules assigned to your section.")}</div>
      </section>
      <section>
        <div class="section-heading"><h2>Updates for Me</h2></div>
        <div class="item-list">${announcements.map(app.announcementCard).join("") || app.emptyState("No updates for your section.")}</div>
      </section>
    </div>
  `;
});
