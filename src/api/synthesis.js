const express = require('express');
const axios = require('axios')
const router = express.Router();

router.post('/', (req, res) => {
  console.log('req:', req.body)
  axios({
    method: 'post',
    url: 'https://phoneticsrv3.lcs.tcd.ie/nemo/synthesise', 
    headers: {
      'Content-Type': 'application/json',
    },
    data: req.body
  })
  .then(function (response) {
    // console.log(response);
    res.json(response.data)
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  });
});

module.exports = router;
