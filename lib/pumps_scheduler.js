var db = require('../db/pumps')
var water_pumps = require('../lib/water_pumps');
var scheduler = require('node-schedule');


var scheduling_jobs = [];


let set_schedule = (schedule) => {
    if(schedule.on){
        let rule = new scheduler.RecurrenceRule();
        rule.hour = schedule.hours,
        rule.minute = schedule.minutes;
        if(schedule.frequency == "weekly")
            rule.dayOfWeek = [1];
        scheduling_jobs[schedule.pump_id] = scheduler.scheduleJob(rule, () => {
            water_pumps.turnOn(schedule.pump_id);
            setTimeout(() => {water_pumps.turnOff(schedule.pump_id)}, schedule.duration * 1000);
        });
    }
}


let init = function(){
    let schedules = db.get('schedules').value();

    schedules.forEach((schedule) => {
        set_schedule(schedule);
    });
}


let reschedule = (schedule) => {

    db  .get('schedules')
        .find({ pump_id: schedule.pump_id})
        .assign(schedule)
        .write();

    if( scheduling_jobs[schedule.pump_id] !== undefined )
        scheduling_jobs[schedule.pump_id].cancel();
    set_schedule(schedule);
    
}

module.exports.init = init;
module.exports.reschedule = reschedule;