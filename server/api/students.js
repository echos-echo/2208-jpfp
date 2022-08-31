const studentsRouter = require('express').Router();
const Campus = require('../db/campus');
const Student = require('../db/student');

studentsRouter.get('/', async (req, res, next) => {
    try {
        res.send(await Student.findAll())
    } catch(err) {
        next(err);
    }
})

studentsRouter.get('/:studentId', async (req, res, next) => {
    try {
        res.send(await Student.findByPk(req.params.studentId))
    } catch(err) {
        next(err);
    }
})

studentsRouter.post('/', async (req, res, next) => {
    try {
        res.status(201).send(await Student.create(req.body))
    } catch(err) {
        next(err);
    }
})

studentsRouter.delete('/:studentId', async (req, res, next) => {
    try {
        const student = await Student.findByPk(req.params.studentId);
        await student.destroy();
        res.send(student);
    } catch(err) {
        next(err);
    }
})

module.exports = studentsRouter;