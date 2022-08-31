const campusesRouter = require('express').Router();
const Campus = require('../db/campus');
const Student = require('../db/student');

campusesRouter.get('/', async (req, res, next) => {
    try {
        res.send(await Campus.findAll())
    } catch(err) {
        next(err);
    }
})

campusesRouter.get('/:campusId', async (req, res, next) => {
    try {
        res.send(await Campus.findByPk(req.params.campusId, {
            include: {
                model: Student
            }
        }))
    } catch(err) {
        next(err);
    }
})

campusesRouter.post('/', async (req, res, next) => {
    try {
        res.status(201).send(await Campus.create(req.body))
    } catch(err) {
        next(err);
    }
})

module.exports = campusesRouter;