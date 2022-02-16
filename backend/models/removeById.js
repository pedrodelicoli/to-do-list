const { ObjectId } = require('mongodb');
const connection = require('./connection');

const removeById = async (id) => {
  const deleted = await (await connection()).collection('tasklist').deleteOne({
    _id: ObjectId(id), 
  });   
  return deleted;   
};

module.exports = removeById;