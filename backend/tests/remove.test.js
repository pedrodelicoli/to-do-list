const chai = require('chai');
const chaiHttp = require('chai-http');

const { expect } = chai;

const app = require('../api/app');

chai.use(chaiHttp);

describe('DELETE /task', function () {
    describe('Remove tarefa do banco de dados', function () {
      let tasks;
      let deleted;
      before(async function () {
        tasks = await chai.request(app)
          .get('/task');
        const task = tasks.body[0];
        await chai.request(app)
          .delete(`/task/${task._id}`);    
        deleted = await chai.request(app)
          .get(`/task/${task._id}`);   
      }); 
      it('retorna código 404', function () {    
        expect(deleted).to.have.status(404);
      });  
      it('resposta é o um objeto', function () {
        expect(deleted.body).to.be.an('object');        
      });
      it('resposta contém a mensagem "Tarefa não localizada"', function () {
        const { message } = deleted.body;  
        expect(message).to.be.equal('Tarefa não localizada'); 
      });  
    });    
});