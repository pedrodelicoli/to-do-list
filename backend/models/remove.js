const connection = require('./connection');

const remove = async () => {
  await (await connection()).collection('tasklist').deleteMany();   
};

module.exports = remove;