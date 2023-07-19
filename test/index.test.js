import app from '../src/app.js';
import request from 'supertest';

describe('GET /tasks', () => {
    test('should respond with a 200 status code', async () => {
        const response = await request(app).get('/tasks').send()
        expect(response.statusCode).toBe(200);
    });

    test('should response with an array',async () => {
        const response = await request(app).get('/tasks').send()
        expect(response.body).toBeInstanceOf(Array)
    })
});
 
describe('POST /tasks', () => { 
    test('should response with a 200 status code',async () => {
        const response = await request(app).get('/tasks').send()
        expect(response.statusCode).toBe(200);
    });

    test('should response with content type of application json in the header',async () => {
        const response = await request(app).get('/tasks').send()
        expect(response.headers['content-type']).toEqual(expect.stringContaining);
    });
 });