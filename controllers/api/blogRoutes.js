const router = require('express').Router();
const Blog = require('../../models/blog');

router.post('/', async (req, res) => {
    try {
        const newBlog = await Blog.create({
            ...req.body,
            user_id: req.session
        });

        res.status(200).json(newBlog)
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;