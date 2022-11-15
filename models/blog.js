const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt')
const sequelize = require('../config/connection');

class Blog extends Model {
    checkPass(loginPass) {
        return bcrypt.compareSync(loginPass, this.password)
    }
}

Blog.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        picture: {
            type: DataTypes.STRING(1000),
            allowNull: false
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: true,
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'blog'
}
)

module.exports = Blog;
