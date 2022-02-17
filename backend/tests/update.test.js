const chai = require('chai');
const chaiHttp = require('chai-http');

const { expect } = chai;

const app = require('../api/app');

chai.use(chaiHttp);

describe('PUT /task', function () {
    describe('Edita tarefa já criada', function () {
      let response;
      let tasks;
      let updateTask;
      before(async function () {
        tasks = await chai.request(app)
          .get('/task');
        const task = tasks.body[0]; 
        response = await chai.request(app)
          .put('/task')
          .send({
            id: task._id,
            name: 'Correr',
          });
          updateTask = await chai.request(app)
          .get(`/task/${task._id}`);   
      }); 
      it('retorna código 200', function () {    
        expect(updateTask).to.have.status(200);
      });  
      it('resposta é o um objeto', function () {
        expect(response.body).to.be.an('object');        
      });
      it('consegue modificar tarefa com sucesso', function () {
        const { name } = updateTask.body;
        expect(name).to.be.equal('Correr');  
      });  
    });    
});