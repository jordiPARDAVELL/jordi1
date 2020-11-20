const { Router } = require('express');
const router = Router();

const User = require('../models/User');

router.get('/', (req, res) => res.send('hola mundo'))

router.post('/nombre', async(req, res) => {
    const { email, nombre } = req.body
    const newUser = new User({ email: email, nombre: nombre });

    await newUser.save();
    res.send('registe')
})

module.exports = router;