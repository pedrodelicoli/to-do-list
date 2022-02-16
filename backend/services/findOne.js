const findById = require('../models/findById');

const findOne = async (id) => {
  try {
    const task = await findById(id);
    return task;
  } catch (err) {
      console.log(err);
  }  
};

module.exports = findOne;  