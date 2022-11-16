const Blog = require('../models/blog')

const blogData = [
    {
        title: "Test",
        username: "schuyguy",
        picture: "https://images.app.goo.gl/smYzyN7ksCgaqxCEA",
        rating: 8
    }
]

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;