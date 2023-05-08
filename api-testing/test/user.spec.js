const { response } = require('express');
const { getAccessToken } = require('../utils/request');
const req = require('supertest');
const API_URL = process.env.API_URL

describe('Users Resource', () => {

    let token

    beforeAll(async()=>{
        token = await getAccessToken('admin', 'admin')
    })

    it('(E2E) Should list users', async() => {
        
        await req(API_URL)
         .get('/users')
         .set('Authorization', `Bearer ${token}`)
         .then(response =>{
            expect(response.statusCode).toEqual(200)
            expect(response.body).toBeInstanceOf(Array)
         })

    });
});