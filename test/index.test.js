import app from '../src/app.js';
import request from 'supertest';
import { addition } from '../src/functions/suma.js';
import { resta } from '../src/functions/resta.js';
import { multiply } from '../src/functions/multiplicacion.js';
import { division } from '../src/functions/division.js';
import { module } from '../src/functions/module.js';
import { triangleArea } from '../src/functions/triangleArea.js'
import { squaredArea } from '../src/functions/squaredArea.js';

// describe('GET /tasks', () => {
//     test('should respond with a 200 status code', async () => {
//         const response = await request(app).get('/tasks').send()
//         expect(response.statusCode).toBe(200);
//     });

//     test('should response with an array',async () => {
//         const response = await request(app).get('/tasks').send()
//         expect(response.body).toBeInstanceOf(Array)
//     })
// });
 
// describe('POST /tasks', () => { 
//     describe('given a title and a description', () => {
//         const newTask = {
//             title: "test task",
//             description: "test description"
//         }
//         test('should response with a 200 status code',async () => {
//             const response = await request(app).post('/tasks').send(newTask)
//             expect(response.statusCode).toBe(200);
//         });
    
//         test('should response with content type of application json in the header',async () => {
//             const response = await request(app).post('/tasks').send(newTask)
//             expect(response.headers['content-type']).toEqual(
//                 expect.stringContaining('json'));
//         });
    
//         test('should response whit a task ID', async () =>{
//             const response = await request(app).post('/tasks').send(newTask);
//             expect(response.body.id).toBeDefined();
    
//         })
    
//     })

//     describe('when title and description are missing', () => {
//         test('should response with status code 400', async () => {
//             const response = 0;
//         })
//     })
//  });

    describe('testing some js functions', () => {
        test('addition() function should response with 4', async () => {
            expect(addition(2,2)).toBe(4)
        })

        test('resta() function should response with 4', async () => {
            expect(resta(8,4)).toBe(4)
        })

        test('multiply() function should response with 4', async () => {
            expect(multiply(2,2)).toBe(4)
        })

        test('division() function should response with 4', async () => {
            expect(division(16,4)).toBe(4)
        })

        test('module() function should response with 0', async () => {
            expect(module(2,2)).toBe(0)
        })

        test('triangleArea() function should response with 6', async () => {
            expect(triangleArea(2,6)).toBe(6)
        })

        test('squaredArea() function should response with 4', async () => {
            expect(squaredArea(2,2)).toBe(4)
        })

        test('addition() function should response with 4', async () => {
            expect(addition(12,12)).toBe(24)
        })

        test('addition() function should response with 4', async () => {
            expect(addition(8,6)).toBe(14)
        })

        test('addition() function should response with 4', async () => {
            expect(addition(4,4)).toBe(8)
        })
    })
