const { Model, Datatypes } = require('sequelize');
const bcrypt = require('bcrypt')
const sequelize = require('./config/connection');

class User extends Model {
    checkPass(loginPass) {
        return bcrypt.compareSync(loginPass, this.password)
    }
}

User.init(
    {
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: Datatypes.STRING,
            allowNull: false
        },
        email: {
            tyoe: Datatypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                min: 8,
                max: 32,
                isAlphanumeric: true,

            }
        }
    },
    {
        hooks: {
            beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }


)

module.exports = User;