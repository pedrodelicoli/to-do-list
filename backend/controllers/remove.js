const removeOne = require('../services/removeOne');

const remove = async (req, res, next) => {
    try {
      const { id } = req.params;
      await removeOne(id);
      return res.status(200).send();
    } catch (err) {
      console.log(err);
      next(err);
    }  
};

module.exports = remove;