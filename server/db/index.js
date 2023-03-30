const db = require('./database');

const User = require('./models/user');
const Project = require('./models/project');

User.hasMany(Project);
Project.belongsTo(User);

module.exports = { db, User, Project };
