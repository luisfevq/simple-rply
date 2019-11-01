const { Router } = require('express');
const Request = require("request");

const router = Router();

router.get('/product/:id', (req, res) => {
    console.log(req.params.id);
    Request.get("https://simple.ripley.cl/api/v2/products/"+ req.params.id, (error, response, body) => {
        if (error) {
            return console.dir(error);
        }
        return res.send(JSON.parse(body));
    });
});
router.post('/', (req, res) => {
    return res.send('Received a POST HTTP method');
});
router.put('/', (req, res) => {
    return res.send('Received a PUT HTTP method');
});
router.delete('/', (req, res) => {
    return res.send('Received a DELETE HTTP method');
});

module.exports = router;
