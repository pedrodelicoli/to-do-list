const removeById = require('../models/removeById');

const removeOne = async (id) => {
  try {
    const deleted = await removeById(id);
    return deleted;
  } catch (err) {
      console.log(err);
  }  
};

module.exports = removeOne;  