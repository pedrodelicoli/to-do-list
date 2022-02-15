const findAll = require('../models/findAll');

const find = async () => {
  try {
    const tasks = await findAll();
    return tasks;
  } catch (err) {
      console.log(err);
  }  
};

module.exports = find;  