const { ObjectId } = require('mongodb');
const connection = require('./connection');

const updateName = async (id, name) => {
  const conn = await connection();
  const query = await conn.collection('tasklist').updateOne({ _id: ObjectId(id) }, 
    { $set: { name } });       
  return query;
};

const updateState = async (id, state) => {
  const conn = await connection();
  const query = await conn.collection('tasklist').updateOne({ _id: ObjectId(id) }, 
    { $set: { state } });       
  return query;
};

module.exports = { updateName, updateState };