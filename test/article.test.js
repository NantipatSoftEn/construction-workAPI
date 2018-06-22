var axios = require('axios');
var crud = require('./crud');
jest.setTimeout(5000);
describe('CRUD Testing', () => {
    const url = `http://localhost:3000`

    it('getAll have ErrorMessage', async () => {
        const res = await crud.index(`${url}/article`);
        //  console.log(res.data);
        expect(res.error).toBe(false);
    });

    it('getAll is Working', async () => {
        const res = await crud.index(`${url}/article`);
        console.log(res.status);
        expect(res.status).toBe(200);
    });

    it('getById is Working', async () => {
        const res = await crud.show(`${url}/article`, 1);
        console.log(res.status);
        expect(res.data.length).toBe(1);
        expect(res.status).toBe(200);
    });

    var data = {
        title: 'title JEst',
        image: 'http://via.placeholder.com/350x150',
        des: 'assadsadas',
        typeArticle: 2
    }
    it('Insert is Working', async () => {
        const res = await crud.create(`${url}/article`, data);
        console.log(res.status);
        expect(res.status).toBe(200);
    });


    it('edit is Working', async () => {
        const res = await crud.update(`${url}/article`, 2, data);
        console.log(res.status);
        expect(res.status).toBe(200);
    });

    it('destroy is Working', async () => {
        const res = await crud.destroy(`${url}/article`, 3);
        console.log(res.status);
        expect(res.status).toBe(200);
    });
})