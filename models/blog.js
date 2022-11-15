const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt')
const sequelize = require('../config/connection');
const sequelizeFile = require('sequelize-file')

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
            
        }
    },
    sequelize,
    sequelizeFile
)