const findAll = require("../models/findAll");

const find = async (task) => {
    try {
      const find = await findAll();
      return find;
    } catch (err) {
      throw(err)
    }  
  }

module.exports = find;  