const Sequelize = require('sequelize');
const db = require('../database');

const Project = db.define('project', {
  projectName: {
    allowNull: false,
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
  },
  priority: {
    allowNull: false,
    defaultValue: '0',
    type: Sequelize.ENUM,
    validate: {
      notEmpty: true,
    },
    values: ['0', '1', '2', '3', '4', '5'],
  },
  categoryType: {
    allowNull: false,
    type: Sequelize.STRING,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    allowNull: false,
    type: Sequelize.STRING,
    validate: { notEmpty: true },
  },
  startTime: {
    allowNull: false,
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
  },
  finishTime: {
    allowNull: false,
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Project;
