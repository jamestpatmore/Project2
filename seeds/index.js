const seedProducts = require('./product-seeds');

const sequelize = require('../config/connection');
//const { extensions } = require('sequelize/types/utils/validator-extras');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedProducts();
    process.exit(0);
};

seedAll(); 