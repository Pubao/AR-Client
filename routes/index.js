const express = require('express');
const router = express.Router();
const fs = require('fs');

const trvl = require('./trvlRouter');
router.use('/trvl', trvl);

router.get(['/', '/loan'], (req, res) => {
	res.render('loan');
});

router.get('/profile', (req, res)=>{
	fs.readFile('./public/files/profile.json', (err, data) => {
		if(err) throw err

		const profile = JSON.parse(data);
		res.render('profile', {'profile': profile});
	})
});

module.exports = router;