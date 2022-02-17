const removeAllTasks = require('../services/removeAllTasks');

const remove = async (req, res, next) => {
    try {
      await removeAllTasks();
      return res.status(200).send();
    } catch (err) {
      console.log(err);
      next(err);
    }  
};

module.exports = remove;