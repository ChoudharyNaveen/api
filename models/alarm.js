
const { string } = require("joi");
const mongoose = require("mongoose");

const alarmSchema = new mongoose.Schema({
  uuid: { type: String, required: true },
  active: {
    type: Boolean, default: false
  },
  escalation_level: {
    type: Number,
    min: 0,
    max: 4,
    default: 0
  },
  status: {
    type: String,
    enum: ['Active', 'Attention Required', 'Resolved']
  },
  time_raised: {
    type: Date
  },
  last_active_time: {
    type: Date
  },
  initial_reading: {
    type: String
  },
  zone_name: {
    type: String
  },
  alarm_alert_link_uuid: {
    type: String
  },
  alarm_profile_uuid: {
    type: String
  },
  approval_uuid: {
    type: String
  },
  comm_manger_uuid: {
    type: String
  },
  facility_uuid: {
    type: String
  },
  site_uuid: {
    type: String, required: true
  },
  zone_uuid: {
    type: String
  },
  comments: [{
    type: String
  }]
});
alarmSchema.set('timestamps', true);
module.exports = mongoose.model("vpcAlarms", alarmSchema);