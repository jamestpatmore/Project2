const seedProducts = require('./product-seeds');
const seedBlogs = require('./blog-seeds');
const { Blog } = require('../models');
const userData = require('./userData.json');
const blogData = require('./userData.json');
//tried to make a dynamic blog post but didnt have enough time to create a user profile to link with the other models and have 
// a cahced inventory og blog posts from users 
// with that being said i know how to do it but it'll be for future deployment 

const sequelize = require('../config/connection');
//const { extensions } = require('sequelize/types/utils/validator-extras');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    

    //await seedBlogs();
    

    //await seedBlogs();
    await seedProducts();
    process.exit(0);
};

seedAll(); 