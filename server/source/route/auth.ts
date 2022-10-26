import express from 'express';

const router = express.Router();

router.put('/', async (request, response) => {
    try {
        const {username, password, name, surname, email, phone_number} = request.body;
    } catch (error) {

    } finally {

    }
});

router.get('/', async (request, response) => {
    try {
        const {username, password} = request.body;
    } catch (error) {

    } finally {

    }
});