const chai = require('chai');
const chaiHttp = require('chai-http');

const { expect } = chai;

const app = require('../api/app');

chai.use(chaiHttp);

describe('DELETE /task', () => {
    describe('Remove tarefa do banco de dados', () => {
      let response;
      let tasks
      let updateTask
      before( async () => {
        tasks = await chai.request(app)
          .get('/task');
        let task = tasks.body[0];
        response = await chai.request(app)
          .delete(`/task/${task._id}`);    
        deleted = await chai.request(app)
          .get(`/task/${task._id}`)   
      }) 
      it('retorna código 404', () => {    
        expect(deleted).to.have.status(404);
      })  
      it('resposta é o um objeto', () => {
        expect(deleted.body).to.be.an('object');        
      })
      it('resposta contém a mensagem "Tarefa não localizada"', () => {
        const { message } = deleted.body;  
        expect(message).to.be.equal('Tarefa não localizada'); 
      })  
    })    
});