const Joi = require('joi');
const joi = require('joi');
const getAlarmSchema = joi.object({
    alarmType: joi.string().valid('alarm', 'zoneAlarm'),
    site_uuid: joi.string().required(),
}).when(Joi.object({ alarmType: 'alarm' }).unknown(), {
    then: Joi.object({
        facility_uuid: joi.string(),
        uuid: joi.string()
    })
});

const alarmSchema = Joi.object({
    escalation_level: Joi.number().default(0),
    time_raised: Joi.string(),
    last_active_time: Joi.string(),
    zone_name: Joi.string(),
    alarm_alert_link_uuid: Joi.string(),
    alarm_profile_uuid: Joi.string(),
    approval_uuid: Joi.string(),
    comm_manger_uuid: Joi.string(),
    facility_uuid: Joi.string(),
    comment: Joi.string(),
    initial_reading: Joi.string(),
    status: joi.string().valid('Active', 'Attention Required', 'Resolved').default('Active')
});

const zoneAlarmSchema = Joi.object({
    module_context: Joi.string(),
    enabled: Joi.boolean().default(false)
});


const createSchema = joi.object({
    alarmType: joi.string().valid('alarm', 'zoneAlarm').required(),
    active: joi.boolean().default(false),
    alarm_alert_link_uuid: joi.string(),
    site_uuid: joi.string().required(),
    zone_uuid: joi.string().required()
}).when(Joi.object({ alarmType: 'alarm' }).unknown(), {
    then: alarmSchema
}).when(Joi.object({ alarmType: 'zoneAlarm' }).unknown(), {
    then: zoneAlarmSchema
});

const deleteSchema = joi.object({
    alarmType: joi.string().valid('alarm', 'zoneAlarm').required(),
    uuid: joi.string().required()
});

const updateCommentSchema = joi.object({
    alarmType: joi.string().valid('alarm', 'zoneAlarm').required(),
    uuid: joi.string().required(),
    user_uuid: joi.string(),
    comment: joi.string().required(),
    approval_uuid: joi.string(),
    status: joi.string().valid('Active', 'Attention Required', 'Resolved')
});

const updateSchema = joi.object({
    alarmType: joi.string().valid('alarm', 'zoneAlarm').required(),
    uuid: joi.string().required(),
    active: joi.boolean(),
    alarm_alert_link_uuid: joi.string(),
    site_uuid: joi.string(),
    zone_uuid: joi.string()
}).when(Joi.object({ alarmType: 'alarm' }).unknown(), {
    then: alarmSchema
}).when(Joi.object({ alarmType: 'zoneAlarm' }).unknown(), {
    then: zoneAlarmSchema
});


module.exports = {
    getAlarmSchema,
    createSchema,
    deleteSchema,
    updateCommentSchema,
    updateSchema
};