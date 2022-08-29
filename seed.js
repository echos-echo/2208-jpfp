const db = require('./server/db');
const Student = require('./server/db/student');
const Campus = require('./server/db/campus');

const students = [
    {
        firstName: 'Eve',
        lastName: 'Cho',
        email: 'evecho@gmail.com',
        gpa: 2.7
    },
    {
        firstName: 'Helen',
        lastName: 'Cho',
        email: 'helencho@gmail.com',
        gpa: 2.8
    },
    {
        firstName: 'Sarah',
        lastName: 'Kim',
        email: 'sarahkim@gmail.com',
        gpa: 2.5
    },
    {
        firstName: 'Seren',
        lastName: 'Ryuu',
        email: 'serenryuu@gmail.com',
        gpa: 2.6
    }
];

const campuses = [
    {
        name: 'FSA - NYC',
        address: '5 Hanover Square, Floor 6, New York, NY 10004',
        description: `A trailblazer in bootcamp education, Fullstack Academy
            prepares students for fulfilling careers in tech through
            our NYC campus`,
    },
    {
        name: 'FSA - ONLINE',
        address: 'Online Instruction',
        description: `Our online courses offer the same benefits as our 
            award-winning in-person programs. From the curriculum to the 
            instructors and community, you can be confident that you'll feel 
            prepared and supported throughout your Fullstack experience`,
    },
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