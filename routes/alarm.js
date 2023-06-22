const router = require("express").Router();
const { get, post, del, put } = require('./../controller/alarm');
const { validate } = require('./../middleware/schemaHandle');
const { getAlarmSchema, createSchema, deleteSchema, updateCommentSchema, updateSchema } = require('./../schemaValidation')

router.get('/:alarmType/:site_uuid', validate(getAlarmSchema, 'all'), (req, res) =>
    get(req, res)
        .then((data) => {
            return res.status(200).send(data)
        })
        .catch(error => {
            return res.status(500).send({
                message: error.message,
                error
            })
        })
);
router.post('/:alarmType', validate(createSchema, 'all'), (req, res) =>
    post(req, res)
        .then((data) => {
            return res.status(200).send(data)
        })
        .catch(error => {
            return res.status(500).send({
                message: error.message,
                error
            })
        }));

router.delete('/:alarmType/:uuid', validate(deleteSchema, 'params'), (req, res) =>
    del(req, res)
        .then((data) => {
            return res.status(200).send(data)
        })
        .catch(error => {
            return res.status(500).send({
                message: error.message,
                error
            })
        }));

router.put('/:alarmType/:uuid', validate(updateSchema, 'all'), (req, res) =>
    put(req, res)
        .then((data) => {
            return res.status(200).send(data)
        })
        .catch(error => {
            return res.status(500).send({
                message: error.message,
                error
            })
        }));


router.put('/:alarmType/:uuid', validate(updateCommentSchema, 'all'), (req, res) =>
    put(req, res)
        .then((data) => {
            return res.status(200).send(data)
        })
        .catch(error => {
            return res.status(500).send({
                message: error.message,
                error
            })
        }));


router.put('/updateComment/:alarmType/:uuid', validate(updateCommentSchema, 'all'), (req, res) =>
    put(req, res)
        .then((data) => {
            return res.status(200).send(data)
        })
        .catch(error => {
            return res.status(500).send({
                message: error.message,
                error
            })
        }));



module.exports = router;
