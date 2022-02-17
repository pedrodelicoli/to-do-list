const findById = require('../models/findById');
const { errorHandler } = require('../utils/errorhandler')

const findOne = async (id) => {
  const task = await findById(id);
  if (!task) throw errorHandler(404, 'Tarefa não localizada')
  return task;
}  
module.exports = findOne;