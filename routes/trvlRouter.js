const express = require('express');
const router = express.Router();
const axios = require('axios');
const fs = require('fs');

router.get(['/','/main'], (req,res)=>{
	// API 구현 시
	// axios({
	// 	method : 'get',
	// 	url : 'http://127.0.0.1:3001/trvl/mainList'
	// }).then((respones)=>{
	// 	res.render('trvl/main', respones.data);
	// })

	// 임시 데이터	
	fs.readFile('./public/files/trvaMain.json', (err, data) => {
		if(err) throw err

		const contents = JSON.parse(data);
		res.render('trvl/main', contents);
	})
});

module.exports = router;