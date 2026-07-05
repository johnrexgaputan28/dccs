window.ScheduleModule = {
  create(schedule) {
    const app = window.SmartSchedule;
    const data = app.readData();
    const record = { ...schedule, id: app.makeId("sched") };
    data.schedules.push(record);
    app.writeData(data);
    if (window.FirebaseService?.hasConfig()) {
      window.FirebaseService.setDocument("schedules", record.id, record);
    }
  },

  updateStatus(id, status) {
    const app = window.SmartSchedule;
    const data = app.readData();
    data.schedules = data.schedules.map((item) => item.id === id ? { ...item, status } : item);
    app.writeData(data);
    if (window.FirebaseService?.hasConfig()) {
      window.FirebaseService.updateDocument("schedules", id, { status });
    }
  },

  remove(id) {
    const app = window.SmartSchedule;
    const data = app.readData();
    data.schedules = data.schedules.filter((item) => item.id !== id);
    app.writeData(data);
    if (window.FirebaseService?.hasConfig()) {
      window.FirebaseService.deleteDocument("schedules", id);
    }
  }
};
