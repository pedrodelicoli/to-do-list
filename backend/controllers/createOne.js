const insert = require('../services/insert');

const createOne = async (req, res, next) => {
    try {
      const { name, state } = req.body;
      const task = { name, state };
      const newTask = await insert(task);
      return res.status(200).send(newTask);
    } catch (err) {
      console.log(err);
      next(err);
    }  
};

module.exports = createOne;