import {Authentication} from '../middleware/auth';



let result = Authentication.passwordHash("abcd");

result.then(function (resultHash) {
    console.log(resultHash);
}).catch(function (reason) {
    console.log(reason);
})