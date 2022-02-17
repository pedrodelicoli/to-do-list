const chai = require('chai');
const chaiHttp = require('chai-http');

const { expect } = chai;

const app = require('../api/app');

chai.use(chaiHttp);

describe('GET /task', () => {
    describe('Lista todas as tarefas já criadas', () => {
      let response;
      let id
      const task = {
         name: "Andar"
      }
      before( async () => {
        id = await chai.request(app)
          .post('/task')
          .send({
            ...task
          });
        response = await chai.request(app)
          .get('/task/')   
      }) 
      it('retorna código 200', () => {    
        expect(response).to.have.status(200);
      })  
      it('resposta é o um array', () => {
        expect(response.body).to.be.an('array');        
      })
      it('consegue encontrar tarefas com sucesso', () => {
        const tasks  = response.body
        const findTask = tasks[1]
        expect(findTask._id).to.be.equal(id.body);
        expect(findTask.name).to.be.equal(task.name);
      })  
    })    
});