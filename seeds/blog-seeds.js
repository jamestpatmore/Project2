const { Blog } = require('../models/blog');

const blogData = [
    {
        title: 'lorem',
        picture: 'https://i.pinimg.com/originals/f3/1c/31/f31c3116b528d860cfa3f08021c3845e.jpg',
        username: 'doughnuts',
        rating: 27,
    }
]

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;