const findOne = require('../services/findOne');

const searchOne = async (req, res, next) => {
    try {
      const { id } = req.params;  
      const task = await findOne(id);
      return res.status(200).send(task);
    } catch (err) {
      console.log(err);
      next(err);
    }  
};

module.exports = searchOne;