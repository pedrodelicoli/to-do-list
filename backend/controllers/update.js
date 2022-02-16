const updateOne = require('../services/updateOne');

const update = async (req, res, next) => {
    try {
      const { id, name } = req.body;
      const task = { id, name }; 
      const updated = await updateOne(task);
      return res.status(200).send(updated);
    } catch (err) {
      console.log(err);
      next(err);
    }  
};

module.exports = update;