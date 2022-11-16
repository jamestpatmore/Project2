const router = require('express').Router();
const Blog = require('../../models/blog');

router.post('/blog', async (req, res) => {
    try {
        const newBlog = await Blog.create({
            where: {
                title: req.body.title,
                username: req.body.username,
                picture: req.body.picture
            }
        });

        res.status(200).json(newBlog)
    } catch (err) {
        res.status(400).json(err)
    }
});

module.exports = router;