const create = require('../models/create');

const insert = async (task) => {
    try {
      const newTask = await create(task);
      return newTask;
    } catch (err) {
      console.log(err);
    }  
};

module.exports = insert;  