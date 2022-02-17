const remove = require('../models/remove');

const removeAllTasks = async (id) => {
  try {
    await remove(id);  
  } catch (err) {
      console.log(err);
  }  
};

module.exports = removeAllTasks;  