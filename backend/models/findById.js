const { ObjectId } = require('mongodb');
const connection = require('./connection');

const findById = async (id) => {
  const find = await (await connection()).collection('tasklist').findOne({
    _id: ObjectId(id), 
  });   
  return find;   
};

module.exports = findById;