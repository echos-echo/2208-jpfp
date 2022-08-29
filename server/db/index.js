// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require('./database')
const Student = require('./student')
const Campus = require('./campus')

const syncAndSeed = async () => {

  Campus.hasMany(Student, { foreignKey: 'campusId' });
  Student.belongsTo(Campus);

  await db.sync({ force: false });

  //use this area to sync your database

  console.log(`Seeding successful!`);
};



module.exports = {
    // Include your models in this exports object as well!
    db,
    syncAndSeed,

}