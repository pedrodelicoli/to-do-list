const connection = require('./connection');

const create = async (task) => {
  const { insertedId } = await (await connection()).collection('tasklist').insertOne(task);   
  return insertedId;   
};

module.exports = create;