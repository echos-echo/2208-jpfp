const studentsRouter = require('express').Router();
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

module.exports = studentsRouter;