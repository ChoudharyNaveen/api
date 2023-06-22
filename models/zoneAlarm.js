
const mongoose = require("mongoose");

const zoneAlarmSchema = new mongoose.Schema({
    uuid: { type: String, required: true },
    active: {
        type: Boolean
    },
    alarm_alert_link_uuid: {
        type: String
    },
    enabled: {
        type: Boolean, default: false
    },
    module_context: {
        type: String
    },
    site_uuid: {
        type: String, required: true
    },
    zone_uuid: {
        type: String
    },
});
zoneAlarmSchema.set('timestamps', true);
module.exports = mongoose.model("vpcZoneAlarms", zoneAlarmSchema);