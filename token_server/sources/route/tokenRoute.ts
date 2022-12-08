import express from 'express';
import authentication from '../controller/tokenController'
import key = require('../middleware/keyReader');

const router = express.Router();

router.post('/',async (request, response) => {
    try {
        let payload = request.query;
        //console.log(request);
        const key_pass = String(process.env.PASSPHRASE)
        response.send(await authentication.tokenGeneration(payload, key, key_pass));         
    } catch (error) {
        
    }
});

module.exports = router;