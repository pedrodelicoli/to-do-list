const { updateName, updateState } = require('../models/updateById');

const updateOne = async (task) => {
  try {
    const { id, name, state } = task;
    if (!name) {
      const updated = await updateState(id, state);
      return updated;
    }
    const updated = await updateName(id, name);
    return updated;      
  } catch (err) {
      console.log(err);
  }  
};

module.exports = updateOne;  