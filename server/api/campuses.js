const campusesRouter = require('express').Router();
const Campus = require('../db/campus');

campusesRouter.get('/', async (req, res, next) => {
    try {
        res.send(await Campus.findAll())
    } catch(err) {
        next(err);
    }
})

campusesRouter.get('/:campusId', async (req, res, next) => {
    try {
        res.send(await Campus.findByPk(req.params.campusId))
    } catch(err) {
        next(err);
    }
})

module.exports = campusesRouter;