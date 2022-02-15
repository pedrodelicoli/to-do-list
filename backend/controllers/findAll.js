const find = require("../services/find");

const findAll = async (req, res, next) => {
    try {
      const listTask = await find();
      return res.status(200).send(listTask);
    } catch (err) {
      console.log(err)
      next(err)
    }  
  }

module.exports = findAll;