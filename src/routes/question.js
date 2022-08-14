const express = require('express');
const  router = express.Router();

router.get('/', (req, res) =>{
    let name = "Rodrigo";
    let lang = "Python";
    res.render('index', {
        name: name,
        lang: lang
    })
});

module.exports = router;