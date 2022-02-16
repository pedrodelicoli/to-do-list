const connection = require('./connection');

const findAll = async () => {
  const find = await (await connection()).collection('tasklist').find().toArray();   
  return find;   
};

module.exports = findAll;