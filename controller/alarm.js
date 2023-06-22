const alarmModel = require("./../models/alarm");
const zoneAlarmModel = require("./../models/zoneAlarm");
const { v4: uuidv4 } = require('uuid')
const { IsValidString, IsEmptyObject, IsEmptyArray } = require('./../services/helpers')

const models = {
    alarm: alarmModel,
    zoneAlarm: zoneAlarmModel
}
const get = async (req) => {
    const { site_uuid, alarmType } = req.params;
    const { facility_uuid, uuid } = req.query;
    const model = models[alarmType];
    const filter = { site_uuid };
    if (IsValidString(facility_uuid)) filter.facility_uuid = facility_uuid;
    if (IsValidString(uuid)) filter.uuid = uuid;
    return model.find(filter, {});
};

const post = async (req) => {
    const { alarmType } = req.params;
    const { body } = req;
    body.uuid = uuidv4();
    const model = models[alarmType];
    if (IsValidString(body.comment)) {
        body.comments = [body.comment]
    }
    await model.create(body);
    return body;
}

const del = async (req) => {
    const { alarmType, uuid } = req.params;
    const model = models[alarmType];
    await model.deleteMany({ uuid });
    return { message: 'success' };
}

const put = async (req) => {
    const { alarmType, uuid } = req.params;
    const { body } = req;
    const model = models[alarmType];
    const alarm = await model.findOne({ uuid });
    if (IsEmptyObject(alarm)) throw new Error(`Cannot find alarm with uuid: ${uuid}`)
    const update = { $set: body };
    if (IsValidString(body.comment)) {
        if (!IsEmptyArray(alarm.comments))
            update['$addToSet'] = { comments: body.comment }
        else body.comments = [body.comment]
    }
    await model.updateOne({ uuid }, update);
    return { message: 'success' };
}

module.exports = {
    get,
    post,
    del,
    put
};