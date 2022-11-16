const User = require('./user');
const Blog = require('./blog')
const Product = require('./product');

User.hasMany(Blog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Blog.belongsTo(User, {
    foreignKey: 'user_id'
})

module.exports = { User, Product, Blog };

