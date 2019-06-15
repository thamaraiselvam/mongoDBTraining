const express = require('express');
const router = express.Router();

const userController = require('./../controller/user');

router.post('/', async function  (req, res) {
	let response = await userController.add();
	res.send(response);
});

router.get('/', async function  (req, res) {
	let response = await userController.fetch(req.query.searchKey);
	res.send(response);
});

router.put('/', async function  (req, res) {
	let response = await userController.update();
	res.send(response);
});

router.delete('/', async function  (req, res) {
	let response = await userController.delete();
	res.send(response);
});

router.get('/aggregation', async (req, res) =>{
	let response = await userController.aggregation();
	res.send(response);
})

module.exports = router;