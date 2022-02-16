const updateById = require('../models/updateById');

const updateOne = async (task) => {
  try {
    const updated = await updateById(task);
    return updated;
  } catch (err) {
      console.log(err);
  }  
};

module.exports = updateOne;  