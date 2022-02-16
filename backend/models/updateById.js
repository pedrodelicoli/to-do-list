const { ObjectId } = require('mongodb');
const connection = require('./connection');

const updateById = async (task) => {
  const { id, name } = task;
  const conn = await connection();
  const query = await conn.collection('tasklist').updateOne({ _id: ObjectId(id) }, 
    { $set: { name } });       
  return query;
};

module.exports = updateById;