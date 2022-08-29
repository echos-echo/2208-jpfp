const db = require('./server/db');
const Student = require('./server/db/student');
const Campus = require('./server/db/campus');

const students = [

];

const campuses = [

];

const seed = async () => {
    try {
        await db.syncAndSeed({force: true});
        await Promise.all(
            students.map(student => Student.create(student)),
            campuses.map(campus => Campus.create(campus)));
    } catch(err) {
        console.error(err);
    }
}

seed();