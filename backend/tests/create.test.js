const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const { MongoClient } = require('mongodb');

const { expect } = chai;

const app = require('../api/app');
const { getConnection } = require('./connectionMock');

chai.use(chaiHttp);

describe('POST /task', function () {
    let connectionMock;
    before(async function () {
      connectionMock = await getConnection();
      sinon.stub(MongoClient, 'connect').resolves(connectionMock);
    });
  
   describe('Quando é inserido uma nova tarefa no banco', function () {
     let response;
     let newTask;
     const task = {
        name: 'Andar',
     };
     before(async function () {
       response = await chai.request(app)
         .post('/task')
         .send({
           ...task,
         });
         newTask = await chai.request(app)
         .get(`/task/${response.body}`); 
     });
     it('retorna código 200', function () {    
       expect(response).to.have.status(200);
     });
     it('resposta é o id', function () {
       const id = newTask.body._id;
       expect(response.body).to.be.an('string');
       expect(response.body).to.be.equal(id);
     });
     it('consegue inserir uma nova tarefa com sucesso', function () {
       const { _id, name } = newTask.body;
       expect(response.body).to.be.equal(_id);
       expect(task.name).to.be.equal(name);
     });
   });  
});  