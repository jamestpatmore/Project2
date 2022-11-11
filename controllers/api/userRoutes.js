const router = require('express').Router();
const User = require('../../models/user');

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {
                email: req.body.email
            }
        });
        if (!userData) {
            res.status(400)
            .json({ message: 'Incorrect email or password, try again'});
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if(!validPassword) {
            res.status(400)
            .json({ message: 'Incorrect email or password, try again'});
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            req.json({ user: userData, message: 'You are now logged in'});
        })
    } catch(err) {
        res.status(400).json(err)
    }
});

router.post('/signup', async (req, res) => {
    try {
        const userData = await User.create({
            email: req.body.email,
            password: req.body.password
        });
        
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.email = userData.email;
            req.session.logged_in = true;

            req.json(userData);
        })
    }catch(err) {
        res.status(500).json(err)
    }
})

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
})

//home shop comm blog contact signup

module.exports = router;